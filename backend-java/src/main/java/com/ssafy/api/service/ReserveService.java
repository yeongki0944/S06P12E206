package com.ssafy.api.service;

import com.ssafy.api.request.ApplyBoardReq;
import com.ssafy.api.request.getDoctorReq;
import com.ssafy.api.response.DoctorReservedRes;
import com.ssafy.api.response.PatientReservedRes;
import com.ssafy.db.entity.board.ApplyBoard;

import java.util.List;

public interface ReserveService {

    public DoctorReservedRes getDoctorReservedList(Long id);

    public PatientReservedRes getPatientReservedList(Long id);

    public void AcceptReserve(Long id);

    public void CancelReserve(Long id);

    public List getDoctorList(String depart);

    public void applyResume(ApplyBoardReq applyBoardReq);

    public void setSessionRoomInfo(ApplyBoardReq applyBoardReq);
}
