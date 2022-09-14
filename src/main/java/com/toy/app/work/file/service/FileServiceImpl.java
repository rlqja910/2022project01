package com.toy.app.work.file.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.toy.app.work.file.dto.ImgDto;
import com.toy.app.work.file.mapper.FileMapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class FileServiceImpl implements FileService {

	@Autowired
	private FileMapper fileMapper;

	@Override
	public void insertImg(ImgDto imgDto) {
		fileMapper.insertImg(imgDto);
	}

	@Override
	public ImgDto getImg(String userId) {
		ImgDto imgDto = new ImgDto();
		
		imgDto = fileMapper.getImg(userId);
		
		return imgDto;
	}
}
