package com.ssafy.db.entity.doctor;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
@Entity
@NoArgsConstructor
@Getter
@Setter
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="diseaseId")
    private Disease disease;

    private String departName;

}
