package com.test.springjavaconfig;

import java.util.ArrayList;
import java.util.List;

/**
 * 模拟UserDao查询数据库
 * 
 * @author liqiang
 *
 */
public class UserDao {
    /**
     * 模拟查到10个 用户
     * 
     * @return
     */
    public List<User> queryUserList() {
        List<User> result = new ArrayList<User>();
        // 模拟数据库的查询
        for (int i = 0; i < 10; i++) {
            User user = new User();
            user.setUsername("username_" + i);
            user.setPassword("password_" + i);
            user.setAge(i + 1);
            result.add(user);
        }
        return result;
    }

}