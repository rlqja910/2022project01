package com.toy.app.core.util;

import java.util.Map;

import com.toy.app.core.util.code.ReturnCode;
import com.toy.app.core.util.dto.ReturnDto;

public class ResultCode {

	public static Map<String, Object> successResult(Map<String, Object> param) {

		ReturnDto returnDto = new ReturnDto();

		returnDto.setReturnCode(ReturnCode.OK);

		param.put("RES", returnDto);

		return param;
	}

	public static Map<String, Object> failResult(Map<String, Object> param , String msg) {

		ReturnDto returnDto = new ReturnDto();
		
		returnDto.setResultMsg(msg);

		returnDto.setReturnCode(ReturnCode.FAIL);

		param.put("RES", returnDto);

		return param;
	}
}
