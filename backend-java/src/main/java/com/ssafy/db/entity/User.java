package com.ssafy.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import com.ssafy.oauth.entity.ProviderType;
import com.ssafy.oauth.entity.RoleType;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

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

    public User(String id, String name, String email, String imageUrl, ProviderType providerType, RoleType user) {
        this.userId = id;
        this.name = name;
        this.email = email;
        //this.imageUrl = imageUrl;
        this.providerType = providerType;
        this.role = user.getCode();

    }

    // ENUM으로 안하고 ,로 해서 구분해서 ROLE을 입력 -> 그걸 파싱!!
    public List<String> getRoleList(){
        if(this.role.length() > 0){
            return Arrays.asList(this.role.split(","));
        }
        return new ArrayList<>();
    }
}
