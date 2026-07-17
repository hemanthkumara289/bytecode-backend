package com.bytecode.backend.user.service;

import com.bytecode.backend.user.dto.LoginRequest;
import com.bytecode.backend.user.dto.LoginResponse;
import com.bytecode.backend.user.dto.RegisterRequest;
import com.bytecode.backend.user.dto.RegisterResponse;

import jakarta.servlet.http.HttpServletRequest;

public interface AuthenticationService {

    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request,
                    HttpServletRequest httpRequest);
}