package com.bytecode.backend.user.service;

import com.bytecode.backend.exception.EmailAlreadyExistsException;
import com.bytecode.backend.loginattempt.service.LoginAttemptService;
import com.bytecode.backend.security.fingerprint.DeviceFingerprintService;
import com.bytecode.backend.security.jwt.JwtService;
import com.bytecode.backend.trusteddevice.service.TrustedDeviceService;
import com.bytecode.backend.user.dto.LoginRequest;
import com.bytecode.backend.user.dto.LoginResponse;
import com.bytecode.backend.user.dto.RegisterRequest;
import com.bytecode.backend.user.dto.RegisterResponse;
import com.bytecode.backend.user.entity.Role;
import com.bytecode.backend.user.entity.User;
import com.bytecode.backend.user.repository.UserRepository;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final LoginAttemptService loginAttemptService;
    private final DeviceFingerprintService deviceFingerprintService;
    private final TrustedDeviceService trustedDeviceService;

    @Override
    public RegisterResponse register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new EmailAlreadyExistsException("Email already exists");
        }

        User user = User.builder()
                .fullName(request.getFullName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();

        User savedUser = userRepository.save(user);

        return RegisterResponse.builder()
                .id(savedUser.getId())
                .fullName(savedUser.getFullName())
                .email(savedUser.getEmail())
                .message("User registered successfully")
                .build();
    }

    @Override
    public LoginResponse login(LoginRequest request,
            HttpServletRequest httpRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()));

        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        String token = jwtService.generateToken(userDetails);

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow();

        String ipAddress = httpRequest.getRemoteAddr();
        String userAgent = httpRequest.getHeader("User-Agent");

        // Generate fingerprint FIRST
        String deviceFingerprint = deviceFingerprintService.generateFingerprint(httpRequest);

        // Then check if it's trusted
        boolean trusted = trustedDeviceService.isTrusted(user, deviceFingerprint);

        int riskScore;
        String riskLevel;

        if (trusted) {
            riskScore = 10;
            riskLevel = "LOW";
        } else {
            riskScore = 50;
            riskLevel = "MEDIUM";
        }

        loginAttemptService.saveLoginAttempt(
                user,
                ipAddress,
                userAgent,
                true,
                riskScore,
                riskLevel,
                deviceFingerprint);

        return LoginResponse.builder()
                .message("Login successful")
                .token(token)
                .build();
    }
}