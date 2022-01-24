package com.ssafy.db.repository.board;

import com.ssafy.db.entity.board.ApplyBoard;
import com.ssafy.db.entity.board.BoardFile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardFileRepository extends JpaRepository<BoardFile, Long> {
}
