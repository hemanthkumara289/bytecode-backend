package com.bytecode.backend.riskengine.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RiskResult {

    private int riskScore;

    private RiskLevel riskLevel;

    @Builder.Default
    private List<String> reasons = new ArrayList<>();
}