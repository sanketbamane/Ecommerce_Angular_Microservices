package com.example.cart.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

    @GetMapping("/actuator/health")
    public String health() {
        return "{\"status\": \"UP\", \"service\": \"cart-service\"}";
    }

    @GetMapping("/api/cart-service/hello")
    public String hello() {
        return "Hello from cart-service";
    }
}
