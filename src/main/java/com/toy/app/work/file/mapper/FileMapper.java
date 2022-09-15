package com.toy.app.work.file.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.toy.app.work.file.dto.ImgDto;

@Mapper
public interface FileMapper {

	void insertImg(ImgDto imgDto);

	ImgDto getImg(String userId);

	List<ImgDto> getUploadHist(String userId);

}
