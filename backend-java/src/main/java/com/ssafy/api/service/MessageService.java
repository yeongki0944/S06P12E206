package com.ssafy.api.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.ssafy.api.response.SendSmsResponseDto;
import org.apache.http.ParseException;

import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

public interface MessageService {
    public SendSmsResponseDto sendSms(String recipientPhoneNumber, String content) throws ParseException, JsonProcessingException, UnsupportedEncodingException, InvalidKeyException, NoSuchAlgorithmException, URISyntaxException;

    public String makeSignature(Long time) throws UnsupportedEncodingException, InvalidKeyException, NoSuchAlgorithmException;

}
