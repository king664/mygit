package com.example.demo;

import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import tk.mybatis.spring.mapper.MapperScannerConfigurer;


/**
 * Created by HYD-jinyuxin on 2018/12/26.
 */
@Configuration
@AutoConfigureAfter(MybatisSpringConfig.class)
public class MapperScannerConfig {
    // mapper接口的扫描器
    @Bean
    public MapperScannerConfigurer mapperScannerConfigurer() {
        MapperScannerConfigurer mapperScannerConfigurer = new MapperScannerConfigurer();
        mapperScannerConfigurer.setBasePackage("com.example.mapper");
        return mapperScannerConfigurer;
    }
}
