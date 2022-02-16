package com.ssafy.api.controller;

import com.ssafy.api.request.ValidateIdReq;
import com.ssafy.api.service.ManagerService;
import com.ssafy.api.service.UserService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.apache.commons.lang3.RandomStringUtils;

@RestController
@RequestMapping("/find")
public class FindController {

    @Autowired
    UserService userService;
    @Autowired
    ManagerService service;
    @Autowired
    private JavaMailSender mailSender;

    @PostMapping("/id")
    public ResponseEntity<User> findUserId(@RequestBody ValidateIdReq validateIdReq) {
        /**
         * 요청 헤더 액세스 토큰이 포함된 경우에만 실행되는 인증 처리이후, 리턴되는 인증 정보 객체(authentication) 통해서 요청한 유저 식별.
         * 액세스 토큰이 없이 요청하는 경우, 403 에러({"error": "Forbidden", "message": "Access Denied"}) 발생.
         */

        User user = userService.getUserByEmail(validateIdReq.getEmail());
        System.out.println(user.getUserId());
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @PostMapping("/pw")
    public ResponseEntity<? extends BaseResponseBody> findUserPw(@RequestBody ValidateIdReq validateIdReq) {
        /**
         * 요청 헤더 액세스 토큰이 포함된 경우에만 실행되는 인증 처리이후, 리턴되는 인증 정보 객체(authentication) 통해서 요청한 유저 식별.
         * 액세스 토큰이 없이 요청하는 경우, 403 에러({"error": "Forbidden", "message": "Access Denied"}) 발생.
         */
        // 랜덤 비밀번호 생성
        String newpw = RandomStringUtils.randomAlphabetic(10);
        System.out.println(newpw);

        // 비밀번호 변경
        userService.setUserPasswordByEmail(validateIdReq.getEmail(),newpw);

        // 변경된 비밀번호 이메일로 쏴주기
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(validateIdReq.getEmail());
        System.out.println("메일 전송!");
        message.setSubject("[수화닥터] 새 비밀번호가 발급되었습니다.");

        message.setText("회원님의 새 비밀번호는 "+ newpw + " 입니다. 이용해주셔서 감사합니다.");
        mailSender.send(message);

        return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
    }
}
