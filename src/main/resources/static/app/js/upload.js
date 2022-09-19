
$(document).ready(function() {
	if(imgPath){
		const elImage = document.querySelector("#img1");
		const elImage2 = document.querySelector("#img2");
		console.log(elImage);
	 	elImage.href = imgPath;
	 	elImage2.src = imgPath;
	 	//elImage.src = '../../uploadImg/e39e99e4-03c9-4665-9ef2-7eb9b2413024.png';
	}
	
		uploadListHtml = '';
		
		uploadListHtml += '<table id="file-datatable" class="table table-bordered text-nowrap key-buttons border-bottom">';
		uploadListHtml += '<thead>';
		uploadListHtml += '<th class="border-bottom-0">업로더</th>';
		uploadListHtml += '<th class="border-bottom-0">제목</th>';
		uploadListHtml += '<th class="border-bottom-0">등록일시</th>';
		uploadListHtml += '<th class="border-bottom-0">-</th>';
		uploadListHtml += '</tr>';
		uploadListHtml += '</thead>';
		uploadListHtml += '<tbody>';
		
		if(uploadList){
			for(var imgInfo of uploadList){
			
			uploadListHtml += '<tr>';
				
				uploadListHtml += '<td>';
				uploadListHtml += strEmptyCheck(imgInfo.userId);
				uploadListHtml += '</td>';
				
				uploadListHtml += '<td>';
				uploadListHtml += strEmptyCheck(imgInfo.title);
				uploadListHtml += '</td>';
				
				uploadListHtml += '<td>';
				uploadListHtml += strEmptyCheck(imgInfo.regDt);
				uploadListHtml += '</td>';
				
				uploadListHtml += '<td>';
				uploadListHtml += '<input type="button" value="보기" />';
				uploadListHtml += '</td>';
				
				uploadListHtml += '</tr>';
			}
		}else{
			uploadListHtml += '<tr>';
				
				uploadListHtml += '<td style="text-align:center;" colspan = "4">';
				uploadListHtml += '이력이 없습니다.';
				uploadListHtml += '</td>';
				
				uploadListHtml += '</tr>';
		}
		
		uploadListHtml += '</tbody>';
		uploadListHtml += '</table>';
		
		console.log(uploadListHtml);
		$('#uploadTableDiv').html(uploadListHtml);
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
			var el = document.querySelector("#img2");
	 		el.src = result.path;
            //const blobSupported = new Blob(["ä"]).size === 2; //blob이 호환되는지 확인
            //console.log(blobSupported);
            
            //리스트 재조회
            var uploadList = result.uploadList;
            
            uploadListHtml = '';
		
			uploadListHtml += '<table id="file-datatable" class="table table-bordered text-nowrap key-buttons border-bottom">';
			uploadListHtml += '<thead>';
			uploadListHtml += '<th class="border-bottom-0">업로더</th>';
			uploadListHtml += '<th class="border-bottom-0">제목</th>';
			uploadListHtml += '<th class="border-bottom-0">등록일시</th>';
			uploadListHtml += '<th class="border-bottom-0">-</th>';
			uploadListHtml += '</tr>';
			uploadListHtml += '</thead>';
			uploadListHtml += '<tbody>';
			
			for(var imgInfo of uploadList){
				
				uploadListHtml += '<tr>';
				
				uploadListHtml += '<td>';
				uploadListHtml += strEmptyCheck(imgInfo.userId);
				uploadListHtml += '</td>';
				
				uploadListHtml += '<td>';
				uploadListHtml += strEmptyCheck(imgInfo.title);
				uploadListHtml += '</td>';
				
				uploadListHtml += '<td>';
				uploadListHtml += strEmptyCheck(imgInfo.regDt);
				uploadListHtml += '</td>';
				
				uploadListHtml += '<td>';
				uploadListHtml += '<input type="button" value="보기" />';
				uploadListHtml += '</td>';
				
				uploadListHtml += '</tr>';
			}
			uploadListHtml += '</tbody>';
			uploadListHtml += '</table>';
			
			console.log(uploadListHtml);
			$('#uploadTableDiv').html(uploadListHtml);
        }).fail(function (error) {
            alert(JSON.stringify(error));
		});
    }
    
	};
	
    imgSend.imgSendAjaxCall();
}
