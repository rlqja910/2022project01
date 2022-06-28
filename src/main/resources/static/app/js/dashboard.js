
$(document).ready(function() {

	console.log('==dashboard.js==');
	console.log(weather);
	console.log(life);
	console.log(weather2);
	console.log(life2);
	
	setNowweather();
	
	setLife();
	
	//꽃가루
	$('#startButton').trigger('click');
	
	setTimeout(function(){
				$('#stopButton').trigger('click');
				}, 6000);
	//
	
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
	console.log('123');
        $('body').removeClass('timer-alert');
	        swal({
	            title: "날씨 눈",
	            text: "오늘은 운전에 유의하세요.",
	            type: "warning",
	            showCancelButton: false,
	            confirmButtonText: '감사합니다',
	        });
	    });

function setNowweather(){
	$('#temper').eq(0).text(weather[0] + ' ' + weather[1]);
	$('#temper2').eq(0).text(weather[3] + ' ' + weather[4] + ' ' + weather[5]);
	$('#temper3').eq(0).text(weather2[0] + ' ' + weather2[1]);
	$('#temper4').eq(0).text(weather2[3] + ' ' + weather2[4] + ' ' + weather2[5]);
	
	//날씨 아이콘
	if(weather[2] === '흐림'){
		$('#weatherImg').eq(0).prop("src","../assets/images/weather/blackcloudy.png");
		
		$('#click1').trigger('click');
		$('#weatherImg').eq(0).prop("title",'흐림');
		$('#weatherImg').eq(0).prop("alt",'흐림');
		
	}else if(weather[2] === '구름많음'){
		$('#weatherImg').eq(0).prop("src","../assets/images/weather/manycludy.png");
		$('#weatherImg').eq(0).prop("title",'구름많음');
		$('#weatherImg').eq(0).prop("alt",'구름많음');
	}else if(weather[2] === '비'){
		$('#weatherImg').eq(0).prop("src","../assets/images/weather/rainny.png");
		$('#click2').trigger('click');
		$('#weatherImg').eq(0).prop("title",'비');
		$('#weatherImg').eq(0).prop("alt",'비');
	}else if(weather[2] === '눈'){
		$('#weatherImg').eq(0).prop("src","../assets/images/weather/snowy.png");
		$('#click2').trigger('click');
		$('#weatherImg').eq(0).prop("title",'눈');
		$('#weatherImg').eq(0).prop("alt",'눈');
	}else if(weather[2] === '맑음'){
		$('#weatherImg').eq(0).prop("src","../assets/images/weather/sunny.png");
		$('#weatherImg').eq(0).prop("title",'맑음');
		$('#weatherImg').eq(0).prop("alt",'맑음');
	}else if(weather[2] === '흐리고 한때 소나기'){
		$('#weatherImg').eq(0).prop("src","../assets/images/weather/rainshower.png");
		$('#weatherImg').eq(0).prop("title",'흐리고 한때 소나기');
		$('#weatherImg').eq(0).prop("alt",'흐리고 한때 소나기');
	}else if(weather2[2] === '흐림'){
		$('#weatherImg2').eq(0).prop("src","../assets/images/weather/blackcloudy.png");
		
		$('#click1').trigger('click');
		$('#weatherImg2').eq(0).prop("title",'흐림');
		$('#weatherImg2').eq(0).prop("alt",'흐림');
		
	}else if(weather2[2] === '구름많음'){
		$('#weatherImg2').eq(0).prop("src","../assets/images/weather/manycludy.png");
		$('#weatherImg2').eq(0).prop("title",'구름많음');
		$('#weatherImg2').eq(0).prop("alt",'구름많음');
	}else if(weather2[2] === '비'){
		$('#weatherImg2').eq(0).prop("src","../assets/images/weather/rainny.png");
		$('#click2').trigger('click');
		$('#weatherImg2').eq(0).prop("title",'비');
		$('#weatherImg2').eq(0).prop("alt",'비');
	}else if(weather2[2] === '눈'){
		$('#weatherImg2').eq(0).prop("src","../assets/images/weather/snowy.png");
		$('#click2').trigger('click');
		$('#weatherImg2').eq(0).prop("title",'눈');
		$('#weatherImg2').eq(0).prop("alt",'눈');
	}else if(weather2[2] === '맑음'){
		$('#weatherImg2').eq(0).prop("src","../assets/images/weather/sunny.png");
		$('#weatherImg2').eq(0).prop("title",'맑음');
		$('#weatherImg2').eq(0).prop("alt",'맑음');
	}else if(weather2[2] === '흐리고 한때 소나기'){
		$('#weatherImg2').eq(0).prop("src","../assets/images/weather/rainshower.png");
		$('#weatherImg2').eq(0).prop("title",'흐리고 한때 소나기');
		$('#weatherImg2').eq(0).prop("alt",'흐리고 한때 소나기');
	}else{
		$('#weatherImg').remove();
		$('#temper').eq(0).text(weather[0] + ' ' + weather[1] + '('+ weather[2] +')');
		$('#temper2').eq(0).text(weather[0] + ' ' + weather[1] + '('+ weather[2] +')');
		$('#temper3').eq(0).text(weather2[0] + ' ' + weather2[1] + '('+ weather2[2] +')');
		$('#temper4').eq(0).text(weather2[0] + ' ' + weather2[1] + '('+ weather2[2] +')');
		
	}
}

