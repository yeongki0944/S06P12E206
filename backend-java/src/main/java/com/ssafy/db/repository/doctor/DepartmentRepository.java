package com.ssafy.db.repository.doctor;

import com.ssafy.db.entity.doctor.Department;
import com.ssafy.db.entity.reservation.PreventTime;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
}
