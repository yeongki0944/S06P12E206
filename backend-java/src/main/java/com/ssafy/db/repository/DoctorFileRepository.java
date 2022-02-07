package com.ssafy.db.repository;

import com.ssafy.db.entity.DoctorFile;
import com.ssafy.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorFileRepository extends JpaRepository<DoctorFile, Long> {
}
