package com.example.demo;

import com.example.demo.com.example.databaseutil.DatabaseType;
import com.example.demo.com.example.databaseutil.DynamicDataSource;
import com.jolbox.bonecp.BoneCPDataSource;
import com.test.springjavaconfig.UserDao;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.*;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.Map;

@Configuration // 通过该注解来表明该类是一个Spring的配置，相当于一个xml文件
@PropertySource(value="classpath:jdbc.properties",ignoreResourceNotFound = false)
public class SpringDatabaseConfig {

    @Bean // 通过该注解来表明是一个Bean对象，相当于xml中的<bean>
    public UserDao getUserDAO() {
        return new UserDao(); // 直接new对象做演示
    }

    @Value("${jdbc.url}")
    private String jdbcUrl;

    @Value("${jdbc.driverClassName}")
    private String jdbcDriverClassName;

    @Value("${jdbc.username}")
    private String jdbcUsername;

    @Value("${jdbc.password}")
    private String jdbcPassword;

    @Bean(destroyMethod = "close")
    public DataSource dateSource(){
        BoneCPDataSource boneCPDataSource=new BoneCPDataSource();
        // 数据库驱动
        boneCPDataSource.setDriverClass(jdbcDriverClassName);
        // 相应驱动的jdbcUrl
        boneCPDataSource.setJdbcUrl(jdbcUrl);
        // 数据库的用户名
        boneCPDataSource.setUsername(jdbcUsername);
        // 数据库的密码
        boneCPDataSource.setPassword(jdbcPassword);
        // 检查数据库连接池中空闲连接的间隔时间，单位是分，默认值：240，如果要取消则设置为0
        boneCPDataSource.setIdleConnectionTestPeriodInMinutes(60);
        // 连接池中未使用的链接最大存活时间，单位是分，默认值：60，如果要永远存活设置为0
        boneCPDataSource.setIdleMaxAgeInMinutes(30);
        // 每个分区最大的连接数
        boneCPDataSource.setMaxConnectionsPerPartition(100);
        // 每个分区最小的连接数
        boneCPDataSource.setMinConnectionsPerPartition(5);
        return boneCPDataSource;
    }
    @Value("${jdbc.url2}")
    private String jdbcUrl2;

    @Value("${jdbc.driverClassName2}")
    private String jdbcDriverClassName2;

    @Value("${jdbc.username2}")
    private String jdbcUsername2;

    @Value("${jdbc.password2}")
    private String jdbcPassword2;
    @Bean(destroyMethod = "close")
    public DataSource dateSource2(){
        BoneCPDataSource boneCPDataSource=new BoneCPDataSource();
        // 数据库驱动
        boneCPDataSource.setDriverClass(jdbcDriverClassName2);
        // 相应驱动的jdbcUrl
        boneCPDataSource.setJdbcUrl(jdbcUrl2);
        // 数据库的用户名
        boneCPDataSource.setUsername(jdbcUsername2);
        // 数据库的密码
        boneCPDataSource.setPassword(jdbcPassword2);
        // 检查数据库连接池中空闲连接的间隔时间，单位是分，默认值：240，如果要取消则设置为0
        boneCPDataSource.setIdleConnectionTestPeriodInMinutes(60);
        // 连接池中未使用的链接最大存活时间，单位是分，默认值：60，如果要永远存活设置为0
        boneCPDataSource.setIdleMaxAgeInMinutes(30);
        // 每个分区最大的连接数
        boneCPDataSource.setMaxConnectionsPerPartition(100);
        // 每个分区最小的连接数
        boneCPDataSource.setMinConnectionsPerPartition(5);
        return boneCPDataSource;
    }

    @Bean
    @Primary
    public DynamicDataSource myDataSource(@Qualifier("dateSource") DataSource dataSource,@Qualifier("dateSource2") DataSource dataSource2){
        Map<Object, Object> targetDataSources = new HashMap<>();
        targetDataSources.put(DatabaseType.dbish,dataSource);
        targetDataSources.put(DatabaseType.dbishflow,dataSource2);
        DynamicDataSource ds = new DynamicDataSource();
        ds.setTargetDataSources(targetDataSources);// 该方法是AbstractRoutingDataSource的方法
        ds.setDefaultTargetDataSource(dataSource);
        return ds;
    }
}