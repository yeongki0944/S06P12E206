package com.ssafy.db.repository.doctor;

import com.ssafy.db.entity.doctor.Department;
import com.ssafy.db.entity.doctor.Disease;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiseaseRepository extends JpaRepository<Disease, Long> {
}
