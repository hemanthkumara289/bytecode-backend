package com.bytecode.backend.loginattempt.service;

import com.bytecode.backend.loginattempt.entity.LoginAttempt;
import com.bytecode.backend.loginattempt.repository.LoginAttemptRepository;
import com.bytecode.backend.user.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class LoginAttemptService {

    private final LoginAttemptRepository loginAttemptRepository;

    public void saveLoginAttempt(
            User user,
            String ipAddress,
            String userAgent,
            boolean success,
            int riskScore,
            String riskLevel,
            String deviceFingerprint
    ) {

        LoginAttempt loginAttempt = LoginAttempt.builder()
                .user(user)
                .loginTime(LocalDateTime.now())
                .ipAddress(ipAddress)
                .userAgent(userAgent)
                .success(success)
                .riskScore(riskScore)
                .riskLevel(riskLevel)
                .deviceFingerprint(deviceFingerprint)
                .build();

        loginAttemptRepository.save(loginAttempt);
    }
}