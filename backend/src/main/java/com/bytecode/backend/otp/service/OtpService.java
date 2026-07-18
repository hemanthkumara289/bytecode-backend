package com.bytecode.backend.otp.service;

import com.bytecode.backend.user.entity.User;

public interface OtpService {

    void generateAndSendOtp(User user);

    boolean verifyOtp(User user, String otp);

}