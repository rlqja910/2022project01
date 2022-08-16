package com.toy.app.work.login.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.toy.app.core.util.ResultCode;
import com.toy.app.work.login.dto.UserLoginDto;
import com.toy.app.work.login.service.LoginService;

import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping(value = { "${base-path}/login" })
public class LoginController {

	@Autowired
	private LoginService loginService;

	@RequestMapping(value = "/home.do", method = RequestMethod.GET)
	@ApiOperation(value = "로그인 화면")
	public String goHome(HttpServletRequest request) {
		log.info("[IN]LoginController goHome");
		
		if((String)request.getSession().getAttribute("loginId") != null) {
			log.info("대쉬보드로 이동");
			return "redirect:/app/dashboard/home.do";
		}

		log.info("[OUT]LoginController goHome");

		return "login";
	}

	@RequestMapping(value = "/in.json", method = RequestMethod.POST)
	@ApiOperation(value = "로그인")
	public @ResponseBody Map<String, Object> in(@RequestBody UserLoginDto userLoginDto, HttpServletRequest request) {
		log.info("[IN]LoginController in");

		Map<String, Object> resultMap = new HashMap<String, Object>();

		resultMap = loginService.doLogin(resultMap, userLoginDto, request);

		ResultCode.successResult(resultMap);

		log.info("[OUT]LoginController in");

		return resultMap;
	}

	@RequestMapping(value = "/out.json", method = RequestMethod.GET)
	@ApiOperation(value = "로그아웃")
	public @ResponseBody Map<String, Object> out(HttpServletRequest request) {
		log.info("[IN]LoginController out");

		log.info("세션을 제거하였습니다.");

		request.getSession().invalidate();

		Map<String, Object> resultMap = new HashMap<String, Object>();

		log.info("[OUT]LoginController out");

		return resultMap;
	}
}
