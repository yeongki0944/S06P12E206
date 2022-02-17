package com.ssafy.api.service;

import com.ssafy.api.request.ApplyBoardReq;
import com.ssafy.api.response.DoctorReservedRes;
import com.ssafy.api.response.PatientReservedRes;
import com.ssafy.db.entity.User;
import com.ssafy.db.entity.board.ApplyBoard;
import com.ssafy.db.entity.board.ApplyUser;
import com.ssafy.db.entity.board.RStatus;
import com.ssafy.db.entity.doctor.DoctorInfo;
import com.ssafy.db.repository.UserRepository;
import com.ssafy.db.repository.board.ApplyBoardRepository;
import com.ssafy.db.repository.board.ApplyUserRepository;
import com.ssafy.db.repository.doctor.DoctorInfoRepository;
import lombok.AllArgsConstructor;
import org.checkerframework.checker.units.qual.A;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ReserveServiceImpl implements ReserveService {

    ApplyBoardRepository Repository;
    DoctorInfoRepository doctorInfoRepository;
    EntityManager entityManager;
    UserRepository userRepository;

    ApplyUserRepository applyUserRepository;

    @Override
    public DoctorReservedRes getDoctorReservedList(Long id) {

        entityManager.clear();
        DoctorReservedRes doctorReservedRes = new DoctorReservedRes();

        DoctorInfo doctorInfo = doctorInfoRepository.findByUserId(id);

        doctorReservedRes.setAppliedList(Repository.findAllByDoctorInfoIdAndStatus(doctorInfo.getId(), RStatus.APPLIED));
        doctorReservedRes.setConfirmList(Repository.findAllByDoctorInfoIdAndStatus(doctorInfo.getId(), RStatus.CONFIRM));


        return doctorReservedRes;
    }

    @Override
    public PatientReservedRes getPatientReservedList(Long id) {

        entityManager.clear();
        PatientReservedRes patientReservedRes = new PatientReservedRes();
        patientReservedRes.setAppliedList(Repository.findAllByUserIdAndStatus(id, RStatus.APPLIED));
        patientReservedRes.setConfirmList(Repository.findAllByUserIdAndStatus(id, RStatus.CONFIRM));

        return patientReservedRes;
    }

    @Override
    @Transactional
    public void AcceptReserve(Long id) {

        Optional<ApplyBoard> applyBoard = Repository.findById(id);
        Long userId = applyBoard.get().getUId();
        Long doctorInfoId = applyBoard.get().getDId();
        entityManager.flush();
        entityManager.clear();
        int res = Repository.updateStatus(RStatus.CONFIRM,id);

        applyUserRepository.deleteAll();
        entityManager.flush();
        entityManager.clear();

    }

    @Override
    @Transactional
    public void CancelReserve(Long id) {
        Optional<ApplyBoard> applyBoard = Repository.findById(id);
        Long userId = applyBoard.get().getUId();
        Long doctorId = applyBoard.get().getDId();
        entityManager.flush();
        entityManager.clear();

        applyUserRepository.deleteAll();
        Repository.deleteById(id);
        entityManager.flush();
        entityManager.clear();

    }

    @Override
    public List<DoctorInfo> getDoctorList(String depart) {
        List<DoctorInfo> doctorInfoList = doctorInfoRepository.findAllByDepartName(depart);

        return doctorInfoList;
    }

    @Override
    @Transactional
    public boolean applyResume(ApplyBoardReq applyBoardReq) {
        System.out.println(applyBoardReq.getUseId());
        System.out.println(applyBoardReq.getDocId());
        User user = userRepository.findUserById(applyBoardReq.getUseId());
        DoctorInfo doctorInfo = doctorInfoRepository.findDoctorInfoById(applyBoardReq.getDocId());
        Long doctorId = doctorInfo.getId();
        // ApplyUser 테이블 확인
        if(applyUserRepository.existsByUserIdAndDoctorInfoId(applyBoardReq.getUseId(),doctorId)) {
            return false;
        }

        // 있으면 return false;
        // 없으면 return true;

        ApplyBoard applyBoard = new ApplyBoard();
        applyBoard.setUser(user);
        applyBoard.setDoctorInfo(doctorInfo);
        applyBoard.setReservedDt(applyBoardReq.getDate());
        applyBoard.setContents(applyBoardReq.getContent());
        applyBoard.setStatus(RStatus.APPLIED);
        Repository.save(applyBoard);
        // ApplyUser도 추가해줘야함.
        ApplyUser applyUser = new ApplyUser();
        applyUser.setUser(user);
        applyUser.setDoctorInfo(doctorInfo);

        applyUserRepository.save(applyUser);
        return true;
    }

    @Override
    @Transactional
    public void setSessionRoomInfo(ApplyBoardReq applyBoardReq) {

        int res = Repository.updateSessionId(applyBoardReq.getSessionId(), applyBoardReq.getId());
        entityManager.clear();

    }
}
