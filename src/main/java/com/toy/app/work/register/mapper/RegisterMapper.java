package com.toy.app.work.register.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.toy.app.work.login.dto.UserLoginDto;

@Mapper
public interface RegisterMapper {

	public void insertUser(UserLoginDto userLoginDto);

}
