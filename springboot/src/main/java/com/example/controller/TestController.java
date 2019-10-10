package com.example.controller;
import com.example.entity.Dp077;
import com.example.service.Dp077Service;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.ws.rs.PathParam;


/**
 * Created by HYD-jinyuxin on 2018/12/26.
 */
@RestController
public class TestController {
    @Autowired
    Dp077Service dp077Service;
    @RequestMapping("/hello.action")
    public String myTest(){
//        DatabaseContextHolder.setDataBase(DatabaseType.dbishflow);
        Dp077 dp=dp077Service.selectByPrimaryKey("000");
        JSONObject json=new JSONObject();
        json.put("id",dp.getId());
        json.put("name",dp.getName());
        json.put("sex",dp.getSex());

        return json.toString();
    }

    //测试controller线程安全问题
    @RequestMapping("/safe/{id}")
    public String controllerSafe(@PathVariable("id") String id){
        System.out.println(id);
        if("1".equals(id)){
            try {
                System.out.println("我睡了");
                Thread.sleep(10000);
                System.out.println(1);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }else{
            System.out.println(2);
        }
        return id;
    }
}
