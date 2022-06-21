package com.toy.app.work.login.service;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.toy.app.core.util.SecretPwHelper;
import com.toy.app.work.login.dto.UserLoginDto;
import com.toy.app.work.login.mapper.LoginMapper;

@Service
public class LoginServiceImpl implements LoginService{
	
	@Autowired
	private LoginMapper loginMapper;
	
	public Map<String, Object> doLogin(Map<String,Object> requestMap, UserLoginDto userLoginDto, HttpServletRequest request){
		
		String encrytPw = loginMapper.doLogin(userLoginDto);
		
		String decryptPw = SecretPwHelper.decryptPw(encrytPw);
		
		if(userLoginDto.getUserPw().equals(decryptPw)) {
			requestMap.put("loginYn", "Y");
			request.getSession().setAttribute("loginYn", "Y");
			request.getSession().setAttribute("loginId", userLoginDto.getUserId());
		}else {
			requestMap.put("loginYn", "N");
			request.getSession().setAttribute("loginYn", "N");
		}
		
		return requestMap;
	}
}
