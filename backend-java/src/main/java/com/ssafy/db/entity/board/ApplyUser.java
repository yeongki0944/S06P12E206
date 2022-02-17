package com.ssafy.db.entity.board;

import com.ssafy.db.entity.User;
import com.ssafy.db.entity.doctor.DoctorInfo;
import com.ssafy.db.entity.reservation.UserReserveId;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class ApplyUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "userId")
    User user;

    @ManyToOne
    @JoinColumn(name = "doctorInfoId")
    DoctorInfo doctorInfo;

}
