package com.bytecode.backend.application.controller;

import com.bytecode.backend.application.dto.ApplicationResponse;
import com.bytecode.backend.application.dto.CreateApplicationRequest;
import com.bytecode.backend.application.dto.CreateApplicationResponse;
import com.bytecode.backend.application.service.ApplicationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/applications")
@RequiredArgsConstructor
public class ApplicationController {

    private final ApplicationService applicationService;

    @PostMapping
    public ResponseEntity<CreateApplicationResponse> createApplication(
            @Valid @RequestBody CreateApplicationRequest request) {

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(applicationService.createApplication(request));
    }

    @GetMapping
    public ResponseEntity<List<ApplicationResponse>> getAllApplications() {

        return ResponseEntity.ok(applicationService.getAllApplications());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApplicationResponse> getApplication(
            @PathVariable Long id) {

        return ResponseEntity.ok(applicationService.getApplication(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteApplication(
            @PathVariable Long id) {

        applicationService.deleteApplication(id);

        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}/secret")
    public ResponseEntity<CreateApplicationResponse> regenerateClientSecret(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                applicationService.regenerateClientSecret(id));
    }
}