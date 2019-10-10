package com.example.service;


import com.example.entity.Dp077;
import com.example.entity.Dp077Example;
import com.example.mapper.Dp077Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by HYD-jinyuxin on 2018/12/26.
 */
@Service
@Transactional
public class Dp077Service {
    @Autowired
    Dp077Mapper mapper;
    public List<Dp077> selectByExample(Dp077Example e){
       return mapper.selectByExample(e);
    }
    public Dp077 selectByPrimaryKey(String t){
        return mapper.selectByPrimaryKey(t);
    }

}
