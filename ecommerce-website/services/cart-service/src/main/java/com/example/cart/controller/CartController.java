
package com.example.cart.controller;
import org.springframework.web.bind.annotation.*;
import com.example.cart.repository.CartRepository;
import com.example.cart.model.CartItem;
import java.util.List;

@RestController
@RequestMapping("/api/cart")
public class CartController {
    private final CartRepository repo;
    public CartController(CartRepository repo){this.repo = repo;}
    @GetMapping("/{userId}")
    public List<CartItem> get(@PathVariable Long userId){ return repo.findByUserId(userId); }
    @PostMapping
    public CartItem add(@RequestBody CartItem item){ return repo.save(item); }
}
