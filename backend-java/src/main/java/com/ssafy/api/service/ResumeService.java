package com.ssafy.api.service;

import com.ssafy.db.entity.doctor.DoctorResume;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import java.io.IOException;

public interface ResumeService {

    public boolean resume(DoctorResume doctorResume, MultipartHttpServletRequest request);
}
