package com.example.demodb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
public class DemodbApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemodbApplication.class, args);
    }

}
