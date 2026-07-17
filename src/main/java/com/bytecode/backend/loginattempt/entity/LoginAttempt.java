package com.bytecode.backend.loginattempt.entity;

import com.bytecode.backend.user.entity.User;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "login_attempts")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoginAttempt {

    @Id
    @GeneratedValue
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    private LocalDateTime loginTime;

    private String ipAddress;

    private String userAgent;

    private Boolean success;

    private Integer riskScore;

    private String riskLevel;

    private String deviceFingerprint;
}