package com.toy.app.core.util.socket;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Component
public class ChatHandler extends TextWebSocketHandler {
	// 이미지와 같은 다른 리소스를 통신으로 받는다고 한다면 BinaryWebSocketHandler를 상속받으면 되겠다.

	List<WebSocketSession> list = new ArrayList<>();

	// 핸들러가 받은 메세지
	//websocket을 통해서 받은 메세지를 처리하는 메소드
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		String payload = message.getPayload();
//		String senderId = session.getId();
		
		String senderId = (String) session.getAttributes().get("sessionId");
		System.out.println(senderId);

		log.info("message : " + message.toString());
		log.info("payload : " + payload);

		for (WebSocketSession sess : list) {
			sess.sendMessage(message);
		}
	}

	// 연결 세션을 리스트에 모두 담는다.
	//websocket에 session이 접속했을 때, 처리하는 메소드
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {

		list.add(session);

		log.info(session + " 클라이언트 접속");
	}

	//websocket에 session이 접속을 해제 했을 때, 처리하는 메소드
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {

		log.info(session + " 클라이언트 접속 해제");
		list.remove(session);
	}
}
