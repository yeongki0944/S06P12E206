package com.ssafy.api.response;

import com.ssafy.db.entity.doctor.DoctorInfo;
import com.ssafy.db.entity.doctor.DoctorResume;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DoctorRes {

    private List<DoctorInfo> list;
}
