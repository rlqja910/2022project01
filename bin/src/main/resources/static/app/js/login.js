$(document).ready(function(){
	
	console.log('==login.js==');
	
});

function p(){
	alert('준비중입니다.');
}

function goJoin(){
	
	location.href = '/app/register/join.do';
}

function emailLoginFn(){
	var param;
	
	param = {
		userId : $('#userId').val(),
		userPw : $('#userPw').val(),
	}
	
	commonAjaxCall('/login/in.json',param, loginResult);
}

function loginResult(result){
	console.log(result);
	
	if(result.loginYn === 'Y'){
		location.replace('/app/dashboard/home.do');
	}else{
		if(result.failResult === 'Y'){
			alert('비밀번호를 5번이상 틀렸습니다. 관리자에게 문의하세요.');
		}else{
			alert('아이디와 비밀번호를 확인해주세요.');
		}
	}
}