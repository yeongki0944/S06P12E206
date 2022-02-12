package com.ssafy.db.repository.reservation;

import com.ssafy.db.entity.reservation.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
}
