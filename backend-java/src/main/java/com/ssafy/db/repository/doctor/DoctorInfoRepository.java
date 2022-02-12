package com.ssafy.db.repository.doctor;

import com.ssafy.db.entity.doctor.Disease;
import com.ssafy.db.entity.doctor.DoctorInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DoctorInfoRepository extends JpaRepository<DoctorInfo, Long> {

    DoctorInfo findByUserId(Long id);

    List<DoctorInfo> findAllByDepartName(String departName);

    DoctorInfo findDoctorInfoById(Long id);
}
