package com.bytecode.backend.riskengine.service;

import com.bytecode.backend.riskengine.dto.RiskContext;
import com.bytecode.backend.riskengine.dto.RiskLevel;
import com.bytecode.backend.riskengine.dto.RiskResult;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RiskEngineServiceImpl implements RiskEngineService {

    @Override
    public RiskResult calculateRisk(RiskContext context) {

        int score = 0;
        List<String> reasons = new ArrayList<>();

        if (!context.isTrustedDevice()) {
            score += 40;
            reasons.add("Unknown device");
        }

        if (context.isNewIp()) {
            score += 25;
            reasons.add("New IP address");
        }

        if (context.isUnusualLoginTime()) {
            score += 15;
            reasons.add("Unusual login time");
        }

        if (context.getFailedAttempts() >= 5) {
            score += 30;
            reasons.add("Multiple failed login attempts");
        }

        RiskLevel level;

        if (score >= 70) {
            level = RiskLevel.HIGH;
        } else if (score >= 30) {
            level = RiskLevel.MEDIUM;
        } else {
            level = RiskLevel.LOW;
        }

        return RiskResult.builder()
                .riskScore(score)
                .riskLevel(level)
                .reasons(reasons)
                .build();
    }
}