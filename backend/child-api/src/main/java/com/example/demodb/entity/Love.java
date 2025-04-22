package com.example.demodb.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
@Entity
@Getter
@Setter
public class Love {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer loveid;
    private Integer userid;
    private Integer songid;
    private Integer lovequantity;
    @Transient
    private Song song;
}
