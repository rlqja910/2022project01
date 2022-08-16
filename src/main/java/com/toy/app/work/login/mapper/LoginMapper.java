package com.toy.app.work.login.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.toy.app.work.login.dto.UserLoginDto;

@Mapper
public interface LoginMapper {

	public UserLoginDto doLogin(UserLoginDto userLoginDto);

	public UserLoginDto getUserInfo(UserLoginDto userLoginDto);

	public int updateLoginFailCnt(UserLoginDto userLoginDto);

	public int updateLoginSuccess(UserLoginDto userInfo);

	public String getNotice();

}
