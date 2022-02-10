package com.ssafy.api.service;

import com.ssafy.api.response.ResumeRes;
import com.ssafy.db.entity.doctor.DoctorFile;

public interface ManagerService {

    public ResumeRes resumeList();

    public DoctorFile getDownloadPath(String email);
    public String getName(String email);

    public void deleteResume(String email);
    public void register(String email);
}
