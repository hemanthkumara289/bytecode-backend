package com.bytecode.backend.application.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "client_applications")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ClientApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String applicationName;

    @Column(length = 500)
    private String description;

    @Column(nullable = false, unique = true, length = 100)
    private String clientId;

    @Column(nullable = false, length = 255)
    private String clientSecretHash;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    @Column(nullable = false)
    private SecurityProfile securityProfile = SecurityProfile.DEFAULT;

    @Builder.Default
    @Column(nullable = false)
    private boolean active = true;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();

        if (this.securityProfile == null) {
            this.securityProfile = SecurityProfile.DEFAULT;
        }
    }
}