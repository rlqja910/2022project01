package com.toy.app.core.util.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.toy.app.core.util.interceptor.SessionInterceptor;

@Configuration
public class MvcConfiguration implements WebMvcConfigurer {

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		System.out.println("===configuration 탐색===");

		registry.addInterceptor(new SessionInterceptor()).addPathPatterns("/app/dashboard/**");
		registry.addInterceptor(new SessionInterceptor()).addPathPatterns("/app/chat/**");
	}
}
