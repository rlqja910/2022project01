package com.toy.app.work.file.service;

import com.toy.app.work.file.dto.ImgDto;

public interface FileService {

	void insertImg(ImgDto imgDto);

	ImgDto getImg(String userId);

}
