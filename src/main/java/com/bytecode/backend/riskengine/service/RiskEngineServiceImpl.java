package com.bytecode.backend.riskengine.service;

import com.bytecode.backend.riskengine.dto.RiskResult;
import org.springframework.stereotype.Service;

@Service
public class RiskEngineServiceImpl implements RiskEngineService {

    @Override
    public RiskResult calculateRisk(
            boolean trustedDevice,
            boolean newIp,
            boolean unusualTime,
            int failedAttempts) {

        int score = 0;

        if (!trustedDevice)
            score += 40;

        if (newIp)
            score += 25;

        if (unusualTime)
            score += 15;

        if (failedAttempts >= 5)
            score += 30;

        String level;

        if (score >= 70)
            level = "HIGH";
        else if (score >= 30)
            level = "MEDIUM";
        else
            level = "LOW";

        boolean otp = score >= 70;

        return RiskResult.builder()
                .riskScore(score)
                .riskLevel(level)
                .requiresOtp(otp)
                .build();
    }
}