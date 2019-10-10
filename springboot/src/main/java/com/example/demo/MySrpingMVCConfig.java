package com.example.demo;

import java.nio.charset.Charset;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import com.example.util.HandleResourceViewExists;

@Configuration //申明这是一个配置
public class MySrpingMVCConfig extends WebMvcConfigurerAdapter{

    // 自定义拦截器
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        HandlerInterceptor handlerInterceptor = new HandlerInterceptor() {
                @Override
            public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
                    throws Exception {
                	 request.setCharacterEncoding("UTF-8");
                     response.setCharacterEncoding("UTF-8");
                System.out.println("自定义拦截器............"+request.getRequestURI());
                return true;
            }

            @Override
            public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
                                   ModelAndView modelAndView) throws Exception {

            }

            @Override
            public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler,
                                        Exception ex) throws Exception {
            }
        };
        registry.addInterceptor(handlerInterceptor).excludePathPatterns("/login/**").excludePathPatterns("registe/**").excludePathPatterns("/").addPathPatterns("/**");
    }

    // 自定义消息转化器的第二种方法
//    @Override
//    public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
//    	System.out.println("22222222222222");
//        StringHttpMessageConverter converter  = new StringHttpMessageConverter(Charset.forName("UTF-8"));
//        converters.add(converter);
//    }
    @Override
    public void addViewControllers( ViewControllerRegistry registry ) {
        registry.addViewController("/").setViewName( "/login/index" );
        registry.setOrder( Ordered.HIGHEST_PRECEDENCE );
        super.addViewControllers( registry );
    }
    @Bean
    public HttpMessageConverter<String> responseBodyConverter() {
        StringHttpMessageConverter converter = new StringHttpMessageConverter(Charset.forName("UTF-8"));
        return converter;
    }
    @Override
    public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
        super.configureMessageConverters(converters);
        converters.add(responseBodyConverter());
    }
    @Override
    public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
        configurer.favorPathExtension(false);
    }
    

//    @Bean
//    public InternalResourceViewResolver htmlViewResolver() {
//        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
//        viewResolver.setViewClass(HandleResourceViewExists.class);
//        viewResolver.setPrefix("/WEB-INF/html");
//        viewResolver.setSuffix(".html");
//        viewResolver.setOrder(0);
//        viewResolver.setContentType("text/html;charset=UTF-8");
//        return viewResolver;
//    }
 
    @Bean
    public InternalResourceViewResolver viewResolver() {
    InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
//    	viewResolver.setViewClass(HandleResourceViewExists.class);
        viewResolver.setPrefix("/WEB-INF/jsp");
        viewResolver.setSuffix(".jsp");
//        viewResolver.setOrder(1);
        viewResolver.setContentType("text/html;charset=UTF-8");
        return viewResolver;
    }
}
