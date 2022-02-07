package com.ssafy.api.service;

import com.ssafy.db.entity.DoctorResume;
import org.springframework.web.multipart.MultipartHttpServletRequest;

public interface ResumeService {

    public boolean resume(DoctorResume doctorResume, MultipartHttpServletRequest request);
}
