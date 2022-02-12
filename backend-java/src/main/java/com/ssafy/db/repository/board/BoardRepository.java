package com.ssafy.db.repository.board;

import com.ssafy.db.entity.board.Board;
import com.ssafy.db.entity.doctor.DoctorInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Long> {
}
