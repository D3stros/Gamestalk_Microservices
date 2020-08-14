package com.Register.registermicroservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class RegisterMicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(RegisterMicroserviceApplication.class, args);
	}

}
