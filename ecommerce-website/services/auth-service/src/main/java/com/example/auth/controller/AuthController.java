package com.example.auth.controller;

import org.springframework.web.bind.annotation.*;
import com.example.auth.repository.UserRepository;
import com.example.auth.model.User;
import java.util.Optional;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserRepository repo;

    @Value("${jwt.secret}")
    private String jwtSecret;

    @Value("${jwt.expiration-ms}")
    private long jwtExp;

    public AuthController(UserRepository repo) {
        this.repo = repo;
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User u) {
        // NOTE: In dev sample we store passwords in plaintext — replace with bcrypt for production.
        User saved = repo.save(u);
        return ResponseEntity.ok(saved);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody User req) {
        Optional<User> opt = repo.findByEmail(req.getEmail());
        if (opt.isPresent() && opt.get().getPassword().equals(req.getPassword())) {
            // build key from secret (dev only). Ensure secret is sufficiently long in production.
            Key key = Keys.hmacShaKeyFor(jwtSecret.getBytes(StandardCharsets.UTF_8));
            String token = Jwts.builder()
                    .setSubject(opt.get().getEmail())
                    .setIssuedAt(new Date())
                    .setExpiration(new Date(System.currentTimeMillis() + jwtExp))
                    .signWith(key)
                    .compact();

            return ResponseEntity.ok(Map.of("token", token));
        }
        return ResponseEntity.status(401).body(Map.of("error", "invalid_credentials"));
    }
}
