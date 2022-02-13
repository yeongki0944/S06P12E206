package com.ssafy.api.controller;

import com.ssafy.api.request.ApplyBoardReq;
import com.ssafy.api.request.MessagesRequestDto;
import com.ssafy.api.request.SimpleUserReq;
import com.ssafy.api.response.DoctorReservedRes;
import com.ssafy.api.service.ReserveService;
import com.ssafy.common.model.response.BaseResponseBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

@RestController
@RequestMapping("/room")
public class RoomController {

//    @Autowired
//    RoomService roomService;

    @Autowired
    ReserveService reserveService;

    @PostMapping("/doctor")
    public ResponseEntity<DoctorReservedRes> getDoctorReservedList(@RequestBody SimpleUserReq simpleUserReq) {

        DoctorReservedRes doctorReservedRes;
        doctorReservedRes = reserveService.getDoctorReservedList(simpleUserReq.getUserId());

        return new ResponseEntity<DoctorReservedRes>(doctorReservedRes, HttpStatus.OK);
    }

    @PostMapping("/session")
    public ResponseEntity<? extends BaseResponseBody> setSessionRoom(@RequestBody ApplyBoardReq applyBoardReq) {

        reserveService.setSessionRoomInfo(applyBoardReq);

        return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
    }
}
