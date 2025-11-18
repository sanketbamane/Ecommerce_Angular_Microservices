package com.example.order.controller;

import org.springframework.web.bind.annotation.*;
import com.example.order.repository.OrderRepository;
import com.example.order.model.OrderSimple;
import org.springframework.kafka.core.KafkaTemplate;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderRepository repo;
    private final KafkaTemplate<String, String> kafka;

    public OrderController(OrderRepository repo, KafkaTemplate<String, String> kafka) {
        this.repo = repo;
        this.kafka = kafka;
    }

    @PostMapping
    public OrderSimple place(@RequestBody OrderSimple o) {
        o.setStatus("PENDING");
        OrderSimple saved = repo.save(o);

        // Build JSON payload safely (avoid manual quote escaping mistakes)
        String payload = String.format("{\"orderId\":%d,\"userId\":%d}",
                saved.getId() == null ? 0 : saved.getId(),
                saved.getUserId() == null ? 0 : saved.getUserId());

        kafka.send("order-placed", payload);
        return saved;
    }

    @GetMapping("/{id}")
    public OrderSimple get(@PathVariable Long id) {
        return repo.findById(id).orElse(null);
    }
}
