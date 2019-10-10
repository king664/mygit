package com.test.springjavaconfig;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//声明是service层对象
@Service
public class UserService {
    @Autowired // 自动注入Spring容器中的dao层对象(byType注入)
    private UserDao UserDao;

    public List<User> queryUserList() {
        // 调用userDAO中的方法进行查询
        return this.UserDao.queryUserList();
    }

}