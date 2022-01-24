package com.ssafy.db.repository.board;

import com.ssafy.db.entity.board.ApplyBoard;
import com.ssafy.db.entity.board.BoardUserRead;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardUserReadRepository  extends JpaRepository<BoardUserRead, Long> {
}
