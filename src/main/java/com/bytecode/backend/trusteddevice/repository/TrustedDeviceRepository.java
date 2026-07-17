package com.bytecode.backend.trusteddevice.repository;

import com.bytecode.backend.trusteddevice.entity.TrustedDevice;
import com.bytecode.backend.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface TrustedDeviceRepository
        extends JpaRepository<TrustedDevice, UUID> {

    Optional<TrustedDevice> findByUserAndFingerprint(
            User user,
            String fingerprint
    );
}