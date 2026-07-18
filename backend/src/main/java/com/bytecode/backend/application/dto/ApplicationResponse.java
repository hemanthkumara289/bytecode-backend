package com.bytecode.backend.application.dto;

import com.bytecode.backend.application.entity.SecurityProfile;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class ApplicationResponse {

    private Long id;

    private String applicationName;

    private String description;

    private String clientId;

    private SecurityProfile securityProfile;

    private boolean active;

    private LocalDateTime createdAt;
}