package com.bytecode.backend.loginattempt.repository;

import com.bytecode.backend.loginattempt.entity.LoginAttempt;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface LoginAttemptRepository extends JpaRepository<LoginAttempt, UUID> {

}