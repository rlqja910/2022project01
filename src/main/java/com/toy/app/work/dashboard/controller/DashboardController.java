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
import net.nurigo.sdk.NurigoApp;
import net.nurigo.sdk.message.exception.NurigoMessageNotReceivedException;
import net.nurigo.sdk.message.model.Message;
import net.nurigo.sdk.message.service.DefaultMessageService;

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

		// 정자동 날씨 크롤링
		String URL2 = "https://weather.naver.com/today/02135103";
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
			wheatherDto.setContent("기흥구 상갈동 " + wheather_content);

			dashboardService.insertWheatherContent(wheatherDto);

			for (String a : str2) {
				System.out.println(a);
			}

			model.addAttribute("weather", str);
			model.addAttribute("life", str2);

		} catch (IOException e) {
			e.printStackTrace();
		}

		try {
			doc = Jsoup.connect(URL2).get();
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
			wheatherDto.setContent("분당구 정자동 " + wheather_content);

			dashboardService.insertWheatherContent(wheatherDto);

			for (String a : str2) {
				System.out.println(a);
			}

			model.addAttribute("weather2", str);
			model.addAttribute("life2", str2);

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

	@RequestMapping(value = "sendSmsWeather.json")
	public @ResponseBody Map<String, Object> sendSmsWeather(HttpServletRequest request) {
		log.info("=[IN]DashboardController sendSmsWeather");

		Map<String, Object> resultMap = new HashMap<String, Object>();

		// 문자 api
		DefaultMessageService messageService = NurigoApp.INSTANCE.initialize("NCSIT9LPUEM462LU",
				"2XZLOQOJKFHAQYY2HRUTSL49TONAJSFW", "https://api.solapi.com");
		// Message 패키지가 중복될 경우 net.nurigo.sdk.message.model.Message로 치환하여 주세요
		Message message = new Message();
		message.setFrom("01088981118");
		message.setTo("01088981118");
		message.setText("상갈동 날씨 크롤링 테스트문자 발송");

		try {
			// send 메소드로 ArrayList<Message> 객체를 넣어도 동작합니다!
			messageService.send(message);
			resultMap.put("sendResult", "Y");
		} catch (NurigoMessageNotReceivedException exception) {
			// 발송에 실패한 메시지 목록을 확인할 수 있습니다!
			System.out.println(exception.getFailedMessageList());
			System.out.println(exception.getMessage());
			resultMap.put("sendResult", "N");
		} catch (Exception exception) {
			System.out.println(exception.getMessage());
			resultMap.put("sendResult", "N");
		}

		log.info("[OUT]DashboardController sendSmsWeather");

		return resultMap;
	}
}
