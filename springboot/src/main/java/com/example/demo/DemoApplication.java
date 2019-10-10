package com.example.demo;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.nio.charset.Charset;

@SpringBootApplication
@Controller
@Configuration
@EnableTransactionManagement
@MapperScan("com.example.mapper")
@ServletComponentScan("com.example")
@ComponentScan(basePackages = "com.example")
public class DemoApplication extends SpringBootServletInitializer {
	@RequestMapping("/hello")
//	@ResponseBody
	public String hello(){
		return "/login/index";
	}
//	//默认 utf-8
//	@Bean
//	public StringHttpMessageConverter stringHttpMessageConverter(){
//		System.out.println("11111111111111");
//		StringHttpMessageConverter converter  = new StringHttpMessageConverter(Charset.forName("UTF-8"));
//		return converter;
//	}
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	//重写configure方法
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(DemoApplication.class);
	}
}
