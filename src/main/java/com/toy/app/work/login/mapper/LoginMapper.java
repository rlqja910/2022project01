package com.toy.app.work.login.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.toy.app.work.login.dto.ExamInfoDto;
import com.toy.app.work.login.dto.ExamInfoReq;
import com.toy.app.work.login.dto.ExamInfoRes;
import com.toy.app.work.login.dto.NoticeTxtDto;
import com.toy.app.work.login.dto.UserLoginDto;

@Mapper
public interface LoginMapper {

	public UserLoginDto doLogin(UserLoginDto userLoginDto);

	public UserLoginDto getUserInfo(UserLoginDto userLoginDto);

	public int updateLoginFailCnt(UserLoginDto userLoginDto);

	public int updateLoginSuccess(UserLoginDto userInfo);

	public List<NoticeTxtDto> getNotice();

	public int resetBox(ExamInfoDto examInfoDto);

	public int deleteBox();

	public List<ExamInfoRes> selectQn(ExamInfoReq examInfoReq);

	public void updateQn(ExamInfoReq examInfoReq);

}
