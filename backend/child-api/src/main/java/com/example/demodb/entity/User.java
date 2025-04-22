package com.example.demodb.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer userid;
    String password;
    String username;
    Integer usersex;
    String userimg = "https://photo.colorhub.me/dSlX9AxjN-g/rs:auto:0:500:0/g:ce/fn:colorhub/bG9jYWw6Ly8vZjQvZjYvZTE3NWI1YjRmYmEwMmVhNjM5ZWFkMmRkMzhiMmJmYTZiZGMwZjRmNi5qcGc.webp";
}
