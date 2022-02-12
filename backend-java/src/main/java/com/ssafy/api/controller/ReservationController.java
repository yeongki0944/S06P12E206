package com.ssafy.api.controller;

import com.ssafy.api.request.SimpleReserveReq;
import com.ssafy.api.request.SimpleUserReq;
import com.ssafy.api.response.DoctorReservedRes;
import com.ssafy.api.response.PatientReservedRes;
import com.ssafy.api.response.ResumeRes;
import com.ssafy.api.service.ReserveService;
import com.ssafy.common.model.response.BaseResponseBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("/reserve")
public class ReservationController {

    @Autowired
    ReserveService reserveService;

    @PostMapping("/doctor")
    public ResponseEntity<DoctorReservedRes> getDoctorReservedList(@RequestBody SimpleUserReq simpleUserReq) {

        DoctorReservedRes doctorReservedRes;
        doctorReservedRes = reserveService.getDoctorReservedList(simpleUserReq.getUserId());

        return new ResponseEntity<DoctorReservedRes>(doctorReservedRes, HttpStatus.OK);
    }

    @PostMapping("/patient")
    public ResponseEntity<PatientReservedRes> getPatientReservedList(@RequestBody SimpleUserReq simpleUserReq) {

        PatientReservedRes patientReservedRes;
        patientReservedRes = reserveService.getPatientReservedList(simpleUserReq.getUserId());


        return new ResponseEntity<PatientReservedRes>(patientReservedRes, HttpStatus.OK);
    }

    @PostMapping("/doctor/accept")
    public ResponseEntity<? extends BaseResponseBody> acceptDoctorReservedList(@RequestBody SimpleReserveReq simpleReserveReq) throws IOException {


        reserveService.AcceptReserve(simpleReserveReq.getId());

        return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
    }

    @PostMapping("/doctor/cancel")
    public ResponseEntity<? extends BaseResponseBody> cancelDoctorReservedList(@RequestBody SimpleReserveReq simpleReserveReq) throws IOException {


        reserveService.CancelReserve(simpleReserveReq.getId());

        return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
    }
}
