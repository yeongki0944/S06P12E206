package com.ssafy.api.controller;

import com.ssafy.api.response.ResumeRes;
import com.ssafy.api.response.UserRes;
import com.ssafy.api.service.ManagerService;
import com.ssafy.common.auth.SsafyUserDetails;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.User;
import com.ssafy.db.entity.doctor.DoctorFile;
import com.ssafy.db.entity.doctor.DoctorResume;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.net.URLEncoder;

@RestController
@RequestMapping("/manager")
public class ManagerController {
    @Value("${app.wfileupload.uploadDir}")
    private String wUploadFolder;

    @Value("${app.wfileupload.uploadPath}")
    private String wUploadPath;

    @Autowired
    ManagerService service;

    @Autowired
    private JavaMailSender mailSender;
    @GetMapping()
    public ResponseEntity<ResumeRes> getResumeList() {

        ResumeRes resumeRes;
        resumeRes = service.resumeList();
        return new ResponseEntity<ResumeRes>(resumeRes, HttpStatus.OK);
    }

    @GetMapping("/download")
    public void download(HttpServletResponse response,String email) throws IOException {

        DoctorFile doctorFile = service.getDownloadPath(email);
        File downloadFile = new File(wUploadPath + File.separator + doctorFile.getFileUrl());

        String fileName = doctorFile.getFileName();
        byte[] fileByte = FileUtils.readFileToByteArray(downloadFile);

        response.setContentType("application/octet-stream");
        response.setHeader("Content-Disposition", "attachment; fileName=\"" + URLEncoder.encode(fileName, "UTF-8")+"\";");
        response.setHeader("Content-Transfer-Encoding", "binary");

        response.getOutputStream().write(fileByte);
        response.getOutputStream().flush();
        response.getOutputStream().close();
    }

    @GetMapping("/signup")
    public ResponseEntity<? extends BaseResponseBody> signup(String email) throws IOException {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        System.out.println("메일 전송!");
        message.setSubject("[수화닥터] 의사 인증이 완료되었습니다.");
        String name = service.getName(email);
        message.setText(name+"의사님 반갑습니다! 회원가입이 완료되었습니다. 이용해주셔서 감사합니다.");
        mailSender.send(message);
        service.register(email);
        service.deleteResume(email);

        return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
    }
}
