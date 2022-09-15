package com.toy.app.work.file.service;

import java.util.List;

import com.toy.app.work.file.dto.ImgDto;

public interface FileService {

	void insertImg(ImgDto imgDto);

	ImgDto getImg(String userId);

	List<ImgDto> getUploadHist(String userId);

}
