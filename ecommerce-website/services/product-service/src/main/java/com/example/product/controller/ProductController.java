
package com.example.product.controller;

import org.springframework.web.bind.annotation.*;
import com.example.product.repository.ProductRepository;
import com.example.product.model.Product;
import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductRepository repo;
    public ProductController(ProductRepository repo){ this.repo = repo; }

    @GetMapping
    public List<Product> all(){ return repo.findAll(); }

    @PostMapping
    public Product create(@RequestBody Product p){ return repo.save(p); }

    @GetMapping("/{id}")
    public Product get(@PathVariable Long id){ return repo.findById(id).orElse(null); }
}
