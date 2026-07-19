package com.bytecode.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

    @GetMapping("/")
    public String home() {
        return "🚀 ByteCode Backend is Live";
    }

    @GetMapping("/health")
    public String health() {
        return "OK";
    }
}