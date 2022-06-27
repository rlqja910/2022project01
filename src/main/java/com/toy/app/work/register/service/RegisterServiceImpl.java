package com.toy.app.work.register.service;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import com.toy.app.core.util.SecretPwHelper;
import com.toy.app.work.login.dto.UserLoginDto;
import com.toy.app.work.register.mapper.RegisterMapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class RegisterServiceImpl implements RegisterService {

	@Autowired
	private RegisterMapper registerMapper;

	@Override
	public String insertUser(Map<String, Object> requestMap, UserLoginDto userLoginDto,
			HttpServletRequest request) {
		
		//IP 정보 추가
		userLoginDto.setIpAdr(request.getRemoteAddr());
		userLoginDto.setUserPw(SecretPwHelper.encryptPw(userLoginDto.getUserPw()));
		
		try {
			registerMapper.insertUser(userLoginDto);
			
			log.info("계정 생성에 성공하였습니다.");
			
			return "Y";
		}catch(DuplicateKeyException e) {
			
			log.info("중복키값이 존재합니다.");
			
			log.info("e ::: ", e);

			return "F";
		}catch (Exception e) {

			log.info("계정 생성에 실패하였습니다.");
			
			log.info("e ::: ", e);
			
			return "N";
		}
	}

}
