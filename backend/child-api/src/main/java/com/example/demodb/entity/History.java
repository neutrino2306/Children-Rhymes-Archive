package com.example.demodb.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class History {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer historyid;
    private Integer userid;

    private Integer songid;
    @Transient
    private Song song;
}
