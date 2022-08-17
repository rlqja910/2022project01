package com.toy.app.work.login.service;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.toy.app.core.util.SecretPwHelper;
import com.toy.app.work.login.dto.NoticeTxtDto;
import com.toy.app.work.login.dto.UserLoginDto;
import com.toy.app.work.login.mapper.LoginMapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class LoginServiceImpl implements LoginService {

	@Autowired
	private LoginMapper loginMapper;

	public Map<String, Object> doLogin(Map<String, Object> requestMap, UserLoginDto userLoginDto,
			HttpServletRequest request) {

		log.info("[IN]LoginServiceImpl doLogin()");
		
		System.out.println(userLoginDto.toString());

		UserLoginDto userInfo = loginMapper.doLogin(userLoginDto);

		if (userInfo == null) {
			requestMap.put("loginYn", "N");
			request.getSession().setAttribute("loginYn", "N");

			return requestMap;
		}

		String encrytPw = userInfo.getUserPw();

		log.info(userLoginDto.toString());
		log.info(userInfo.toString());

		String decryptPw = SecretPwHelper.decryptPw(encrytPw);

		if (!(userInfo.getLoginFailCnt() >= 5) && userLoginDto.getUserPw().equals(decryptPw)) {
			// 로그인 성공, 접속성공 정보 적재
			userInfo.setLoginFailCnt(0);
			userInfo.setIpAdr(request.getRemoteAddr());
			
			int updateResult = loginMapper.updateLoginSuccess(userInfo);
			
			if (updateResult == 1) {
				log.info("로그인 성공 정보 적재하였습니다. updateResult ::: " + updateResult);
			}

			requestMap.put("loginYn", "Y");
			request.getSession().setAttribute("loginYn", "Y");
			request.getSession().setAttribute("loginId", userLoginDto.getUserId());
		} else {
			// 실패획수 늘림
			userInfo.setLoginFailCnt(userInfo.getLoginFailCnt() + 1);
			int updateResult = loginMapper.updateLoginFailCnt(userInfo);

			if (updateResult == 1) {
				log.info("로그인 실패횟수 업데이트 하였습니다. updateResult ::: " + updateResult);
			}

			requestMap.put("loginYn", "N");
			if(userInfo.getLoginFailCnt() >= 5) {
				requestMap.put("failResult", "Y");
			}
			
			request.getSession().setAttribute("loginYn", "N");
		}

		log.info("[OUT]LoginServiceImpl doLogin()");

		return requestMap;
	}

	@Override
	public UserLoginDto getUserInfo(UserLoginDto userLoginDto) {
		
		UserLoginDto userInfo = loginMapper.getUserInfo(userLoginDto);
		
		return userInfo;
	}

	@Override
	public List<NoticeTxtDto> getNotice() {
		// TODO Auto-generated method stub
		return loginMapper.getNotice();
	}
}
