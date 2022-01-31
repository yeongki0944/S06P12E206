package com.ssafy.db.repository.conference;

import com.ssafy.db.entity.conference.ConferenceHistory;
import com.ssafy.db.entity.doctor.DoctorInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConferenceHistoryRepository  extends JpaRepository<ConferenceHistory, Long> {
}
