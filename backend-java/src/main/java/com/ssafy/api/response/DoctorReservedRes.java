package com.ssafy.api.response;

import com.ssafy.db.entity.board.ApplyBoard;
import com.ssafy.db.entity.doctor.DoctorResume;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class DoctorReservedRes {

    private List<ApplyBoard> appliedList;
    private List<ApplyBoard> confirmList;


}
