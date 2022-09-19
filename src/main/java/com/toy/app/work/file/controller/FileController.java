package com.toy.app.work.file.controller;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.toy.app.work.file.dto.ImgDto;
import com.toy.app.work.file.service.FileService;

import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping(value = "${base-path}/file")
public class FileController {

	@Autowired
	private FileService fileService;

	@RequestMapping(value = "upload.do", method = RequestMethod.GET)
	@ApiOperation(value = "파일매니저 (업로드)")
	public String goFileUpload(HttpServletRequest request, Model model ) {
		log.info("[IN]FileController goFileUpload");
		
		String userId = (String)request.getSession().getAttribute("loginId");
		
		ImgDto imgDto = fileService.getImg(userId);
		List<ImgDto> uploadList = fileService.getUploadHist(userId);
		
		if(imgDto != null) {
			log.info("저장된 이미지가 있다.");
			log.info(imgDto.toString());

			//확장자 추출
			String fileExtension = FilenameUtils.getExtension(imgDto.getOriginFileNm());
			String imgPath = "../../uploadImg/" + imgDto.getUuid() + "." + fileExtension;
			
			
			model.addAttribute("imgPath", imgPath);
		}
		
		if(!uploadList.isEmpty()) {
			
			for(ImgDto imgInfo : uploadList) {
				
				//확장자 추출
				String fileExtension = FilenameUtils.getExtension(imgInfo.getOriginFileNm());
				String path = "../../uploadImg/" + imgInfo.getUuid() + "." + fileExtension;
				
				imgInfo.setPath(path);
			}
			
			model.addAttribute("uploadList", uploadList);
		}

		log.info("[OUT]FileController goFileUpload");

		return "upload";
	}

	@RequestMapping(value="sendImg.json", method = RequestMethod.POST)
	@ApiOperation(value = "이미지 업로드")
	public @ResponseBody Map<String, Object> sendImg(@RequestPart(value = "key") ImgDto imgDto,
		@RequestPart(value = "file") MultipartFile file, HttpServletRequest request) {

		log.info("[IN]FileController sendImg");
		
		UUID tempFileName = UUID.randomUUID();
		System.out.println(tempFileName);
		
		File upFolder = new File(request.getRealPath(File.separator)+"\\uploadImg");
		
		if(!upFolder.exists()) {
			upFolder.mkdir();
			System.out.println("폴더가 없음. 생성됨");
		}else { 
			System.out.println("이미 폴더생존함");
		}
		
		//확장자 추출
		String fileExtension = FilenameUtils.getExtension(file.getOriginalFilename());
		
			
		File mkfile = new File(request.getRealPath(File.separator)+"\\uploadImg\\", tempFileName.toString() + "." + fileExtension);
		
		//이미지를 upFolder에 넣는다. 
		try {
//			mkfile.createNewFile();
			file.transferTo(mkfile);
			log.info("이미지 upFolder에 생성성공");
			
			//db적재작업
			imgDto.setOriginFileNm(file.getOriginalFilename());
			imgDto.setPath(request.getRealPath(File.separator)+"\\uploadImg\\");
			imgDto.setUserId((String)request.getSession().getAttribute("loginId"));
			imgDto.setUuid(tempFileName.toString());
			
			System.out.println(imgDto.toString());
			
			fileService.insertImg(imgDto);
			
		} catch (IOException e) {
			log.info("이미지 upFolder에 생성실패");
			
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		Map<String, Object> resultMap = new HashMap<String, Object>();
		String serverPath ="../../uploadImg/"+tempFileName.toString() + "." + fileExtension;
		
		resultMap.put("path", serverPath);
		
		//이미지 리스트 조회
		String userId = (String)request.getSession().getAttribute("loginId");
		
		List<ImgDto> uploadList = fileService.getUploadHist(userId);
		
		
		if(!uploadList.isEmpty()) {
			
			for(ImgDto imgInfo : uploadList) {
				
				//확장자 추출
				String fileExtension2 = FilenameUtils.getExtension(imgInfo.getOriginFileNm());
				String path = "../../uploadImg/" + imgInfo.getUuid() + "." + fileExtension2;
				
				imgInfo.setPath(path);
			}
			
			resultMap.put("uploadList",uploadList);
		}
		
		log.info("[OUT]FileController sendImg");
		
		return resultMap;
  
  }
}
