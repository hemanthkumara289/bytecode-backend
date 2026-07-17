package com.bytecode.backend.security.fingerprint;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@Service
public class DeviceFingerprintServiceImpl implements DeviceFingerprintService {

    @Override
    public String generateFingerprint(HttpServletRequest request) {

        String ipAddress = request.getRemoteAddr();

        String userAgent = request.getHeader("User-Agent");

        String language = request.getHeader("Accept-Language");

        String rawFingerprint =
                ipAddress + "|" +
                userAgent + "|" +
                language;

        return sha256(rawFingerprint);
    }

    private String sha256(String input) {

        try {

            MessageDigest digest =
                    MessageDigest.getInstance("SHA-256");

            byte[] hash =
                    digest.digest(input.getBytes(StandardCharsets.UTF_8));

            StringBuilder hexString = new StringBuilder();

            for (byte b : hash) {
                hexString.append(String.format("%02x", b));
            }

            return hexString.toString();

        } catch (NoSuchAlgorithmException e) {

            throw new RuntimeException("Unable to generate fingerprint", e);

        }
    }
}