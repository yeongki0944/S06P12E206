package com.ssafy.db.repository.doctor;

import com.ssafy.db.entity.doctor.Disease;
import com.ssafy.db.entity.doctor.DoctorInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorInfoRepository extends JpaRepository<DoctorInfo, Long> {
}
