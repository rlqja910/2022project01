package com.toy.app.work.login.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.toy.app.core.util.ResultCode;
import com.toy.app.work.login.dto.ExamInfoDto;
import com.toy.app.work.login.dto.ExamInfoReq;
import com.toy.app.work.login.dto.ExamInfoRes;
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
	public String goHome(HttpServletRequest request, Model model) {
		log.info("[IN]LoginController goHome");
		
//		if((String)request.getSession().getAttribute("loginId") != null) {
//			log.info("대쉬보드로 이동");
//			return "redirect:/app/dashboard/home.do";
//		}
//		
//		//공지사항 조회
//		List<NoticeTxtDto> notice = loginService.getNotice();
//		
//		log.info("notice : {}",notice);
//		
//		if(notice.isEmpty()) {
//			notice.add(new NoticeTxtDto());
//			notice.get(0).setContent("최근 공지사항이 없습니다.");
//		}
//		
//		model.addAttribute("noticeList", notice);

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

	@RequestMapping(value = "/out.json", method = RequestMethod.POST)
	@ApiOperation(value = "로그아웃")
	public @ResponseBody Map<String, Object> out(HttpServletRequest request) {
		log.info("[IN]LoginController out");

		log.info("세션을 제거하였습니다.");

		request.getSession().invalidate();

		Map<String, Object> resultMap = new HashMap<String, Object>();

		log.info("[OUT]LoginController out");

		return resultMap;
	}
	
	@RequestMapping(value = "/resetBox.json", method = RequestMethod.POST)
	@ApiOperation(value = "기억상자초기화")
	public @ResponseBody Map<String, Object> resetBox(HttpServletRequest request,
			@RequestBody List<ExamInfoDto> examInfoDto) {
		log.info("[IN]LoginController resetBox");
		log.debug("examInfoDto ===> {} ", examInfoDto.toString());
 
		log.debug("examInfoDto ===> {} ", examInfoDto.get(0).getSolution());
		
		loginService.setResetBox(examInfoDto);

		Map<String, Object> resultMap = new HashMap<String, Object>();

		log.info("[OUT]LoginController resetBox");

		return resultMap;
	}
	
	@RequestMapping(value = "/selectQn.json", method = RequestMethod.POST)
	@ApiOperation(value = "기억상자가져오기")
	public @ResponseBody Map<String, Object> selectQn(HttpServletRequest request,
			@RequestBody ExamInfoReq examInfoReq) {
		log.info("[IN]LoginController selectQn");
		log.debug("examInfoReq ===> {} ", examInfoReq.toString());
		
		List<ExamInfoRes> list = loginService.selectQn(examInfoReq);

		Map<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("qnList", list);

		log.info("[OUT]LoginController selectQn");

		return resultMap;
	}
	
	@RequestMapping(value = "/updateQn.json", method = RequestMethod.POST)
	@ApiOperation(value = "기억상자이동")
	public @ResponseBody Map<String, Object> updateQn(HttpServletRequest request,
			@RequestBody ExamInfoReq examInfoReq) {
		log.info("[IN]LoginController updateQn");
		log.debug("examInfoReq ===> {} ", examInfoReq.toString());
		
		loginService.updateQn(examInfoReq);

		Map<String, Object> resultMap = new HashMap<String, Object>();

		log.info("[OUT]LoginController updateQn");

		return resultMap;
	}
}
