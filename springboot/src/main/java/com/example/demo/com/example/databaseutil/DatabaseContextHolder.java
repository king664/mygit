package com.example.demo.com.example.databaseutil;

/**
 * Created by HYD-jinyuxin on 2018/12/29.
 */
public class DatabaseContextHolder {
    //新建一个threadlocal保存线程安全的数据库类型
    private static final ThreadLocal<DatabaseType> dataBaseType=new ThreadLocal<>();

    public static void setDataBase(DatabaseType dt){
        dataBaseType.set(dt);
    }

    public static DatabaseType getDataBase(){
        return dataBaseType.get();
    }

    public static void clear(){
        dataBaseType.remove();
    }
}
