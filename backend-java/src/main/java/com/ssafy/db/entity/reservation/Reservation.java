package com.ssafy.db.entity.reservation;

import com.ssafy.db.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String content;

    @ManyToOne
    @JoinColumn(name="userId")
    private User user;

    private LocalDateTime reservedDt;

    @Enumerated(value = EnumType.STRING)
    private RType type;

    private String img;
}
