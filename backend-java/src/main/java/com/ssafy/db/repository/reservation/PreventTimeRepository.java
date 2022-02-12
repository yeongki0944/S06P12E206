package com.ssafy.db.repository.reservation;

import com.ssafy.db.entity.User;
import com.ssafy.db.entity.reservation.PreventTime;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PreventTimeRepository extends JpaRepository<PreventTime, Long> {
}
