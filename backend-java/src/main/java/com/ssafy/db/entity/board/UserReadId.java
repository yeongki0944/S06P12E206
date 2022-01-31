package com.ssafy.db.entity.board;

import com.ssafy.db.entity.User;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.io.Serializable;

@Data
@Embeddable
public class UserReadId implements Serializable {

    @ManyToOne
    @JoinColumn(name = "boardId")
    Board board;

    @ManyToOne
    @JoinColumn(name = "userId")
    User user;
}
