package com.toy.app.work.login.service;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.toy.app.work.login.dto.UserLoginDto;

public interface LoginService {
	
	public Map<String, Object> doLogin(Map<String,Object> requestMap, UserLoginDto userLoginDto, HttpServletRequest request);
}
