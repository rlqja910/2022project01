package com.toy.app.work.chat;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import io.swagger.annotations.ApiOperation;
import lombok.extern.log4j.Log4j2;

@Controller
@Log4j2
@RequestMapping(value = { "${base-path}/chat" })
public class ChatController {

	@RequestMapping(value = "/home.do", method = RequestMethod.GET)
	@ApiOperation(value = "chat 화면")
	public String chatGET(HttpServletRequest request) {

		log.info("@ChatController, chat GET()");
		
		return "chat";
	}
}