package com.ssafy.db.repository.doctor;

import com.ssafy.db.entity.doctor.DoctorInfo;
import com.ssafy.db.entity.doctor.Sheet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SheetRepository  extends JpaRepository<Sheet, Long> {
}
