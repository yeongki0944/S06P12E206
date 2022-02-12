package com.ssafy.db.entity.reservation;

import com.ssafy.db.entity.User;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.io.Serializable;

@Data
@Embeddable
public class UserReserveId implements Serializable {

    @ManyToOne
    @JoinColumn(name="userId")
    User user;

    @ManyToOne
    @JoinColumn(name="regId")
    Reservation reservation;
}
