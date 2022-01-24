package com.ssafy.db.entity.board;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class BoardUserRead {
    @EmbeddedId
    private UserReadId userReadId;

}
