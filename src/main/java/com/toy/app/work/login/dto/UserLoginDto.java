package com.toy.app.work.login.dto;

import lombok.Data;

@Data
public class UserLoginDto {

	private String userId;

	private String userPw;
	
	private String userNm;

	private String telNo;

	private String ipAdr;

	private int loginFailCnt;

	private String userAccSttusCd;

	private String LastLoginDt;

	private String regDt;

	private String chgDt;

}
