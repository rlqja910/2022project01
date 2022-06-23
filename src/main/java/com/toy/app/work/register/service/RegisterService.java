package com.toy.app.work.register.service;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.toy.app.work.login.dto.UserLoginDto;

public interface RegisterService {

	String insertUser(Map<String, Object> resultMap, UserLoginDto userLoginDto,
			HttpServletRequest request);
	
}
