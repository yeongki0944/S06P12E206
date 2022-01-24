package com.ssafy.db.repository.doctor;

import com.ssafy.db.entity.doctor.DoctorInfo;
import com.ssafy.db.entity.doctor.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
