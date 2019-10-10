package com.example.demo.com.example.databaseutil;

import org.springframework.jdbc.datasource.lookup.AbstractRoutingDataSource;

/**
 * Created by HYD-jinyuxin on 2018/12/29.
 * 动态数据源
 */
public class DynamicDataSource extends AbstractRoutingDataSource {

    @Override
    protected Object determineCurrentLookupKey() {

        return DatabaseContextHolder.getDataBase();
    }
}
