package com.toy.app.work.file.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.toy.app.work.file.dto.ImgDto;

@Mapper
public interface FileMapper {

	void insertImg(ImgDto imgDto);

	ImgDto getImg(String userId);

}
