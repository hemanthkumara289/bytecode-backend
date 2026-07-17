package com.bytecode.backend.riskengine.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RiskResult {

    private int riskScore;

    private String riskLevel;

    private boolean requiresOtp;

}