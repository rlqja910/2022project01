package com.toy.app.work.login.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class NoticeTxtDto {

	@ApiModelProperty(example = "내용")
	private String content;

	@ApiModelProperty(example = "등록일시")
	private String regDt;

}
