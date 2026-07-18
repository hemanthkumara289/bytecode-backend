package com.bytecode.backend.user.dto;

import com.bytecode.backend.policy.dto.AuthenticationMethod;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LoginResponse {

    private String message;

    private String token;

    private boolean requiresOtp;

    private AuthenticationMethod authenticationMethod;
}