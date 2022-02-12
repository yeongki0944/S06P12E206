package com.ssafy.api.response;

import com.ssafy.db.entity.board.ApplyBoard;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class PatientReservedRes {

    private List<ApplyBoard> appliedList;
    private List<ApplyBoard> confirmList;
}
