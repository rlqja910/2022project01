
$(document).ready(function() {
	if(imgPath){
		const elImage = document.querySelector("#img1");
		console.log(elImage);
	 	elImage.src = imgPath;
	}
});

function saveImg(){
	var imgSend = {
	imgSendAjaxCall : function () {
		var data = {
      		title: $('#imgTitle').val(),
		};
		var form =$('#fileForm')[0];
		var formData = new FormData(form);
		console.log($('#fileBody')[0].files[0]);
		formData.append('file', $('#fileBody')[0].files[0]);
		formData.append('key', new Blob([JSON.stringify(data)] , {type: "application/json"}));
		
		$.ajax({
            type: 'POST',
            url: 'http://localhost:8080/app'+'/file/sendImg.json',
            processData: false,
            contentType:false,
            data: formData,
        }).done(function(result) {
			console.log(result);
            alert('사진이 전송되었습니다.');
			const elImage = document.querySelector("#img1");
	 		elImage.src = 'C:\\Users\\kkb50\git\\2022project01\\src\\main\\webapp\\uploadImg\\NAT.png';
            const blobSupported = new Blob(["ä"]).size === 2; //blob이 호환되는지 확인
            console.log(blobSupported);
        }).fail(function (error) {
            alert(JSON.stringify(error));
		});
    }
    
	};
	
    imgSend.imgSendAjaxCall();
}
