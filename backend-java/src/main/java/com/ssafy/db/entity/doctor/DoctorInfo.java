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
public class DoctorInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name="userId")
    User user;

    String departName;

    private String status;
    private int hosName;
    private String phone;

}
