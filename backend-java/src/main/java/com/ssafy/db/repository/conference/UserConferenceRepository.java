package com.ssafy.db.repository.conference;

import com.ssafy.db.entity.conference.UserConference;
import com.ssafy.db.entity.doctor.DoctorInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserConferenceRepository  extends JpaRepository<UserConference, Long> {
}
