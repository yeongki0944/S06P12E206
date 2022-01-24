package com.ssafy.db.entity.doctor;

import com.ssafy.db.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
@Entity
@NoArgsConstructor
@Getter
@Setter
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="InfoId")
    private DoctorInfo doctorInfo;

    @ManyToOne
    @JoinColumn(name="userId")
    private User user;

    private int rating;

    private String contents;

}
