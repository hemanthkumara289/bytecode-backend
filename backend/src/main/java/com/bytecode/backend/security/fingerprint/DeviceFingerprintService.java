package com.bytecode.backend.security.fingerprint;

import jakarta.servlet.http.HttpServletRequest;

public interface DeviceFingerprintService {

    String generateFingerprint(HttpServletRequest request);

}