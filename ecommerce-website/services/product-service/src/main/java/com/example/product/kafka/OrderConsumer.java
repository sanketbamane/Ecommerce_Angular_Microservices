
package com.example.product.kafka;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class OrderConsumer {
    @KafkaListener(topics = "order-placed", groupId = "product-service")
    public void listen(String message){
        System.out.println("product-service received order-placed: " + message);
        // here you would decrement inventory for products in the order
    }
}
