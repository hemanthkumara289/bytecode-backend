package com.bytecode.backend.application.service;

import com.bytecode.backend.application.dto.ApplicationResponse;
import com.bytecode.backend.application.dto.CreateApplicationRequest;
import com.bytecode.backend.application.dto.CreateApplicationResponse;

import java.util.List;

public interface ApplicationService {

    CreateApplicationResponse createApplication(CreateApplicationRequest request);

    List<ApplicationResponse> getAllApplications();

    ApplicationResponse getApplication(Long id);

    void deleteApplication(Long id);

    CreateApplicationResponse regenerateClientSecret(Long id);
}