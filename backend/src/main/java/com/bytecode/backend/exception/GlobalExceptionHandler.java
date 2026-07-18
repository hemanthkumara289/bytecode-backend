package com.bytecode.backend.exception;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

        @ExceptionHandler(EmailAlreadyExistsException.class)
        public ResponseEntity<Map<String, Object>> handleEmailAlreadyExists(
                        EmailAlreadyExistsException ex) {

                return ResponseEntity.status(HttpStatus.CONFLICT).body(
                                Map.of(
                                                "timestamp", LocalDateTime.now().toString(),
                                                "status", HttpStatus.CONFLICT.value(),
                                                "error", ex.getMessage()));
        }

        @ExceptionHandler(InvalidCredentialsException.class)
        public ResponseEntity<Map<String, Object>> handleInvalidCredentials(
                        InvalidCredentialsException ex) {

                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(
                                Map.of(
                                                "timestamp", LocalDateTime.now().toString(),
                                                "status", HttpStatus.UNAUTHORIZED.value(),
                                                "error", ex.getMessage()));
        }

        @ExceptionHandler(AuthenticationException.class)
        public ResponseEntity<Map<String, Object>> handleAuthenticationException(
                        AuthenticationException ex) {

                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(
                                Map.of(
                                                "timestamp", LocalDateTime.now().toString(),
                                                "status", HttpStatus.UNAUTHORIZED.value(),
                                                "error", "Invalid email or password"));
        }

        @ExceptionHandler(EntityNotFoundException.class)
        public ResponseEntity<Map<String, Object>> handleEntityNotFound(
                        EntityNotFoundException ex) {

                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                                Map.of(
                                                "timestamp", LocalDateTime.now().toString(),
                                                "status", HttpStatus.NOT_FOUND.value(),
                                                "error", ex.getMessage()));
        }

        @ExceptionHandler(IllegalStateException.class)
        public ResponseEntity<Map<String, Object>> handleIllegalState(
                        IllegalStateException ex) {

                return ResponseEntity.status(HttpStatus.FORBIDDEN).body(
                                Map.of(
                                                "timestamp", LocalDateTime.now().toString(),
                                                "status", HttpStatus.FORBIDDEN.value(),
                                                "error", ex.getMessage()));
        }

        @ExceptionHandler(Exception.class)
        public ResponseEntity<Map<String, Object>> handleGeneralException(
                        Exception ex) {

                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                                Map.of(
                                                "timestamp", LocalDateTime.now().toString(),
                                                "status", HttpStatus.INTERNAL_SERVER_ERROR.value(),
                                                "error", "An unexpected error occurred"));
        }
}