package com.ssafy.db.entity.doctor;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@Getter
@Setter
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

