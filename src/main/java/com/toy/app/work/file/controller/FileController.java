package com.toy.app.work.file.controller;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.FilenameUtils;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.toy.app.work.dashboard.dto.WheatherDto;
import com.toy.app.work.file.dto.ImgDto;
import com.toy.app.work.file.service.FileService;
import com.toy.app.work.login.dto.UserLoginDto;

import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import net.nurigo.sdk.NurigoApp;
import net.nurigo.sdk.message.exception.NurigoMessageNotReceivedException;
import net.nurigo.sdk.message.model.Message;
import net.nurigo.sdk.message.service.DefaultMessageService;

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
		
		if(imgDto != null) {
			log.info("저장된 이미지가 있다.");
			log.info(imgDto.toString());

			//확장자 추출
			String fileExtension = FilenameUtils.getExtension(imgDto.getOriginFileNm());
			String imgPath = imgDto.getPath() + imgDto.getUuid() + "." + fileExtension;
			
			
			model.addAttribute("imgPath", imgPath);
		}

		log.info("[OUT]FileController goFileUpload");

		return "upload";
	}

	@RequestMapping(value="sendImg.json", method = RequestMethod.POST)
	@ApiOperation(value = "날씨 정보 문자발송")
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
		String serverPath =request.getRealPath(File.separator)+"\\uploadImg\\"+file.getOriginalFilename();
		
		resultMap.put("path", serverPath);
		
		log.info("[OUT]FileController sendImg");
		
		return resultMap;
  
  }
}
