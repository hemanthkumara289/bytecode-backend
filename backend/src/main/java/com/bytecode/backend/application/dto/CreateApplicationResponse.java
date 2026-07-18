package com.bytecode.backend.application.dto;

import com.bytecode.backend.application.entity.SecurityProfile;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class CreateApplicationResponse {

    private Long id;

    private String applicationName;

    private String description;

    private String clientId;

    // Returned ONLY once during create/regenerate
    private String clientSecret;

    private SecurityProfile securityProfile;

    private boolean active;

    private LocalDateTime createdAt;
}