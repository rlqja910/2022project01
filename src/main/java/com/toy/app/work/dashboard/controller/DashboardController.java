package com.toy.app.work.dashboard.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.toy.app.work.dashboard.dto.WheatherDto;
import com.toy.app.work.dashboard.service.DashboardService;
import com.toy.app.work.login.dto.UserLoginDto;
import com.toy.app.work.login.service.LoginService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping(value = "${base-path}/dashboard")
public class DashboardController {

	@Autowired
	private LoginService loginService;

	@Autowired
	private DashboardService dashboardService;

	@RequestMapping(value = "home.do")
	public String goDashboard(HttpServletRequest request, Model model) {
		log.info("[IN]DashboardController goDashboard");

		// 상갈동 날씨 크롤링
		String URL = "https://weather.naver.com/today/02463103";
		Document doc;
		try {
			doc = Jsoup.connect(URL).get();
			Elements elem = doc.select(".weather_now");
			String[] str = elem.text().split(" ");
			Elements elem2 = doc.select(".chart_list");
			String[] str2 = elem2.text().split(" ");

			String wheather_content = "";

			for (String a : str) {
				wheather_content += a + " ";
			}

			WheatherDto wheatherDto = new WheatherDto();

			wheatherDto.setUserId((String) request.getSession().getAttribute("loginId"));
			wheatherDto.setContent(wheather_content);

			dashboardService.insertWheatherContent(wheatherDto);

			for (String a : str2) {
				System.out.println(a);
			}

			model.addAttribute("weather", str);
			model.addAttribute("life", str2);

		} catch (IOException e) {
			e.printStackTrace();
		}

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
