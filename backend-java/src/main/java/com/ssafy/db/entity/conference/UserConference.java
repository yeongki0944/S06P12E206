package com.ssafy.db.entity.conference;

import com.ssafy.db.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class UserConference {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="userId")
    private User user;

    @ManyToOne
    @JoinColumn(name="confId")
    private Conference conference;

    @Enumerated(value = EnumType.STRING)
    private Action action;

    @LastModifiedDate
    private LocalDateTime updatedAt;
}
