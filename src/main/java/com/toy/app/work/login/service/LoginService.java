package com.toy.app.work.login.service;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.toy.app.work.login.dto.ExamInfoDto;
import com.toy.app.work.login.dto.ExamInfoReq;
import com.toy.app.work.login.dto.ExamInfoRes;
import com.toy.app.work.login.dto.NoticeTxtDto;
import com.toy.app.work.login.dto.UserLoginDto;

public interface LoginService {

	public Map<String, Object> doLogin(Map<String, Object> requestMap, UserLoginDto userLoginDto,
			HttpServletRequest request);

	public UserLoginDto getUserInfo(UserLoginDto userLoginDto);

	public List<NoticeTxtDto> getNotice();

	public int setResetBox(List<ExamInfoDto> examInfoDto);

	public List<ExamInfoRes> selectQn(ExamInfoReq examInfoReq);

	public void updateQn(ExamInfoReq examInfoReq);
}
