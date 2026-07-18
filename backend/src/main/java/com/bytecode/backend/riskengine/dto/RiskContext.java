package com.bytecode.backend.riskengine.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
public class RiskContext {

    // User Information
    private UUID userId;

    // Device Information
    private boolean trustedDevice;
    private String deviceFingerprint;

    // Network Information
    private String ipAddress;
    private boolean newIp;

    // Login Behaviour
    private int failedAttempts;
    private boolean unusualLoginTime;
    private LocalDateTime loginTime;

    // Client Information
    private String userAgent;
}