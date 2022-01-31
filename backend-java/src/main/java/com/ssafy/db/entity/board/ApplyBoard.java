package com.ssafy.db.entity.board;

import com.ssafy.db.entity.User;
import com.ssafy.db.entity.reservation.RType;
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
public class ApplyBoard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String depart;

    private String contents;

    private LocalDateTime reservedDt;

    @CreatedDate
    private LocalDateTime regDt;

    @ManyToOne
    @JoinColumn(name="userId")
    User user;

    @Enumerated(value = EnumType.STRING)
    private RStatus status;
}
