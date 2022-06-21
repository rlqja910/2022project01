package com.toy.app.work.login.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.toy.app.work.login.dto.UserLoginDto;

@Mapper
public interface LoginMapper {

	public String doLogin(UserLoginDto userLoginDto);
	
}
