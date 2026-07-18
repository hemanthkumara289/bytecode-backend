package com.bytecode.backend.otp.service;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

    private final JavaMailSender mailSender;

    public EmailServiceImpl(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Override
    public void sendOtpEmail(String toEmail, String otp) {

        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(toEmail);
        message.setSubject("ByteCode Authentication OTP");

        message.setText("""
                Hello,

                Your One-Time Password (OTP) is:

                %s

                This OTP is valid for 5 minutes.

                If you did not request this login, please ignore this email.

                - ByteCode Team
                """.formatted(otp));

        mailSender.send(message);
    }
}