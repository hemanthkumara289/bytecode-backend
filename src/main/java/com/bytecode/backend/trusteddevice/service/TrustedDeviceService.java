package com.bytecode.backend.trusteddevice.service;

import com.bytecode.backend.trusteddevice.entity.TrustedDevice;
import com.bytecode.backend.trusteddevice.repository.TrustedDeviceRepository;
import com.bytecode.backend.user.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TrustedDeviceService {

    private final TrustedDeviceRepository repository;

    public boolean isTrusted(User user, String fingerprint) {

        Optional<TrustedDevice> device =
                repository.findByUserAndFingerprint(user, fingerprint);

        if (device.isPresent()) {

            TrustedDevice trusted = device.get();

            trusted.setLastSeen(LocalDateTime.now());
            trusted.setLoginCount(trusted.getLoginCount() + 1);

            repository.save(trusted);

            return true;
        }

        TrustedDevice newDevice = TrustedDevice.builder()
                .user(user)
                .fingerprint(fingerprint)
                .deviceName("Unknown Device")
                .firstSeen(LocalDateTime.now())
                .lastSeen(LocalDateTime.now())
                .loginCount(1)
                .build();

        repository.save(newDevice);

        return false;
    }
}