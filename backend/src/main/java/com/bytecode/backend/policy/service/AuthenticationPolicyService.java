package com.bytecode.backend.policy.service;

import com.bytecode.backend.application.entity.SecurityProfile;
import com.bytecode.backend.policy.dto.AuthenticationDecision;
import com.bytecode.backend.riskengine.dto.RiskResult;

public interface AuthenticationPolicyService {

    AuthenticationDecision evaluatePolicy(
            RiskResult riskResult,
            SecurityProfile securityProfile
    );

}