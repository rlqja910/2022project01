
$(document).ready(function(){
	
	console.log('==topMenu.js==');
	
	commonAjaxCall('/dashboard/topmenuData.json',null,topmenuInfoFn);
	
});

function topmenuInfoFn(result){
	
	console.log(result);
	
	$('#userNm').text(result.userInfo.userNm);
	$('#userEmail').text(result.userInfo.userId);
	
}

function signOutFn(){
	commonAjaxCall('/login/out.json',null, goHomeFn);
}

function goHomeFn(){
	location.href = '/app/login/home.do';
}