package com.ssafy.api.service;

import com.ssafy.api.response.DoctorReservedRes;
import com.ssafy.api.response.PatientReservedRes;

public interface ReserveService {

    public DoctorReservedRes getDoctorReservedList(Long id);

    public PatientReservedRes getPatientReservedList(Long id);

    public void AcceptReserve(Long id);

    public void CancelReserve(Long id);
}
