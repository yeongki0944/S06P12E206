package com.ssafy.db.repository.board;

import com.ssafy.db.entity.board.ApplyBoard;
import com.ssafy.db.entity.doctor.DoctorInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplyBoardRepository extends JpaRepository<ApplyBoard, Long> {
}
