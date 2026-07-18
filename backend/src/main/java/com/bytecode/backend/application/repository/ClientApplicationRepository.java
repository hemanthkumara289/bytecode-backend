package com.bytecode.backend.application.repository;

import com.bytecode.backend.application.entity.ClientApplication;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ClientApplicationRepository
        extends JpaRepository<ClientApplication, Long> {

    Optional<ClientApplication> findByClientId(String clientId);

    Optional<ClientApplication> findByApplicationName(String applicationName);

    boolean existsByClientId(String clientId);
}