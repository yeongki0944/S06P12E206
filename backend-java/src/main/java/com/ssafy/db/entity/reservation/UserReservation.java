package com.ssafy.db.entity.reservation;

import com.ssafy.db.entity.User;
import com.ssafy.db.entity.board.UserReadId;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class UserReservation {

    @EmbeddedId
    private UserReserveId userReserveId;
}
