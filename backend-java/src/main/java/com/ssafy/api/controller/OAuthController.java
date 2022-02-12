package com.ssafy.api.controller;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.gson.GsonFactory;
import com.ssafy.api.request.UserLoginPostReq;
import com.ssafy.api.request.UserRegisterPostReq;
import com.ssafy.api.response.UserLoginPostRes;
import com.ssafy.api.service.UserService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.common.util.JwtTokenUtil;
import com.ssafy.db.entity.User;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken.Payload;
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Arrays;
import java.util.Collections;
import java.util.Map;

@Api(value = "인증 API", tags = {"OAuth."})
@RestController
@RequestMapping("/api/v1/oauth")
@RequiredArgsConstructor
public class OAuthController {
    private final NetHttpTransport transport = new NetHttpTransport();
    private final JsonFactory jsonFactory = new GsonFactory();

    static final String CLIENT_ID = "1090279015530-bn2drlnfrf78o748fji32ebfivlfgoik.apps.googleusercontent.com";

    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    UserService userService;

    @PostMapping("/login")
    @ApiOperation(value = "로그인", notes = "<strong>Google 계정</strong>을 통해 로그인 한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공", response = UserLoginPostRes.class),
            @ApiResponse(code = 401, message = "인증 실패", response = BaseResponseBody.class),
            @ApiResponse(code = 404, message = "사용자 없음", response = BaseResponseBody.class),
            @ApiResponse(code = 500, message = "서버 오류", response = BaseResponseBody.class)
    })
    public ResponseEntity<UserLoginPostRes> login(@RequestBody @ApiParam(value="OAuth2 토큰 정보", required = true)Map<String, String> param) {
        System.out.println("idToken : " + CLIENT_ID);
        String idToken = param.get("idToken");
        GoogleIdTokenVerifier gitVerifier = new GoogleIdTokenVerifier.Builder(transport, jsonFactory)
                .setIssuers(Arrays.asList("https://accounts.google.com", "accounts.google.com"))
                .setAudience(Collections.singletonList(CLIENT_ID))
                .build();

        GoogleIdToken git = null;

        try {
            git = gitVerifier.verify(idToken);
        } catch (GeneralSecurityException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        if (git == null) {
            System.out.println("Google ID Token is invalid");
            return ResponseEntity.status(401).body(UserLoginPostRes.of(401, "Invalid OAuth ID", null));
        }else {
            Payload payload = git.getPayload();

            // Print user identifier & Get profile information from payload
            String userId = payload.getSubject();
            System.out.println("User ID: " + userId);
            String email = payload.getEmail();
            boolean emailVerified = Boolean.valueOf(payload.getEmailVerified());
            String userName = (String) payload.get("name");
            String pictureUrl = (String) payload.get("picture");
            String locale = (String) payload.get("locale");
            String familyName = (String) payload.get("family_name");
            String givenName = (String) payload.get("given_name");

            System.out.println("email: " + email);
            System.out.println("name: " + userName);
            System.out.println("locale: " + locale);

            User userEntity =
                    userService.getUserByEmail(email);

            // 회원가입
            if(userEntity == null) {
                User userRequest = User.builder()
                        .name(userName)
                        .userId(userId)
                        .password(bCryptPasswordEncoder.encode("겟인데어"))
                        .email(email)
                        .role("ROLE_USER")
//                        .provider(googleUser.getProvider())
//                        .providerId(googleUser.getProviderId())
                        .build();

                userEntity = userService.saveUser(userRequest);
            }



            return ResponseEntity.ok(UserLoginPostRes.of(200, "Success", JwtTokenUtil.getToken(userId,userEntity.getName(),userEntity.getRole(),userEntity.getId())));
        }
    }



}
