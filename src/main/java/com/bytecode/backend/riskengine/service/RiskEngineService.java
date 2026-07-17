package com.bytecode.backend.riskengine.service;

import com.bytecode.backend.riskengine.dto.RiskResult;

public interface RiskEngineService {

    RiskResult calculateRisk(
            boolean trustedDevice,
            boolean newIp,
            boolean unusualTime,
            int failedAttempts
    );

}