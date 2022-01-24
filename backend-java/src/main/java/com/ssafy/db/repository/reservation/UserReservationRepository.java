package com.ssafy.db.repository.reservation;

import com.ssafy.db.entity.reservation.Reservation;
import com.ssafy.db.entity.reservation.UserReservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserReservationRepository extends JpaRepository<UserReservation, Long> {
}
