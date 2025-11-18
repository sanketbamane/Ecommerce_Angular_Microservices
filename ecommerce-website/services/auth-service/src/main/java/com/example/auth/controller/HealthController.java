package com.example.auth.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

    @GetMapping("/actuator/health")
    public String health() {
        return "{\"status\": \"UP\", \"service\": \"auth-service\"}";
    }

    @GetMapping("/api/auth-service/hello")
    public String hello() {
        return "Hello from auth-service";
    }
}
