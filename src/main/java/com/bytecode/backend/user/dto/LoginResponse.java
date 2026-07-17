package com.bytecode.backend.user.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LoginResponse {

    private String message;

    private String token;
}