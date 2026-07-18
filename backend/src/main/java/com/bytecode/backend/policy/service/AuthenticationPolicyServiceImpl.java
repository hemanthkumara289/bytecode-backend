package com.bytecode.backend.policy.service;

import com.bytecode.backend.application.entity.SecurityProfile;
import com.bytecode.backend.policy.dto.AuthenticationDecision;
import com.bytecode.backend.policy.dto.AuthenticationMethod;
import com.bytecode.backend.riskengine.dto.RiskLevel;
import com.bytecode.backend.riskengine.dto.RiskResult;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationPolicyServiceImpl
        implements AuthenticationPolicyService {

    @Override
    public AuthenticationDecision evaluatePolicy(
            RiskResult riskResult,
            SecurityProfile securityProfile) {

        return switch (securityProfile) {

            case BANKING ->
                    bankingPolicy(riskResult.getRiskLevel());

            case SHOPPING ->
                    shoppingPolicy(riskResult.getRiskLevel());

            case HEALTHCARE ->
                    healthcarePolicy(riskResult.getRiskLevel());

            case DEFAULT ->
                    defaultPolicy(riskResult.getRiskLevel());
        };
    }

    private AuthenticationDecision defaultPolicy(RiskLevel riskLevel) {

        return switch (riskLevel) {

            case LOW ->
                    allow(AuthenticationMethod.PASSWORD,
                            "Trusted login");

            case MEDIUM ->
                    allow(AuthenticationMethod.EMAIL_OTP,
                            "Additional verification required");

            case HIGH ->
                    allow(AuthenticationMethod.EMAIL_OTP,
                            "High-risk login detected");
        };
    }

    private AuthenticationDecision shoppingPolicy(RiskLevel riskLevel) {

        return switch (riskLevel) {

            case LOW ->
                    allow(AuthenticationMethod.PASSWORD,
                            "Trusted shopping login");

            case MEDIUM ->
                    allow(AuthenticationMethod.PASSWORD,
                            "Shopping application accepts medium risk");

            case HIGH ->
                    allow(AuthenticationMethod.EMAIL_OTP,
                            "OTP required for high-risk shopping login");
        };
    }

    private AuthenticationDecision bankingPolicy(RiskLevel riskLevel) {

        return switch (riskLevel) {

            case LOW ->
                    allow(AuthenticationMethod.PASSWORD,
                            "Trusted banking login");

            case MEDIUM ->
                    allow(AuthenticationMethod.EMAIL_OTP,
                            "OTP required for banking");

            case HIGH ->
                    block("High-risk banking login blocked");
        };
    }

    private AuthenticationDecision healthcarePolicy(RiskLevel riskLevel) {

        return switch (riskLevel) {

            case LOW ->
                    allow(AuthenticationMethod.EMAIL_OTP,
                            "Healthcare applications always require OTP");

            case MEDIUM ->
                    allow(AuthenticationMethod.EMAIL_OTP,
                            "OTP required for healthcare");

            case HIGH ->
                    block("High-risk healthcare login blocked");
        };
    }

    private AuthenticationDecision allow(
            AuthenticationMethod method,
            String reason) {

        return AuthenticationDecision.builder()
                .authenticationMethod(method)
                .allowLogin(true)
                .reason(reason)
                .build();
    }

    private AuthenticationDecision block(String reason) {

        return AuthenticationDecision.builder()
                .authenticationMethod(AuthenticationMethod.PASSWORD)
                .allowLogin(false)
                .reason(reason)
                .build();
    }
}