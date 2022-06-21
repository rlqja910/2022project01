$(document).ready(function(){
	
	console.log('==login.js==');
	
});

function p(){
	alert('준비중입니다.');
}

function goJoin(){
	console.log('join으로');
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
}