package com.loginmicroservices.loginmicroservices.controller;

import com.loginmicroservices.loginmicroservices.dto.AuthenticationResponse;
import com.loginmicroservices.loginmicroservices.dto.LoginRequest;
import com.loginmicroservices.loginmicroservices.service.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public AuthenticationResponse login (@RequestBody LoginRequest loginRequest) {
        return authService.login(loginRequest);
    }


}
