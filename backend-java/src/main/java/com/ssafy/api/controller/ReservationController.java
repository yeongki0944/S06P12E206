package com.ssafy.api.controller;

import com.ssafy.api.request.ApplyBoardReq;
import com.ssafy.api.request.SimpleReserveReq;
import com.ssafy.api.request.SimpleUserReq;
import com.ssafy.api.request.getDoctorReq;
import com.ssafy.api.response.DoctorRes;
import com.ssafy.api.response.DoctorReservedRes;
import com.ssafy.api.response.PatientReservedRes;
import com.ssafy.api.response.ResumeRes;
import com.ssafy.api.service.ReserveService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.board.ApplyBoard;
import com.ssafy.db.entity.doctor.DoctorInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

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

    @PostMapping("/doctor/list")
    public ResponseEntity<DoctorRes> getDoctorList(@RequestBody getDoctorReq getDoctorReq) throws IOException {
        DoctorRes doctorRes = new DoctorRes();

        doctorRes.setList(reserveService.getDoctorList(getDoctorReq.getDepart()));

        return new ResponseEntity<DoctorRes>(doctorRes, HttpStatus.OK);
    }

    @PostMapping("/apply")
    public ResponseEntity<? extends BaseResponseBody> applyResume(@RequestBody ApplyBoardReq applyBoardReq) throws IOException {
        System.out.println(applyBoardReq.getDocId());
        System.out.println(applyBoardReq.getUseId());

        System.out.println(applyBoardReq.getContent());
        System.out.println(applyBoardReq.getDate());

        if(reserveService.applyResume(applyBoardReq)) {
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
        }
        return ResponseEntity.status(400).body(BaseResponseBody.of(400, "Failed"));

    }
}
