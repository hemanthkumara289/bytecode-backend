package com.bytecode.backend.otp.service;

import com.bytecode.backend.otp.entity.OtpVerification;
import com.bytecode.backend.otp.repository.OtpVerificationRepository;
import com.bytecode.backend.otp.util.OtpGenerator;
import com.bytecode.backend.user.entity.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class OtpServiceImpl implements OtpService {

    private static final int OTP_EXPIRY_MINUTES = 5;
    private static final int MAX_ATTEMPTS = 5;

    private final OtpVerificationRepository otpRepository;
    private final PasswordEncoder passwordEncoder;
    private final EmailService emailService;

    public OtpServiceImpl(
            OtpVerificationRepository otpRepository,
            PasswordEncoder passwordEncoder,
            EmailService emailService
    ) {
        this.otpRepository = otpRepository;
        this.passwordEncoder = passwordEncoder;
        this.emailService = emailService;
    }

    @Override
    public void generateAndSendOtp(User user) {

        String otp = OtpGenerator.generateOtp();

        OtpVerification verification = otpRepository.findByUser(user)
                .orElse(new OtpVerification());

        verification.setUser(user);
        verification.setOtpHash(passwordEncoder.encode(otp));
        verification.setExpiresAt(LocalDateTime.now().plusMinutes(OTP_EXPIRY_MINUTES));
        verification.setVerified(false);
        verification.setAttemptCount(0);

        otpRepository.save(verification);

        emailService.sendOtpEmail(user.getEmail(), otp);
    }

    @Override
    public boolean verifyOtp(User user, String otp) {

        OtpVerification verification = otpRepository.findByUser(user)
                .orElse(null);

        if (verification == null) {
            return false;
        }

        if (verification.isVerified()) {
            return false;
        }

        if (verification.getExpiresAt().isBefore(LocalDateTime.now())) {
            return false;
        }

        if (verification.getAttemptCount() >= MAX_ATTEMPTS) {
            return false;
        }

        verification.setAttemptCount(verification.getAttemptCount() + 1);

        if (!passwordEncoder.matches(otp, verification.getOtpHash())) {
            otpRepository.save(verification);
            return false;
        }

        verification.setVerified(true);
        otpRepository.save(verification);

        return true;
    }
}