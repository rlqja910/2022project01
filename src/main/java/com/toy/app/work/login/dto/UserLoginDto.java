package com.toy.app.work.login.dto;

import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiOperation;
import lombok.Data;

@Data
public class UserLoginDto {

	@ApiModelProperty(example = "아이디")
	private String userId;

	@ApiModelProperty(example = "암호")
	private String userPw;

	@ApiModelProperty(example = "이름")
	private String userNm;

	@ApiModelProperty(example = "전화번호")
	private String telNo;

	@ApiModelProperty(example = "아이피")
	private String ipAdr;

	@ApiModelProperty(example = "로그인 실패횟수")
	private int loginFailCnt;

	@ApiModelProperty(example = "계정상태")
	private String userAccSttusCd;

	@ApiModelProperty(example = "마지막 로그인일시")
	private String lastLoginDt;

	@ApiModelProperty(example = "등록일시")
	private String regDt;

	@ApiModelProperty(example = "수정일시")
	private String chgDt;

}
