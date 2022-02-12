package com.ssafy.db.entity.board;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class BoardFile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fileName;

    private Long fileSize;

    private String fileContentType;

    private String fileUrl;

    @CreatedDate
    private LocalDateTime regDt;

    @ManyToOne
    @JoinColumn(name="boardId")
    Board board;

}
