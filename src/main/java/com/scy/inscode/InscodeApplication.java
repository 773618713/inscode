package com.scy.inscode;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.scy.frame", "com.scy.inscode"})
public class InscodeApplication {

    public static void main(String[] args) {
        SpringApplication.run(InscodeApplication.class, args);
    }

}
