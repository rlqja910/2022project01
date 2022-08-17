//쿠키설정    
function setCookie(name, value, expireday) {
	var todayDt = new Date();

	todayDt.setDate(todayDt.getDate() + expireday);

	cookies = name + '=' + escape(value) + '; path=/ '; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.

	console.log(cookies);

	if (typeof expireday != 'undefined') {
		cookies += ';expires=' + todayDt + ';';
		console.log(cookies);
		document.cookie = cookies;
	}
	
	getCookie('homeNotice');
}

// 쿠키 가져오기 함수
function getCookie(name) {
	name = name + '=';
	
	var cookieData = document.cookie;
	var start = cookieData.indexOf(name);
	
	var value = '';
	//쿠키가 있는경우
	if (start != -1) {
		start += name.length;
		var end = cookieData.indexOf(';', start);
		if (end == -1) end = cookieData.length;
		value = cookieData.substring(start, end);
	}else{
		console.log('homeNotice cookie없음')
	}
	return unescape(value);
}