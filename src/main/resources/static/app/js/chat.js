var firstChk = true;

$(document).ready(function() {

	var username = window.prompt("사용자 닉네임?");

	$('#userNm').text(username);

	$("#disconn").on("click", function(e) {
		onClose();

		location.href = '/app/dashboard/home.do';
	})

	$("#button-send").on("click", function(e) {
		send();
	});

	const websocket = new WebSocket("ws://192.168.31.102:8080/ws/chat");

	websocket.onmessage = onMessage;
	websocket.onopen = onOpen;
	websocket.onclose = onClose;

	function send() {

		let msg = document.getElementById("inputMsg");

		console.log(username + "/" + msg.value);
		websocket.send(username + "/" + msg.value);
		msg.value = '';
	}

	//채팅창에서 나갔을 때
	function onClose(evt) {
		var str = username + "/안녕히계세요.";
		websocket.send(str);
	}

	//채팅창에 들어왔을 때
	function onOpen(evt) {
		console.log(username);
		var str = username + "/안녕하세요?";
		websocket.send(str);
	}

	function onMessage(msg) {
		console.log('123123');
		var data = msg.data;
		var sessionId = null;
		//데이터를 보낸 사람
		var message = null;
		var arr = data.split("/");

		for (var i = 0; i < arr.length; i++) {
			console.log('arr[' + i + ']: ' + arr[i]);
		}

		var cur_session = username;

		//현재 세션에 로그인 한 사람
		sessionId = arr[0];
		message = arr[1];

		console.log("sessionID : " + sessionId);
		console.log("cur_session : " + cur_session);

		//로그인 한 클라이언트와 타 클라이언트를 분류하기 위함
		if (sessionId == cur_session) {
			var msgHtml = "";

			msgHtml += '<div class="media flex-row-reverse chat-right">';
			msgHtml += '<div class="main-img-user online"><img alt="avatar" src="../assets/images/users/21.jpg"></div>';
			msgHtml += '<div class="media-body">';
			msgHtml += '<div class="main-msg-wrapper">';
			//			msgHtml += sessionId + ' : ' + message;
			msgHtml += message;
			firstChk = false;
			msgHtml += '</div>';
			msgHtml += '<div>';
			msgHtml += '<span>' + new Date(); +'</span> <a href=""><i class="icon ion-android-more-horizontal"></i></a>';
			msgHtml += '</div>';
			msgHtml += ' </div>';
			msgHtml += ' </div>';

			$("#msgArea").append(msgHtml);
			window.scrollTo(0, document.body.scrollHeight);
		}
		else {
			var msgHtml = "";

			msgHtml += '<div class="media chat-left">';
			msgHtml += '<div class="main-img-user online"><img alt="avatar" src="../assets/images/users/21.jpg"></div>';
			msgHtml += '<div class="media-body">';
			msgHtml += '<div class="main-msg-wrapper">';
			//			msgHtml += sessionId + ' : ' + message;
			msgHtml += message;
			msgHtml += '</div>';
			msgHtml += '<div>';
			msgHtml += '<span>' + new Date(); +'</span> <a href=""><i class="icon ion-android-more-horizontal"></i></a>';
			msgHtml += '</div>';
			msgHtml += ' </div>';
			msgHtml += ' </div>';

			$("#msgArea").append(msgHtml);
			window.scrollTo(0, document.body.scrollHeight);
		}
	}
});


function sendEnter() {
	$("#button-send").trigger('click');
}