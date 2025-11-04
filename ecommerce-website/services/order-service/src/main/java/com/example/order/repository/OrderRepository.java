
package com.example.order.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.order.model.OrderSimple;
public interface OrderRepository extends JpaRepository<OrderSimple, Long> {}
