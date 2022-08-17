$(document).ready(function() {

	console.log('==login.js==');

		console.log(noticeList);
		
	if (getCookie('homeNotice') === 'done') {

	} else {
		
		if(noticeList[0].regDt === null){
			$('#noticeContent').html(noticeList[0].content);
		}else{
			var noticeHtml = '';
			
			for(var i = 0; i < noticeList.length ; i++){
				noticeHtml += (i+1) + '. ' + noticeList[i].content + ' ('+ noticeList[i].regDt.substring(0,10) + ')<br><br>';
			}
			
			$('#noticeContent').html(noticeHtml);
		}
		
		$('.noticeModal').click();
	}

});

$(document).on("click", ".onedayHide", function(e) {
	setCookie('homeNotice','done',1);
	$('.noticeClose').click();
});

function p() {
		alert('준비중입니다.');
	}

function goJoin() {

		location.href = '/app/register/join.do';
	}

function emailLoginFn() {
		var param;

		console.log(SHA256($('#userPw').val()));

		param = {
			userId: $('#userId').val(),
			userPw: SHA256($('#userPw').val()),
		}

		commonAjaxCall('/login/in.json', param, loginResult);
	}

function loginResult(result) {
		console.log(result);

		if (result.loginYn === 'Y') {
			location.replace('/app/dashboard/home.do');
		} else {
			if (result.failResult === 'Y') {
				alert('비밀번호를 5번이상 틀렸습니다. 관리자에게 문의하세요.');
			} else {
				alert('아이디와 비밀번호를 확인해주세요.');
			}
		}
	}