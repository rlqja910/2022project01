
$(document).ready(function() {

	console.log('==dashboard.js==');
	console.log(wheather);
	console.log(life);
	
	setNowWheather();
	
	setLife();
	
});

$(document).on("click", "#click1", function(e) {
        $('body').removeClass('timer-alert');
	        swal({
	            title: "날씨 흐림",
	            text: "오늘은 우산을 꼭 챙겨주세요.",
	            type: "warning",
	            showCancelButton: false,
	            confirmButtonText: '감사합니다',
	        });
	    });
	    
$(document).on("click", "#click2", function(e) {
        $('body').removeClass('timer-alert');
	        swal({
	            title: "날씨 눈",
	            text: "오늘은 운전에 유희하세요.",
	            type: "warning",
	            showCancelButton: false,
	            confirmButtonText: '감사합니다',
	        });
	    });

function setNowWheather(){
	$('#temper').text(wheather[0] + ' ' + wheather[1]);
	$('#temper2').text(wheather[3] + ' ' + wheather[4] + ' ' + wheather[5]);
	
	//날씨 아이콘
	if(wheather[2] === '흐림'){
		$('#wheatherImg').prop("src","../assets/images/wheather/blackcloudy.png");
		
		$('#click1').trigger('click');
		
	}else if(wheather[2] === '구름많음'){
		$('#wheatherImg').prop("src","../assets/images/wheather/manycludy.png");
	}else if(wheather[2] === '비'){
		$('#wheatherImg').prop("src","../assets/images/wheather/rainny.png");
		$('#click2').trigger('click');
	}else if(wheather[2] === '눈'){
		$('#wheatherImg').prop("src","../assets/images/wheather/snowy.png");
		$('#click2').trigger('click');
	}else if(wheather[2] === '맑음'){
		$('#wheatherImg').prop("src","../assets/images/wheather/sunny.png");
	}else if(wheather[2] === '흐리고 한때 소나기'){
		$('#wheatherImg').prop("src","../assets/images/wheather/rainshower.png");
	}else{
		$('#wheatherImg').remove();
		$('#temper').text(wheather[0] + ' ' + wheather[1] + '('+ wheather[2] +')');
	}
}

function setLife(){
	$('#card1').text(life[1]);
	$('#card2').text(life[3]);
	$('#card3').text(life[5]);
	$('#card4').text(life[7]);
	
	if(life[1] === '위험'){
		$('#card1').attr('style','color:red');
	}
	if(life[3] === '위험'){
		$('#card2').attr('style','color:red');
	}
	if(life[5] === '위험'){
		$('#card3').attr('style','color:red');
	}
	if(life[7] === '위험'){
		$('#card4').attr('style','color:red');
	}
}