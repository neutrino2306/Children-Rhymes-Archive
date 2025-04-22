package com.example.demodb.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.security.Timestamp;
import java.util.Date;
import java.util.List;
@Entity
@Getter
@Setter
public class Recommend {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer recid;
    Integer songid;
    Integer type;  //用这个呈现不同的推荐歌单
    @Transient
    Song song;

}
