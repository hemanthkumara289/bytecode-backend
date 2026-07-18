package com.bytecode.backend.application.service;

import com.bytecode.backend.application.dto.ApplicationResponse;
import com.bytecode.backend.application.dto.CreateApplicationRequest;
import com.bytecode.backend.application.dto.CreateApplicationResponse;
import com.bytecode.backend.application.entity.ClientApplication;
import com.bytecode.backend.application.entity.SecurityProfile;
import com.bytecode.backend.application.repository.ClientApplicationRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ApplicationServiceImpl implements ApplicationService {

    private final ClientApplicationRepository applicationRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public CreateApplicationResponse createApplication(CreateApplicationRequest request) {

        String rawClientSecret = generateClientSecret();

        ClientApplication application = ClientApplication.builder()
                .applicationName(request.getApplicationName())
                .description(request.getDescription())
                .clientId(generateClientId())
                .clientSecretHash(passwordEncoder.encode(rawClientSecret))
                .securityProfile(
                        request.getSecurityProfile() != null
                                ? request.getSecurityProfile()
                                : SecurityProfile.DEFAULT
                )
                .active(true)
                .build();

        ClientApplication savedApplication = applicationRepository.save(application);

        return CreateApplicationResponse.builder()
                .id(savedApplication.getId())
                .applicationName(savedApplication.getApplicationName())
                .description(savedApplication.getDescription())
                .clientId(savedApplication.getClientId())
                .clientSecret(rawClientSecret)
                .securityProfile(savedApplication.getSecurityProfile())
                .active(savedApplication.isActive())
                .createdAt(savedApplication.getCreatedAt())
                .build();
    }

    @Override
    public List<ApplicationResponse> getAllApplications() {

        return applicationRepository.findAll()
                .stream()
                .map(this::mapToApplicationResponse)
                .toList();
    }

    @Override
    public ApplicationResponse getApplication(Long id) {

        return mapToApplicationResponse(findApplicationById(id));
    }

    @Override
    public void deleteApplication(Long id) {

        applicationRepository.delete(findApplicationById(id));
    }

    @Override
    public CreateApplicationResponse regenerateClientSecret(Long id) {

        ClientApplication application = findApplicationById(id);

        String rawClientSecret = generateClientSecret();

        application.setClientSecretHash(passwordEncoder.encode(rawClientSecret));

        ClientApplication updatedApplication =
                applicationRepository.save(application);

        return CreateApplicationResponse.builder()
                .id(updatedApplication.getId())
                .applicationName(updatedApplication.getApplicationName())
                .description(updatedApplication.getDescription())
                .clientId(updatedApplication.getClientId())
                .clientSecret(rawClientSecret)
                .securityProfile(updatedApplication.getSecurityProfile())
                .active(updatedApplication.isActive())
                .createdAt(updatedApplication.getCreatedAt())
                .build();
    }

    private ClientApplication findApplicationById(Long id) {

        return applicationRepository.findById(id)
                .orElseThrow(() ->
                        new EntityNotFoundException(
                                "Application not found with id: " + id));
    }

    private String generateClientId() {

        String clientId;

        do {
            clientId = "bc_app_" +
                    UUID.randomUUID().toString().replace("-", "");
        } while (applicationRepository.existsByClientId(clientId));

        return clientId;
    }

    private String generateClientSecret() {

        return "bc_secret_" +
                UUID.randomUUID().toString().replace("-", "");
    }

    private ApplicationResponse mapToApplicationResponse(
            ClientApplication application) {

        return ApplicationResponse.builder()
                .id(application.getId())
                .applicationName(application.getApplicationName())
                .description(application.getDescription())
                .clientId(application.getClientId())
                .securityProfile(application.getSecurityProfile())
                .active(application.isActive())
                .createdAt(application.getCreatedAt())
                .build();
    }
}