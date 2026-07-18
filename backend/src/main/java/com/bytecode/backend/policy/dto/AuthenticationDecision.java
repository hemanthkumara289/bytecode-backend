package com.bytecode.backend.policy.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthenticationDecision {

    private AuthenticationMethod authenticationMethod;

    private boolean allowLogin;

    private String reason;

}