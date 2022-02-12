package com.ssafy.db.repository.board;

import com.ssafy.db.entity.board.ApplyBoard;
import com.ssafy.db.entity.board.RStatus;
import com.ssafy.db.entity.doctor.DoctorInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.persistence.EntityManager;
import java.util.List;

public interface ApplyBoardRepository extends JpaRepository<ApplyBoard, Long> {

    List<ApplyBoard> findAllByDoctorInfoIdAndStatus(Long id, RStatus status);
    List<ApplyBoard> findAllByUserIdAndStatus(Long id, RStatus status);

    @Modifying(clearAutomatically = true)
    @Query("UPDATE ApplyBoard b SET b.status = :status where b.id= :id")
    int updateStatus(RStatus status,Long id);

    @Override
    @Modifying(clearAutomatically = true)
    @Query("DELETE from ApplyBoard b where b.id= :id")
    void deleteById(Long id);
}
