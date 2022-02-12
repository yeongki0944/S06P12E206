package com.ssafy.api.service;

import com.ssafy.api.response.DoctorReservedRes;
import com.ssafy.api.response.PatientReservedRes;
import com.ssafy.db.entity.board.RStatus;
import com.ssafy.db.entity.doctor.DoctorInfo;
import com.ssafy.db.entity.doctor.DoctorResume;
import com.ssafy.db.repository.board.ApplyBoardRepository;
import com.ssafy.db.repository.doctor.DoctorInfoRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

@Service
@AllArgsConstructor
public class ReserveServiceImpl implements ReserveService {

    ApplyBoardRepository Repository;
    DoctorInfoRepository doctorInfoRepository;
    EntityManager entityManager;

    @Override
    public DoctorReservedRes getDoctorReservedList(Long id) {

        DoctorReservedRes doctorReservedRes = new DoctorReservedRes();

        DoctorInfo doctorInfo = doctorInfoRepository.findByUserId(id);

        doctorReservedRes.setAppliedList(Repository.findAllByDoctorInfoIdAndStatus(doctorInfo.getId(), RStatus.APPLIED));
        doctorReservedRes.setConfirmList(Repository.findAllByDoctorInfoIdAndStatus(doctorInfo.getId(), RStatus.CONFIRM));


        return doctorReservedRes;
    }

    @Override
    public PatientReservedRes getPatientReservedList(Long id) {

        PatientReservedRes patientReservedRes = new PatientReservedRes();
        patientReservedRes.setAppliedList(Repository.findAllByUserIdAndStatus(id, RStatus.APPLIED));
        patientReservedRes.setConfirmList(Repository.findAllByUserIdAndStatus(id, RStatus.CONFIRM));

        return patientReservedRes;
    }

    @Override
    @Transactional
    public void AcceptReserve(Long id) {

        int res = Repository.updateStatus(RStatus.CONFIRM,id);
        entityManager.clear();
    }

    @Override
    @Transactional
    public void CancelReserve(Long id) {
        Repository.deleteById(id);
        entityManager.clear();
    }
}
