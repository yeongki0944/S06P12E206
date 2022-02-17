package com.ssafy.db.repository.board;

import com.ssafy.db.entity.board.ApplyBoard;
import com.ssafy.db.entity.board.ApplyUser;
import com.ssafy.db.entity.board.RStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ApplyUserRepository extends JpaRepository<ApplyUser, Long> {



    boolean existsByUserIdAndDoctorInfoId(Long userId,Long doctorInfoId);


    ApplyUser findApplyUserByUserIdAndDoctorInfoId(Long userId, Long doctorInfoId);


}
