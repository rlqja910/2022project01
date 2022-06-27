package com.toy.app.work.dashboard;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.toy.app.work.login.dto.UserLoginDto;
import com.toy.app.work.login.service.LoginService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping(value = "${base-path}/dashboard")
public class DashboardController {

	@Autowired
	private LoginService loginService;

	@RequestMapping(value = "home.do")
	public String goDashboard() {
		log.info("[IN]DashboardController goDashboard");

		log.info("[OUT]DashboardController goDashboard");

		return "dashboard";
	}

	@RequestMapping(value = "topmenuData.json")
	public @ResponseBody Map<String, Object> getTopmenuData(HttpServletRequest request) {
		log.info("=[IN]DashboardController getTopmenuData");

		Map<String, Object> resultMap = new HashMap<String, Object>();
		UserLoginDto userLoginDto = new UserLoginDto();
		UserLoginDto userLoginDto2 = new UserLoginDto();
		
		if (request.getSession().getAttribute("loginId") != null) {
			userLoginDto.setUserId((String) request.getSession().getAttribute("loginId"));
			userLoginDto2 = loginService.getUserInfo(userLoginDto);
		}

		resultMap.put("userInfo", userLoginDto2);

		log.info("[OUT]DashboardController getTopmenuData");

		return resultMap;
	}
}
