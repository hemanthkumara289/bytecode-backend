package com.bytecode.backend.riskengine.service;

import com.bytecode.backend.riskengine.dto.RiskContext;
import com.bytecode.backend.riskengine.dto.RiskResult;

public interface RiskEngineService {

    RiskResult calculateRisk(RiskContext context);

}