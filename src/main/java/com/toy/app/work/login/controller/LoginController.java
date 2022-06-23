package com.toy.app.work.login.controller;

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
import com.toy.app.work.login.service.LoginService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping(value = { "${base-path}/login" })
public class LoginController {

	@Autowired
	private LoginService loginService;

	@RequestMapping(value = "/home.do")
	public String goHome() {
		log.info("=로그인 페이지 접속=");

		return "login";
	}

	@RequestMapping(value = "/in.json")
	public @ResponseBody Map<String, Object> in(@RequestBody UserLoginDto userLoginDto, HttpServletRequest request) {
		log.info("[IN]LoginController in()");

		Map<String, Object> resultMap = new HashMap<String, Object>();

		resultMap = loginService.doLogin(resultMap, userLoginDto, request);

		ResultCode.successResult(resultMap);

		return resultMap;
	}

	@RequestMapping(value = "/out.json")
	public String out() {
		log.info("[IN]LoginController out()");

		return "login";
	}
}
