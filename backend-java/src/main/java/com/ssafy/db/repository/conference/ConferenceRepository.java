package com.ssafy.db.repository.conference;

import com.ssafy.db.entity.conference.Conference;
import com.ssafy.db.entity.doctor.DoctorInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConferenceRepository extends JpaRepository<Conference, Long> {
}
