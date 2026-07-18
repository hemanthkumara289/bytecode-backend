package com.bytecode.backend.application.dto;

import com.bytecode.backend.application.entity.SecurityProfile;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class CreateApplicationRequest {

    @NotBlank(message = "Application name is required")
    private String applicationName;

    private String description;

    private SecurityProfile securityProfile = SecurityProfile.DEFAULT;
}