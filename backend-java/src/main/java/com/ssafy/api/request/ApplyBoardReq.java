package com.ssafy.api.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Transient;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ApplyBoardReq {
    private Long useId;
    private Long docId;
    private String date;
    private String content;
}
