package com.ssafy.api.service;

import com.ssafy.db.entity.doctor.DoctorFile;
import com.ssafy.db.entity.doctor.DoctorResume;
import com.ssafy.db.repository.DoctorFileRepository;
import com.ssafy.db.repository.DoctorResumeRepository;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

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
    DoctorResumeRepository doctorResumeRepository;

    @Autowired
    DoctorFileRepository doctorFileRepository;



    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean resume(DoctorResume doctorResume, MultipartHttpServletRequest request) {
        String os = System.getProperty("os.name").toLowerCase();
        try {
            doctorResume.setStatus("ready");
            doctorResumeRepository.save(doctorResume);

            List<MultipartFile> fileList = request.getFiles("file");
            System.out.println(os);
            if (os.contains("win")) {
                File uploadDir = new File(wUploadPath + File.separator + wUploadFolder);
                if (!uploadDir.exists()) uploadDir.mkdir();

                for (MultipartFile part : fileList) {

                    String fileName = part.getOriginalFilename();

                    //Random File Id
                    UUID uuid = UUID.randomUUID();

                    // file extension
                    String extension = FilenameUtils.getExtension(fileName); // vs FilenameUtils.getBaseName()
                    String savingFileName = uuid + "." + extension;
                    File destFile = new File(wUploadPath + File.separator + wUploadFolder + File.separator + savingFileName);

                    System.out.println(wUploadPath + File.separator + wUploadFolder + File.separator + savingFileName);
                    part.transferTo(destFile);
                    DoctorFile doctorFile = new DoctorFile();
                    doctorFile.setDoctorResume(doctorResume);
                    doctorFile.setFileName(fileName);
                    doctorFile.setFileSize(part.getSize());
                    doctorFile.setFileContentType(part.getContentType());
                    String fileUrl = wUploadFolder + "/" + savingFileName;
                    doctorFile.setFileUrl(fileUrl);

                    doctorFileRepository.save(doctorFile);
                }
                return true;
            } else {
                return true;
            }
        }catch(IOException e) {
            e.printStackTrace();
            return false;
        }
    }
}
