$(document).ready(function(){
	
	console.log('==register.js==');
	
});

function p(){
	alert('준비중입니다.');
}

function registBtn(){
	console.log('가입버튼 클릭');
	
	var userNm = $('#userNm').val();
	var userPw = $('#userPw').val();
	var userId = $('#userEmail').val();
	console.log(userNm);
	console.log(userPw);
	console.log(userId);
	const specialStrChk = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
	const emailChk = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
	
	//이름 빈값 체크
	if(userNm.trim() === ''){
		alert('이름을 입력해주세요(공백금지).');
		return;
	}
	//이름에 특수문자 체크
	else if(specialStrChk.test(userNm)){
		alert('이름에 특수문자를 사용할 수 없습니다.');
		return;
	}
	//아이디 빈값 체크
	else if(userId.trim() === ''){
		alert('메일을 입력해주세요(공백금지).');
		return;
	}
	//아이디에 특수문자 체크
	else if(!emailChk.test(userId)){
		alert('이메일을 형식에 맞게 입력해주세요.');
		return;
	}
	//비밀번호 빈값 체크
	else if(userPw.trim() === ''){
		alert('비밀번호를 입력해주세요(공백금지).');
		return;
	}
	//비밀번호에 특수문자 체크
	//else if(specialStrChk.test(userPw)){
	//	alert('비밀번호에 특수문자를 사용할 수 없습니다 (영문,숫자 가능).');
	//	return;
	//}
	//개인정보 동의 체크
	else if(!$('#agreeCheck').is(":checked")){
		alert('개인정보 수집에 동의해주세요.');
		return;
	}
	
	console.log('회원가입 서비스 시작 - ajax');
	
	console.log(SHA256(userPw));
	
	var param = {
		userId : userId,
		userPw : SHA256(userPw),
		userNm : userNm,
	};
	commonAjaxCall('/register/insertUser.json',param, registerResult);
	
}

function registerResult(result){
	console.log(result);
	
	if(result.registSuccess === 'Y'){
		alert('가입되었습니다.')
		location.href = '/app/login/home.do';
	}else{
		alert(result.RES.resultMsg);
	}
}
