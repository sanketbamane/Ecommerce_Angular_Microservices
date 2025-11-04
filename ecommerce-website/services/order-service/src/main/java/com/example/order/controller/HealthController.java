package com.example.order.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

    @GetMapping("/actuator/health")
    public String health() {
        return "{\"status\": \"UP\", \"service\": \"order-service\"}";
    }

    @GetMapping("/api/order-service/hello")
    public String hello() {
        return "Hello from order-service";
    }
}
