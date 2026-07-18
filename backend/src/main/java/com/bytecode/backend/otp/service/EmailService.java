package com.bytecode.backend.otp.service;

public interface EmailService {

    void sendOtpEmail(String toEmail, String otp);

}