
function commonAjaxCall(url, dataParam, callBackFunc, beforeFunc, afterFunc, successMsg, errorAfterFunc){
	console.log('app' + url);
	$.ajax({
		type : 'post',
		//url : 'http://192.168.31.102:8080/app' + url,
		url : 'http://localhost:8080/app' + url,
		xhrFields : {
			withCredentials : true,
		},
		contentType : 'application/json; charset=utf-8',
		traditional : true,
		data : JSON.stringify(dataParam),
		cache : false,
		crossDomain : true,
		timeout : 60000,
		success : function(result){
			callBackFunc ? callBackFunc(result) : '';
		},
		beforeSend : function(){
			
		},
		complete : function(request,status,error){
			
		},
		error : function(request,status,error){
			
		},
	});
};

function commonAjaxCall2(url,callBackFunc, beforeFunc, afterFunc, successMsg, errorAfterFunc){
	$.ajax({
		type : 'get',
		//url : 'http://192.168.31.102:8080/app' + url,
		url : 'http://localhost:8080/app' + url,
		success : function(result){
			callBackFunc ? callBackFunc(result) : '';
		},
		beforeSend : function(){
			
		},
		complete : function(request,status,error){
			
		},
		error : function(request,status,error){
			
		},
	});
};

function strEmptyCheck(str){
	if(str){
		return str;
	}else{
		return '-';
	}
}