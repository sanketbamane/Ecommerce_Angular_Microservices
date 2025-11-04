package com.example.product.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

    @GetMapping("/actuator/health")
    public String health() {
        return "{\"status\": \"UP\", \"service\": \"product-service\"}";
    }

    @GetMapping("/api/product-service/hello")
    public String hello() {
        return "Hello from product-service";
    }
}
