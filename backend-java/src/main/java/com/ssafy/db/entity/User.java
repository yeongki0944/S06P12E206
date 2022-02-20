package com.ssafy.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import com.ssafy.oauth.entity.ProviderType;
import lombok.*;

import javax.persistence.*;

/**
 * 유저 모델 정의.
 */
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class User{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userType;

    private int age;

    @Enumerated(value = EnumType.STRING)
    private Gender gender;

    private String name;

    private String userId;

    ProviderType providerType;
    private String role;

    @JsonIgnore
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    private String email;

    private String thumbnail;
}
