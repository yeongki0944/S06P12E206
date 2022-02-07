package com.ssafy.db.entity;

import com.ssafy.db.entity.board.Board;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class DoctorFile {
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
    @JoinColumn(name="doctorId")
    DoctorResume doctorResume;
}
