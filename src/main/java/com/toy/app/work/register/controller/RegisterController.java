package com.toy.app.work.register.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.toy.app.core.util.ResultCode;
import com.toy.app.work.login.dto.UserLoginDto;
import com.toy.app.work.register.service.RegisterService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping(value = "${base-path}/register")
public class RegisterController {
	
	@Autowired
	private RegisterService registerService;

	@RequestMapping(value = "join.do")
	public String goDashboard() {
		log.info("[IN]RegisterController goDashboard");

		return "register";
	}
	
	@RequestMapping(value = "/insertUser.json")
	public @ResponseBody Map<String, Object> insertUser(@RequestBody UserLoginDto userLoginDto, HttpServletRequest request) {
		log.info("[IN]RegisterController insertUser");

		Map<String, Object> resultMap = new HashMap<String, Object>();

		String insertResult = registerService.insertUser(resultMap, userLoginDto, request);
		
		if(insertResult.equals("Y")) {
			ResultCode.successResult(resultMap);
			resultMap.put("registSuccess", "Y");
		}else if(insertResult.equals("F")) {
			ResultCode.failResult(resultMap,"이미 사용중인 메일계정입니다.");
			resultMap.put("registSuccess", "N");
		}else {
			ResultCode.failResult(resultMap, "서비스가 원활하지 않습니다.");
			resultMap.put("registSuccess", "N");
		}
		
		log.info("[OUT]RegisterController insertUser");

		return resultMap;
	}
}
