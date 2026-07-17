package com.bytecode.backend.user.service;

import com.bytecode.backend.user.dto.LoginRequest;
import com.bytecode.backend.user.dto.LoginResponse;
import com.bytecode.backend.user.dto.RegisterRequest;
import com.bytecode.backend.user.dto.RegisterResponse;

public interface AuthenticationService {

    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

}