package com.ssafy.api.service;

import com.ssafy.db.entity.DoctorResume;
import com.ssafy.db.repository.DoctorResumeRepository;
import com.ssafy.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.ServletContext;
import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@Service
public class ResumeServiceImpl implements ResumeService {

    @Value("${app.wfileupload.uploadDir}")
    private String wUploadFolder;

    @Value("${app.wfileupload.uploadPath}")
    private String wUploadPath;

    @Value("${app.lfileupload.uploadDir}")
    private String lUploadFolder;

    @Value("${app.lfileupload.uploadPath}")
    private String lUploadPath;

    @Autowired
    ServletContext context;

    @Autowired
    DoctorResumeRepository doctorResumeRepository;

    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean resume(DoctorResume doctorResume, MultipartHttpServletRequest request) {
        String os = System.getProperty("os.name").toLowerCase();
        doctorResumeRepository.save(doctorResume);

        List<MultipartFile> fileList = request.getFiles("file");



        return false;
    }
}
