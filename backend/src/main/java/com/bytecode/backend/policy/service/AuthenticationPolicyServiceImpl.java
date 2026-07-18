package com.bytecode.backend.policy.service;

import com.bytecode.backend.policy.dto.AuthenticationDecision;
import com.bytecode.backend.policy.dto.AuthenticationMethod;
import com.bytecode.backend.riskengine.dto.RiskLevel;
import com.bytecode.backend.riskengine.dto.RiskResult;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationPolicyServiceImpl
        implements AuthenticationPolicyService {

    @Override
    public AuthenticationDecision evaluatePolicy(RiskResult riskResult) {

        return switch (riskResult.getRiskLevel()) {

            case LOW -> AuthenticationDecision.builder()
                    .authenticationMethod(AuthenticationMethod.PASSWORD)
                    .allowLogin(true)
                    .reason("Trusted login")
                    .build();

            case MEDIUM -> AuthenticationDecision.builder()
                    .authenticationMethod(AuthenticationMethod.EMAIL_OTP)
                    .allowLogin(true)
                    .reason("Additional verification required")
                    .build();

            case HIGH -> AuthenticationDecision.builder()
                    .authenticationMethod(AuthenticationMethod.EMAIL_OTP)
                    .allowLogin(true)
                    .reason("High-risk login detected")
                    .build();
        };
    }
}