package com.bytecode.backend.user.service;

import com.bytecode.backend.application.entity.ClientApplication;
import com.bytecode.backend.application.repository.ClientApplicationRepository;
import com.bytecode.backend.exception.EmailAlreadyExistsException;
import com.bytecode.backend.loginattempt.service.LoginAttemptService;
import com.bytecode.backend.otp.service.OtpService;
import com.bytecode.backend.policy.dto.AuthenticationDecision;
import com.bytecode.backend.policy.dto.AuthenticationMethod;
import com.bytecode.backend.policy.service.AuthenticationPolicyService;
import com.bytecode.backend.riskengine.dto.RiskContext;
import com.bytecode.backend.riskengine.dto.RiskResult;
import com.bytecode.backend.riskengine.service.RiskEngineService;
import com.bytecode.backend.security.fingerprint.DeviceFingerprintService;
import com.bytecode.backend.security.jwt.JwtService;
import com.bytecode.backend.security.service.CustomUserDetailsService;
import com.bytecode.backend.trusteddevice.service.TrustedDeviceService;
import com.bytecode.backend.user.dto.LoginRequest;
import com.bytecode.backend.user.dto.LoginResponse;
import com.bytecode.backend.user.dto.RegisterRequest;
import com.bytecode.backend.user.dto.RegisterResponse;
import com.bytecode.backend.user.dto.VerifyOtpRequest;
import com.bytecode.backend.user.entity.Role;
import com.bytecode.backend.user.entity.User;
import com.bytecode.backend.user.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final CustomUserDetailsService customUserDetailsService;

    private final LoginAttemptService loginAttemptService;
    private final DeviceFingerprintService deviceFingerprintService;
    private final TrustedDeviceService trustedDeviceService;
    private final RiskEngineService riskEngineService;
    private final AuthenticationPolicyService authenticationPolicyService;
    private final OtpService otpService;

    private final ClientApplicationRepository applicationRepository;

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

        // Validate Client Application
        ClientApplication application = applicationRepository
                .findByClientId(request.getClientId())
                .orElseThrow(() ->
                        new EntityNotFoundException("Invalid Client ID"));

        if (!application.isActive()) {
            throw new IllegalStateException("Application is disabled.");
        }

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()));

        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        String ipAddress = httpRequest.getRemoteAddr();
        String userAgent = httpRequest.getHeader("User-Agent");

        String deviceFingerprint =
                deviceFingerprintService.generateFingerprint(httpRequest);

        boolean trusted =
                trustedDeviceService.isTrusted(user, deviceFingerprint);

        RiskContext riskContext = RiskContext.builder()
                .userId(user.getId())
                .trustedDevice(trusted)
                .deviceFingerprint(deviceFingerprint)
                .ipAddress(ipAddress)
                .newIp(false)
                .failedAttempts(0)
                .unusualLoginTime(false)
                .loginTime(LocalDateTime.now())
                .userAgent(userAgent)
                .build();

        RiskResult riskResult =
                riskEngineService.calculateRisk(riskContext);

        AuthenticationDecision decision =
                authenticationPolicyService.evaluatePolicy(
                        riskResult,
                        application.getSecurityProfile()
                );

        // Save blocked login attempts before rejecting them
        if (!decision.isAllowLogin()) {

            loginAttemptService.saveLoginAttempt(
                    user,
                    ipAddress,
                    userAgent,
                    false,
                    riskResult.getRiskScore(),
                    riskResult.getRiskLevel().name(),
                    deviceFingerprint
            );

            throw new IllegalStateException(decision.getReason());
        }

        // Save successful login attempts
        loginAttemptService.saveLoginAttempt(
                user,
                ipAddress,
                userAgent,
                true,
                riskResult.getRiskScore(),
                riskResult.getRiskLevel().name(),
                deviceFingerprint
        );

        if (decision.getAuthenticationMethod() == AuthenticationMethod.EMAIL_OTP) {

            otpService.generateAndSendOtp(user);

            return LoginResponse.builder()
                    .message("OTP sent successfully")
                    .requiresOtp(true)
                    .authenticationMethod(AuthenticationMethod.EMAIL_OTP)
                    .build();
        }

        String token = jwtService.generateToken(userDetails);

        return LoginResponse.builder()
                .message("Login successful")
                .token(token)
                .requiresOtp(false)
                .authenticationMethod(AuthenticationMethod.PASSWORD)
                .build();
    }

    @Override
    public LoginResponse verifyOtp(VerifyOtpRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        boolean verified = otpService.verifyOtp(user, request.getOtp());

        if (!verified) {
            throw new RuntimeException("Invalid or expired OTP");
        }

        UserDetails userDetails =
                customUserDetailsService.loadUserByUsername(user.getEmail());

        String token = jwtService.generateToken(userDetails);

        return LoginResponse.builder()
                .message("OTP verified successfully")
                .token(token)
                .requiresOtp(false)
                .authenticationMethod(AuthenticationMethod.EMAIL_OTP)
                .build();
    }
}