function twinkle1(id){
	setTimeout(function(){
			$('#'+id).eq(0).parent().parent().parent().eq(0).css('background-color','orangered');
			$('#'+id).eq(0).parent().parent().eq(0).css('background-clip','content-box');
			$('#'+id).eq(0).parent().parent().eq(0).css('background-color','white');
			twinkle2(id);
	},1000);
}

function twinkle2(id){
	setTimeout(function(){
			$('#'+id).eq(0).parent().parent().parent().eq(0).css('background-color','white');
			twinkle1(id);
	},1000);
}

function twinkle3(id){
	setTimeout(function(){
			$('#'+id).eq(0).parent().parent().parent().eq(0).css('background-color','orangered');
			$('#'+id).eq(0).parent().parent().eq(0).css('background-clip','content-box');
			$('#'+id).eq(0).parent().parent().eq(0).css('background-color','white');
			twinkle4(id);
	},1000);
}

function twinkle4(id){
	setTimeout(function(){
			$('#'+id).eq(0).parent().parent().parent().eq(0).css('background-color','white');
			twinkle3(id);
	},1000);
}

function setLife(){
	$('#card1').eq(0).text(life[1]);
	$('#card2').eq(0).text(life[3]);
	$('#card3').eq(0).text(life[5]);
	$('#card4').eq(0).text(life[7]);
	$('#card5').eq(0).text(life2[1]);
	$('#card6').eq(0).text(life2[3]);
	$('#card7').eq(0).text(life2[5]);
	$('#card8').eq(0).text(life2[7]);

	if(life[1] === '위험'){
		$('#card1').eq(0).attr('style','color:red');
		twinkle1('card1');
	}
	if(life[3] === '위험'){
		$('#card2').eq(0).attr('style','color:red');
		twinkle1('card2');
	}
	if(life[5] === '위험'){
		$('#card3').eq(0).attr('style','color:red');
		twinkle1('card3');
	}
	if(life[7] === '위험'){
		$('#card4').eq(0).attr('style','color:red');
		twinkle1('card4');
	}
	if(life2[1] === '위험'){
		$('#card5').eq(0).attr('style','color:red');
		twinkle3('card5');
	}
	if(life2[3] === '위험'){
		$('#card6').eq(0).attr('style','color:red');
		twinkle3('card6');
	}
	if(life2[5] === '위험'){
		$('#card7').eq(0).attr('style','color:red');
		twinkle3('card7');
	}
	if(life2[7] === '위험'){
		$('#card8').eq(0).attr('style','color:red');
		twinkle3('card8');
	}
}