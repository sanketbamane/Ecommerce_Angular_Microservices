package com.example.gateway.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

    @GetMapping("/actuator/health")
    public String health() {
        return "{\"status\": \"UP\", \"service\": \"gateway\"}";
    }

    @GetMapping("/api/gateway/hello")
    public String hello() {
        return "Hello from gateway";
    }
}
