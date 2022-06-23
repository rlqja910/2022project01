package com.toy.app.work.dashboard;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping(value = "${base-path}/dashboard")
public class DashboardController {

	@RequestMapping(value = "home.do")
	public String goDashboard() {
		log.info("=대쉬보드 접속=");

		return "dashboard";
	}
}
