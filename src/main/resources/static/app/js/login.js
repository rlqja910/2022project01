var qnList = [];
var thisForm='';

$(document).ready(function() {

console.log('시작');

allQn();

});

function allQn(){
	console.log('초기 시억상자 가져옵니다');
	thisForm = '1';
	commonAjaxCall('/login/selectQn.json',{ordg:'3'}, getFn);
}

function secondQn(){
	console.log('2단계 시억상자 가져옵니다');
	thisForm = '2';
	commonAjaxCall('/login/selectQn.json',{ordg:'2'}, getFn);
}

function finalQn(){
	console.log('최종 시억상자 가져옵니다');
	thisForm = '3';
	commonAjaxCall('/login/selectQn.json',{ordg:'1'}, getFn);
}

function junkQn(){
	console.log('쓰레기통을 가져옵니다');
	thisForm = '4';
	commonAjaxCall('/login/selectQn.json',{ordg:'4'}, getFn);
}

function getFn(result){
	
	console.log(result);
	if(result.qnList.length == 0){
		$('#question').html('없어요');
		$('#question').val('');
		$('#dan').text('');
		$('#answer').html('');
		$('#questionMessage').html('');
		$('#cnt').text('');
		
		alert('없어요');
		return;
	}
	qnList = result.qnList;
	
	var shuffledArray = [...qnList].sort(()=>Math.random()-0.5);
	
	$('#question').html('');
	$('#question').val('');
	$('#dan').text('');
	$('#answer').html('');
	$('#questionMessage').html('');
	$('#cnt').text('');
	
	$('#question').html(shuffledArray[0].question);
	$('#question').val(shuffledArray[0].id);
	$('#dan').text(shuffledArray[0].rightTitle + '    ( '+ shuffledArray[0].history + ')');
	$('#answer').html(shuffledArray[0].answer);
	if(shuffledArray[0].questionMessage){
		$('#questionMessage').html('<br>'+shuffledArray[0].questionMessage);
		$('#questionMessage').css('color','black');
	}else{
		$('#questionMessage').css('color','white');
	}
	$('#answer').css('color','white');
	$('#cnt').text('총개수 : ' + shuffledArray.length);
	
}

function viewAns(){
	console.log('해답을 봅니다');

	if($('#answer').css('color') == 'rgb(255, 255, 255)'){
		$('#answer').css('color','red');
	}else{
		$('#answer').css('color','white');
	}
}

function goAllQn(){
	console.log('초기 시억상자로 보냅니다');
	var qstnId = $('#question').val();
	commonAjaxCall('/login/updateQn.json',{ordg:'3', id: qstnId}, updateResult);
}

function goSecondQn(){
	console.log('2단계 시억상자로 보냅니다');
	var qstnId = $('#question').val();
	commonAjaxCall('/login/updateQn.json',{ordg:'2', id: qstnId}, updateResult);
}

function goFinalQn(){
	console.log('최종 시억상자로 보냅니다');
	var qstnId = $('#question').val();
	commonAjaxCall('/login/updateQn.json',{ordg:'1', id: qstnId}, updateResult);
}

function goJunkQn(){
	console.log('휴지통으로 보냅니다');
	var qstnId = $('#question').val();
	commonAjaxCall('/login/updateQn.json',{ordg:'4', id: qstnId}, updateResult);
}

function updateResult(result){
	console.log(result);
	if(thisForm == '1'){
		allQn();
	}else if(thisForm == '2'){
		secondQn();
	}else if(thisForm == '3'){
		finalQn();
	}else if(thisForm == '4'){
		junkQn();
	}
}

function resetDb(){
	
	boxData = 
	[
	    {
	        "id": 446764,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "시제품을 끊임없이 제작하며 사이클을 반복하는 개발 방법론으로, 워터폴과 대조적이며, 소프트웨어 개발을 넘어 기업 경영 전반에서 사용되고 있다. 고객의 변화하는 요구사항과 환경 변화에 능동적인 이 소프트웨어 개발 방법론은?",
	            "answer": "애자일(Agile)"
	        }
	    },
	    {
	        "id": 446765,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "(        )은 소프트웨어의 위기를 극복하기 위한 방안으로 연구된 학문이며, 여러 가지 방법론과 도구, 관리 기법들을 통하여 소프트웨어의 품질과 생산성 향상을 목적으로 한다.",
	            "answer": "소프트웨어 공학(Software Engineering)"
	        }
	    },
	    {
	        "id": 446766,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발 각 단계를 확실히 매듭짓고 그 결과를 철저하게 검토하여 승인 과정을 거친 후에 다음 단계를 진행하는 소프트웨어 개발 방법론?",
	            "answer": "폭포수 모형(Waterfall Model)"
	        }
	    },
	    {
	        "id": 446767,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발 방법론과 관련하여 다음 설명에 해당하는 모형은?",
	            "questionPassage": "ㆍ소프트웨어 공학에서 가장 오래되고 가장 폭넓게 사용된 전통적인 소프트웨어 생명 주기 모형으로, 고전적 생명 주기 모형이라고도 한다.<br/>ㆍ소프트웨어 개발 과정의 한 단계가 끝나야만 다음 단계로 넘어갈 수 있는 선형 순차적 모형이다.",
	            "answer": "폭포수 모형(Waterfall Model)"
	        }
	    },
	    {
	        "id": 446768,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발 방법론 중 보헴(Boehm)이 제안한 것으로, 폭포수 모형과 프로토타입 모형의 장점에 위험 분석 기능을 추가한 모형은?",
	            "answer": "나선형 모형<br/>(Spiral Model)"
	        }
	    },
	    {
	        "id": 446769,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발 방법론과 관련하여 다음 설명에 해당하는 모형은?",
	            "questionPassage": "ㆍ여러 번의 소프트웨어 개발 과정을 거쳐 점진적으로 완벽한 최종 소프트웨어를 개발하는 것으로, 점진적 모형이라고도 한다.<br/>ㆍ소프트웨어를 개발하면서 발생할 수 있는 위험을 관리하고 최소화하는 것을 목적으로 한다.",
	            "answer": "나선형 모형<br/>(Spiral Model)"
	        }
	    },
	    {
	        "id": 446770,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음에 제시된 나선형(Spiral) 모델의 4가지 주요 활동을 순서대로 나열하면?",
	            "questionPassage": "위험 분석, 고객 평가, 계획 수립, 개발 및 검증",
	            "answer": "계획 수립, 위험 분석, 개발 및 검증, 고객 평가"
	        }
	    },
	    {
	        "id": 446771,
	        "templateId": 9,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★★",
	            "question": "다음 보기에서 애자일(Agile) 방법론에 해당하는 것은?",
	            "questionPassage": [
	                "㉠ 스크럼(Scrum)",
	                "㉡ XP(eXtreme Programming)",
	                "㉢ 기능 중심 개발(FDD; Feature Driven Development)",
	                "㉣ 모듈 중심 개발(MDD; Module Driven Development)"
	            ],
	            "answer": [
	                "1",
	                "2",
	                "3"
	            ]
	        }
	    },
	    {
	        "id": 446772,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발 방법론 중 프로토타입 모형(Prototype Model)에 대해 간략히 서술하면?",
	            "answer": "프로토타입은 <span class=\"underline\">개발될 소프트웨어에 대한 견본품을 만들어 최종 결과물을 예측하는 모형</span>이다."
	        }
	    },
	    {
	        "id": 446773,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음이 설명하는 소프트웨어 개발과 관련된 용어는?",
	            "questionPassage": "ㆍ소프트웨어 개발 방법론의 바탕이 되는 것으로, 소프트웨어를 개발하기 위한 설계, 운용, 유지보수 등의 과정을 각 단계별로 나눈 것이다.<br/>ㆍ소프트웨어 개발 단계와 각 단계별 주요 활동, 그리고 활동의 결과에 대한 산출물로 표현한다.",
	            "answer": "소프트웨어 생명 주기(Software Life Cycle)"
	        }
	    },
	    {
	        "id": 446774,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 생명 주기 모형 중 고객의 요구사항 변화에 유연하게 대응할 수 있도록 일정한 주기를 반복하면서 개발과정을 진행하는 것으로 어느 특정 개발 방법론이 아니라 좋은 것을 빠르고 낭비 없게 만들기 위해 고객과의 소통에 초점을 맞춘 방법론은?",
	            "answer": "애자일(Agile)"
	        }
	    },
	    {
	        "id": 446775,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음이 설명하는 소프트웨어 개발 기법은?",
	            "questionPassage": "ㆍ팀원들이 스스로 팀을 구성하며, 개발 작업의 모든 것을 스스로 해결할 수 있어야 한다.<br/>ㆍ개발에 필요한 요구사항에 우선순위를 부여한 제품기능 목록(Product Backlog)을 작성한다.",
	            "answer": "스크럼(Scrum)"
	        }
	    },
	    {
	        "id": 446776,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발 기법 중 팀이 중심이 되어 개발의 효율성을 높이는 기법으로 개발 주기를 의미하는 스프린트를 2 ~ 4주 정도의 기간으로 진행하고 스프린트 회고(Retrospective)를 통해 스프린트 동안 발생한 문제점을 파악하고 이에 대한 해결 방안을 모색하는 기법은?",
	            "answer": "스크럼(Scrum)"
	        }
	    },
	    {
	        "id": 446777,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "스크럼의 팀 구성원 중 이해관계자들의 의견을 종합하여 백로그(Backlog)를 작성하는 주체는?",
	            "answer": "제품 책임자(Product Owner)"
	        }
	    },
	    {
	        "id": 446778,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "스크럼의 팀 구성원 중 스크럼 팀이 스크럼을 잘 수행할 수 있도록 가이드 역할을 수행하는 사람은?",
	            "answer": "스크럼 마스터(SM; Scrum Master)"
	        }
	    },
	    {
	        "id": 446779,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음의 스크럼(Scrum) 개발 과정을 진행 순서에 맞게 나열하면?",
	            "questionPassage": "㉠ 스프린트(Sprint)<br/>㉡ 스프린트 회고(Sprint Retrospective)<br/>㉢ 일일 스크럼 회의(Daily Scrum Meeting)<br/>㉣ 스프린트 검토 회의(Sprint Review)<br/>㉤ 스프린트 계획 회의(Sprint Planning Meeting)",
	            "answer": "㉤ → ㉠ → ㉢ → ㉣ → ㉡"
	        }
	    },
	    {
	        "id": 446780,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "개발 방법론과 관련된 다음 설명에서 괄호에 공통으로 들어갈 용어는?",
	            "questionPassage": "(       )은 애자일 모형을 기반으로 하는 팀 중심의 소프트웨어 개발 모형으로, 럭비에서 반칙으로 경기가 중단된 경우 양 팀의 선수들이 럭비공을 가운데 두고 상대팀을 밀치기 위해 서로 대치해 있는 팀 대형인 (       )에서 유래하였다. (       )은 10명 이하의 팀으로 구성되어 백로그(Backlog)를 기반으로 개발을 진행한다.",
	            "answer": "스크럼(Scrum)"
	        }
	    },
	    {
	        "id": 446781,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 공학에서 리팩토링(Refactoring)을 하는 목적은?",
	            "answer": "리팩토링의 목적은 프로그램을 쉽게 이해하고 수정하여 빠르게 개발할 수 있도록 하기 위함이다."
	        }
	    },
	    {
	        "id": 446782,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "수시로 발생하는 고객의 요구사항에 유연하게 대응하기 위해 고객의 참여와 개발 과정의 반복을 극대화하여 개발 생산성을 향상시키는 익스트림 프로그래밍(eXtreme Programming)의 5가지 핵심 가치에는 의사소통(Communication), (       ), 용기(Courage), (      ), 피드백(Feedback)이 있다. ",
	            "answer": "단순성(Simplicity), 존중(Respect)"
	        }
	    },
	    {
	        "id": 446783,
	        "templateId": 9,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★☆",
	            "question": "다음 보기에서 XP(eXtreme Programming)의 주요 실천 방법을 고르시오.",
	            "questionPassage": [
	                "㉠ Linear Sequential Method",
	                "㉡ Pair Programming",
	                "㉢ Collective Ownership",
	                "㉣ Continuous Integration"
	            ],
	            "answer": [
	                "2",
	                "3",
	                "4"
	            ]
	        }
	    },
	    {
	        "id": 446784,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "애자일 기반의 개발 방법론 중 수시로 발생하는 고객의 요구사항에 유연하게 대응하기 위해 고객의 참여와 개발 과정의 반복을 극대화하여 개발 생산성을 향상시키는 모형으로 릴리즈 테스트마다 고객을 직접 참여시킴으로써 요구한 기능이 제대로 작동하는지 고객이 직접 확인할 수 있는 모형은?",
	            "answer": "XP(eXtreme Programming)"
	        }
	    },
	    {
	        "id": 446785,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "애자일 기반의 개발 방법론 중 짧고 반복적인 개발 주기, 단순한 설계, 고객의 적극적인 참여를 통해 소프트웨어를 빠르게 개발하는 것을 목적으로 하는 모형으로 의사소통(Communication), 단순성(Simplicity), 용기(Courage), 존중(Respect), 피드백(Feedback)을 핵심 가치로 삼는 모형은?",
	            "answer": "XP(eXtreme Programming)"
	        }
	    },
	    {
	        "id": 446786,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 내용을  XP의 개발 프로세스 진행 순서에 맞게 나열하면?",
	            "questionPassage": "릴리즈 계획 수립, 승인 검사, 소규모 릴리즈, 이터레이션",
	            "answer": "릴리즈 계획 수립 → 이터레이션 → 승인 검사 → 소규모 릴리즈"
	        }
	    },
	    {
	        "id": 446787,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "XP(eXtreme Programming) 개발 방법론의 주요 실천 방법<br/>(Practice) 중 다음 설명에 해당하는 실천 방법은?",
	            "questionPassage": "다른 사람과 함께 프로그래밍을 수행함으로써 개발에 대한 책임을 공동으로 나눠 갖는 환경을 조성한다.",
	            "answer": "Pair Programming(짝 프로그래밍) "
	        }
	    },
	    {
	        "id": 446788,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "XP(eXtreme Programming) 개발 방법론의 주요 실천 방법<br/>(Practice) 중 다음 설명에 해당하는 실천 방법은?",
	            "questionPassage": "ㆍ개발자가 실제 코드를 작성하기 전에 테스트 케이스를 먼저 작성하므로 자신이 무엇을 해야 할지를 정확히 파악한다.<br/>ㆍ테스트가 지속적으로 진행될 수 있도록 자동화된 테스팅 도구(구조, 프레임워크)를 사용한다.",
	            "answer": "Test-Driven Development<br/>(테스트 주도 개발)"
	        }
	    },
	    {
	        "id": 446789,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "XP(eXtreme Programming) 개발 방법론의 주요 실천 방법<br/>(Practice) 중 다음 설명에 해당하는 실천 방법은?",
	            "questionPassage": "개발에 참여하는 모든 구성원(고객 포함)들은 각자 자신의 역할이 있고 그 역할에 대한 책임을 가져야 한다.",
	            "answer": "Whole Team(전체 팀)"
	        }
	    },
	    {
	        "id": 446790,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "XP(eXtreme Programming) 개발 방법론의 주요 실천 방법<br/>(Practice) 중 다음 설명에 해당하는 실천 방법은?",
	            "questionPassage": "모듈 단위로 나눠서 개발된 코드들은 하나의 작업이 마무리될 때마다 지속적으로 통합된다.",
	            "answer": "Continuous Integration<br/>(계속적인 통합)"
	        }
	    },
	    {
	        "id": 446791,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "XP(eXtreme Programming) 개발 방법론의 주요 실천 방법<br/>(Practice) 중 다음 설명에 해당하는 실천 방법은?",
	            "questionPassage": "ㆍ프로그램 기능의 변경 없이 시스템을 재구성함<br/>ㆍ목적 : 프로그램을 쉽게 이해하고 쉽게 수정하여 빠르게 개발할 수 있도록 하기 위함",
	            "answer": "Refactoring(리팩토링)"
	        }
	    },
	    {
	        "id": 446792,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "XP(eXtreme Programming) 개발 방법론의 주요 실천 방법<br/>(Practice) 중 다음 설명에 해당하는 실천 방법은?",
	            "questionPassage": "릴리즈 기간을 짧게 반복함으로써 고객의 요구 변화에 신속히 대응할 수 있다.",
	            "answer": "Small Releases<br/>(소규모 릴리즈)"
	        }
	    },
	    {
	        "id": 446793,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음은 현행 시스템 파악 절차를 3단계로 구분한 것이다. 2단계에서 파악해야 할 내용 두 가지는?",
	            "answer": "아키텍처 구성 파악, 소프트웨어 구성 파악"
	        }
	    },
	    {
	        "id": 446794,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음은 현행 시스템 파악 절차 중 소프트웨어 구성 파악에 대한 설명이다. 괄호에 공통적으로 들어갈 가장 적합한 용어를 쓰시오.",
	            "questionPassage": "ㆍ소프트웨어 구성에는 단위 업무 시스템별로 업무 처리를 위해 설치되어 있는 소프트웨어들의 제품명, 용도, (       ) 적용 방식, (       ) 수 등을 명시한다.<br/>ㆍ시스템 구축비용 면에서 소프트웨어 비용이 적지 않은 비중을 차지하므로, 상용 소프트웨어의 경우 (       ) 적용 방식의 기준과 보유한 (      )의 파악이 중요하다.",
	            "answer": "라이선스(License)"
	        }
	    },
	    {
	        "id": 446795,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "서비스의 연속성을 보장하기 위해 운용 서버에 장애가 발생했을 때 대기 서버로 서비스를 계속 제공하는 서버 구성 방식으로, 운용 서버의 자료 변경이 대기 서버에도 동일하게 복제되어 관리되는 방식을 가리키는 용어를 쓰시오.",
	            "answer": "서버 이중화(Replication)"
	        }
	    },
	    {
	        "id": 446796,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음은 현행 시스템을 파악하는 과정에서 수행하는 작업들을 그룹별로 묶어 놓은 것이다. 그룹을 작업 순서대로 나열하면?",
	            "questionPassage": "A : 아키텍처 구성 파악, 소프트웨어 구성 파악<br/>B : 하드웨어 구성 파악, 네트워크 구성 파악<br/>C : 시스템 구성 현황 파악, 시스템 기능 파악, 시스템 인터페이스 현황 파악",
	            "answer": "C → A → B"
	        }
	    },
	    {
	        "id": 446797,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음은 현행 시스템 파악 절차 중 하드웨어 구성 파악에 대한 설명이다. 괄호에 공통적으로 들어갈 가장 적합한 용어는?",
	            "questionPassage": "ㆍ하드웨어 구성에는 단위 업무 시스템들이 운용되는 서버의 주요 사양과 수량, 그리고 (       )의 적용 여부를 명시한다.<br/>ㆍ서버의 (       )란 운용 서버의 장애 시 대기 서버로 서비스를 계속 유지할 수 있도록 운용 서버의 자료 변경이 예비 서버에도 동일하게 복제되도록 관리하는 것으로, 서버의 (       )는 기간 업무의 서비스 기간과 장애 대응 정책에 따라 필요 여부가 결정된다.",
	            "answer": "이중화(Replication)"
	        }
	    },
	    {
	        "id": 446798,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "DBMS 관련 요구사항 분석 시 고려사항에는 (       ), 성능, 기술지원, (      ), 구축 비용이 있다. 괄호에 들어갈 가장 알맞은 고려사항은?",
	            "answer": "가용성, 상호 호환성"
	        }
	    },
	    {
	        "id": 446799,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "사용자의 요구에 따라 변하는 동적인 콘텐츠를 처리하기 위해 사용되는 미들웨어로, 데이터 접근, 세션 관리, 트랜잭션 관리 등을 위한 라이브러리를 제공하는 것은?",
	            "answer": "웹 애플리케이션 서버(WAS; Web Application Server)"
	        }
	    },
	    {
	        "id": 446800,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "누구나 별다른 제한 없이 사용할 수 있도록 소스 코드가 공개된 소프트웨어로, 사용 시 라이선스의 종류, 사용자 수, 기술의 지속 가능성 등을 고려해야 하는 소프트웨어를 가리키는 용어는?",
	            "answer": "오픈 소스(Open Source)"
	        }
	    },
	    {
	        "id": 446801,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "컴퓨터 시스템의 자원을 효율적으로 관리하며, 사용자가 컴퓨터를 편리하고 효율적으로 사용할 수 있도록 환경을 제공하는 소프트웨어는?",
	            "answer": "운영체제(OS, Operating System)"
	        }
	    },
	    {
	        "id": 446802,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음의 설명과 가장 부합하는 용어는?",
	            "questionPassage": "ㆍ소프트웨어가 어떤 문제를 해결하기 위해 제공하는 서비스에 대한 설명과 정상적으로 운영되는데 필요한 제약조건 등을 나타낸다.<br/>ㆍ소프트웨어 개발이나 유지 보수 과정에서 필요한 기준과 근거를 제공한다.<br/>ㆍ개발하려는 소프트웨어의 전반적인 내용을 확인할 수 있게 하므로 개발에 참여하는 이해관계자들 간의 의사소통을 원활하게 하는 데 도움을 준다.",
	            "answer": "요구사항(Requirement)"
	        }
	    },
	    {
	        "id": 446803,
	        "templateId": 9,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "question": "다음에 제시된 요구사항 중 기능 요구사항을 모두 고르면?",
	            "questionPassage": [
	                "㉠ 담당 교수는 자신이 맡은 과목의 성적을 입력 또는 수정한다.",
	                "㉡ 학적관리자는 학생 정보를 등록, 삭제할 수 있다.",
	                "㉢ 학생은 자신이 수강한 모든 과목의 성적을 조회할 수 있다.",
	                "㉣ 시스템 장애로 인한 정지시간이 1년에 10시간을 넘지 않아야 한다."
	            ],
	            "answer": [
	                "1",
	                "2",
	                "3"
	            ]
	        }
	    },
	    {
	        "id": 446804,
	        "templateId": 9,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "question": "다음에 제시된 요구사항 중 비기능 요구사항을 모두 고르면?",
	            "questionPassage": [
	                "㉠ 담당 교수는 자신이 맡은 과목의 성적을 입력 또는 수정한다.",
	                "㉡ 학적관리자는 학생 정보를 등록, 삭제할 수 있다.",
	                "㉢ 학생은 자신이 수강한 모든 과목의 성적을 조회할 수 있다.",
	                "㉣ 시스템 장애로 인한 정지시간이 1년에 10시간을 넘지 않아야 한다."
	            ],
	            "answer": [
	                "4"
	            ]
	        }
	    },
	    {
	        "id": 446805,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "요구사항의 4가지 유형은?",
	            "answer": "기능 요구사항, 비기능 요구사항, 사용자 요구사항, 시스템<br/>요구사항"
	        }
	    },
	    {
	        "id": 446806,
	        "templateId": 9,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "question": "다음에 제시된 요구사항 중 기능 요구사항에 해당하는 것을 고르면?",
	            "questionPassage": [
	                "㉠ 항공편, 탑승객, 예약을 입력하는 방법을 결정해야 한다.",
	                "㉡ 티켓과 리포트에 어떤 정보를 표시할지 결정해야 한다.",
	                "㉢ 여행사와 고객이 데이터베이스에 접근할 때 어떤 정보를 얻을 수 있는지 결정해야 한다.",
	                "㉣ 자주 탑승하는 고객을 서비스하기 위해 시스템을 확장할 수 있도록 설계해야 한다."
	            ],
	            "answer": [
	                "1",
	                "2",
	                "3"
	            ],
	            "solution": "㉠은 입력 기능, ㉡, ㉢은 출력 기능으로 기능 요구사항에 해당합니다."
	        }
	    },
	    {
	        "id": 446807,
	        "templateId": 9,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "question": "다음에 제시된 요구사항 중 비기능 요구사항에 해당하는 것을 고르면?",
	            "questionPassage": [
	                "㉠ 항공편, 탑승객, 예약을 입력하는 방법을 결정해야 한다.",
	                "㉡ 티켓과 리포트에 어떤 정보를 표시할지 결정해야 한다.",
	                "㉢ 여행사와 고객이 데이터베이스에 접근할 때 어떤 정보를 얻을 수 있는지 결정해야 한다.",
	                "㉣ 자주 탑승하는 고객을 서비스하기 위해 시스템을 확장할 수 있도록 설계해야 한다."
	            ],
	            "answer": [
	                "4"
	            ],
	            "solution": "㉣은 확장성에 대한 것으로 비기능 요구사항에 해당합니다."
	        }
	    },
	    {
	        "id": 446808,
	        "templateId": 9,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★☆",
	            "question": "다음 보기에서 요구사항 개발 과정에서 필요한 기술을 모두 고르면?",
	            "questionPassage": [
	                "㉠ 청취와 인터뷰 질문 기술",
	                "㉡ 분석과 중재 기술",
	                "㉢ 설계 및 코딩 기술",
	                "㉣ 관찰 및 모델 작성 기술",
	                "㉤ 데이터 구조 분석 기술",
	                "㉥ 인터페이스 연계 기술"
	            ],
	            "answer": [
	                "1",
	                "2",
	                "4"
	            ]
	        }
	    },
	    {
	        "id": 446809,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "요구사항 명세 기법 중 다음의 설명과 가장 부합하는 기법을 쓰시오.",
	            "questionPassage": "사용자의 요구를 표현할 때 수학적인 원리와 표기법을 이용한 기법으로, 주로 Z 기법을 사용하여 사용자의 요구사항을 표현한다. 사용자의 요구를 정확하고 간결하게 표현할 수 있다.",
	            "answer": "정형 명세 기법"
	        }
	    },
	    {
	        "id": 446810,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음에 제시된 요구사항 개발 프로세스 단계를 순서에 맞게 나열하면?",
	            "questionPassage": "도출(Elicitation), 확인(Validation), 명세(Specification), 분석(Analysis)",
	            "answer": "도출(Elicitation) → 분석(Analysis)  → 명세(Specification)   → 확인(Validation)",
	            "solution": "㉠, ㉣, ㉢, ㉡"
	        }
	    },
	    {
	        "id": 446811,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음의 설명과 가장 부합하는 요구사항 개발 프로세스는?",
	            "questionPassage": "개발 대상에 대한 사용자의 요구사항 중 명확하지 않거나 모호하여 이해되지않는 부분을 발견하고 이를 걸러내기 위한 과정으로 사용자 요구사항의 타당성을 조사하고 비용과 일정에 대한 제약을 설정한다. 내용이 중복되거나 하나로 통합되어야 하는 등 서로 상충되는 요구사항이 있으면 이를 해결한다.",
	            "answer": "요구사항 분석(Requirement Analysis)"
	        }
	    },
	    {
	        "id": 446812,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "요구사항 개발 프로세스 중 요구사항 명세(Requirement Specification)가 무엇인지 그 개념을 간략히 서술하면?",
	            "answer": "요구사항 명세는 <span class=\"underline\">분석된 요구사항을 바탕으로 모델을 작성하고 문서화하는 것</span>이다."
	        }
	    },
	    {
	        "id": 446813,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "요구공학(Requirements Engineering)의 개념을 간략히 서술하면?",
	            "answer": "요구공학은 <span class=\"underline\">요구사항을 정의하고, 분석 및 관리하는 프로세스를 연구하는 학문</span>이다."
	        }
	    },
	    {
	        "id": 446814,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "요구사항 명세 기법 중 다음 설명에 해당하는 기법은?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_003.png\"/>",
	            "answer": "정형 명세 기법 "
	        }
	    },
	    {
	        "id": 446815,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "요구사항 명세 기법 중 다음 설명에 해당하는 기법은?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_004.png\"/>",
	            "answer": "비정형 명세 기법"
	        }
	    },
	    {
	        "id": 446816,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "요구사항 개발 프로세스 중 요구사항 명세서가 정확하고 완전하게 작성되었는지를 검토하는 활동은?",
	            "answer": "요구사항 확인(Requirement Validation)"
	        }
	    },
	    {
	        "id": 446817,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음의 설명과 가장 부합하는 요구사항 개발 프로세스의 단계는?",
	            "questionPassage": "ㆍ시스템, 사용자, 그리고 시스템 개발에 관련된 사람들이 서로 의견을 교환하여 요구사항이 어디에 있는지, 어떻게 수집할 것인지를 식별하고 이해하는 과정이다.<br/>ㆍ이 단계에서는 다양한 이해관계자 간의 효율적인 의사소통이 중요하다.<br/>ㆍ소프트웨어 개발 생명 주기(SDLC; Software Development Life Cycle)동안 지속적으로 반복된다.",
	            "answer": "요구사항 도출(Requirement Elicitation)"
	        }
	    },
	    {
	        "id": 446818,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발 과정 중 다음과 같은 작업이 수행되는 단계는?",
	            "questionPassage": "ㆍ비용과 일정에 대한 제약 설정<br/>ㆍ타당성 조사<br/>ㆍ요구사항 정의 문서화<br/>ㆍ목표 설정",
	            "answer": "요구사항 분석(Requirement Analysis)"
	        }
	    },
	    {
	        "id": 446819,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발 단계 중 요구 분석 과정에서는 다양한 분석 도구가 사용된다. 다음 보기에서 설명하는 분석 도구는?",
	            "questionPassage": "ㆍ자료 흐름 그래프 또는 버블(Bubble) 차트라고도 한다.<br/>ㆍ구조적 분석 기법에 이용된다.<br/>ㆍ자료의 흐름을 명확하게 표현할 수 있다.<br/>ㆍ화살표, 원, 사각형, 직선(단선/이중선)을 이용하여 자료의 흐름을 표시한다.",
	            "answer": "자료 흐름도(DFD; Data Flow Diagram)"
	        }
	    },
	    {
	        "id": 446820,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "요구사항 분석에서 자료의 흐름 및 변환 과정과 기능을 도형 중심으로 기술하는 자료 흐름도(Data Flow Diagram)의 4가지 구성 요소는?",
	            "answer": "프로세스(Process), 자료 흐름(Flow), 자료 저장소(Data Store), 단말(Terminator)"
	        }
	    },
	    {
	        "id": 446821,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "자료 사전(Data Dictionary)에서 사용하는 기호 중 자료의 생략을 나타내는 기호는?",
	            "answer": "( )"
	        }
	    },
	    {
	        "id": 446822,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "자료 사전(Data Dictionary)에서 사용하는 기호 중 자료의 선택을 나타내는 기호는?",
	            "answer": "[ ]"
	        }
	    },
	    {
	        "id": 446823,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "자료 사전(Data Dictionary)에서 사용하는 기호 중 자료의 반복을 나타내는 기호는?",
	            "answer": "{ }"
	        }
	    },
	    {
	        "id": 446824,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "자료 사전(Data Dictionary)에서 사용하는 기호 중 자료의 정의를 나타내는 기호는?",
	            "answer": "="
	        }
	    },
	    {
	        "id": 446825,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "자료 사전(Data Dictionary)에서 사용하는 기호 중 자료의 연결을 나타내는 기호는?",
	            "answer": "+"
	        }
	    },
	    {
	        "id": 446826,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "자료 사전(Data Dictionary)에서 사용하는 기호 중 자료의 설명을 나타내는 기호는?",
	            "answer": "* *"
	        }
	    },
	    {
	        "id": 446827,
	        "templateId": 9,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "question": "다음 보기에서 구조적 분석 기법 도구에 해당하는 것을 모두 고르면?",
	            "questionPassage": [
	                "㉠ 소단위 명세서 ",
	                "㉡ HIPO",
	                "㉢ 디자인 패턴 ",
	                "㉣ 자료 사전",
	                "㉤ 자료 흐름도(DFD) ",
	                "㉥ 유스케이스(Use Case)"
	            ],
	            "answer": [
	                "1",
	                "4",
	                "5"
	            ]
	        }
	    },
	    {
	        "id": 446828,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "자료 흐름도에서 사용하는 네 가지 기본 기호 중 다음 설명에 해당하는 기호는?",
	            "questionPassage": "ㆍ자료를 변환시키는 시스템의 한 부분(처리 과정)을 나타내며 처리, 기능, 변환, 버블이라고 한다.<br/>ㆍ원이나 둥근 사각형으로 표시하고 그 안에 프로세스 이름을 기입한다.",
	            "answer": "프로세스<br/>(Process)"
	        }
	    },
	    {
	        "id": 446829,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "자료 흐름도에서 사용하는 네 가지 기본 기호 중 다음 설명에 해당하는 기호는?",
	            "questionPassage": "ㆍ자료의 이동(흐름)이나 연관관계를 나타낸다.<br/>ㆍ화살표 위에 자료의 이름을 기입한다.",
	            "answer": "자료 흐름(Data Flow)"
	        }
	    },
	    {
	        "id": 446830,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "자료 흐름도에서 사용하는 네 가지 기본 기호 중 다음 설명에 해당하는 기호는?",
	            "questionPassage": "ㆍ시스템에서의 파일, 데이터베이스 등을 나타낸다.<br/>ㆍ도형 안에 저장소의 이름을 기입한다.",
	            "answer": "자료 저장소(Data Store)"
	        }
	    },
	    {
	        "id": 446831,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "자료 흐름도에서 사용하는 네 가지 기본 기호 중 다음 설명에 해당하는 기호는?",
	            "questionPassage": "ㆍ시스템과 교신하는 외부 개체로, 입력 데이터가 만들어지고 출력 데이터를 받는다.<br/>ㆍ도형 안에 이름을 기입한다.",
	            "answer": "단말<br/>(Terminator)"
	        }
	    },
	    {
	        "id": 446832,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 요구사항 분석 방법은?",
	            "questionPassage": "ㆍ자료의 흐름과 처리를 중심으로 하는 요구사항 분석 방법이다.<br/>ㆍ도형 중심의 분석용 도구와 분석 절차를 이용하여 사용자의 요구사항을 파악하고 문서화한다.<br/>ㆍ자료 흐름도(DFD), 자료 사전(DD), 소단위 명세서 등의 도구를 이용하여 모델링한다.",
	            "answer": "구조적 분석 기법"
	        }
	    },
	    {
	        "id": 446833,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "SoftTech 사에서 개발한 것으로, 구조적 요구 분석을 하기 위해 블록 다이어그램을 채택한 자동화 도구의 영문 약어는?",
	            "answer": "SADT"
	        }
	    },
	    {
	        "id": 446834,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "TRW 사가 실시간 처리 소프트웨어 시스템에서 요구사항을 명확히<br/>기술하도록 할 목적으로 개발한 도구로 RSL과 REVS를 사용하는 자동화 도구의 영문 약어는?",
	            "answer": "SREM"
	        }
	    },
	    {
	        "id": 446835,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "요구사항 기술 언어인 PSL과 기술한 요구사항을 분석하여 보고서를 출력하는 문제 분석기인 PSA를 사용하는 자동화 도구로 미시간 대학에서 개발한 자동화 도구는?",
	            "answer": "PSL/PSA"
	        }
	    },
	    {
	        "id": 446836,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "시스템 공학 방법 응용에 대한 자동 접근 방법으로 개발 주기의 전 과정에 이용할 수 있는 통합 자동화 도구의 영문 약어는?",
	            "answer": "TAGS"
	        }
	    },
	    {
	        "id": 446837,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "요구사항 분석 도구 중 시스템의 분석 및 설계 또는 문서화에 사용되는 기법으로, 시스템 실행 과정인 입력, 처리, 출력의 기능을 나타내는 것은?",
	            "answer": "HIPO"
	        }
	    },
	    {
	        "id": 446838,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "요구사항 분석 도구 중 다음 설명에 가장 부합하는 용어의 영문 약어는?",
	            "questionPassage": "ㆍ하향식 소프트웨어 개발을 위한 문서화 도구로 기능과 자료의 의존 관계를 동시에 표현할 수 있다.<br/>ㆍ차트의 종류에는 가시적 도표, 총체적 도표, 세부적 도표가 있다.<br/>ㆍ기호, 도표 등을 사용하므로 보기 쉽고 이해하기 쉽다.",
	            "answer": "HIPO"
	        }
	    },
	    {
	        "id": 446839,
	        "templateId": 9,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★☆",
	            "question": "다음에서 요구사항 분석용 자동화 도구를 모두 고르면?",
	            "questionPassage": [
	                "㉠ SADT    ",
	                "㉡ SWOT   ",
	                "㉢ SREM    ",
	                "㉣ OSPF"
	            ],
	            "answer": [
	                "1",
	                "3"
	            ]
	        }
	    },
	    {
	        "id": 446840,
	        "templateId": 9,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★★",
	            "question": "다음에서 요구사항 분석용 자동화 도구를 모두 고르면?",
	            "questionPassage": [
	                "㉠ PSL/PSA ",
	                "㉡ CSMA",
	                "㉢ SWOT",
	                "㉣ TAGS"
	            ],
	            "answer": [
	                "1",
	                "4"
	            ]
	        }
	    },
	    {
	        "id": 446841,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "요구사항 분석용 CASE에 대해 간략히 서술하면?",
	            "answer": "요구사항 분석용 CASE는 <span class=\"underline\">요구사항을 자동으로 분석하고, 요구사항 분석 명세서를 기술하도록 개발된 도구</span>이다."
	        }
	    },
	    {
	        "id": 446842,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "HIPO Chart는 시스템의 기능을 여러 개의 고유 모듈로 분할하여 이들 간의 인터페이스를 계층 구조로 표현한 것이다. HIPO Chart 종류 3가지는?",
	            "answer": "가시적 도표(Visual Table of Contents), 총체적 도표(Overview Diagram), 세부적 도표(Detail Diagram)"
	        }
	    },
	    {
	        "id": 446843,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "시스템 개발 과정에서 의사소통이 원활하게 이루어지도록 표준화한 대표적인 객체지향 모델링 언어인 UML의 3가지 기본 구성 요소 는?",
	            "answer": "사물(Things), 관계(Relationship), 다이어그램(Diagram)"
	        }
	    },
	    {
	        "id": 446844,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "시스템 분석, 설계, 구현 등 시스템 개발 과정에서 시스템 개발자와 고객 또는 개발자 상호 간의 의사소통이 원활하게 이루어지도록 표준화한 대표적인 객체지향 모델링 언어로 Rumbaugh, Booch, Jacobson 등의 객체지향 방법론의 장점을 통합하였으며, 객체 기술에 관한 국제표준화기구인 OMG(Object Management Group)에서 표준으로 지정한 언어는?",
	            "answer": "UML(Unified Modeling Language)"
	        }
	    },
	    {
	        "id": 446845,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "UML에서 사물(Things) 중 클래스, 유스케이스 등과 같이 시스템의 개념적, 물리적 요소를 표현하는 사물은?",
	            "answer": "구조 사물(Structural Things)"
	        }
	    },
	    {
	        "id": 446846,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "UML에서 사물(Things) 중 상호작용, 상태 머신 등과 같이 시간과 공간에 따른 요소들의 행위를 표현 사물은?",
	            "answer": "행동 사물(Behavioral Things)"
	        }
	    },
	    {
	        "id": 446847,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "UML에서 사물(Things) 중 패키지(Package)와 같이 요소들을 묶어서 표현 사물은?",
	            "answer": "그룹 사물(Grouping Things)"
	        }
	    },
	    {
	        "id": 446848,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "UML에서 사물(Things) 중 노트와 같이 부가적인 설명이나 제약조건 등을 표현하는 사물은?",
	            "answer": "주해 사물(Annotation Things)"
	        }
	    },
	    {
	        "id": 446849,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "아래의 UML 모델에서 ‘차’ 클래스와 각 클래스의 관계는?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_014.png\"/>",
	            "answer": "일반화(Generalization) 관계"
	        }
	    },
	    {
	        "id": 446850,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음의 UML 모델과 설명이 의미하는 관계는?<br/><div class=\"border-block\">관리자가 접속할 때 로그인을 해야 하고 회원이 접속할 때도 로그인을 해야한다. 그러므로 관리자와 회원은 로그인이라는 기능으로 그룹화 할 수 있다.</div><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_015.png\"/>",
	            "answer": "실체화(Realization) 관계"
	        }
	    },
	    {
	        "id": 446851,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "UML에서 사용하는 관계 중 필요에 의해 서로에게 영향을 주는 짧은 시간 동안만 연관을 유지하는 관계는?",
	            "answer": "의존(Dependency) 관계"
	        }
	    },
	    {
	        "id": 446852,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "UML에서 사용하는 관계 중 하나의 사물이 다른 사물에 비해 더 일반적이거나 구체적인 관계는?",
	            "answer": "일반화(Generalization) 관계"
	        }
	    },
	    {
	        "id": 446853,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "UML에서 사용하는 관계 중 하나의 사물이 다른 사물에 포함되어 있는 관계는?",
	            "answer": "집합(Aggregation) 관계"
	        }
	    },
	    {
	        "id": 446854,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "UML에서 사용하는 관계 중 2개 이상의 사물이 서로 관련되어 있는 관계로 사물 사이를 실선으로 연결하여 표현하는 관계는?",
	            "answer": "연관(Association) 관계"
	        }
	    },
	    {
	        "id": 446855,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "UML 다이어그램에서 사용되는 관계 중 다음 기호에 해당하는 관계는?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_005.png\"/>",
	            "answer": "의존(Dependency) 관계"
	        }
	    },
	    {
	        "id": 446856,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "UML 다이어그램에서 사용되는 관계 중 다음 기호에 해당하는 관계는?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_006.png\"/>",
	            "answer": "일반화(Generalization) 관계"
	        }
	    },
	    {
	        "id": 446857,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "UML 다이어그램에서 사용되는 관계 중 다음 기호에 해당하는 관계는?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_007.png\"/>",
	            "answer": "포함(Composition) 관계"
	        }
	    },
	    {
	        "id": 446858,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "UML 다이어그램에서 사용되는 관계 중 다음 기호에 해당하는 관계는?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_008.png\"/>",
	            "answer": "집합(Aggregation) 관계"
	        }
	    },
	    {
	        "id": 446859,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음은 유스케이스(Use Case) 다이어그램의 일부이다. 제시된 다이어그램에 표현된 관계는?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_009.png\"/>",
	            "answer": "일반화(Generalization) 관계",
	            "solution": "문제에 제시된 관계는 ‘이메일 주소로 회원가입’과 ‘소셜 계정으로 회원가입’이라는 하위 유스케이스가 ‘회원가입’이라는 상위 유스케이스로 일반화되는 관계입니다. 이는 “‘회원가입’의 종류에는 ‘이메일 주소로 회원가입’과 ‘소셜 계정으로 회원가입’이 있다.”라고 해석할 수 있습니다."
	        }
	    },
	    {
	        "id": 446860,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음은 다이어그램(Diagram)에 대한 설명이다. 괄호에 각각 들어갈 알맞은 용어는?",
	            "questionPassage": "ㆍ다이어그램은 사물과 관계를 도형으로 표현한 것이다.<br/>ㆍ정적 모델링에서는 주로 (        ) 다이어그램을 사용하고, 동적 모델링에서는 주로 (        ) 다이어그램을 사용한다.",
	            "answer": "구조적, 행위"
	        }
	    },
	    {
	        "id": 446861,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "UML 다이어그램 중 럼바우(Rumbaugh) 객체지향 분석 기법에서 동적 모델링에 활용되는 다이어그램은?",
	            "answer": "상태 다이어그램(State Diagram)"
	        }
	    },
	    {
	        "id": 446862,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "UML 다이어그램 중 럼바우(Rumbaugh) 객체지향 분석 기법에서 객체 모델링에 활용되는 다이어그램은?",
	            "answer": "객체 다이어그램(Object<br/>Diagram)"
	        }
	    },
	    {
	        "id": 446863,
	        "templateId": 9,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "question": "다음에서 구조(Structural) 다이어그램을 모두 고르면?",
	            "questionPassage": [
	                "㉠ 유스케이스 다이어그램(Use Case Diagram)",
	                "㉡ 시퀀스 다이어그램(Sequence Diagram)",
	                "㉢ 활동 다이어그램(Activity Diagram)",
	                "㉣ 배치 다이어그램(Deployment Diagram)",
	                "㉤ 클래스 다이어그램(Class Diagram)",
	                "㉥ 객체 다이어그램(Object Diagram)",
	                "㉦ 컴포넌트 다이어그램(Component Diagram)"
	            ],
	            "answer": [
	                "4",
	                "5",
	                "6",
	                "7"
	            ]
	        }
	    },
	    {
	        "id": 446864,
	        "templateId": 9,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "question": "다음에서 행위(Behavioral) 다이어그램을 모두 고르면?",
	            "questionPassage": [
	                "㉠ 유스케이스 다이어그램(Use Case Diagram)",
	                "㉡ 시퀀스 다이어그램(Sequence Diagram)",
	                "㉢ 활동 다이어그램(Activity Diagram)",
	                "㉣ 배치 다이어그램(Deployment Diagram)",
	                "㉤ 클래스 다이어그램(Class Diagram)",
	                "㉥ 객체 다이어그램(Object Diagram)",
	                "㉦ 컴포넌트 다이어그램(Component Diagram)"
	            ],
	            "answer": [
	                "1",
	                "2",
	                "3"
	            ]
	        }
	    },
	    {
	        "id": 446865,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "UML 확장 모델에서 스테레오 타입 객체를 표현할 때 사용하는 기호는?",
	            "answer": "≪≫"
	        }
	    },
	    {
	        "id": 446866,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "UML에서 표현하는 기본 기능 외에 추가적인 기능을 표현하는 것으로 길러멧(Guilemet)이라고 부르는 겹화살괄호 사이에 표현할 형태를 기술하는 것은?",
	            "answer": "스테레오 타입(Stereotype)"
	        }
	    },
	    {
	        "id": 446867,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "UML 다이어그램 중 구현 단계에서 사용되는 2가지 다이어그램은?",
	            "answer": "컴포넌트 다이어그램(Component Diagram), 배치 다이어그램(Deployment Diagram)"
	        }
	    },
	    {
	        "id": 446868,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "UML 다이어그램 중 결과물, 프로세스, 컴포넌트 등 물리적인 자원의 위치를 표현할 때 사용하는 다이어그램은?",
	            "answer": "배치 다이어그램(Deployment Diagram)"
	        }
	    },
	    {
	        "id": 446869,
	        "templateId": 9,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "question": "UML 다이어그램의 종류 중 구조적 다이어그램을 모두 고르면?",
	            "questionPassage": [
	                "㉠ 커뮤니케이션 다이어그램",
	                "㉡ 복합체 구조 다이어그램",
	                "㉢ 상태 다이어그램",
	                "㉣ 상호작용 개요 다이어그램",
	                "㉤ 타이밍 다이어그램",
	                "㉥ 패키지 다이어그램"
	            ],
	            "answer": [
	                "2",
	                "6"
	            ]
	        }
	    },
	    {
	        "id": 446870,
	        "templateId": 9,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "question": "UML 다이어그램의 종류 중 행위 다이어그램을 모두 고르면?",
	            "questionPassage": [
	                "㉠ 커뮤니케이션 다이어그램",
	                "㉡ 복합체 구조 다이어그램",
	                "㉢ 상태 다이어그램",
	                "㉣ 상호작용 개요 다이어그램",
	                "㉤ 타이밍 다이어그램",
	                "㉥ 패키지 다이어그램"
	            ],
	            "answer": [
	                "1",
	                "3",
	                "4",
	                "5"
	            ]
	        }
	    },
	    {
	        "id": 446871,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "사용자의 요구사항을 분석하여 개발될 시스템이 갖춰야 할 기능을 정리한 후 사용자와 함께 정리된 내용을 공유하기 위해 그림으로 표현하는 기능 모델링에 해당하는 다이어그램 두가지는?",
	            "answer": "유스케이스(Use Case) 다이어그램, 액티비티(Activity) 다이어그램"
	        }
	    },
	    {
	        "id": 446872,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "UML의 다이어그램 중 사용자의 요구사항을 분석하기 위한 도구로 사용자와 다른 외부 시스템들이 개발될 시스템을 이용해 수행할 수 있는 기능을 사용자의 관점에서 표현하는 다이어그램은?",
	            "answer": "유스케이스(Use Case) 다이어그램"
	        }
	    },
	    {
	        "id": 446873,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 괄호에 공통적으로 들어갈 유스케이스(Use Case) 다이어그램의 요소는?",
	            "questionPassage": "ㆍ(       )는 사용자가 보는 관점에서 시스템이 액터에게 제공하는 서비스 또는 기능을 표현한 것이다.<br/>ㆍ타원으로 표현하며, 타원 안쪽이나 아래쪽에 (       ) 이름을 기술한다.<br/>ㆍ(       ) 이름은 액터와 시스템 사이에서 이뤄지는 상호 작용의 목적을 내포하되 단순 명료하게 기술해야 한다.",
	            "answer": "유스케이스(Use Case)"
	        }
	    },
	    {
	        "id": 446874,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "유스케이스(Use Case) 다이어그램의 요소 중 다음 설명에 해당하는 요소는?",
	            "questionPassage": "ㆍ시스템과 상호작용을 하는 모든 외부 요소이다.<br/>ㆍ주로 사람이나 외부 시스템을 의미한다.",
	            "answer": "액터(Actor)"
	        }
	    },
	    {
	        "id": 446875,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 괄호에 공통적으로 들어갈 유스케이스(Use Case) 다이어그램의 요소는?",
	            "questionPassage": "ㆍ유스케이스 다이이그램에서 (     )는 액터와 유스케이스, 유스케이스와 유스케이스 사이 에서 나타날 수 있다.<br/>ㆍ유스케이스에서 나타날 수 있는  (     ) : 포함(Include), 확장(Extends), 일반화(Generalization)",
	            "answer": "관계(Relationship"
	        }
	    },
	    {
	        "id": 446876,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음의 \\<요구사항\\>에 따라 작성된 유스케이스(Use Case) 다이어그램에서 괄호에 들어갈 알맞은 용어는?<br/>\\<요구사항\\><br/><div class=\"border-block\">ㆍ사용자는 ‘도서대출’ 기능을 수행할 수 있다.<br/>ㆍ관리자는 ‘도서관리’ 기능을 수행할 수 있다.<br/>ㆍ‘도서대출’을 수행하거나 ‘도서관리’를 수행하려면, ‘도서검색’을 수행해야 한다.</div><br/>\\<유스케이스 다이어그램\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_016.png\"/>",
	            "answer": "① 도서대출 ② 도서관리 ③ ≪include≫"
	        }
	    },
	    {
	        "id": 446877,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "유스케이스 다이어그램을 표현할 때 사용되는 4가지 구성 요소는?",
	            "answer": "시스템(System) 또는 시스템 범위(System Scope), 액터(Actor), 유스케이스(Use Case), 관계(Relationship)"
	        }
	    },
	    {
	        "id": 446878,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음은 \\<상품대여\\> 시스템에 대한 유스케이스 다이어그램과 그에 대한 해석이다. 해석을 참고하여 유스케이스 다이어그램의 괄호(①, ②)에 들어갈 알맞은 내용은?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_010.png\"/>",
	            "questionPassage": "ㆍ사용자는 고객과 직원으로 구분된다.<br/>ㆍ직원은 상품등록 기능을, 고객은 상품대여 기능을, 사용자는 로그인 기능을 사용할 수 있다.<br/>ㆍ직원이 상품등록 기능을, 고객이 상품대여 기능을 사용하려면 상품검색을 수행해야 한다.<br/>ㆍ상품반납 시 반납일이 지난 경우 연체금부과 기능을 수행한다.",
	            "answer": "① ≪include≫<br/>② ≪extends≫",
	            "solution": "① <br/>ㆍ직원이 ‘상품등록’ 기능을 사용하거나 고객이 ‘상품대여’ 기능을 사용하려면 먼저 ‘상품검색’ 기능을 사용해야 합니다. 이와 같이 두 개 이상의 유스케이스에 공통적으로 적용되는 기능을 분리하여 새로운 유스케이스로 만든 경우, 원래의 유스케이스와 새롭게 분리된 유스케이스와의 관계를 포함(Include) 관계라고 합니다.<br/>ㆍ포함 관계는 원래의 유스케이스에서 새롭게 만든 포함된 유스케이스 쪽으로 점선 화살표를 연결한 후 화살표 위에 ≪include≫라고 표기합니다.<br/>②<br/>ㆍ고객이 상품반납 기능을 수행할 때 반납일이 지난 경우에는 연체금부과 기능을 수행해야 하므로 ‘상품반납’ 유스케이스는 ‘연체금부과’ 유스케이스와 확장(Extend) 관계에 있습니다.<br/>ㆍ확장 관계는 확장될 유스케이스에서 원래의 유스케이스 쪽으로 점선 화살표를 연결한 후 화살표 위에 ≪extends≫라고 표기합니다."
	        }
	    },
	    {
	        "id": 446879,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "UML 다이어그램 중 다음과 같은 특징을 갖는 다이어그램은?",
	            "questionPassage": "ㆍ자료 흐름도(DFD, Data Flow Diagram)와 유사하다.<br/>ㆍ시스템이 어떤 기능을 수행하는지 객체의 처리 로직이나 조건에 따른 처리의 흐름을 순서에 따라 표현한 것이다.<br/>ㆍ유스케이스 안에서 혹은 유스케이스 사이의 복잡한 처리의 흐름을 표현할 수 있다.",
	            "answer": "활동 다이어그램(Activity Diagram)"
	        }
	    },
	    {
	        "id": 446880,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "활동(Activity) 다이어그램의 요소 중 다음 설명에 해당하는 요소의 명칭은?",
	            "questionPassage": "ㆍ액티비티 수행을 담당하는 주체를 구분한다.<br/>ㆍ가로 또는 세로 실선을 그어 구분한다.",
	            "answer": "스윔레인(Swim Lane)"
	        }
	    },
	    {
	        "id": 446881,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "활동(Activity) 다이어그램의 요소 중 더 이상 분해할 수 없는 단일 작업을 의미하는 요소의 명칭은?",
	            "answer": "액션(Action)"
	        }
	    },
	    {
	        "id": 446882,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "활동(Activity) 다이어그램의 요소 중 몇 개의 액션으로 분리될 수 있는 작업을 의미하는 요소의 명칭은?",
	            "answer": "액티비티(Activity)"
	        }
	    },
	    {
	        "id": 446883,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "활동(Activity) 다이어그램의 요소 중 다음 설명에 해당하는 요소의 명칭은?",
	            "questionPassage": "ㆍ조건에 따라 제어의 흐름이 분리됨을 표현한 것이다.<br/>ㆍ들어오는 제어 흐름은 한 개이고 나가는 제어 흐름은 여러 개이다.",
	            "answer": "조건(판단)<br/>노드"
	        }
	    },
	    {
	        "id": 446884,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "활동(Activity) 다이어그램의 요소 중 다음 설명에 해당하는 요소의 명칭은?",
	            "questionPassage": "ㆍ여러 경로의 흐름이 하나로 합쳐짐을 표현한 것이다.<br/>ㆍ들어오는 제어 흐름은 여러 개이고 나가는 제어 흐름은 한 개이다.",
	            "answer": "병합 노드"
	        }
	    },
	    {
	        "id": 446885,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "활동(Activity) 다이어그램의 요소 중 다음 설명에 해당하는 요소의 명칭은?",
	            "questionPassage": "ㆍ액티비티의 흐름이 분리되어 수행됨을 표현한 것이다.<br/>ㆍ들어오는 액티비티 흐름은 한 개이고 나가는 액티비티 흐름은 여러 개이다.",
	            "answer": "포크(Fork)<br/>노드"
	        }
	    },
	    {
	        "id": 446886,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "활동(Activity) 다이어그램의 요소 중 다음 설명에 해당하는 요소의 명칭은?",
	            "questionPassage": "ㆍ분리되어 수행되던 액티비티의 흐름이 다시 합쳐짐을 표현한 것이다.<br/>ㆍ들어오는 액티비티 흐름은 여러 개이고 나가는 액티비티 흐름은 한 개이다.",
	            "answer": "조인(Join)<br/>노드"
	        }
	    },
	    {
	        "id": 446887,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "활동(Activity) 다이어그램의 요소 중 다음 기호의 명칭은?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_017.png\"/>",
	            "answer": "조건(판단) 노드"
	        }
	    },
	    {
	        "id": 446888,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "활동(Activity) 다이어그램의 요소 중 다음 기호의 명칭은?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_018.png\"/>",
	            "answer": "포크(Fork) 노드"
	        }
	    },
	    {
	        "id": 446889,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "활동(Activity) 다이어그램의 요소 중 다음 기호의 명칭은?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_019.png\"/>",
	            "answer": "병합 노드"
	        }
	    },
	    {
	        "id": 446890,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "활동(Activity) 다이어그램의 요소 중 다음 기호의 명칭은?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_020.png\"/>",
	            "answer": "조인(Join) 노드"
	        }
	    },
	    {
	        "id": 446891,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "활동(Activity) 다이어그램의 요소 중 액션(Action)과 액티비티(Activity)의 차이점은?",
	            "answer": "액션(Action)은 더 이상 분해할 수 없는 단일 작업이고, 액티비티(Activity)는 몇 개의 액션으로 분리될 수 있는 작업이다."
	        }
	    },
	    {
	        "id": 446892,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "사용자가 요구한 기능을 구현하는데 필요한 자료들의 논리적인 구조를 표현한 것으로, 시스템에 의해 처리되거나 생성될 객체들 사이에 어떤 관련이 있는지를 구조적인 관점(View)에서 표현하는 모델링은?",
	            "answer": "정적 모델링"
	        }
	    },
	    {
	        "id": 446893,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "UML 다이어그램 중 다음과 같은 특징을 갖는 다이어그램은?",
	            "questionPassage": "ㆍ시스템을 구성하는 요소에 대해 이해할 수 있는 구조적 다이어그램이다.<br/>ㆍ시스템을 구성하는 요소를 문서화하는 데 사용된다.<br/>ㆍ코딩에 필요한 객체의 속성, 함수 등의 정보를 잘 표현하고 있어 시스템을 모델링하는 데 자주 사용된다.<br/>ㆍ클래스, 제약조건, 관계 등으로 구성된다.",
	            "answer": "클래스 다이어그램(Class Diagram)"
	        }
	    },
	    {
	        "id": 446894,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "클래스 다이어그램의 구성 요소 중 클래스(Class)의 개념은?",
	            "answer": "클래스는 각각의 <span class=\"underline\">객체들이 갖는 속성과 오퍼레이션(동작)을 표현한 것</span>이다."
	        }
	    },
	    {
	        "id": 446895,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에서 괄호에 공통으로 들어갈 알맞은 용어는?",
	            "questionPassage": "ㆍ(       )는 연관 관계에 있는 두 클래스에 추가적으로 표현해야 할 속성이나 오퍼레이션이 있는 경우 생성하는 클래스이다.<br/>ㆍ두 클래스의 연관 관계를 나타내는 선의 가운데로부터 점선을 (       )로 이어 표시한다.<br/>ㆍ(       )의 이름은 연관 관계의 이름을 이용해 지정한다.",
	            "answer": "연관 클래스"
	        }
	    },
	    {
	        "id": 446896,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 괄호에 공통적으로 들어갈 가장 적합한 UML 클래스 다이어그램의 요소를 쓰시오.",
	            "questionPassage": "ㆍ주석(Note) 도형 안에 (       )을 기술한 후 (       )이 적용될 속성이나 오퍼레이션을 점선으로 연결한다.<br/>ㆍ클래스 안에 (       )을 기술할 때는 중괄호 { }를 이용한다.",
	            "answer": "제약조건"
	        }
	    },
	    {
	        "id": 446897,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "클래스 다이어그램의 구성 요소 중 다음 기호가 의미하는 요소의 명칭은?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_011.png\"/>",
	            "answer": "제약조건"
	        }
	    },
	    {
	        "id": 446898,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "클래스(Class) 다이어그램에서 사용되는 연관 클래스의 개념을 간략히 서술하면?",
	            "answer": "연관 클래스는 <span class=\"underline\">연관 관계에 있는 클래스 사이에 추가적으로 표현해야 할 속성이나 오퍼레이션이 있는 경우 생성하는 클래스</span>이다."
	        }
	    },
	    {
	        "id": 446899,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "시스템의 내부 구성 요소들의 상태 변화 과정과 과정에서 발생하는 상호 작용을 표현한 것으로  시스템 내부 구성 요소들 간에 이루어지는 동작이라는 관점(View)에서 표현하는 모델링은?",
	            "answer": "동적 모델링"
	        }
	    },
	    {
	        "id": 446900,
	        "templateId": 9,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★★",
	            "question": "다음 보기에서 시퀀스 다이어그램의 구성 요소를 모두 고르면?",
	            "questionPassage": [
	                "㉠ 생명선       ",
	                "㉡ 실행 상자",
	                "㉢ 유스케이스 ",
	                "㉣ 액티비티"
	            ],
	            "answer": [
	                "1",
	                "2"
	            ]
	        }
	    },
	    {
	        "id": 446901,
	        "templateId": 9,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★★",
	            "question": "다음 보기에서 시퀀스 다이어그램의 구성 요소를 모두 고르면?",
	            "questionPassage": [
	                "㉠ 확장          ",
	                "㉡ 메시지",
	                "㉢ 유스케이스 ",
	                "㉣ 액티비티"
	            ],
	            "answer": [
	                "2"
	            ]
	        }
	    },
	    {
	        "id": 446902,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "UML 다이어그램 중 다음과 같은 특징을 갖는 다이어그램은?",
	            "questionPassage": "ㆍ시스템이나 객체들이 상호 작용 과정에서 주고받는 메시지를 표현한다.<br/>ㆍ각 동작에 참여하는 시스템이나 객체들의 수행 기간을 확인하는 데 사용된다.<br/>ㆍ클래스 내부에 있는 객체들을 기본 단위로 하여 그들의 상호 작용을 표현한다.",
	            "answer": "시퀀스 다이어그램(Sequence Diagram)"
	        }
	    },
	    {
	        "id": 446903,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "UML 다이어그램 중 시스템이나 객체들이 메시지를 주고받으며 시간의 흐름에 따라 상호 작용하는 과정을 액터, 객체, 메시지 등의 요소를 사용하여 그림으로 표현하는 다이어그램은?",
	            "answer": "시퀀스 다이어그램(Sequence Diagram)"
	        }
	    },
	    {
	        "id": 446904,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "UML 시퀀스(Sequence) 다이어그램의 요소 중 다음 설명에 해당하는 요소는?",
	            "questionPassage": "ㆍ객체가 메시지를 주고받으며 구동되고 있음을 표현한다.<br/>ㆍ생명선(Lifeline) 상에 겹쳐 직사각형 형태로 표현한다.",
	            "answer": "실행 상자(Active Box)"
	        }
	    },
	    {
	        "id": 446905,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "UML 시퀀스(Sequence) 다이어그램의 요소 중 다음 설명에 해당하는 요소는?",
	            "questionPassage": "ㆍ객체가 메모리에 존재하는 기간으로, 객체 아래쪽에 점선을 그어 표현한다.<br/>ㆍ객체 소멸이 표시된 기간까지 존재한다.",
	            "answer": "생명선(Lifeline)"
	        }
	    },
	    {
	        "id": 446906,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "UML 시퀀스(Sequence) 다이어그램의 요소 중 해당 객체가 더 이상 메모리에 존재하지 않음을 표현하는 요소는?",
	            "answer": "객체 소멸"
	        }
	    },
	    {
	        "id": 446907,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "UML 시퀀스(Sequence) 다이어그램의 요소 중 다음 그림과 같이 다이어그램의 전체 또는 일부를 묶어 표현하는 요소는?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_021.png\"/>",
	            "answer": "프레임(Frame)"
	        }
	    },
	    {
	        "id": 446908,
	        "templateId": 9,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "question": "다음에 제시된 항목 중에서 UML의 시퀀스(Sequence) 다이어그램과 관계된 것만 고르면?",
	            "questionPassage": [
	                "㉠ Object       ",
	                "㉡ Lifeline",
	                "㉢ Active Box  ",
	                "㉣ Swimlane"
	            ],
	            "answer": [
	                "1",
	                "2",
	                "3"
	            ]
	        }
	    },
	    {
	        "id": 446909,
	        "templateId": 9,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "question": "다음에 제시된 항목 중에서 UML의 시퀀스(Sequence) 다이어그램과 관계된 것만 고르면?",
	            "questionPassage": [
	                "㉠ Object       ",
	                "㉡ Swimlane",
	                "㉢ Message   ",
	                "㉣ Frame"
	            ],
	            "answer": [
	                "1",
	                "3",
	                "4"
	            ]
	        }
	    },
	    {
	        "id": 446910,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "UML 다이어그램 중 다음과 같은 특징을 갖는 다이어그램은?",
	            "questionPassage": "ㆍ동작에 참여하는 객체들이 주고받는 메시지를 표현하는데, 메시지뿐만 아니라 객체들 간의 관계까지 표현한다.<br/>ㆍ동작에 참여하는 객체들 사이의 관계를 파악하는 데 사용된다.<br/>ㆍ클래스 다이어그램에서 관계가 제대로 표현됐는지 점검하는 용도로도 사용된다.",
	            "answer": "커뮤니케이션 다이어그램(Communication Diagram)"
	        }
	    },
	    {
	        "id": 446911,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "UML 다이어그램 중 초기에 협업(Collaboration) 다이어그램으로 불렀던 것으로, 시스템이나 객체들이 메시지를 주고받으며 시간의 흐름에 따라 상호 작용하는 과정을 액터, 객체, 링크, 메시지 등의 요소를 사용하여 그림으로 표현하는 다이어그램은?",
	            "answer": "커뮤니케이션 다이어그램(Communication Diagram)"
	        }
	    },
	    {
	        "id": 446912,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "커뮤니케이션(Communication) 다이어그램이 시퀀스(Sequence) 다이어그램과 구별되는 가장 큰 특징은 메시지뿐만 아니라 객체들 간의 관계까지 표현한다는 것이다. 커뮤니케이션의 요소 중 객체들 간의 관계를 표현하는 데 사용하는 요소는?",
	            "answer": "링크(Link)"
	        }
	    },
	    {
	        "id": 446913,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "UML 커뮤니케이션 다이어그램(Communication Diagram)의 요소 중 다음 설명에 해당하는 요소는?",
	            "questionPassage": "ㆍ객체가 상호 작용을 위해 주고받는 내용이다.<br/>ㆍ화살표의 방향은 메시지를 받는 쪽으로 향하게 표현한다.<br/>ㆍ일정한 순서에 의해 처리되는 메시지의 경우 숫자로 순서를 표시한다.",
	            "answer": "메시지(Message)"
	        }
	    },
	    {
	        "id": 446914,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "UML 다이어그램 중 다음과 같은 특징을 갖는 다이어그램은?",
	            "questionPassage": "ㆍ어떤 이벤트에 의해 객체 자신이 속한 클래스의 상태 변화나 객체가 다른 객체와 상호 작용하는 과정에서의 상태 변화를 표현한다.<br/>ㆍ특정 객체가 어떤 이벤트에 의해 상태 변환 과정이 진행되는지 확인하는 데 사용된다.<br/>ㆍ시스템에서 상태 변환 이벤트를 확인할 필요가 있는 객체만을 대상으로 그린다.",
	            "answer": "상태 다이어그램(State Diagram)"
	        }
	    },
	    {
	        "id": 446915,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "UML 다이어그램 중 객체들 사이에 발생하는 이벤트에 의한 객체들의 상태 변화를 그림으로 표현한 다이어그램은?",
	            "answer": "상태 다이어그램(State Diagram)"
	        }
	    },
	    {
	        "id": 446916,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "UML 상태 다이어그램(State Diagram)의 요소 중 다음 설명에 해당하는 요소는?",
	            "questionPassage": "ㆍ상태에 변화를 주는 현상이다.<br/>ㆍ조건, 외부 신호, 시간의 흐름 등이 있다.",
	            "answer": "이벤트(Event)"
	        }
	    },
	    {
	        "id": 446917,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음에 제시된 UML 상태(State) 다이어그램을 보고 \\<재고 확인 실패\\> 상태의 두 가지 상태 변화는?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_022.png\"/>",
	            "answer": "ㆍ‘재고 없음’ 이벤트에 의해 \\<재고 확인 실패\\> 상태로 전환된다.<br/>ㆍ‘상품 재선택’ 이벤트에 의해 <주문 상품 선택> 상태로 전환된다."
	        }
	    },
	    {
	        "id": 446918,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "UML 다이어그램 중 다음 그림에 해당하는 다이어그램은?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_023.png\"/>",
	            "answer": "패키지 다이어그램(Package Diagram)"
	        }
	    },
	    {
	        "id": 446919,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "UML 다이어그램 중 다음과 같은 특징을 갖는 다이어그램은?",
	            "questionPassage": "ㆍ유스케이스나 클래스 등의 모델 요소들을 그룹화한 후 그룹된 단위들 사이의 의존 관계를 표현한 것이다.<br/>ㆍ의존(Dependency) 관계는 점선 화살표로 표현한다.<br/>ㆍ대규모 시스템에서 주요 요소 간의 종속성을 파악하는 데 사용한다.",
	            "answer": "패키지 다이어그램(Package Diagram)"
	        }
	    },
	    {
	        "id": 446920,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "UML 패키지 다이어그램(Package Diagram)의 요소 중 다음 설명에 해당하는 요소는?",
	            "questionPassage": "ㆍ패키지와 패키지, 패키지와 객체 간을 점선 화살표로 연결하여 표현한다.<br/>ㆍ스테레오타입을 이용해 의존 관계를 구체적으로 표현할 수 있다.<br/>ㆍ의존 관계의 표현 형태는 사용자가 임의로 작성할 수 있으며, 대표적으로 import와 access가 사용된다.",
	            "answer": "의존 관계(Dependency)"
	        }
	    },
	    {
	        "id": 446921,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "UML 패키지 다이어그램(Package Diagram)의 요소 중 다음 설명에 해당하는 요소는?",
	            "questionPassage": "ㆍ유스케이스, 클래스, 인터페이스, 테이블 등 패키지에 포함될 수 있는 다양한 요소들이다.<br/>ㆍ직사각형으로 표현한다.",
	            "answer": "객체(Object)"
	        }
	    },
	    {
	        "id": 446922,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "다음이 설명하고 있는 소프트웨어 개발 방법론은?",
	            "questionPassage": "ㆍ기존의 시스템이나 소프트웨어를 구성하는 컴포넌트를 조합하여 하나의 새로운 애플리케이션을 만드는 소프트웨어 개발 방법론이다.<br/>ㆍ특징<br/>  - 개발 기간 단축으로 인한 생산성 향상<br/>  - 새로운 기능 추가가 쉬운 확장성<br/>  - 소프트웨어 재사용이 가능",
	            "answer": "컴포넌트 기반(CBD) 방법론"
	        }
	    },
	    {
	        "id": 446923,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음은 구조적 개발 방법론의 수행 절차를 나열한 것이다. 괄호에 들어갈 알맞은 단계는?",
	            "questionPassage": "타당성 검토 단계 → 계획 단계 → (       ) 단계 → (       ) 단계 → (       ) 단계 → 시험 단계 → 운용/유지보수 단계",
	            "answer": "요구사항, 설계, 구현"
	        }
	    },
	    {
	        "id": 446924,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발, 유지보수 등에 필요한 여러 가지 일들의 수행 방법과 이러한 일들을 효율적으로 수행하려는 과정에서 필요한 각종 기법 및 도구를 체계적으로 정리하여 표준화한 것을 무엇이라고 하는가?",
	            "answer": "소프트웨어 개발 방법론"
	        }
	    },
	    {
	        "id": 446925,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "현실 세계의 개체를 기계의 부품처럼 하나의 객체로 만들어, 소프트웨어를 개발할 때 기계의 부품을 조립하듯이 객체들을 조립해서 필요한 소프트웨어를 구현하는 소프트웨어 개발 방법론은?",
	            "questionPassage": "ㆍ 방법론이다.<br/>ㆍ구조적 기법의 문제점으로 인한 소프트웨어 위기의 해결책으로 채택되었다.<br/>ㆍ구성 요소에는 객체, 클래스, 메시지 등이 있고, 기본 원칙에는 캡슐화, 정보 은닉, 추상화, 상속성, 다형성 등이 있다.",
	            "answer": "객체지향 방법론"
	        }
	    },
	    {
	        "id": 446926,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음이 설명하고 있는 방법론은?",
	            "questionPassage": "ㆍ구조적 기법의 문제점으로 인한 소프트웨어 위기의 해결책으로 채택된 방법론이다.<br/>ㆍ구성 요소에는 객체, 클래스, 메시지 등이 있다.<br/>ㆍ기본 원칙에는 캡슐화, 정보 은닉, 추상화, 상속성, 다형성 등이 있다.",
	            "answer": "객체지향 방법론"
	        }
	    },
	    {
	        "id": 446927,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음은 정보공학 개발 방법론의 수행 절차를 나열한 것이다. 괄호에 들어갈 알맞은 단계는?",
	            "questionPassage": "정보 전략 계획 수립 단계 → (       ) 단계 → (       ) 단계→ 업무 시스템 구축 단계",
	            "answer": "업무 영역 분석, 업무 시스템 설계"
	        }
	    },
	    {
	        "id": 446928,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "정보 시스템 개발 주기를 이용하여 대규모 정보 시스템을 구축하는데 적합한 것으로 정보 시스템의 개발을 위해 계획, 분석, 설계, 구축에 정형화된 기법들을 상호 연관성 있게 통합 및 적용하는 자료(Data) 중심의 소프트웨어 개발 방법론은?",
	            "answer": "정보공학 방법론"
	        }
	    },
	    {
	        "id": 446929,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "임베디드 소프트웨어를 만드는데 적합한 것으로 특정 제품에 적용하고 싶은 공통된 기능을 정의하여 개발하는 소프트웨어 개발 방법론은?",
	            "answer": "제품 계열 방법론"
	        }
	    },
	    {
	        "id": 446930,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "소프트웨어 재사용 방법 중 (       )은 전자 칩과 같은 소프트웨어 부품, 즉 블록(모듈)을 만들어서 끼워 맞추어 소프트웨어를 완성시키는 방법으로, 블록 구성 방법이라고도 한다.",
	            "answer": "합성 중심(Composition-Based)"
	        }
	    },
	    {
	        "id": 446931,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 재사용 방법 중 (       )은 추상화 형태로 써진 명세를 구체화하여 프로그램을 만드는 방법으로, 패턴 구성 방법이 라고도 한다.",
	            "answer": "생성 중심(Generation-Based)"
	        }
	    },
	    {
	        "id": 446932,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음이 설명하고 있는 알맞은 용어의 영문 약어는?",
	            "questionPassage": "ㆍ표준화된 개발 환경 구축 및 문서 자동화 기능을 제공한다.<br/>ㆍ작업 과정 및 데이터 공유를 통해 작업자 간 커뮤니케이션을 증대한다.<br/>ㆍ주요 기능은 다음과 같다.<br/>  - S/W 라이프 사이클 전 단계의 연결<br/>  - 그래픽 지원<br/>  - 다양한 소프트웨어 개발 모형 지원",
	            "answer": "CASE"
	        }
	    },
	    {
	        "id": 446933,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발 과정에서 사용되는 요구 분석, 설계, 구현, 검사 및 디버깅 과정 전체 또는 일부를 컴퓨터와 전용 소프트웨어 도구를 사용하여 자동화하는 것은?",
	            "answer": "CASE"
	        }
	    },
	    {
	        "id": 446934,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 재공학(Software Reengineering)의 개념을 간략히 서술하면?",
	            "answer": "소프트웨어 재공학은 <span class=\"underline\">기존 시스템을 이용하여 보다 나은 시스템을 구축하고, 새로운 기능을 추가하여 소프트웨어 성능을 향상시키는 것</span>이다."
	        }
	    },
	    {
	        "id": 446935,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음이 설명하고 있는 알맞은 용어는?",
	            "questionPassage": "ㆍ이미 개발되어 인정받은 소프트웨어의 전체 혹은 일부분을 다른 소프트웨어 개발이나 유지에 사용하는 것이다.<br/>ㆍ소프트웨어 개발의 품질과 생산성을 높이기 위한 방법이다.<br/>ㆍ기존에 개발된 소프트웨어와 경험, 지식 등을 새로운 소프트웨어에 적용한다.<br/>ㆍ방법에는 합성 중심과 생성 중심이 있다.",
	            "answer": "소프트웨어 재사용(Software Reuse)"
	        }
	    },
	    {
	        "id": 446936,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 재사용(Software Reuse)의 개념을 간략히 서술하면?",
	            "answer": "소프트웨어 재사용은 <span class=\"underline\">이미 개발되어 인정받은 소프트웨어를 다른 소프트웨어 개발이나 유지에 사용하는 것</span>이다."
	        }
	    },
	    {
	        "id": 446937,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음이 설명하고 있는 알맞은 용어는?",
	            "questionPassage": "ㆍ유지보수 비용이 소프트웨어 개발 비용의 대부분을 차지하는 문제를 염두에 두어 기존 소프트웨어의 데이터와 기능들의 개조 및 개선을 통해 유지보수성과 품질을 향상시키려는 기술이다.<br/>ㆍ장점은 다음과 같다.<br/>- 소프트웨어의 품질 향상<br/>- 소프트웨어의 생산성 증가<br/>- 소프트웨어의 수명 연장<br/>- 소프트웨어의 오류 감소",
	            "answer": "소프트웨어 재공학(Software Reengineering)"
	        }
	    },
	    {
	        "id": 446938,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 비용 산정은 소프트웨어의 개발 규모를 소요되는 인원, 자원, 기간등으로 확인하여 실행 가능한 계획을 수립하기 위해 필요한 비용을 산정하는 것이다. 소프트웨어 비용을 결정하는 3가지 요소는?",
	            "answer": "프로젝트 요소, 자원 요소, 생산성 요소"
	        }
	    },
	    {
	        "id": 446939,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 비용 결정 요소 중 다음 설명에 해당하는 요소는?",
	            "questionPassage": "ㆍ개발자들이 갖춘 전문지식, 경험, 이해도, 책임감, 창의력 등<br/>ㆍ소프트웨어를 개발하는 기간",
	            "answer": "생산성 요소"
	        }
	    },
	    {
	        "id": 446940,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 비용 결정 요소 중 다음 설명에 해당하는 요소는?",
	            "questionPassage": "ㆍ소프트웨어의 종류에 따라 발생할 수 있는 문제점들의 난이도<br/>ㆍ소프트웨어의 규모에 따라 개발해야 할 시스템의 크기<br/>ㆍ일정 기간 내 주어진 조건하에서 프로그램이 필요한 기능을 수행하는 정도",
	            "answer": "프로젝트 요소"
	        }
	    },
	    {
	        "id": 446941,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 비용 결정 요소 중 다음 설명에 해당하는 요소는?",
	            "questionPassage": "ㆍ소프트웨어 개발 관련자들이 갖춘 능력 혹은 자질<br/>ㆍ소프트웨어 개발 시 필요한 장비와 워드프로세서, 프린터 등의 보조 장비<br/>ㆍ소프트웨어 개발 시 필요한 언어 분석기, 문서화 도구 등의 개발 지원 도구",
	            "answer": "자원 요소"
	        }
	    },
	    {
	        "id": 446942,
	        "templateId": 9,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "question": "다음에서 하향식 비용 산정 기법을 모두 고르면?",
	            "questionPassage": [
	                "㉠ LOC(원시 코드 라인 수) 기법",
	                "㉡ 전문가 감정 기법",
	                "㉢ 개발 단계별 인월수 기법",
	                "㉣ 수학적 산정 기법",
	                "㉤ 델파이 기법"
	            ],
	            "answer": [
	                "2",
	                "5"
	            ]
	        }
	    },
	    {
	        "id": 446943,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "조직 내에 있는 경험이 많은 두 명 이상의 전문가에게 비용 산정을 의뢰하는 기법으로, 가장 편리하고 신속하게 비용을 산정할 수 있으며, 의뢰자로부터 믿음을 얻을 수 있는 소프트웨어 비용 산정 기법은?",
	            "answer": "전문가 감정 기법"
	        }
	    },
	    {
	        "id": 446944,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 비용 산정 기법 중 전문가 감정 기법의 주관적인 편견을 보완하기 위해 많은 전문가들의 의견을 종합하여 산정하는 기법은?",
	            "answer": "델파이 기법"
	        }
	    },
	    {
	        "id": 446945,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "LOC 기법에 의하여 예측된 총 라인 수가 30,000라인, 개발에 참여할 프로그래머가 5명, 프로그래머들의 평균 생산성이 월간 300라인일 때 개발에 소요되는 기간은?",
	            "answer": "20개월",
	            "solution": "LOC 기법에서 개발 기간은 ‘노력(인월) / 투입 인원’이고, 노력(인월)은 ‘LOC(총 라인 수) / 1인당 월평균 생산 코드 라인 수’이므로 ‘(LOC / 1인당 월평균 생산 코드 라인 수) / 투입 인원’에 값을 대입하면 답을 구할 수 있습니다."
	        }
	    },
	    {
	        "id": 446946,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "LOC(원시 코드 라인 수) 기법을 보완하기 위해 만들어진 것으로, 각 기능을 구현시키는 데 필요한 노력을 생명 주기의 각 단계별로 산정하는 상향식 비용 산정 기법은?",
	            "answer": "개발 단계별 인월수 기법"
	        }
	    },
	    {
	        "id": 446947,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발에 소요되는 노력이 40PM(Programmer-Month)으로 계산되었다. 개발에 소요되는 기간이 5개월이고, 1인당 인건비가 100만 원이라면 이 프로젝트에 소요되는 총 인건비는?",
	            "answer": "40000000",
	            "solution": "개발 비용(총 인건비)은 ‘노력(인월) × 단위 비용(1인당 월평균 인건비)’이므로 40PM × 1,000,000 = 40,000,000 즉 4천만 원이 됩니다."
	        }
	    },
	    {
	        "id": 446948,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "비용 산정 기법 중 소프트웨어 각 기능의 원시 코드 라인 수의 비관치, 낙관치, 기대치를 측정하여 예측치를 구하고 이를 이용하여 비용을 산정하는 기법은?",
	            "answer": "LOC(원시 코드 라인 수) 기법"
	        }
	    },
	    {
	        "id": 446949,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "LOC 기법에 의하여 예측된 총 라인수가 36,000 라인, 개발에 참여할 프로그래머가 6명, 프로그래머들의 평균 생산성이 월간 400 라인일 때 개발에 소요되는 기간은?",
	            "answer": "15개월",
	            "solution": "LOC 기법에서 개발 기간은 ‘노력(인월) / 투입 인원’이고, 노력(인월)은 ‘LOC(총 라인 수) / 1인당 월평균 생산 코드 라인 수’이므로 ‘(LOC / 1인당 월평균 생산 코드 라인 수) / 투입 인원’에 값을 대입하면 (36,000 / 400) / 6 = 15개월입니다."
	        }
	    },
	    {
	        "id": 446950,
	        "templateId": 9,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "question": "다음에서 상향식 비용 산정 기법을 모두 고르면?",
	            "questionPassage": [
	                "㉠ LOC(원시 코드 라인 수) 기법",
	                "㉡ 전문가 감정 기법",
	                "㉢ 개발 단계별 인월수 기법",
	                "㉣ 수학적 산정 기법",
	                "㉤ 델파이 기법"
	            ],
	            "answer": [
	                "1",
	                "3",
	                "4"
	            ]
	        }
	    },
	    {
	        "id": 446951,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "다음 설명의 괄호에 공통적으로 들어갈 소프트웨어 비용 산정 기법의 종류는?",
	            "questionPassage": "ㆍ(       ) 모형은 알브레히트(Albrecht)가 제안한 것으로, 소프트웨어의 기능을 증대시키는 요인별로 (       )를 구한 후 이를 이용해서 비용을 산정하는 기법이다.<br/>ㆍ소프트웨어 기능 증대 요인에는 자료 입력(입력 양식), 정보 출력(출력 보고서), 명령어(사용자 질의수), 데이터 파일, 필요한 외부 루틴과의 인터페이스 등이 있다.",
	            "answer": "기능 점수(FP)"
	        }
	    },
	    {
	        "id": 446952,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "COCOMO 모형의 소프트웨어 개발 유형 중 트랜잭션 처리 시스템이나 운영체제 등의 30만(300KDSI) 라인 이상의 소프트웨어를 개발하는 유형은?",
	            "answer": "내장형(Embedded Mode)"
	        }
	    },
	    {
	        "id": 446953,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "COCOMO 모형의 소프트웨어 개발 유형 중 트랜잭션 처리 시스템이나 운영체제, 데이터베이스 관리 시스템 등의 30만(300KDSI) 라인 이하의 소프트웨어를 개발하는 유형은?",
	            "answer": "반분리형(Semi-Detached Mode)"
	        }
	    },
	    {
	        "id": 446954,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "COCOMO 모형의 소프트웨어 개발 유형 중 일괄 자료 처리나 과학기술 계산용, 비즈니스 자료 처리용 등의 5만(50KDSI)라인 이하의 소프트웨어를 개발하는 유형은?",
	            "answer": "조직형(Organic Mode)"
	        }
	    },
	    {
	        "id": 446955,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 비용 산정 기법 중 Putnam 모형의 개념을 간략히 서술하면?",
	            "answer": "Putnam 모형은 <span class=\"underline\">소프트웨어 생명 주기의 전 과정 동안에 사용될 노력의 분포를 예상하는 모형</span>이다."
	        }
	    },
	    {
	        "id": 446956,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 비용 산정 기법 중 보헴(Boehm)이 제안한 것으로, 원시 프로그램의 규모인 LOC(원시 코드 라인 수)에 의한 기법은?",
	            "answer": "COCOMO(COnstructive COst MOdel) 모형"
	        }
	    },
	    {
	        "id": 446957,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "Rayleigh-Norden 곡선과 Putnam 예측 모델을 기초로 하여 개발된 자동화 추정 도구는?",
	            "answer": "SLIM"
	        }
	    },
	    {
	        "id": 446958,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다양한 프로젝트와 개인별 요소를 수용하도록 FP 모형을 기초로 하여 개발된 자동화 추정 도구는?",
	            "answer": "ESTIMACS"
	        }
	    },
	    {
	        "id": 446959,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "COCOMO 모델은 보헴(Boehm)이 제안한 것으로, 원시 프로그램의 규모인 LOC(원시 코드 라인 수)에 의한 비용 산정 기법이다. COCOMO 모델의 3가지 프로젝트 유형은?",
	            "answer": "조직형(Organic Mode), 반분리형(Semi-Detached Mode), 내장형(Embedded Mode)"
	        }
	    },
	    {
	        "id": 446960,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 비용 산정 기법 중 Rayleigh-Norden 곡선의 노력 분포도를 이용한 프로젝트 비용 산정 기법은?",
	            "answer": "Putnam 모형"
	        }
	    },
	    {
	        "id": 446961,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "COCOMO 모형의 종류 중 소프트웨어의 크기(생산 코드 라인 수)와 개발 유형만을 이용하여 비용을 산정하는 모형은?",
	            "answer": "기본형 COCOMO"
	        }
	    },
	    {
	        "id": 446962,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "COCOMO 모형의 종류 중 기본형(Basic) COCOMO의 공식을 토대로 사용하나, 제품의 특성, 컴퓨터의 특성, 개발 요원의 특성, 프로젝트 특성에 의해 비용을 산정하는 모형은?",
	            "answer": "중간형 COCOMO"
	        }
	    },
	    {
	        "id": 446963,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "COCOMO 모형의 종류 중 중간형 COCOMO를 보완하여 만들어진 방법으로 개발 공정별로 보다 자세하고 정확하게 노력을 산출하여 비용을 산정하는 모형은?",
	            "answer": "발전형 COCOMO"
	        }
	    },
	    {
	        "id": 446964,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음은 CPM 네트워크이다. 임계 경로의 소요 기일은?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_001.png\"/>",
	            "answer": "14일",
	            "solution": "임계 경로는 최장 경로를 의미합니다. 문제에 제시된 그림을 보고 각 경로에 대한 소요 기일을 계산한 후 가장 오래 걸린 기일을 찾으면 됩니다.<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_002.png\"/><br/>ㆍ경로 1 : ➊ → ➋ → ➍ → ➏ → ➑<br/>= 2 + 2 + 3 + 3 = 10일<br/>ㆍ경로 2 : ➊ → ➋ → ➎ → ➐ → ➑<br/>= 2 + 3 + 5 + 4 = 14일<br/>ㆍ경로 3 : ➊ → ➌ → ➐ → ➑ = 3 + 5 + 4 = 12일<br/>그러므로 임계 경로는 경로 2이며, 소요 기일은 14일입니다."
	        }
	    },
	    {
	        "id": 446965,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "프로젝트에 필요한 전체 작업의 상호 관계를 표시하는 네트워크로, 각 작업별로 낙관적인 경우, 가능성이 있는 경우, 비관적인 경우로 나누어 단계별 종료 시기를 결정하며, 과거의 개발 경험이 없어 소요 기간 예측이 어려운 프로젝트에 사용하는 일정 계획 기법은?",
	            "answer": "PERT(프로그램 평가 및 검토 기술)"
	        }
	    },
	    {
	        "id": 446966,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음이 설명하고 있는 프로젝트 일정 계획 관련 용어는?",
	            "questionPassage": "ㆍ프로젝트 각 작업들의 시작과 종료에 대한 작업 일정을 표시하는 프로젝트 일정표로, 시간선(Time-Line) 차트라고도 한다.<br/>ㆍ막대로 표시하며, 수평 막대의 길이는 각 태스크의 기간을 나타낸다.<br/>ㆍ이정표, 기간, 작업, 프로젝트 일정을 나타낸다.<br/>ㆍ자원 배치와 인원 계획에 유용하게 사용된다.",
	            "answer": "간트 차트"
	        }
	    },
	    {
	        "id": 446967,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음이 설명하고 있는 프로젝트 일정 계획 관련 용어는?",
	            "questionPassage": "ㆍ프로젝트 완성에 필요한 작업을 나열하고 작업에 필요한 소요 기간을 예측하는데 사용하는 기법이다.<br/>ㆍ노드에서 작업을 표시하고 간선은 작업 사이의 전후 의존 관계를 나타낸다.<br/>ㆍ원형 노드는 각 작업을, 박스 노드는 이정표를 의미하며, 간선을 나타내는 화살표의 흐름에 따라 각 작업이 진행된다.",
	            "answer": "CPM(임계 경로 기법)"
	        }
	    },
	    {
	        "id": 446968,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음은 CPM(Critical Psth Method) 네트워크이다. 임계 경로의 소요 기일은?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_012.png\"/>",
	            "answer": "18일",
	            "solution": "임계 경로는 최장 경로를 의미합니다. 문제에 제시된 그림을 보고 각 경로에 대한 소요 기일을 계산한 후 가장 오래 걸린 기일을 찾으면 됩니다.<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_013.png\"/><br/>ㆍ경로 1 : ➊ → ➋ → ➍ → ➏ → ➑ = 3 + 3 + 4 + 4 = 14일<br/>ㆍ경로 2 : ➊ → ➋ → ➎ → ➐ → ➑ = 3 + 4 + 6 + 5 = 18일<br/>ㆍ경로 3 : ➊ → ➌ → ➐ → ➑ = 4 + 6 + 5 = 15일<br/>그러므로 임계 경로는 경로 2이며, 소요 기일은 18일입니다."
	        }
	    },
	    {
	        "id": 446969,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "프로젝트 관리 유형 중 다음 내용이 속하는 유형은?",
	            "questionPassage": "프로젝트 팀 편성, 프로젝트 조직 정의, 프로젝트 팀 개발, 프로젝트 팀 관리",
	            "answer": "인력 관리"
	        }
	    },
	    {
	        "id": 446970,
	        "templateId": 9,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★☆",
	            "question": "보기에서 프로젝트 관리 유형에 해당하는 것을 모두 고르시오.",
	            "questionPassage": [
	                "㉠ 자원 관리   ",
	                "㉡ 인력 관리   ",
	                "㉢ 보안 관리",
	                "㉣ 품질 관리"
	            ],
	            "answer": [
	                "2",
	                "4"
	            ]
	        }
	    },
	    {
	        "id": 446971,
	        "templateId": 9,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "question": "보기에서 프로젝트 관리 유형에 해당하는 것을 모두 고르시오.",
	            "questionPassage": [
	                "㉠ 오류 관리  ",
	                "㉡ 서버 관리    ",
	                "㉢ 위험 관리",
	                "㉣ 일정 관리   ",
	                "㉤ 비용 관리"
	            ],
	            "answer": [
	                "3",
	                "4",
	                "5"
	            ]
	        }
	    },
	    {
	        "id": 446972,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "프로젝트 관리(Project Management) 유형에 대한 설명이다. 괄호에 들어갈 알맞은 유형은?",
	            "questionPassage": "ㆍ품질 관리 : 품질 계획, 품질 보증 수행, 품질 통제 수행<br/>ㆍ(         ) : 프로젝트 팀 편성, 자원 산정, 프로젝트 조직 정의, 프로젝트 팀 개발, 자원 통제, 프로젝트 팀 관리<br/>ㆍ위험 관리 : 위험 식별, 위험 평가, 위험 대처, 위험 통제<br/>ㆍ비용 관리 : 비용 산정, 비용 예산 편성, 비용 통제<br/>ㆍ일정 관리 : 작업 순서, 작업 기간 산정, 일정 개발, 일정 통제",
	            "answer": "인력 관리"
	        }
	    },
	    {
	        "id": 446973,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "프로젝트 관리(Project Management) 유형에 대한 설명이다. 괄호에 들어갈 알맞은 유형은?",
	            "questionPassage": "ㆍ품질 관리 : 품질 계획, 품질 보증 수행, 품질 통제 수행<br/>ㆍ인력 관리 : 프로젝트 팀 편성, 자원 산정, 프로젝트 조직 정의, 프로젝트 팀 개발, 자원 통제, 프로젝트 팀 관리<br/>ㆍ위험 관리 : 위험 식별, 위험 평가, 위험 대처, 위험 통제<br/>ㆍ비용 관리 : 비용 산정, 비용 예산 편성, 비용 통제<br/>ㆍ(       ) : 작업 순서, 작업 기간 산정, 일정 개발, 일정 통제",
	            "answer": "일정 관리"
	        }
	    },
	    {
	        "id": 446974,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음은 CMMI의 소프트웨어 프로세스 성숙도의 단계를 순서대로 나열한 것이다. 괄호에 알맞은 단계는?",
	            "questionPassage": "초기 → (       ) → (       ) → (       ) → 최적화",
	            "answer": "관리(Managed), 정의(Defined), 정량적 관리(Quantitatively Managed)"
	        }
	    },
	    {
	        "id": 446975,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "공식 명칭이 ISO/IEC 15504인 것으로 소프트웨어 개발 표준 중 정보 시스템 분야에서 소프트웨어의 품질 및 생산성 향상을 위해 소프트웨어 프로세스를 평가 및 개선하는 국제 표준은?",
	            "answer": "SPICE"
	        }
	    },
	    {
	        "id": 446976,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어의 개발, 운영, 유지보수 등을 체계적으로 관리하기 위한 소프트웨어 생명 주기 표준으로, 기본 생명 주기 프로세스, 지원 생명 주기 프로세스, 조직 생명주기 프로세스로 구분되는 표준은?",
	            "answer": "ISO/IEC 12207"
	        }
	    },
	    {
	        "id": 446977,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발 표준 중 CMMI(능력 성숙도 통합 모델)의 개념은?",
	            "answer": "CMMI는 <span class=\"underline\">소프트웨어 개발 조직의 업무 능력 및 조직의 성숙도를 평가하는 모델</span>이다."
	        }
	    },
	    {
	        "id": 446978,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음은 SPICE의 프로세스 수행 능력 단계를 순서대로 나열한 것이다. 괄호에 들어갈 알맞은 단계는?",
	            "questionPassage": "불완전 → (       ) → 관리 → (       ) → (       ) → 최적화",
	            "answer": "수행(Performed), 확립(Established), 예측(Predictable)"
	        }
	    },
	    {
	        "id": 446979,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발 표준 중 SPICE(소프트웨어 처리 개선 및 능력 평가 기준)의 개념을 간략히 서술하면?",
	            "answer": "SPICE는 <span class=\"underline\">소프트웨어의 품질 및 생산성 향상을 위해 소프트웨어 프로세스를 평가 및 개선하는 국제 표준</span>이다."
	        }
	    },
	    {
	        "id": 446980,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "SPICE의 5개 프로세스 범주 중 다음 설명에 해당하는 프로세스는?",
	            "questionPassage": "ㆍ소프트웨어를 개발하여 고객에게 전달하는 것을 지원하고, 소프트웨어의 정확한 운용 및 사용을 위한 프로세스로 구성된다.<br/>ㆍ구성 요소는 인수, 공급, 요구 도출, 운영이고, 프로세스 수는 10개이다.",
	            "answer": "고객-공급자<br/>프로세스"
	        }
	    },
	    {
	        "id": 446981,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "SPICE의 6개 프로세스 범주 중 다음 설명에 해당하는 프로세스는?",
	            "questionPassage": "ㆍ시스템과 소프트웨어 제품의 명세화, 구현, 유지보수를 하는데 사용되는 프로세스로 구성된다.<br/>ㆍ구성 요소는 개발, 소프트웨어 유지보수이고, 프로세스 수는 9개이다.",
	            "answer": "공학 프로세스"
	        }
	    },
	    {
	        "id": 446982,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "SPICE의 7개 프로세스 범주 중 다음 설명에 해당하는 프로세스는?",
	            "questionPassage": "ㆍ소프트웨어 생명 주기에서 다른 프로세스에 의해 이용되는 프로세스로 구성된다.<br/>ㆍ구성 요소는 문서화, 형상, 품질 보증, 검증 등이고, 프로세스 수는 8개이다.",
	            "answer": "지원 프로세스"
	        }
	    },
	    {
	        "id": 446983,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "SPICE의 8개 프로세스 범주 중 다음 설명에 해당하는 프로세스는?",
	            "questionPassage": "ㆍ소프트웨어 생명 주기에서 프로젝트 관리자에 의해 사용되는 프로세스로 구성된다.<br/>ㆍ구성 요소는 관리, 프로젝트 관리, 품질 및 위험 관리이고, 프로세스수는 4개이다.",
	            "answer": "관리 프로세스"
	        }
	    },
	    {
	        "id": 446984,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "SPICE의 9개 프로세스 범주 중 다음 설명에 해당하는 프로세스는?",
	            "questionPassage": "ㆍ조직의 업무 목적 수립과 조직의 업무 목표 달성을 위한 프로세스로 구성된다.<br/>ㆍ구성 요소는 조직 배치, 인력 관리, 측정 도구 등이고, 프로세스 수는 9개이다.",
	            "answer": "조직 프로세스"
	        }
	    },
	    {
	        "id": 446985,
	        "templateId": 9,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★★",
	            "question": "다음에 제시된 소프트웨어 개발 방법론 테일러링 작업 시 고려해야 할 사항 중 내부적 기준에 해당하는 작업을 고르면?",
	            "questionPassage": [
	                "㉠ 요구사항 ",
	                "㉡ 법적 제약사항 ",
	                "㉢ 보유 기술",
	                "㉣ 표준 품질 기준 ",
	                "㉤ 목표 환경 ",
	                "㉦ 프로젝트 규모"
	            ],
	            "answer": [
	                "1",
	                "3",
	                "5",
	                "6"
	            ]
	        }
	    },
	    {
	        "id": 446986,
	        "templateId": 9,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★☆",
	            "question": "다음에 제시된 소프트웨어 개발 방법론 테일러링 작업 시 고려해야 할 사항 중 외부적 기준에 해당하는 작업을 고르면?",
	            "questionPassage": [
	                "㉠ 요구사항 ",
	                "㉡ 법적 제약사항 ",
	                "㉢ 보유 기술",
	                "㉣ 표준 품질 기준 ",
	                "㉤ 목표 환경 ",
	                "㉦ 프로젝트 규모"
	            ],
	            "answer": [
	                "2",
	                "4"
	            ]
	        }
	    },
	    {
	        "id": 446987,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발 방법론 테일러링의 개념을 간략히 서술하면?",
	            "answer": "소프트웨어 개발 방법론 테일러링은 <span class=\"underline\">소프트웨어 개발 방법론의 절차, 사용기법 등을 수정 및 보완하는 작업</span>이다"
	        }
	    },
	    {
	        "id": 446988,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음은 소프트웨어 개발 방법론 테일러링 작업 시 고려해야 할 사항 중 내부적 기준에 대한 설명이다. 괄호에 들어갈 알맞은 내용은?",
	            "questionPassage": "ㆍ목표 환경 : 시스템의 개발 환경과 유형이 서로 다른 경우<br/>ㆍ요구사항 : 프로젝트에서 우선적으로 고려할 요구사항이 서로 다른 경우<br/>ㆍ(       ) 규모 : 비용, 인력, 기간 등 (       )의 규모가 서로 다른 경우<br/>ㆍ보유 기술 : 프로세스, 개발 방법론, 산출물, 구성원의 능력 등이 서로 다른 경우",
	            "answer": "프로젝트"
	        }
	    },
	    {
	        "id": 446989,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음은 소프트웨어 개발 방법론 테일러링 작업 시 고려해야 할 사항 중 외부적 기준에 대한 설명이다. 괄호에 들어갈 알맞은 내용은?",
	            "questionPassage": "ㆍ법적 제약사항 : 프로젝트별로 적용될 IT Compliance가 서로 다른 경우<br/>ㆍ(       ) 기준 : 금융, 제도 등 분야별 (       ) 기준이 서로 다른 경우",
	            "answer": "표준 품질"
	        }
	    },
	    {
	        "id": 446990,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발 프레임워크의 특성 중 다음 설명에 해당하는 특성은?",
	            "questionPassage": "프레임워크는 다시 사용이 가능한 모듈들을 제공함으로써 예산 절감, 생산성 향상, 품질 보증이 가능하다.",
	            "answer": "재사용성(Reusability"
	        }
	    },
	    {
	        "id": 446991,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발 프레임워크의 특성 중 다음 설명에 해당하는 특성은?",
	            "questionPassage": "개발자가 관리하고 통제해야 하는 객체들의 제어를 프레임워크에 넘김으로써 생산성을 향상시킨다.",
	            "answer": "제어의 역흐름"
	        }
	    },
	    {
	        "id": 446992,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발 프레임워크의 특성 중 다음 괄호에 들어갈 알맞은 특성은?",
	            "questionPassage": "프레임워크는 캡슐화를 통해 (     )를 강화하고 설계 및 구현의 변경에 따른 영향을 최소화함으로써 소프트웨어의 품질을 향상시킨다.",
	            "answer": "모듈화(Modularity)"
	        }
	    },
	    {
	        "id": 446993,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발 프레임워크의 특성 중 다음 설명에 해당하는 특성은?",
	            "questionPassage": "프레임워크는 다형성(Polymorphism)을 통한 인터페이스 확장이 가능하여 다양한 형태와 기능을 가진 애플리케이션 개발이 가능하다.",
	            "answer": "확장성"
	        }
	    },
	    {
	        "id": 446994,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(       )는 소프트웨어 개발에 공통적으로 사용되는 구성 요소와 아키텍처를 일반화하여 손쉽게 구현할 수 있도록 여러 가지 기능들을 제공해주는 반제품 형태의 소프트웨어 시스템으로, 선행 사업자의 기술에 의존하지 않은 표준화된 개발 기반으로 인해 사업자 종속성이 해소된다.",
	            "answer": "소프트웨어 개발 프레임워크"
	        }
	    },
	    {
	        "id": 446995,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발 프레임워크 중 EJB(Enterprise Java Beans) 기반의 복잡함과 무거움을 극복하고 개발 생산성 향상과 고품질의 시스템 개발을 위한 자바 플랫폼 상의 경량화된 오픈 소스 웹 애플리케이션 프레임워크는?",
	            "answer": "스프링 프레임워크(Spring Framework)"
	        }
	    },
	    {
	        "id": 446996,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "대한민국의 공공부문 정보화 사업 시 사용하는 플랫폼별 표준화된 개발 프레임워크로서, 응용 소프트웨어의 표준화, 품질 및 재사용성의 향상을 목표로 하는 소프트웨어 개발 프레임워크는?",
	            "answer": "전자정부 프레임워크"
	        }
	    },
	    {
	        "id": 446997,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "요구사항 확인",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "마이크로소프트사에서 개발한 윈도우 프로그램 개발 및 실행 환경을 제공하는 프레임워크로, 네트워크 작업, 인터페이스 등의 많은 작업을 캡슐화하였고, 공통 언어 런타임(Common Language Runtime)이라는 이름의 가상머신 위에서 작동하는 소프트웨어 개발 프레임워크는?",
	            "answer": "닷넷 프레임워크(.NET Framework)"
	        }
	    },
	    {
	        "id": 446998,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음이 설명하는 것이 무엇인가?",
	            "questionPassage": "운영 중인 기존 정보 시스템에 축적되어 있는 데이터를 추출(Extraction)하여 새로 개발할 정보 시스템에서 운영할 수 있도록 변환(Transformation)한 후, 적재(Loading)하는 일련의 과정을 말한다.",
	            "answer": "데이터 전환"
	        }
	    },
	    {
	        "id": 446999,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음이 설명하는 것이 무엇인가?",
	            "questionPassage": "데이터 전환이 필요한 대상을 분석하여 데이터 전환 작업에 필요한 모든 계획을 기록하는 문서로, 주요 항목은 데이터 전환 개요, 데이터 전환 대상 및 범위, 데이터 전환 환경 구성 등이 있다.",
	            "answer": "데이터 전환 계획서"
	        }
	    },
	    {
	        "id": 447000,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음이 설명하는 것이 무엇인가?",
	            "questionPassage": "원천 시스템의 데이터를 목적 시스템의 데이터로 생성하는 과정이 정상적으로 수행되었는지 여부를 확인하는 과정이다.",
	            "answer": "데이터 검증"
	        }
	    },
	    {
	        "id": 447001,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "데이터 검증을 검증 방법에 따라 분류할 때 다음 설명에 가장 적합한 검증 방법은?",
	            "questionPassage": "로그 검증 외에 별도로 요청된 검증 항목에 대해 검증한다.",
	            "answer": "기본 항목 검증"
	        }
	    },
	    {
	        "id": 447002,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "데이터 검증을 검증 방법에 따라 분류할 때 다음 설명에 가장 적합한 검증 방법은?",
	            "questionPassage": "데이터 전환 과정에서 작성하는 추출, 전환, 적재 로그를 검증한다.",
	            "answer": "로그 검증"
	        }
	    },
	    {
	        "id": 447003,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "데이터 검증을 검증 방법에 따라 분류할 때 다음 설명에 가장 적합한 검증 방법은?",
	            "questionPassage": "응용 프로그램을 통한 데이터 전환의 정합성을 검증한다.",
	            "answer": "응용 프로그램 검증"
	        }
	    },
	    {
	        "id": 447004,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "데이터 검증을 검증 방법에 따라 분류할 때 다음 설명에 가장 적합한 검증 방법은?",
	            "questionPassage": "숫자 항목의 합계 검증, 코드 데이터의 범위 검증, 속성 변경에 따른 값 검증을 수행한다.",
	            "answer": "값 검증"
	        }
	    },
	    {
	        "id": 447005,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "데이터 검증을 검증 방법에 따라 분류할 때 다음 설명에 가장 적합한 검증 방법은?",
	            "questionPassage": "사전에 정의된 업무 규칙을 기준으로 데이터 전환의 정합성을 검증한다.",
	            "answer": "응용 데이터 검증"
	        }
	    },
	    {
	        "id": 447006,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음은 오류 데이터 측정 및 정제 과정이다. 과정을 순서대로 나열하시오.",
	            "questionPassage": "오류 데이터 정제, 데이터 품질 분석, 오류 데이터 측정",
	            "answer": "데이터 품질 분석 → 오류 데이터 측정 → 오류 데이터 정제"
	        }
	    },
	    {
	        "id": 447007,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "오류 관리 목록의 오류 데이터를 분석하여 확인할 수 있는 오류 상태 중 다음 설명에 가장 적합한 오류 상태는?",
	            "questionPassage": "오류가 보고만 되고 분석되지 않은 상태",
	            "answer": "Open"
	        }
	    },
	    {
	        "id": 447008,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "오류 관리 목록의 오류 데이터를 분석하여 확인할 수 있는 오류 상태 중 다음 설명에 가장 적합한 오류 상태는?",
	            "questionPassage": "개발자가 오류를 수정한 상태",
	            "answer": "Fixed"
	        }
	    },
	    {
	        "id": 447009,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "오류 관리 목록의 오류 데이터를 분석하여 확인할 수 있는 오류 상태 중 다음 설명에 가장 적합한 오류 상태는?",
	            "questionPassage": "오류 수정을 연기한 상태",
	            "answer": "Deferred"
	        }
	    },
	    {
	        "id": 447010,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "오류 관리 목록의 오류 데이터를 분석하여 확인할 수 있는 오류 상태 중 다음 설명에 가장 적합한 오류 상태는?",
	            "questionPassage": "오류의 영향 분석 및 수정을 위해 개발자에게 오류를 전달한 상태",
	            "answer": "Assigned"
	        }
	    },
	    {
	        "id": 447011,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "오류 관리 목록의 오류 데이터를 분석하여 확인할 수 있는 오류 상태 중 다음 설명에 가장 적합한 오류 상태는?",
	            "questionPassage": "수정된 오류에 대해 테스트를 다시 했을 때 오류가 발견되지 않은 상태",
	            "answer": "Closed"
	        }
	    },
	    {
	        "id": 447012,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "오류 관리 목록의 오류 데이터를 분석하여 확인할 수 있는 오류 상태 중 다음 설명에 가장 적합한 오류 상태는?",
	            "questionPassage": "보고된 오류를 관련자들이 확인했을 때 오류가 아니라고 확인된 상태",
	            "answer": "Classified"
	        }
	    },
	    {
	        "id": 447013,
	        "templateId": 8,
	        "registeredDate": 1652337945000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 원천 데이터의 정제와 전환 프로그램의 수정을 위해 요청사항 및 조치사항 등 데이터 정제와 관련된 전반적인 내용을 문서로 작성한 것이다.",
	            "answer": "데이터 정제요청서"
	        }
	    },
	    {
	        "id": 447014,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 데이터 정제요청서를 통해 정제된 원천 데이터가 정상적으로 정제되었는지 확인한 결과를 문서로 작성한 것으로, 정제 요청 데이터와 정제된 데이터 항목을 눈으로 직접 비교하여 확인한다.",
	            "answer": "데이터 정제보고서"
	        }
	    },
	    {
	        "id": 447015,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "데이터베이스의 스키마(Schema)에 대해 간략히 서술하면?",
	            "answer": "스키마는 <span class=\"underline\">데이터베이스의 구조와 제약조건에 관한 전반적인 명세를 기술한 것</span>이다."
	        }
	    },
	    {
	        "id": 447016,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 사용자의 요구에 따라 정보를 생성해주고, 데이터베이스를 관리해 주는 소프트웨어로, 기존의 파일 시스템이 갖는 데이터의 종속성과 중복성의 문제를 해결하기 위해 제안된 시스템이다.",
	            "answer": "DBMS(DataBase Management System; 데이터베이스 관리 시스템)"
	        }
	    },
	    {
	        "id": 447017,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "스키마의 종류 중 다음이 설명하는 스키마는?",
	            "questionPassage": "물리적 저장장치의 입장에서 본 데이터베이스 구조로서, 실제로 데이터베이스에 저장될 레코드의 형식을 정의하고 저장 데이터 항목의 표현 방법, 내부 레코드의 물리적 순서 등을 나타낸다.",
	            "answer": "내부 스키마"
	        }
	    },
	    {
	        "id": 447018,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "데이터베이스 관리 시스템(DBMS)이 목표로 하는 특성으로, 데이터베이스에 저장된 데이터의 논리적 구조를 변경시키거나 성능 향상을 위해 장치를 추가 및 변경하더라도 데이터베이스를 이용하는 응용 프로그램에는 영향을 주지 않는 성질을 가리키는 용어는?",
	            "answer": "데이터의 독립성"
	        }
	    },
	    {
	        "id": 447019,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "DBMS의 필수 기능 3가지는?",
	            "answer": "정의(Definition) 기능,<br/>조작(Manipulation) 기능,<br/>제어(Control) 기능"
	        }
	    },
	    {
	        "id": 447020,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "DBMS의 필수 기능 중 데이터의 형(Type)과 구조에 대한 정의, 이용 방식, 제약 조건 등을 명시하는 기능은?",
	            "answer": "정의(Definition) 기능"
	        }
	    },
	    {
	        "id": 447021,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "DBMS의 필수 기능 중 데이터 검색, 갱신, 삽입, 삭제 등을 위해 인터페이스 수단을 제공하는 기능은?",
	            "answer": "조작(Manipulation) 기능"
	        }
	    },
	    {
	        "id": 447022,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "DBMS의 필수 기능 중 데이터의 무결성, 보안, 권한 검사, 병행 제어를 제공하는 기능은?",
	            "answer": "제어(Control) 기능"
	        }
	    },
	    {
	        "id": 447023,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "데이터베이스의 전체적인 논리적 구조로 단 하나만 존재하며, 모든 응용 프로그램이나 사용자들이 필요로 하는 데이터를 종합한 조직 전체의 데이터베이스를 가리키는 용어는?",
	            "answer": "개념 스키마"
	        }
	    },
	    {
	        "id": 447024,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 여러 사람에 의해 공동으로 사용될 데이터를 중복을 배제하여 통합하고, 쉽게 접근하여 처리할 수 있도록 저장장치에 저장하여 항상 사용할 수 있도록 운영하는 운영 데이터이다.",
	            "answer": "데이터베이스(Database)"
	        }
	    },
	    {
	        "id": 447025,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음은 무엇에 대한 정의인가?",
	            "questionPassage": "ㆍ통합된 데이터 : 자료의 중복을 배제한 데이터의 모임<br/>ㆍ저장된 데이터 : 컴퓨터가 접근할 수 있는 저장 매체에 저장된 자료<br/>ㆍ운영 데이터 : 조직의 고유한 업무를 수행하는 데 반드시 필요한 자료<br/>ㆍ공용 데이터 : 여러 응용 시스템들이 공동으로 소유하고 유지하는 자료",
	            "answer": "데이터베이스(Database)"
	        }
	    },
	    {
	        "id": 447026,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "데이터베이스의 목표 중 하나인 논리적 독립성에 대해 간략히 서술하시오.",
	            "answer": "논리적 독립성은 데이터의 논리적 구조를 변경시키더라도 응용 프로그램은 영향을 받지 않는 성질이다."
	        }
	    },
	    {
	        "id": 447027,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 응용 프로그램과 보조기억장치 같은 물리적 장치를 독립시킴으로써, 디스크를 추가/변경하더라도 응용 프로그램은 영향을 받지 않는 것을 의미한다.",
	            "answer": "물리적 독립성"
	        }
	    },
	    {
	        "id": 447028,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "스키마의 종류 중 (     )는 사용자나 응용 프로그래머가 각 개인의 입장에서 필요로 하는 데이터베이스의 논리적 구조를 정의한 것이다.",
	            "answer": "외부 스키마"
	        }
	    },
	    {
	        "id": 447029,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음은 데이터베이스 구축까지의 과정을 나열한 것이다. 괄호에 들어갈 알맞은 용어는?",
	            "questionPassage": "요구 분석 → (     ) → (     ) → (     ) → 구현",
	            "answer": "개념적 설계, 논리적 설계, 물리적 설계"
	        }
	    },
	    {
	        "id": 447030,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "다음이 설명하고 있는 데이터베이스 설계 단계는?",
	            "questionPassage": "현실 세계에서 발생하는 자료를 컴퓨터가 이해하고 처리할 수 있는 물리적 저장장치에 저장할 수 있도록 변환하기 위해 특정 DBMS가 지원하는 논리적 자료 구조로 변환(mapping)시키는 과정으로, 다음과 같은 작업을 수행한다.<br/>ㆍ논리적 데이터베이스 구조로 매핑(mapping)<br/>ㆍ트랜잭션 인터페이스 설계<br/>ㆍ스키마의 평가 및 정제<br/>ㆍ목표 DBMS에 맞는 스키마 설계",
	            "answer": "논리적 설계"
	        }
	    },
	    {
	        "id": 447031,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "다음이 설명하고 있는 데이터베이스 설계 단계는?",
	            "questionPassage": "논리적 구조로 표현된 데이터를 디스크 등의 물리적 저장장치에 저장할 수 있는 물리적 구조의 데이터로 변환하는 과정으로, 다음과 같은 작업을 수행한다.<br/>ㆍ저장 레코드 양식 설계<br/>ㆍ레코드 집중의 분석 및 설계<br/>ㆍ 경로 설계",
	            "answer": "물리적 설계"
	        }
	    },
	    {
	        "id": 447032,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "데이터베이스 설계 단계 중 정보의 구조를 얻기 위하여 현실 세계의 무한성과 계속성을 이해하고, 다른 사람과 통신하기 위하여 현실 세계에 대한 인식을 추상적 개념으로 표현하는 과정은?",
	            "answer": "개념적 설계"
	        }
	    },
	    {
	        "id": 447033,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "데이터 모델은 현실 세계의 정보들을 컴퓨터에 표현하기 위해서 단순화, 추상화하여 체계적으로 표현한 개념적 모형이다. 데이터 모델에 표시할 요소 3가지는?",
	            "answer": "구조(Structure), 연산(Operation), 제약 조건(Constraint)"
	        }
	    },
	    {
	        "id": 447034,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 현실 세계의 정보들을 컴퓨터에 표현하기 위해서 단순화, 추상화하여 체계적으로 표현한 개념적 모형이다.",
	            "answer": "데이터 모델"
	        }
	    },
	    {
	        "id": 447035,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음이 설명하는 데이터 모델은?",
	            "questionPassage": "ㆍ현실 세계에 대한 인간의 이해를 돕기 위해 현실 세계에 대한 인식을 추상적 개념으로 표현하는 과정이다.<br/>ㆍ속성들로 기술된 개체 타입과 이 개체 타입들 간의 관계를 이용하여 현실 세계를 표현하며, 대표적인 모델로는 E-R 모델이 있다.",
	            "answer": "개념적 데이터 모델"
	        }
	    },
	    {
	        "id": 447036,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음이 설명하는 데이터 모델은?",
	            "questionPassage": "ㆍ개념적 모델링 과정에서 얻은 개념적 구조를 컴퓨터가 이해하고 처리할 수 있는 컴퓨터 세계의 환경에 맞도록 변환하는 과정이다.<br/>ㆍ필드로 기술된 데이터 타입과 이 데이터 타입들 간의 관계를 이용하여 현실 세계를 표현한다.<br/>ㆍ데이터 간의 관계를 어떻게 표현하느냐에 따라 관계 모델, 계층 모델, 네트워크 모델로 구분한다.",
	            "answer": "논리적 데이터 모델"
	        }
	    },
	    {
	        "id": 447037,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "데이터 모델에 표시할 요소 중 구조(Structure)에 대해 간략히 서술하면?",
	            "answer": "구조는 <span class=\"underline\">논리적으로 표현된 개체 타입들 간의 관계로서 데이터 구조 및 정적 성질을 표현</span>한다."
	        }
	    },
	    {
	        "id": 447038,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "데이터 모델에 표시할 요소 중 (     )은 데이터베이스에 저장된 실제 데이터를 처리하는 작업에 대한 명세로서 데이터베이스를 조작하는 기본 도구이다.",
	            "answer": "연산(Operation)"
	        }
	    },
	    {
	        "id": 447039,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "데이터 모델에 표시할 요소 중 (     )은 데이터베이스에 저장될 수 있는 실제 데이터의 논리적인 제약 조건이다.",
	            "answer": "제약 조건(Constraint)"
	        }
	    },
	    {
	        "id": 447040,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "데이터 모델에 표시할 요소 중 (     )는 논리적으로 표현된 개체 타입들 간의 관계로서 데이터 구조 및 정적 성질을 표현한다.",
	            "answer": "구조(Structure)"
	        }
	    },
	    {
	        "id": 447041,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "데이터 모델은 현실 세계의 정보들을 컴퓨터에 표현하기 위해서 단순화, 추상화하여 체계적으로 표현한 개념적 모형이다. 데이터 모델의 구성 요소 3가지는?",
	            "answer": "개체(Entity), 속성(Attribute), 관계(Relationship)"
	        }
	    },
	    {
	        "id": 447042,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음이 설명하고 있는 데이터 모델의 구성 요소는?",
	            "questionPassage": "ㆍ데이터의 가장 작은 논리적 단위로서 파일 구조상의 데이터 항목 또는 데이터 필드에 해당한다.<br/>ㆍ개체를 구성하는 항목이다.<br/>ㆍ개체의 특성을 기술한다.<br/>ㆍ이것의 수를 디그리(Degree) 또는 차수라고 한다.",
	            "answer": "속성(Attribute)"
	        }
	    },
	    {
	        "id": 447043,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "관계(Relationship) 형태 중 다음이 설명하는 관계 형태는?",
	            "questionPassage": "개체 집합 A의 각 원소는 개체 집합 B의 원소 여러 개와 대응하고 있지만, 개체 집합 B의 각 원소는 개체 집합 A의 원소 한 개와 대응하는 관계이다.",
	            "answer": "일 대 다(1:N)"
	        }
	    },
	    {
	        "id": 447044,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "관계(Relationship) 형태 중 다음이 설명하는 관계 형태는?",
	            "questionPassage": "개체 집합 A의 각 원소는 개체 집합 B의 원소 여러 개와 대응하고, 개체 집합 B의 각 원소도 개체 집합 A의 원소 여러 개와 대응하는 관계이다.",
	            "answer": "다 대 다(N:M)"
	        }
	    },
	    {
	        "id": 447045,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "관계(Relationship) 형태 중 다음이 설명하는 관계 형태는?",
	            "questionPassage": "개체 집합 A의 각 원소가 개체 집합 B의 원소 한 개와 대응하는 관계이다.",
	            "answer": "일 대 일(1:1)"
	        }
	    },
	    {
	        "id": 447046,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "데이터 모델의 구성 요소 중 개체(Entity)의 개념을 간략히 서술하면?",
	            "answer": "개체는 <span class=\"underline\"><br/>사람이 생각하는 개념이나 정보 단위 같은 현실 세계의 대상체</span>이다."
	        }
	    },
	    {
	        "id": 447047,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "데이터 모델의 구송 요소 중 (     )는 개체 간의 관계 또는 속성 간의 논리적인 연결을 의미한다.",
	            "answer": "관계(Relationship)"
	        }
	    },
	    {
	        "id": 447048,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "데이터 모델의 구송 요소 중 (     )은 데이터의 가장 작은 논리적 단위로서 파일 구조상의 데이터 항목 또는 데이터 필드에 해당한다.",
	            "answer": "속성(Attribute)"
	        }
	    },
	    {
	        "id": 447049,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "데이터 모델의 구송 요소 중 (     )는 데이터베이스에 표현하려는 것으로, 사람이 생각하는 개념이나 정보 단위 같은 현실 세계의 대상체이다.",
	            "answer": "개체(Entity)"
	        }
	    },
	    {
	        "id": 447050,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 속성은?",
	            "questionPassage": "ㆍ업무 분석을 통해 정의한 속성으로, 속성 중 가장 많고 일반적이다.<br/>ㆍ업무로부터 분석한 속성이라도 업무상 코드로 정의한 속성은 기본 속성에서 제외된다.",
	            "answer": "기본 속성<br/>(Basic Attribute)"
	        }
	    },
	    {
	        "id": 447051,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 속성은?",
	            "questionPassage": "원래 업무상 존재하지 않고 설계 과정에서 도출해내는 속성으로, 업무에 필요한 데이터 외에 데이터 모델링을 위해 업무를 규칙화하려고 속성을 새로 만들거나 변형하여정의한다.",
	            "answer": "설계 속성<br/>(Designed Attribute)"
	        }
	    },
	    {
	        "id": 447052,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 속성은?",
	            "questionPassage": "다른 속성으로부터 계산이나 변형 등의 영향을 받아 발생하는 속성으로, 되도록 적은수를 정의하는 것이 좋다.",
	            "answer": "파생 속성<br/>(Derived Attribute)"
	        }
	    },
	    {
	        "id": 447053,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "관계의 종류 중 (     )는 두 개체 사이에 2번 이상의 종속 관계가 발생하는 관계이다.",
	            "answer": "중복 관계<br/>(Redundant Relationship)"
	        }
	    },
	    {
	        "id": 447054,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "관계의 종류 중 (     )는 개체의 속성이나 구분자를 기준으로 개체의 특성을 분할하는 관계이다.",
	            "answer": "배타 관계<br/>(Exclusive Relationship)"
	        }
	    },
	    {
	        "id": 447055,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "관계의 종류 중 (     )는 두 개체 사이의 주·종 관계를 표현한 것으로, 식별 관계와 비식별 관계가 있다.",
	            "answer": "종속 관계<br/>(Dependent Relationship)"
	        }
	    },
	    {
	        "id": 447056,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "관계의 종류 중 (     )는 개체가 자기 자신과 관계를 갖는 것으로, 순환 관계(Recursive Relationship)라고도 한다.",
	            "answer": "재귀 관계<br/>(Recursive Relationship)"
	        }
	    },
	    {
	        "id": 447057,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명의 괄호에 들어갈 식별자는?",
	            "questionPassage": "ㆍ식별자(Identifier) 중 (  ①  )는 개체를 대표하는 유일한 식별자이고, (  ②  )는 (  ①  )를 대신하여 개체를 식별할 수 있는 속성이다.<br/>ㆍ하나의 개체에 (  ①  )는 한 개만 존재하지만 (  ②  )는 한 개 이상 존재한다.",
	            "answer": "① 주 식별자(Primary Identifier)<br/>② 보조 식별자(Alternate Identifier)"
	        }
	    },
	    {
	        "id": 447058,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "식별자(Identifier) 중 (  ①  )는 개체 내에서 스스로 만들어지는 식별자이고, (  ②  )는 다른 개체와의 관계(Relationship)에 의해 외부 개체의 식별자를 가져와 사용하는 식별자이다.",
	            "answer": "① 내부 식별자(Internal Identifier)<br/>② 외부 식별자(ForeignIdentifier)"
	        }
	    },
	    {
	        "id": 447059,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "식별자(Identifier) 중 (  ①  )는 주 식별자가 한 가지 속성으로만 구성된 식별자이고, (  ②  )는 주 식별자가 두 개 이상의 속성으로 구성된 식별자이다.",
	            "answer": "① 단일 식별자(Single Identifier)<br/>② 복합 식별자(Composit Identifier)"
	        }
	    },
	    {
	        "id": 447060,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "식별자(Identifier) 중 (  ①  )는 업무에 의해 만들어지는 가공되지 않은 원래의 식별자로, 본질 식별자라고도 하고, (  ②  )는 주 식별자의 속성이 두 개 이상인 경우 속성들을 하나의 속성으로 묶어 사용하는 식별자로, 인조 식별자라고도 한다.",
	            "answer": "① 원조 식별자(Original Identifier)<br/>② 대리 식별자(Surrogate Identifier)"
	        }
	    },
	    {
	        "id": 447061,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "개체에서 개별 인스턴스를 유일하게 식별할 수 있는 속성 또는 속성 집합을 의미하는 식별자로, 하나의 개체에는 한 개 이상의 이 식별자가 존재할 수 있으며, 이 중 개체의 대표성을 나타내는 식별자를 주 식별자로, 나머지는 보조 식별자로 지정한다. 이식별자가 무엇인가?",
	            "answer": "후보 식별자"
	        }
	    },
	    {
	        "id": 447062,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "주 식별자의 4가지 특징 중 다음 설명에 가장 알맞은 특징은?",
	            "questionPassage": "주 식별자를 구성하는 속성의 수는 유일성을 만족하는 최소 수가 되어야 한다.",
	            "answer": "최소성"
	        }
	    },
	    {
	        "id": 447063,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "주 식별자의 4가지 특징 중 다음 설명에 가장 알맞은 특징은?",
	            "questionPassage": "개체 내에 모든 인스턴스들은 주 식별자에 의해 유일하게 구분되어야 한다.",
	            "answer": "유일성"
	        }
	    },
	    {
	        "id": 447064,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "주 식별자의 4가지 특징 중 다음 설명에 가장 알맞은 특징은?",
	            "questionPassage": "주 식별자가 지정되면 식별자 속성에 반드시 데이터 값이 존재해야 한다.",
	            "answer": "존재성"
	        }
	    },
	    {
	        "id": 447065,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "주 식별자의 4가지 특징 중 다음 설명에 가장 알맞은 특징은?",
	            "questionPassage": "주 식별자가 한 번 특정 개체에 지정되면 그 식별자는 변하지 않아야 한다.",
	            "answer": "불변성"
	        }
	    },
	    {
	        "id": 447066,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "개체-관계 모델의 E-R 다이어그램에서 사용되는 기호 중 타원의 의미는?",
	            "answer": "속성(Attribute)"
	        }
	    },
	    {
	        "id": 447067,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "개체-관계 모델의 E-R 다이어그램에서 사용되는 기호 중 이중 타원의 의미는?",
	            "answer": "다중값 속성(복합 속성)"
	        }
	    },
	    {
	        "id": 447068,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "개체-관계 모델의 E-R 다이어그램에서 사용되는 기호 중 밑줄 타원의 의미는?",
	            "answer": "기본키 속성"
	        }
	    },
	    {
	        "id": 447069,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "개체-관계 모델의 E-R 다이어그램에서 사용되는 기호 중 마름모의 의미는?",
	            "answer": "관계(Relationship) 타입"
	        }
	    },
	    {
	        "id": 447070,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "개체-관계 모델의 E-R 다이어그램에서 사용되는 기호 중 사각형의 의미는?",
	            "answer": "개체(Entity) 타입"
	        }
	    },
	    {
	        "id": 447071,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "개체-관계 모델의 E-R 다이어그램에서 개체 타입과 속성을 연결할 때 사용되는 기호는?",
	            "answer": "선"
	        }
	    },
	    {
	        "id": 447072,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "개념적 데이터 모델의 가장 대표적인 것으로, 1976년 피터 첸(Peter Chen)에 의해 제안되고 기본적인 구성 요소가 정립되었고, 개체와 개체 간의 관계를 기본 요소로 이용하여 현실 세계의 무질서한 데이터를 개념적인 논리 데이터로 표현하기 위한 방법으로 많이 사용되고 있는 것은?",
	            "answer": "E-R(Entity-Relationship, 개체-관계) 모델"
	        }
	    },
	    {
	        "id": 447073,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "E-R 다이어그램에서 개체(Entity) 타입은 (     )로 표시한다.",
	            "answer": "사각형"
	        }
	    },
	    {
	        "id": 447074,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "E-R 다이어그램에서 관계(Relationship) 타입은 (     )로 표시한다.",
	            "answer": "마름모"
	        }
	    },
	    {
	        "id": 447075,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "E-R 다이어그램에서 속성(Attribute)은 (     )로 표시한다.",
	            "answer": "타원"
	        }
	    },
	    {
	        "id": 447076,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "E-R 다이어그램에서 다중값 속성(복합 속성)은 (     )로 표시한다.",
	            "answer": "이중타원"
	        }
	    },
	    {
	        "id": 447077,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "E-R 다이어그램에서 개체 타입과 속성의 연결은 (     )로 표시한다.",
	            "answer": "선"
	        }
	    },
	    {
	        "id": 447078,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 2차원적인 표(Table)를 이용해서 데이터 상호 관계를 정의하는 데이터베이스로, 1970년 IBM에 근무하던 코드(E. F. Codd)에 의해 처음 제안되었다. 개체(Entity)와 관계(Relationship)를 모두 릴레이션이라는 표(Table)로 표현하기 때문에 개체를 개체 릴레이션과 관계 릴레이션이 존재한다.",
	            "answer": "관계형 데이터베이스"
	        }
	    },
	    {
	        "id": 447079,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음이 설명하는 용어는?",
	            "questionPassage": "ㆍ릴레이션을 구성하는 각각의 행을 말한다.<br/>ㆍ속성의 모임으로 구성된다.<br/>ㆍ파일 구조에서 레코드와 같은 의미이다.<br/>ㆍ이것의 수를 카디널리티(Cardinality) 또는 기수, 대응수라고 한다.",
	            "answer": "튜플(Tuple)"
	        }
	    },
	    {
	        "id": 447080,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "하나의 애트리뷰트가 취할 수 있는 같은 타입의 원자(Atomic)값들의 집합을 의미하는 것은?",
	            "answer": "도메인(Domain)"
	        }
	    },
	    {
	        "id": 447081,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 표에서 릴레이션(Relation)의 수는?<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9993.png\"/>",
	            "answer": "1"
	        }
	    },
	    {
	        "id": 447082,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 표에서 애트리뷰트(Attribute)의 수는? <br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9993.png\"/>",
	            "answer": "3"
	        }
	    },
	    {
	        "id": 447083,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "다음 표에서 튜플(Tuple)의 수는?",
	            "questionPassage": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9993.png\"/>",
	            "answer": "5"
	        }
	    },
	    {
	        "id": 447084,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "관계형 데이터베이스의 릴레이션(Relation) 구조 중 도메인(Domain)의 개념을 간략히 서술하면?",
	            "answer": "도메인은 <span class=\"underline\">하나의 애트리뷰트가 취할 수 있는 같은 타입의 원자(Atomic)값들의 집합</span>이다."
	        }
	    },
	    {
	        "id": 447085,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "어떤 릴레이션의 스키마가 4개의 속성(Attribute), 2개의 후보키 그리고 그 스키마의 릴레이션 인스턴스가 7개의 튜플(Tuple)을 갖는다면 그 릴레이션의 차수(Degree)는?",
	            "answer": "4",
	            "solution": "차수(Degree)는 속성(Attribute)의 수와 동일하므로 4입니다."
	        }
	    },
	    {
	        "id": 447086,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "A1, A2, A3 3개 속성을 갖는 한 릴레이션(Relation)에서 A1의 도메인(Domain)은 3개 값, A2의 도메인은 2개 값, A3의 도메인은 4개 값을 갖는다. 이 릴레이션에 존재 가능한 튜플(Tuple)의 최대 수는?",
	            "answer": "24",
	            "solution": "한 릴레이션에 속한 튜플(Tuple)들은 모두 서로 다른 값을 가져야 합니다. 즉 튜플에 속한 속성 A1, A2, A3 중 한 개는 다른 튜플들과 다른 값을 가져야 하므로, 존재할 수 있는 최대 튜플의 수는 각 도메인(Domain)이 가진 값의 종류를 모두 곱한 값이 됩니다.<br/>∴ 3×2×4 = 24"
	        }
	    },
	    {
	        "id": 447087,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "데이터베이스에서 2차원 구조의 표 또는 테이블을 이용하여 데이터 상호 관계를 정의하는 DB 구조를 의미하고, 가장 널리 사용되는 데이터 모델은?",
	            "answer": "관계형 데이터 모델"
	        }
	    },
	    {
	        "id": 447088,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "A01, A02, A03, A04 4개 속성을 갖는 한 릴레이션(Relation)에서 A01의 도메인(Domain)은 2개 값, A02의 도메인은 4개 값, A03의 도메인은 2개 값, A04의 도메인은 3개 값을 갖는다. 이 릴레이션에 존재할 수 있는 최대 튜플(Tuple)의 수는?",
	            "answer": "48",
	            "solution": "튜플에 속한 속성 A01, A02, A03, A04 중 한 개는 다른 튜플들과 다른 값을 가져야 하므로, 존재할 수 있는 최대 튜플의 수는 각 도메인(Domain)이 가진 값의 종류를 모두 곱한 값과 같습니다.<br/>∴ 2×4×2×3 = 48"
	        }
	    },
	    {
	        "id": 447089,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 데이터베이스에서 조건에 만족하는 튜플을 찾거나 순서대로 정렬할 때 기준이 되는 속성을 말한다.",
	            "answer": "키(Key)"
	        }
	    },
	    {
	        "id": 447090,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 두 릴레이션(Relation)에서 외래키로 사용된 속성? (단, 밑줄 친 속성은 기본키이다.).",
	            "questionPassage": "과목(<span class=\"underline\">과목번호</span>, 과목명)<br/>수강(<span class=\"underline\">수강번호</span>, 학번, 과목번호, 학기)",
	            "answer": "과목번호"
	        }
	    },
	    {
	        "id": 447091,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "후보키는 하나의 키 값으로 하나의 튜플만을 유일하게 식별할 수 있어야 하는 (  ①  )과 키를 구성하는 속성 하나를 제거하면 유일하게 식별할 수 없도록 꼭 필요한 최소의 속성으로 구성되어야 하는 (  ②  )을 모두 만족시켜야 한다.",
	            "answer": "① 유일성(Unique)<br/>② 최소성(Minimality)"
	        }
	    },
	    {
	        "id": 447092,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "한 릴레이션 내에 있는 속성들의 집합으로 구성된 키(Key)로, 릴레이션에 있는 모든 튜플에 대해 유일성은 만족시키지만 최소성은 만족시키지 못하는 키는?",
	            "answer": "슈퍼키(Super Key)"
	        }
	    },
	    {
	        "id": 447093,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "관계형 데이터베이스의 제약 조건 중 대체키(Alternate Key)에 대한 개념을 간략히 서술하면?",
	            "answer": "대체키는 <span class=\"underline\">후보키가 둘 이상일 때 기본키를 제외한 나머지 후보키</span>를 의미한다."
	        }
	    },
	    {
	        "id": 447094,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음이 설명하고 있는 키(Key)의 종류는?",
	            "questionPassage": "ㆍ후보키 중에서 특별히 선정된 키이다.<br/>ㆍ한 릴레이션에서 특정 튜플을 유일하게 구별할 수 있는 속성이다.<br/>ㆍ후보키의 성질을 갖는다.<br/>ㆍ중복된 값이나 NULL 값을 가질 수 없다.",
	            "answer": "기본키(Primary Key)"
	        }
	    },
	    {
	        "id": 447095,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "후보키 중에서 선정된 기본키를 제외한 나머지 후보키는?",
	            "answer": "대체키<br/>(Alternate Key)"
	        }
	    },
	    {
	        "id": 447096,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "릴레이션을 구성하는 속성들 중에서 튜플을 유일하게 식별하기 위해 사용되는 속성들의 부분집합으로, 유일성과 최소성을 모두 만족하는 키는?",
	            "answer": "후보키<br/>(Candidate Key)"
	        }
	    },
	    {
	        "id": 447097,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 후보키 중에서 특별히 선정된 키로서, 후보키의 성질인 유일성과 최소성을 모두 만족한다.",
	            "answer": "기본키<br/>(Primary Key)"
	        }
	    },
	    {
	        "id": 447098,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "한 릴레이션 내에 있는 속성들의 집합으로써 릴레이션을 구성하는 모든 튜플에 대하여 해당 속성의 집합에서 같은 값들이 나타나지 않는 키는?",
	            "answer": "슈퍼키<br/>(Super Key)"
	        }
	    },
	    {
	        "id": 447099,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다른 릴레이션의 기본키를 참조하는 속성 또는 속성들의 집합을 의미하는 키는?",
	            "answer": "외래키<br/>(Foreign Key)"
	        }
	    },
	    {
	        "id": 447100,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 다른 릴레이션의 기본키를 참조하는 속성 또는 속성들의 집합을 의미하며, 한 릴레이션에 속한 속성 A와 참조 릴레이션의 기본키인 B가 동일한 도메인 상에서 정의되었을 때의 속성 A를 이것이라고 한다.",
	            "answer": "외래키<br/>(Foreign Key)"
	        }
	    },
	    {
	        "id": 447101,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "관계형 데이터베이스의 제약 조건 중 후보키(Candidate Key)에 대한 개념을 간략히 서술하시오.",
	            "answer": "후보키는 릴레이션을 구성하는 속성들 중에서 튜플을 유일하게 식별하기 위해 사용되는 속성들의 부분집합이다."
	        }
	    },
	    {
	        "id": 447102,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 데이터베이스에 저장된 데이터 값과 그것이 표현하는 현실 세계의 실제값이 일치하는 정확성을 의미한다.",
	            "answer": "무결성(Integrity)"
	        }
	    },
	    {
	        "id": 447103,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 무결성의 종류는?",
	            "questionPassage": "주어진 속성 값이 정의된 도메인에 속한 값이어야 한다는 규정",
	            "answer": "도메인 무결성 "
	        }
	    },
	    {
	        "id": 447104,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 무결성의 종류는?",
	            "questionPassage": "속성 값들이 사용자가 정의한 제약조건에 만족되어야 한다는 규정",
	            "answer": "사용자 정의 무결성"
	        }
	    },
	    {
	        "id": 447105,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 무결성의 종류는?",
	            "questionPassage": "릴레이션의 특정 속성 값이 NULL이 될 수 없도록 하는 규정",
	            "answer": "NULL 무결성 "
	        }
	    },
	    {
	        "id": 447106,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 무결성의 종류는?",
	            "questionPassage": "릴레이션의 특정 속성에 대해 각 튜플이 갖는 속성값들이 서로 달라야 한다는 규정",
	            "answer": "고유 무결성"
	        }
	    },
	    {
	        "id": 447107,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 무결성의 종류는?",
	            "questionPassage": "하나의 릴레이션에는 적어도 하나의 키가 존재해야 한다는 규정",
	            "answer": "키 무결성 "
	        }
	    },
	    {
	        "id": 447108,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 무결성의 종류는?",
	            "questionPassage": "릴레이션에 어느 한 튜플의 삽입 가능 여부 또는 한 릴레이션과 다른 릴레이션의 튜플들 사이의 관계에 대한 적절성 여부를 지정한 규정",
	            "answer": "관계 무결성"
	        }
	    },
	    {
	        "id": 447109,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "데이터 무결성 제약조건 중 개체 무결성(Entity Integrity)의 개념을 간략히 서술하면?",
	            "answer": "개체 무결성은 기본 테이블의 <span class=\"underline\">기본키를 구성하는 어떤 속성도 Null 값이나 중복값을 가질 수 없다는 규정</span>이다."
	        }
	    },
	    {
	        "id": 447110,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "외래키 값은 Null이거나 참조 릴레이션의 기본키 값과 동일해야 한다. 즉 릴레이션은 참조할 수 없는 외래키 값을 가질 수 없다는 규정을 의미하는 무결성 종류는?",
	            "answer": "참조 무결성<br/>(Referential Integrity)"
	        }
	    },
	    {
	        "id": 447111,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음은 데이터 무결성 강화에 대한 설명이다. 괄호에 공통적으로 들어갈 알맞은 용어는?",
	            "questionPassage": "데이터 무결성은 데이터 품질에 직접적인 영향을 미치므로 데이터 특성에 맞는 적절한 무결성을 정의하고 강화해야 하는데, (      ), 데이터베이스 트리거, 제약 조건을 이용하여 강화할 수 있다.<br/>ㆍ(      ) : 데이터 생성, 수정, 삭제 시 무결성 조건을 검증하는 코드를 프로그램 내에 추가한다.<br/>ㆍ데이터베이스 트리거 : 트리거 이벤트에 무결성 조건을 실행하는 절차형 SQL을 추가한다.<br/>ㆍ제약 조건 : 데이터베이스에 제약 조건을 설정하여 무결성을 유지한다.",
	            "answer": "애플리케이션<br/>(Application)"
	        }
	    },
	    {
	        "id": 447112,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "\\<직원\\> 릴레이션의 기본키는 ‘직원번호’이고, \\<지점\\> 릴레이션은 기본키가 설정되지 않은 상태이다. \\<지점\\> 릴레이션의 후보키인 지점번호를 기본키로 설정하면 참조 무결성 제약 조건을 위배하는 데, 그 이유는?",
	            "questionPassage": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9992.png\"/><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9991.png\"/>",
	            "answer": "\\<직원\\> 릴레이션의 ‘지점번호’ 중 103, 108과 같이 \\<지점\\> 릴레이션의 ‘지점번호’ 속성에 없는 ‘지점번호’가 있기 때문에 참조 무결성 제약 조건에 위배된다."
	        }
	    },
	    {
	        "id": 447113,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "\\<직원\\> 릴레이션의 기본키는 ‘직원번호’이고, \\<지점\\> 릴레이션은 기본키가 설정되지 않은 상태이다. \\<지점\\> 릴레이션의 후보키인 지점번호를 기본키로 설정하면 개체 무결성 제약 조건을 위배하는 데, 그 이유는?",
	            "questionPassage": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9992.png\"/><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9991.png\"/>",
	            "answer": "\\<지점\\> 릴레이션의 ‘지점번호’ 속성에 NULL 값이 존재하므로 개체 무결성 제약 조건에 위배된다."
	        }
	    },
	    {
	        "id": 447114,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(      )은 데이터베이스에 들어 있는 데이터의 정확성을 보장하기 위해 부정확한 자료가 데이터베이스 내에 저장되는 것을 방지하기 위한 제약 조건을 말한다.",
	            "answer": "무결성 제약 조건"
	        }
	    },
	    {
	        "id": 447115,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "데이터 무결성 제약 조건 중 참조 무결성(Referential Integrity)의 개념을 간략히 서술하시오.",
	            "answer": "참조 무결성은 외래키 값은 Null이거나 참조 릴레이션의 기본키 값과 동일해야 한다는 규정이다."
	        }
	    },
	    {
	        "id": 447116,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음이 설명하고 있는 관계 대수 연산자의 기호는?",
	            "questionPassage": "릴레이션 A, B가 있을 때 릴레이션 B의 조건에 맞는 것들만 릴레이션 A에서 분리하여 프로젝션을 하는 연산이다.",
	            "answer": "÷"
	        }
	    },
	    {
	        "id": 447117,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음이 설명하고 있는 관계 대수 연산자의 기호는?",
	            "questionPassage": "릴레이션에 존재하는 튜플 중에서 선택 조건을 만족하는 튜플의 부분집합을 구하여 새로운 릴레이션을 만드는 연산이다.",
	            "answer": "σ(시그마)"
	        }
	    },
	    {
	        "id": 447118,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음이 설명하고 있는 관계 대수 연산자의 기호는?",
	            "questionPassage": "주어진 릴레이션에서 속성 리스트(Attribute List)에 제시된 속성 값만을 추출하여 새로운 릴레이션을 만드는 연산이다.",
	            "answer": "π(파이)"
	        }
	    },
	    {
	        "id": 447119,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음이 설명하고 있는 관계 대수 연산자의 기호는?",
	            "questionPassage": "공통 속성을 중심으로 두 개의 릴레이션을 하나로 합쳐서 새로운 릴레이션을 만드는 연산",
	            "answer": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0061.jpg\"/>"
	        }
	    },
	    {
	        "id": 447120,
	        "templateId": 9,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★★",
	            "question": "다음 보기에 제시된 연산자 중 관계대수의 순수 관계 연산자를 모두 고르시오.",
	            "questionPassage": [
	                "ⓐ UNION",
	                "ⓑ JOIN",
	                "ⓒ DIVISION",
	                "ⓓ INTERSECTION",
	                "ⓔ SELECT",
	                "ⓕ CARTESIAN PRODUCT",
	                "ⓖ DIFFERENCE",
	                "ⓗ PROJECT"
	            ],
	            "answer": [
	                "2",
	                "3",
	                "5",
	                "8"
	            ]
	        }
	    },
	    {
	        "id": 447121,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "관계대수 연산에서 두 릴레이션이 공통으로 가지고 있는 속성을 이용하여 두 개의 릴레이션을 하나로 합쳐서 새로운 릴레이션을 만드는 연산자의 이름과 기호는?",
	            "answer": "Join<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9990.png\"/>"
	        }
	    },
	    {
	        "id": 447122,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 관계형 데이터베이스에서 원하는 정보와 그 정보를 검색하기 위해서 어떻게 유도하는가를 기술하는 절차적인 언어로, 주어진 릴레이션 조작을 위한 연산의 집합이며, 일반 집합 연산과 순수 관계 연산으로 구분된다.",
	            "answer": "관계대수"
	        }
	    },
	    {
	        "id": 447123,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 관계 데이터의 연산을 표현하는 방법으로, 관계 데이터 모델의 제안자인 E. F. Codd가 수학의 술어 해석(Predicate Calculus)에 기반을 두고 관계 데이터베이스를 위해 제안했다. 이것은 원하는 정보가 무엇이라는 것만 정의하는 비절차적 특성을 지닌다.",
	            "answer": "관계해석"
	        }
	    },
	    {
	        "id": 447124,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "릴레이션 R의 차수(Degree)가 3, 카디널리티(Cardinality)가 3, 릴레이션 S의 차수가 4, 카디널리티가 4일 때, 두 릴레이션을 Cartesian Product(교차곱)한 결과 릴레이션의 차수는?",
	            "answer": "7",
	            "solution": "Cartesian Product(교차곱)은 두 릴레이션의 차수(Degree, 속성의 수)는 더하고, 카디널리티(Cardinality, 튜플의 수)는 곱하면 됩니다.<br/>ㆍ차수 = 3 + 4 = 7<br/>ㆍ카디널리티 = 3 × 4 = 12"
	        }
	    },
	    {
	        "id": 447125,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "릴레이션 R의 차수(Degree)가 3, 카디널리티(Cardinality)가 3, 릴레이션 S의 차수가 4, 카디널리티가 4일 때, 두 릴레이션을 Cartesian Product(교차곱)한 결과 릴레이션의 카디널리티는?",
	            "answer": "12",
	            "solution": "Cartesian Product(교차곱)은 두 릴레이션의 차수(Degree, 속성의 수)는 더하고, 카디널리티(Cardinality, 튜플의 수)는 곱하면 됩니다.<br/>ㆍ차수 = 3 + 4 = 7<br/>ㆍ카디널리티 = 3 × 4 = 12"
	        }
	    },
	    {
	        "id": 447126,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 순수 관계 연산자는?",
	            "questionPassage": "공통 속성을 중심으로 두 개의 릴레이션을 하나로 합쳐서 새로운 릴레이션을 만드는 연산이다.",
	            "answer": "Join"
	        }
	    },
	    {
	        "id": 447127,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 순수 관계 연산자는?",
	            "questionPassage": "X⊃Y인 두 개의 릴레이션 R(X)와 S(Y)가 있을 때, R의 속성이 S의 속성값을 모두 가진 튜플에서 S가 가진 속성을 제외한 속성만을 구하는 연산이다.",
	            "answer": "Division"
	        }
	    },
	    {
	        "id": 447128,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 순수 관계 연산자는?",
	            "questionPassage": "주어진 릴레이션에서 속성 리스트(Attribute List)에 제시된 속성 값만을 추출하여 새로운 릴레이션을 만드는 연산으로, 연산 결과에 중복이 발생하면 중복이 제거된다.",
	            "answer": "Project"
	        }
	    },
	    {
	        "id": 447129,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 순수 관계 연산자는?",
	            "questionPassage": "릴레이션에 존재하는 튜플 중에서 선택 조건을 만족하는 튜플의 부분집합을 구하여 새로운 릴레이션을 만드는 연산이다.",
	            "answer": "Select"
	        }
	    },
	    {
	        "id": 447130,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "관계대수의 개념을 간략히 서술하시오.",
	            "answer": "관계대수는 원하는 정보와 그 정보를 검색하기 위해서 어떻게 유도하는가를 기술하는 절차적인 언어이다."
	        }
	    },
	    {
	        "id": 447131,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "테이블에서 일부 속성들의 종속으로 인해 데이터의 중복이 발생하고, 이 중복(Redundancy)으로 인해 테이블 조작 시 문제가 발생하는 현상은?",
	            "answer": "이상(Anomaly)"
	        }
	    },
	    {
	        "id": 447132,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "정규화를 거치지 않으면 데이터베이스 내에 데이터들이 불필요하게 중복되어 릴레이션 조작 시 예기치 못한 곤란한 현상이 발생하는데, 이를 이상(Anomaly)이라 한다. 이상의 종류 3가지는?",
	            "answer": "삽입 이상(Insertion Anomaly), <br/>삭제 이상(Deletion Anomaly), <br/>갱신 이상(Update Anomaly)"
	        }
	    },
	    {
	        "id": 447133,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "귀하는 K상사의 데이터베이스 관리자로 \\<주문\\> 테이블을 분석한 결과 여러가지 이상(Anomaly)이 발생하는 것을 알게 되었다. \\<분석 결과\\>에 해당하는 이상의 명칭은?",
	            "questionPassage": "\\<주문\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9989.png\"/><br/><br/>\\<분석 결과\\><br/>부품번호가 600인 새로운 부품을 입력하려면 반드시 주문번호가 있어야만 가능하다.",
	            "answer": "삽입 이상(Insertion Anomaly)",
	            "solution": "삽입 이상(Insertion Anomaly)이란 테이블에 데이터를 삽입할 때, 의도와는 상관없이 원하지 않는 값들로 인해 삽입할 수 없는 현상을 의미합니다. \\<주문\\> 테이블의 기본키가 주문번호+부품번호이기 때문에 부품번호를 삽입할 때도 반드시 주문번호가 있어야 가능합니다."
	        }
	    },
	    {
	        "id": 447134,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "귀하는 K상사의 데이터베이스 관리자로 \\<주문\\> 테이블을 분석한 결과 여러가지 이상(Anomaly)이 발생하는 것을 알게 되었다. \\<분석 결과\\>에 해당하는 이상의 명칭은?",
	            "questionPassage": "\\<주문\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9989.png\"/><br/><br/>\\<분석 결과\\><br/>어느 한 부품에 대한 주문을 삭제할 때 부품 정보도 함께 삭제된다. 가령 주문번호 1521을 삭제하려고 하면 부품번호 300에 대한 부품가격까지 모두 삭제된다.",
	            "answer": "삭제 이상(Deletion Anomaly)",
	            "solution": "삭제 이상(Deletion Anomaly)이란 테이블에서 한 튜플을 삭제할 때, 의도와는 상관없는 값들도 함께 삭제되는 연쇄 삭제가 일어나는 현상을 의미합니다."
	        }
	    },
	    {
	        "id": 447135,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "귀하는 K상사의 데이터베이스 관리자로 \\<주문\\> 테이블을 분석한 결과 여러가지 이상(Anomaly)이 발생하는 것을 알게 되었다. \\<분석 결과\\>에 해당하는 이상의 명칭은?",
	            "questionPassage": "\\<주문\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9989.png\"/><br/><br/>\\<분석 결과\\><br/>부품번호 100의 부품가격을 변경하려고 하면 그 부품번호가 포함된 모든 주문들의 부품가격들을 변경해야 한다.",
	            "answer": "갱신 이상(Update Anomaly)",
	            "solution": "갱신 이상(Update Anomaly)이란 테이블에서 튜플에 있는 속성값을 갱신할 때 일부 튜플의 정보만 갱신되어 정보에 불일치성이 생기는 현상입니다."
	        }
	    },
	    {
	        "id": 447136,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "아래의 \\<주문\\> 릴레이션은 ‘주문번호’와 ‘부품번호’가 기본키다. 함수적 종속 관계의 괄호(①, ②)에 알맞은 필드명은?",
	            "questionPassage": "\\<주문\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9988.png\"/><br/><br/>\\<함수적 종속 관계\\><br/>ㆍ주문번호, 부품번호 → 거래처코드, 거래처지역, 부품가격, 주문물량, 주문날짜<br/>ㆍ주문번호 → 주문날짜<br/>ㆍ(  ①  ) → 부품가격<br/>ㆍ거래처코드 → (  ②  )",
	            "answer": "① 부품번호<br/>② 거래처지역",
	            "solution": "ㆍ주문번호, 부품번호는 식별자이다 : 거래처코드, 거래처지역, 부품가격, 주문물량, 주문날짜는 기본키인 (주문번호, 부품번호)에 의해 함수적으로 종속됩니다.<br/>ㆍ주문번호는 주문날짜를 결정한다 : 주문번호 ‘1518’은 항상 주문날짜가 ‘20/10/8’, 주문번호 ‘1607’은 항상 주문날짜가 ‘20/10/22’, 주문번호 ‘1729’는 항상 주문날짜가 ‘20/11/03’입니다.<br/>ㆍ부품번호는 부품가격을 결정한다 : 부품번호 ‘100’은 항상 부품가격이 ‘1000’이고, 부품번호 ‘200’은 항상 부품가격이 ‘500’입니다.<br/>ㆍ거래처코드는 거래처지역을 결정한다 : 거래처코드 ‘A01’은 항상 거래처지역이 ‘서울’이고, 거래처코드 ‘A04’는 거래처지역이 항상 ‘부산’입니다."
	        }
	    },
	    {
	        "id": 447137,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "어떤 릴레이션(관계) R에서 A와 B를 각각 R의 애트리뷰트(속성/Column) 집합이라고 가정할 때 애트리뷰트 A의 값 각각에 대해서 시간에 관계없이 항상 애트리뷰트 B의 값이 오직 하나만 연관되어 있을 때 B는 A에 (       )이라고 하고 A → B로 표기한다.",
	            "answer": "함수적 종속"
	        }
	    },
	    {
	        "id": 447138,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "어떤 릴레이션(관계) R에서 A와 B를 각각 R의 애트리뷰트(속성/Column) 집합이라고 가정할 때 애트리뷰트 A의 값 각각에 대해서 시간에 관계없이 항상 애트리뷰트 B의 값이 오직 하나만 연관되어 있을 때 B는 A에 함수적 종속이라고 하고 (     )로 표기한다.",
	            "answer": "A → B"
	        }
	    },
	    {
	        "id": 447139,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "어떤 릴레이션(관계) R에서 A와 B를 각각 R의 애트리뷰트(속성/Column) 집합이라고 가정할 때 애트리뷰트 A의 값 각각에 대해서 시간에 관계없이 항상 애트리뷰트 B의 값이 오직 하나만 연관되어 있을 때 B는 A에 함수적 종속이라고 하고 A → B로 표기한다.<br/>만약 B가 A에 종속되어 A 값을 알면 B 값을 알 수 있을 때 A를 (  ①  )라고 하고, B를 (  ②  )라고 한다.",
	            "answer": "① 결정자(Determinant)<br/>② 종속자(Dependent)"
	        }
	    },
	    {
	        "id": 447140,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "데이터베이스에서 이상(Anomaly)의 개념을 간략히 서술하시오.",
	            "answer": "이상은 데이터베이스 내에 데이터들이 불필요하게 중복되어 릴레이션 조작 시 예기치 않게 발생하는 곤란한 현상이다."
	        }
	    },
	    {
	        "id": 447141,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "데이터베이스에서 정규화(Normalization)의 개념을 간략히 서술하면?",
	            "answer": "정규화는 <span class=\"underline\">테이블의 속성들이 상호 종속적인 관계를 갖는 특성을 이용하여 테이블을 무손실 분해하는 과정</span>이다."
	        }
	    },
	    {
	        "id": 447142,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "다음과 같이 왼쪽 릴레이션을 오른쪽 릴레이션으로 정규화(Normalization)를 하였을 때 어떤 정규화 작업을 한 것인가?",
	            "questionPassage": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9987.png\"/>",
	            "answer": "1NF(제1정규형)",
	            "solution": "테이블의 ‘도시’ 속성이 다중값을 갖고 있었으나 정규화를 수행한 후에는 한 개의 값, 즉 원자값(Atomic Value)만을 가진 것으로 보아 제1정규화 작업이 수행됐음을 알 수 있습니다."
	        }
	    },
	    {
	        "id": 447143,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "다음은 정규화 과정을 간단하게 정리한 것이다. 괄호의 정규화 과정에 필요한 작업을 간략히 서술하시오.",
	            "questionPassage": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9986.png\"/>",
	            "answer": "도메인을 원자 값만으로 구성"
	        }
	    },
	    {
	        "id": 447144,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "다음은 정규화 과정을 간단하게 정리한 것이다. 괄호의 정규화 과정에 필요한 작업을 간략히 서술하시오.",
	            "questionPassage": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9985.png\"/>",
	            "answer": "부분적 함수적 종속 제거"
	        }
	    },
	    {
	        "id": 447145,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음은 정규화 과정을 간단하게 정리한 것이다. 괄호의 정규화 과정에 필요한 작업을 간략히 서술하시오.",
	            "questionPassage": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9984.png\"/>",
	            "answer": "이행적 함수적 종속 제거"
	        }
	    },
	    {
	        "id": 447146,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "다음은 정규화 과정을 간단하게 정리한 것이다. 괄호의 정규화 과정에 필요한 작업을 간략히 서술하시오.",
	            "questionPassage": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9983.png\"/>",
	            "answer": "결정자이면서 후보키가 아닌 것 제거"
	        }
	    },
	    {
	        "id": 447147,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "다음은 정규화 과정을 간단하게 정리한 것이다. 괄호의 정규화 과정에 필요한 작업을 간략히 서술하시오.",
	            "questionPassage": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9982.png\"/>",
	            "answer": "다치 종속 제거"
	        }
	    },
	    {
	        "id": 447148,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "다음은 정규화 과정을 간단하게 정리한 것이다. 괄호의 정규화 과정에 필요한 작업을 간략히 서술하시오.",
	            "questionPassage": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9981.png\"/>",
	            "answer": "조인 종속성 이용"
	        }
	    },
	    {
	        "id": 447149,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "함수적 종속은 중복의 원인이 되며, 삽입, 삭제, 갱신 등의 이상(Anomaly)을 발생시킨다. 함수적 종속이 일어나는 근본적인 이유는 여러 종류의 사실들을 하나의 릴레이션으로 표현하기 때문이다. 이러한 문제들을 해결하는 방법은 속성들 간의 종속성을 분해해서 기본적으로 하나의 종속성은 하나의 릴레이션에 표현되도록 분해하는 것이다. 이러한 분해 과정을 무엇이라고 하는가?",
	            "answer": "정규화(Normalization)"
	        }
	    },
	    {
	        "id": 447150,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음의 정규화(Normalization) 과정은 어떤 단계의 정규화 과정인가?",
	            "questionPassage": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9980.png\"/><br/><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9979.png\"/>",
	            "answer": "제 3정규화"
	        }
	    },
	    {
	        "id": 447151,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음의 정규화(Normalization) 과정에서 필요한 작업을 간략히 서술하면?",
	            "questionPassage": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9980.png\"/><br/><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9979.png\"/>",
	            "answer": "이행적 함수적 종속 제거",
	            "solution": "\\<주문목록\\> 테이블에는 다음과 같은 함수적 종속이 존재합니다.<br/><div class=\"border-block\">ㆍ주문번호 → 고객아이디, 주소<br/>ㆍ고객아이디 → 주소</div><br/>고객아이디와 주소가 기본키인 주문번호에 대해 완전 함수적 종속이므로 제 2정규형입니다. 그러나 \\<주문목록\\> 테이블에서 고객아이디가 주문번호에 함수적 종속이고, 주소가 고객아이디에 함수적 종속이므로 주소는 기본키인 주문번호에 대해 이행적 함수적 종속을 만족합니다. 즉 주문번호 → 고객아이디이고, 고객아이디 → 주소이므로 주문번호 → 주소는 이행적 함수적 종속이 됩니다. 따라서 \\<주문목록\\> 테이블은 제 3정규형이 아닙니다. 문제의 \\<정규화 결과\\>는 \\<주문목록\\> 테이블에서 이행적 함수적 종속(즉 주문번호 → 주소)을 제거하여 \\<주문\\> 테이블과 \\<고객\\> 테이블로 무손실 분해한 것입니다."
	        }
	    },
	    {
	        "id": 447152,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음의 정규화(Normalization) 과정은 어떤 단계의 정규화 과정인가?",
	            "questionPassage": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9978.png\"/><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9977.png\"/>",
	            "answer": "제 2정규화",
	            "solution": "\\<제품납품\\> 테이블에는 다음과 같은 함수적 종속이 존재합니다.<br/><div class=\"border-block\">ㆍ납품번호, 제품번호 → 업체번호, 업체명, 납품수량<br/>ㆍ납품번호 → 업체번호, 업체명</div><br/>\\<제품납품\\> 테이블에는 기본키인 (납품번호, 제품번호)에 완전 함수적 종속이 되지 않는 속성이 존재합니다. 업체번호와 업체명은 납품번호에 의해서도 결정될 수 있으므로 기본키에 대해 완전 함수적 종속이 아닌 부분 함수적 종속입니다. 따라서 \\<제품납품\\> 테이블은 제 2정규형이 아닙니다. 문제의 \\<정규화결과\\>는 \\<제품납품\\> 테이블에서 기본키의 일부인 납품번호에 함수적 종속되는 부분 함수적 종속을 제거하여 무손실 분해한 것입니다."
	        }
	    },
	    {
	        "id": 447153,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음의 조건을 모두 만족하는 정규형은?",
	            "questionPassage": "도메인은 원자 값이고 기본키가 아닌 모든 속성들이 기본키에 대해 완전 함수 종속적이며, 이행적 함수 종속 관계는 제거되었다.",
	            "answer": "제 3정규형",
	            "solution": "모든 도메인이 원자 값이므로 제 1정규형을 만족하고, 키가 아닌 모든 속성들이 기본키에 대해 완전 함수 종속이므로 제 2정규형도 만족합니다. 그리고 이행적 함수적 종속 관계도 제거되었으므로 제 3정규형까지 만족합니다."
	        }
	    },
	    {
	        "id": 447154,
	        "templateId": 9,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "question": "다음에 제시된 조건 중 BCNF를 만족하기 위한 조건을 모두 고르시오.",
	            "questionPassage": [
	                "ⓐ 결정자이면서 후보키가 아닌 것 제외 ",
	                "ⓑ 이행적 함수 종속 제거 ",
	                "ⓒ 부분적 함수 종속 제거 ",
	                "ⓓ 도메인이 원자 값 "
	            ],
	            "answer": [
	                "1",
	                "2",
	                "3",
	                "4"
	            ],
	            "solution": "BCNF를 만족하려면 ‘도, 부, 이, 결’의 조건을 모두 만족해야 합니다. 즉 도메인이 원자 값이어야 하고, 부분적 함수적 종속 제거, 이행적 함수적 종속 제거, 결정자이면서 후보키가 아닌 것도 제거되어야 합니다."
	        }
	    },
	    {
	        "id": 447155,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 테이블의 속성들이 상호 종속적인 관계를 갖는 특성을 이용하여 테이블을 무손실 분해하는 과정으로, 가능한 한 중복을 제거하여 삽입, 삭제, 갱신 이상의 발생 가능성을 줄이는 것을 목적으로 한다.",
	            "answer": "정규화(Normalization)"
	        }
	    },
	    {
	        "id": 447156,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "정규화 과정 중 릴레이션 R의 모든 결정자(Determinant)가 후보키이면 그 릴레이션 R은 어떤 정규형에 속하는가?",
	            "answer": "BCNF<br/>(Boyce-Codd 정규형)"
	        }
	    },
	    {
	        "id": 447157,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "데이터베이스에서 반정규화(Denormalization)의 개념을 간략히 서술하면?",
	            "answer": "반정규화는 <span class=\"underline\">정규화된 데이터 모델을</span> 의도적으로 <span class=\"underline\">통합, 중복, 분리하여 정규화 원칙을 위배하는 행위</span>이다."
	        }
	    },
	    {
	        "id": 447158,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "반정규화(Denormalization)의 방법 4가지는?",
	            "answer": "테이블 통합,<br/>테이블 분할,<br/>중복 테이블 추가,<br/>중복 속성 추가"
	        }
	    },
	    {
	        "id": 447159,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "테이블 분할은 (  ①  )를 기준으로 테이블을 분할하는 수평 분할과 (  ②  )을 기준으로 테이블을 분할하는 수직 분할이 있다.",
	            "answer": "① 레코드(Record)<br/>② 속성(Attribute)"
	        }
	    },
	    {
	        "id": 447160,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "테이블 분할은 레코드(Record)별로 사용 빈도의 차이가 큰 경우 사용 빈도에 따라 테이블을 분할하는 (  ①  )과, 하나의 테이블에 속성(Attribute)이 너무 많을 경우 속성을 기준으로 테이블을 분할하는 (  ②  )이 있다.",
	            "answer": "① 수평 분할<br/>② 수직 분할"
	        }
	    },
	    {
	        "id": 447161,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "반정규화 방법 중 (     )은 두 개의 테이블이 조인(Join)되어 사용되는 경우가 많을 경우 성능 향상을 위해 아예 하나의 테이블로 만들어 사용하는 것이다.",
	            "answer": "테이블 통합"
	        }
	    },
	    {
	        "id": 447162,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "반정규화 방법 중 (     )는 조인해서 데이터를 처리할 때 데이터를 조회하는 경로를 단축하기 위해 자주 사용하는 속성을 하나 더 추가하는 것이다.",
	            "answer": "중복 속성 추가"
	        }
	    },
	    {
	        "id": 447163,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "반정규화(Denormalization) 유형 중 중복 테이블을 추가하는 것이 있다. 이때 추가하는 테이블의 종류 3가지는?",
	            "answer": "집계 테이블, <br/>진행 테이블, <br/>특정 부분만을 포함하는 테이블"
	        }
	    },
	    {
	        "id": 447164,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "정규화된 엔티티, 속성, 관계를 시스템의 성능 향상과 개발 운영의 단순화를 위해 중복, 통합, 분리 등을 수행하는 데이터 모델링 기법은?",
	            "answer": "반정규화<br/>(Denormalization)"
	        }
	    },
	    {
	        "id": 447165,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "시스템 자신이 필요로 하는 여러 가지 객체에 관한 정보를 포함하고 있는 시스템 데이터베이스로서, 포함하고 있는 객체로는 테이블, 데이터베이스, 뷰, 접근 권한 등이 있는 것은?",
	            "answer": "시스템 카탈로그<br/>(System Catalog)"
	        }
	    },
	    {
	        "id": 447166,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "데이터베이스에서 메타 데이터(Meta-Data)의 개념을 간략히 서술하시오.",
	            "answer": "메타 데이터는 시스템 카탈로그에 저장된 정보를 의미한다."
	        }
	    },
	    {
	        "id": 447167,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 데이터 사전에 수록된 데이터에 실제로 접근하는 데 필요한 정보를 관리 유지하는 시스템으로, 시스템 카탈로그는 사용자와 시스템 모두 접근할 수 있지만 이것은 시스템만 접근할 수 있다.",
	            "answer": "데이터 디렉터리<br/>(Data Directory)"
	        }
	    },
	    {
	        "id": 447168,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 행(Row)과 열(Column)로 구성된 데이터베이스의 가장 기본적인 객체로, 데이터베이스의 모든 데이터는 이곳에 저장되고, 논리 설계 단계의 개체(Entity)에 대응된다.",
	            "answer": "테이블(Table)"
	        }
	    },
	    {
	        "id": 447169,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "데이터베이스에서 (     )은 테이블의 열을 구성하는 요소로, 데이터 타입(Data Type), 길이(Length) 등으로 정의된다.",
	            "answer": "컬럼(Column)"
	        }
	    },
	    {
	        "id": 447170,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "데이터베이스에서 (     )은 테이블이 저장되는 논리적인 영역으로, 한 개의 이곳에는 한 개 이상의 테이블을 저장할 수 있다.",
	            "answer": "테이블스페이스<br/>(Tablespace)"
	        }
	    },
	    {
	        "id": 447171,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 테이블 종류는?",
	            "questionPassage": "현재 사용되는 대부분의 DBMS에서 표준 테이블로 사용되는 테이블 형태이다.",
	            "answer": "일반 테이블"
	        }
	    },
	    {
	        "id": 447172,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 테이블 종류는?",
	            "questionPassage": "기본키나 인덱스키의 순서에 따라 데이터가 저장되는 테이블이다.",
	            "answer": "클러스터드 인덱스 테이블<br/>(Clustered Index Table)"
	        }
	    },
	    {
	        "id": 447173,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 테이블 종류는?",
	            "questionPassage": "대용량의 테이블을 작은 논리적 단위로 나눈 테이블이다.",
	            "answer": "파티셔닝 테이블<br/>(Partitioning Table)"
	        }
	    },
	    {
	        "id": 447174,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 테이블 종류는?",
	            "questionPassage": "데이터베이스에서 일반 테이블처럼 이용할 수 있는 외부 파일로, 데이터베이스 내에 객체로 존재한다.",
	            "answer": "외부 테이블<br/>(External Table)"
	        }
	    },
	    {
	        "id": 447175,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 테이블 종류는?",
	            "questionPassage": "트랜잭션이나 세션별로 데이터를 저장하고 처리할 수 있는 테이블이다.",
	            "answer": "임시 테이블<br/>(Temporary Table)"
	        }
	    },
	    {
	        "id": 447176,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "논리 데이터 모델을 물리 데이터 모델로 변환하는 과정 중 논리 데이터 모델에서 정의된 엔티티는 물리 데이터 모델의 (      )로 변환한다.",
	            "answer": "테이블(Table)"
	        }
	    },
	    {
	        "id": 447177,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "논리 데이터 모델을 물리 데이터 모델로 변환하는 과정 중 논리 데이터 모델에서 정의한 속성은 물리 데이터 모델의 (      )으로 변환한다.",
	            "answer": "컬럼(Column)"
	        }
	    },
	    {
	        "id": 447178,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 데이터베이스의 상태를 변환시키는 하나의 논리적 기능을 수행하기 위한 작업의 단위 또는 한꺼번에 모두 수행되어야 할 일련의 연산들을 의미하며, 데이터베이스 시스템에서 병행 제어 및 회복 작업 시 처리되는 작업의 논리적 단위로 사용된다.",
	            "answer": "트랜잭션<br/>(Transaction)"
	        }
	    },
	    {
	        "id": 447179,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 트랜잭션의 특징은?",
	            "questionPassage": "트랜잭션의 연산은 데이터베이스에 모두 반영되든지 아니면 전혀 반영되지 않아야한다. (All or Nothing)",
	            "answer": "원자성<br/>(Atomicity)"
	        }
	    },
	    {
	        "id": 447180,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 트랜잭션의 특징은?",
	            "questionPassage": "트랜잭션이 그 실행을 성공적으로 완료하면 언제나 일관성 있는 데이터베이스 상태로 변환한다.",
	            "answer": "일관성<br/>(Consistency)"
	        }
	    },
	    {
	        "id": 447181,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 트랜잭션의 특징은?",
	            "questionPassage": "둘 이상의 트랜잭션이 동시에 병행 실행되는 경우 어느 하나의 트랜잭션 실행중에 다른 트랜잭션의 연산이 끼어들 수 없다.",
	            "answer": "독립성<br/>(Isolation)"
	        }
	    },
	    {
	        "id": 447182,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 트랜잭션의 특징은?",
	            "questionPassage": "성공적으로 완료된 트랜잭션의 결과는 시스템이 고장나더라도 영구적으로 반영되어야 한다.",
	            "answer": "지속성<br/>(Durability)"
	        }
	    },
	    {
	        "id": 447183,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "Commit과 Rollback 명령어에 의해 보장받는 트랜잭션의 특성은?",
	            "answer": "원자성<br/>(Atomicity)"
	        }
	    },
	    {
	        "id": 447184,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "(     )은 데이터베이스에 영향을 주는 생성, 읽기, 갱신, 삭제 연산으로 프로세스와 테이블 간에 매트릭스를 만들어 트랜잭션을 분석하는 것이다.",
	            "answer": "CRUD 분석"
	        }
	    },
	    {
	        "id": 447185,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "CRUD는 (     ), (     ), (     ), (     )의 앞 글자만 모아서 만든 용어이며, CRUD 분석은 데이터베이스 테이블에 변화를 주는 트랜잭션의 CRUD 연산에 대해 CRUD 매트릭스를 작성하여 분석하는 것이다.",
	            "answer": "Create(생성), <br/>Read(읽기), <br/>Update(갱신), <br/>Delete(삭제)"
	        }
	    },
	    {
	        "id": 447186,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "인덱스(Index) 종류 중 컬럼의 값 대신 컬럼에 특정 함수(Function)나 수식(Expression)을 적용하여 산출된 값을 사용하는 인덱스는?",
	            "answer": "함수 기반 인덱스"
	        }
	    },
	    {
	        "id": 447187,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "인덱스(Index) 종류 중 다수의 조인된 객체로 구성된 인덱스는?",
	            "answer": "비트맵 조인 인덱스"
	        }
	    },
	    {
	        "id": 447188,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 괄호에 공통으로 들어갈 용어는?",
	            "questionPassage": "(      )는 데이터 레코드(튜플)에 빠르게 접근하기 위해 \\<키 값, 포인터\\> 쌍으로 구성되는 데이터 구조이다. 기본키를 위한 (     )를 기본 (     )라하고, 대부분의 관계형 데이터베이스 관리 시스템에서는 모든 기본키에 대해서 자동적으로 기본 (     )를 생성한다.",
	            "answer": "인덱스(Index)"
	        }
	    },
	    {
	        "id": 447189,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "인덱스(Index) 종류 중 인덱스를 저장하는 블록들이 트리 구조를 이루고 있는 인덱스는?",
	            "answer": "트리 기반 인덱스"
	        }
	    },
	    {
	        "id": 447190,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "인덱스(Index) 종류 중 인덱스 컬럼의 데이터를 Bit 값인 0 또는 1로 변환하여 인덱스 키로 사용하는 인덱스는?",
	            "answer": "비트맵 인덱스"
	        }
	    },
	    {
	        "id": 447191,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "인덱스(Index) 종류 중 개발자가 필요한 인덱스를 직접 만들어 사용하는 인덱스는?",
	            "answer": "도메인 인덱스"
	        }
	    },
	    {
	        "id": 447192,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "인덱스 키의 순서에 따라 데이터가 정렬되어 저장되는 방식으로, 실제 데이터가 순서대로 저장되어 있어 인덱스를 검색하지 않아도 원하는 데이터를 빠르게 찾을 수 있는 인덱스 방식은?",
	            "answer": "클러스터드 인덱스<br/>(Clustered Index)"
	        }
	    },
	    {
	        "id": 447193,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "인덱스의 키 값만 정렬되어 있고 실제 데이터는 정렬되지 않는 방식으로, 데이터 삽입, 삭제 발생 시 순서를 유지하기 위해 데이<br/>터를 재정렬해야 하는 인덱스는?",
	            "answer": "넌클러스터드 인덱스<br/>(Non-Clustered Index)"
	        }
	    },
	    {
	        "id": 447194,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "뷰(VIEW)는 (  ①  )문을 사용하여 정의하고, (  ②  )문을 사용하여 제거할 수 있다.",
	            "answer": "① CREATE<br/>② DROP"
	        }
	    },
	    {
	        "id": 447195,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 사용자에게 접근이 허용된 자료만을 제한적으로 보여주기 위해 하나 이상의 기본 테이블로부터 유도된 가상의 테이블로, 저장장치 내에 물리적으로 존재하지 않지만, 사용자에게는 있는 것처럼 간주된다.",
	            "answer": "뷰(View)"
	        }
	    },
	    {
	        "id": 447196,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "데이터 저장 시 데이터 액세스 효율을 향상시키기 위해 동일한 성<br/>격의 데이터를 동일한 데이터 블록에 저장하는 물리적 저장 방법은?",
	            "answer": "클러스터(Cluster)"
	        }
	    },
	    {
	        "id": 447197,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "클러스터는 데이터 저장 시 데이터 액세스 효율을 향상시키기 위해 동일한 성격의 데이터를 동일한 데이터 블록에 저장하는 물리적 저장 방법으로, 처리 범위가 넓은 경우에는 (  ①  )을, 조인이 많이 발생하는 경우에는 (  ②  )을 사용한다.",
	            "answer": "① 단일 테이블 클러스터링 <br/>② 다중 테이블 클러스터링"
	        }
	    },
	    {
	        "id": 447198,
	        "templateId": 9,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "question": "물리 데이터 저장소의 파티션 설계에서 사용되는 파티션 유형을 모두 고르시오.",
	            "questionPassage": [
	                "ⓐ 속성 분할",
	                "ⓑ 해시 분할",
	                "ⓒ 유닛 분할",
	                "ⓓ 조합 분할",
	                "ⓔ 인덱스 분할",
	                "ⓕ 범위 분할"
	            ],
	            "answer": [
	                "2",
	                "4",
	                "6"
	            ]
	        }
	    },
	    {
	        "id": 447199,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "일별, 월별, 분기별 등 지정한 열의 값을 기준으로 분할하는 파티션의 종류는?",
	            "answer": "범위 분할"
	        }
	    },
	    {
	        "id": 447200,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "범위 분할로 분할한 다음 해시 함수를 적용하여 다시 분할하는 방식의 파티션 종류는?",
	            "answer": "조합 분할"
	        }
	    },
	    {
	        "id": 447201,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 특정 파티션에 데이터가 집중되는 것을 보완하기 위한 것으로, 데이터를 고르게 분산할 때 유용하다. 고객번호, 주민번호 등과 같이 데이터가 고른 컬럼에 효과적이지만 특정 데이터가 어디에 있는지 판단할 수 없다.",
	            "answer": "해시 분할<br/>(Hash Partitioning)"
	        }
	    },
	    {
	        "id": 447202,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "데이터베이스에서 (      )은 대용량의 테이블이나 인덱스를 작은 논리적 단위로 나누는 것으로, 대용량 DB의 경우 몇 개의 중요한 테이블에만 집중되어 데이터가 증가되므로, 이런 테이블들을 작은 단위로 나눠 분산시키면 성능 저하를 방지할 뿐만 아니라 데이터 관리도 쉬워진다.",
	            "answer": "파티션(Partition)"
	        }
	    },
	    {
	        "id": 447203,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음과 관련 있는 분산 데이터베이스 목표는?",
	            "questionPassage": "액세스하려는 데이터베이스의 실제 위치를 알 필요 없이 단지 데이터베이스의 논리적인 명칭만으로 액세스할 수 있다.",
	            "answer": "위치 투명성<br/>(Location Transparency)"
	        }
	    },
	    {
	        "id": 447204,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음과 관련 있는 분산 데이터베이스 목표는?",
	            "questionPassage": "동일 데이터가 여러 곳에 중복되어 있더라도 사용자는 마치 하나의 데이터만 존재하는 것처럼 사용하고, 시스템은 자동으로 여러 자료에 대한 작업을 수행한다.",
	            "answer": "중복 투명성<br/>(Replication Transparency)"
	        }
	    },
	    {
	        "id": 447205,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "분산 데이터베이스의 목표에 해당하는 투명성(Transparency) 4가지는?",
	            "answer": "위치 투명성(Location Transparency),<br/>중복 투명성(Replication Transparency), <br/>병행 투명성(Concurrency Transparency), <br/>장애 투명성(Failure Transparency)"
	        }
	    },
	    {
	        "id": 447206,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "다음과 관련 있는 분산 데이터베이스 목표는?",
	            "questionPassage": "데이터베이스의 분산된 물리적 환경에서 특정 지역의 컴퓨터 시스템이나 네트워크에 장애가 발생해도 데이터 무결성이 보장된다.",
	            "answer": "장애 투명성<br/>(Failure Transparency)"
	        }
	    },
	    {
	        "id": 447207,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "분할(Fragmentation)은 테이블의 데이터를 분할하여 분산시키는 것으로, 특정 속성의 값을 기준으로 행(Row) 단위로 분할하는 (  ①  ) 분할, 데이터 컬럼(속성) 단위로 분할하는 (  ②  ) 분할로 나뉜다.",
	            "answer": "① 수평<br/>② 수직"
	        }
	    },
	    {
	        "id": 447208,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음과 관련 있는 분산 데이터베이스 목표는?",
	            "questionPassage": "분산 데이터베이스와 관련된 다수의 트랜잭션들이 동시에 실현되더라도 그 트랜잭션의 결과는 영향을 받지 않는다.",
	            "answer": "병행 투명성<br/>(Concurrency Transparency)"
	        }
	    },
	    {
	        "id": 447209,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 시스템 오류로 인한 데이터베이스 서비스 중단이나 물리적 손상 발생 시 이를 복구하기 위해 동일한 데이터베이스를 복제하여 관리하는 것이다.",
	            "answer": "데이터베이스 이중화"
	        }
	    },
	    {
	        "id": 447210,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 데이터베이스 이중화 구성 방법은?",
	            "questionPassage": "한 DB가 활성 상태로 서비스하고 있으면 다른 DB는 대기하고 있다가 활성 DB에 장애가 발생하면 대기 상태에 있던 DB가 자동으로 모든 서비스를 대신 수행하며, 구성 방법과 관리가 쉬워 많은 기업에서 이용된다.",
	            "answer": "활동 - 대기<br/>(Active-Standby)<br/>방법"
	        }
	    },
	    {
	        "id": 447211,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 데이터베이스 이중화 구성 방법은?",
	            "questionPassage": "두 개의 DB가 서로 다른 서비스를 제공하다가 둘 중 한쪽 DB에 문제가 발생하면 나머지 다른 DB가 서비스를 제공하며, 두 DB가 모두 처리를 하기 때문에 처리율이 높지만 구성 방법 및 설정이 복잡하다.",
	            "answer": "활동 - 활동<br/>(Active-Active)<br/>방법"
	        }
	    },
	    {
	        "id": 447212,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "데이터베이스 이중화는 변경 내용이 발생하면 즉시 다른 데이터베이스에도 적용하는 ( ① ) 기법과 트랜잭션의 수행이 종료되면 변경 사실을 새로운 트랜잭션에 작성하여 각 데이터베이스에 전달되는 ( ② ) 기법으로 나뉜다.",
	            "answer": "① Eager<br/>② Lazy"
	        }
	    },
	    {
	        "id": 447213,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "하나의 서버에 장애가 발생하면 다른 노드(서버)가 받아 처리하여 서비스 중단을 방지하는 방식의 클러스터링(Clustering)은?",
	            "answer": "고가용성 클러스터링"
	        }
	    },
	    {
	        "id": 447214,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "전체 처리율을 높이기 위해 하나의 작업을 여러 개의 서버 에서 분산하여 처리하는 방식의 클러스터링(Clustering)은?",
	            "answer": "병렬 처리 클러스터링"
	        }
	    },
	    {
	        "id": 447215,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "(     )은 비상사태 또는 업무 중단 시점으로부터 복구되어 가동될 때까지의 소요 시간을 의미한다.",
	            "answer": "RTO<br/>(Recovery Time Objective<br/>, 목표 복구 시간)"
	        }
	    },
	    {
	        "id": 447216,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 비상사태 또는 업무 중단 시점으로부터 데이터를 복구할 수 있는 기준점을 의미한다.",
	            "answer": "RPO<br/>(Recovery Point Objective,<br/>목표 복구 시점)"
	        }
	    },
	    {
	        "id": 447217,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "정보의 접근통제 기술에 대한 다음 설명의 괄호에 들어갈 기술은?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/err_01.png\"/>",
	            "answer": "강제 접근통제<br/>(MAC, Mandatory Access Control)"
	        }
	    },
	    {
	        "id": 447218,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음과 관련된 접근통제 요소는?",
	            "questionPassage": "어떤 주체가(Who)가 언제(When), 어디서(Where), 어떤 객체(What)에게, 어떤 행위(How)에 대한 허용 여부를 정의하는 것으로, 신분 기반 정책, 규칙 기반 정책, 역할 기반 정책이 있다.",
	            "answer": "접근통제 정책"
	        }
	    },
	    {
	        "id": 447219,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음과 관련된 접근통제 요소는?",
	            "questionPassage": "정의된 접근통제 정책을 구현하는 기술적인 방법으로, 접근통제 목록, 능력 리스트, 보안 등급, 패스워드, 암호화 등이 있다.",
	            "answer": "접근통제 메커니즘"
	        }
	    },
	    {
	        "id": 447220,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음과 관련된 접근통제 요소는?",
	            "questionPassage": "보안 정책을 구현하기 위한 정형화된 모델로, 기밀성 모델, 무결성 모델, 접근 통제 모델이 있다.",
	            "answer": "접근통제 보안모델"
	        }
	    },
	    {
	        "id": 447221,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음과 관련된 접근통제 보안 모델의 종류는?",
	            "questionPassage": "ㆍ군사적인 목적으로 개발된 최초의 수학적 모델<br/>ㆍ기밀성 보장이 최우선임<br/>ㆍ군대 시스템 등 특수 환경에서 주로 사용됨",
	            "answer": "기밀성 모델"
	        }
	    },
	    {
	        "id": 447222,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음과 관련된 접근통제 보안 모델의 종류는?",
	            "questionPassage": "기밀성 모델에서 발생하는 불법적인 정보 변경을 방지하기 위해 무결성을 기반으로 개발된 모델",
	            "answer": "무결성 모델"
	        }
	    },
	    {
	        "id": 447223,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음과 관련된 접근통제 보안 모델의 종류는?",
	            "questionPassage": "ㆍ접근통제 메커니즘을 보안 모델로 발전시킨 것<br/>ㆍ대표적으로 접근통제 행렬(Access Control Matrix)이 있음",
	            "answer": "접근통제 모델"
	        }
	    },
	    {
	        "id": 447224,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음과 관련 있는 정보의 접근통제 기술은?",
	            "questionPassage": "ㆍ데이터에 접근하는 사용자의 신원에 따라 접근 권한을 부여하는 방식이다.<br/>ㆍ데이터 소유자가 접근통제 권한을 지정하고 제어한다.",
	            "answer": "임의 접근통제(DAC)"
	        }
	    },
	    {
	        "id": 447225,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음과 관련 있는 정보의 접근통제 기술은?",
	            "questionPassage": "ㆍ주체와 객체의 등급을 비교하여 접근 권한을 부여하는 방식이다.<br/>ㆍ시스템이 접근통제 권한을 지정한다.",
	            "answer": "강제 접근통제(MAC)"
	        }
	    },
	    {
	        "id": 447226,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음과 관련 있는 정보의 접근통제 기술은?",
	            "questionPassage": "ㆍ사용자의 역할에 따라 접근 권한을 부여하는 방식이다.<br/>ㆍ중앙관리자가 접근 통제 권한을 지정한다.",
	            "answer": "역할기반 접근통제(RBAC)"
	        }
	    },
	    {
	        "id": 447227,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "접근통제는 데이터가 저장된 객체와 이를 사용하려는 주체 사이의 정보 흐름을 제한하는 것이다. 접근통제의 3요소는?",
	            "answer": "접근통제 정책, <br/>접근통제 메커니즘, <br/>접근통제 보안모델"
	        }
	    },
	    {
	        "id": 447228,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 사용자나 애플리케이션이 데이터베이스에 접근하여 수행한 모든 활동을 기록하는 기능으로, 오류가 발생한 데이터베이스를 복구하거나 부적절한 데이터 조작을 파악하기 위해 사용된다.",
	            "answer": "감사 추적"
	        }
	    },
	    {
	        "id": 447229,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 데이터베이스의 처리 내용이나 이용 상황 등 상태 변화를 시간의 흐름에 따라 모두 기록한 파일로, 데이터베이스의 복구를 위해 필요한 가장 기본적인 자료이다.",
	            "answer": "로그 파일"
	        }
	    },
	    {
	        "id": 447230,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "데이터베이스 버퍼의 내용을 비동기적으로 갱신한 경우의 복구 알고리즘은?",
	            "answer": "NO-UNDO/REDO"
	        }
	    },
	    {
	        "id": 447231,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "데이터베이스 버퍼의 내용을 동기적으로 갱신한 경우의 복구 알고리즘은?",
	            "answer": "UNDO/NO-REDO"
	        }
	    },
	    {
	        "id": 447232,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "데이터베이스 버퍼의 내용을 동기적으로 저장 매체에 기록하지만 데이터베이스와는 다른 영역에 기록한 경우의 복구 알고리즘은?",
	            "answer": "NO-UNDO/NO-REDO"
	        }
	    },
	    {
	        "id": 447233,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 데이터베이스 파일을 백업하는 방법으로, 백업 속도가 빠르고 작업이 단순하지만 문제 발생 시 원인 파악 및 문제 해결이 어렵다.",
	            "answer": "물리 백업"
	        }
	    },
	    {
	        "id": 447234,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 DB 내의 논리적 객체들을 백업하는 방법으로, 복원 시 데이터 손상을 막고 문제 발생 시 원인 파악 및 해결이 수월하지만 백업/복원 시 시간이 많이 소요된다.",
	            "answer": "논리 백업"
	        }
	    },
	    {
	        "id": 447235,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 데이터베이스 버퍼의 내용을 동기/비동기적으로 갱신한 경우의 복구 알고리즘으로, 데이터베이스 기록 전에 트랜잭션이 완료될 수 있으므로 완료된 트랜잭션이 데이터베이스에 기록되지 못했다면 다시 실행해야 한다.",
	            "answer": "UNDO/REDO"
	        }
	    },
	    {
	        "id": 447236,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 단일 디스크로 처리할 수 없는 대용량의 데이터를 저장하기 위해 서버와 저장장치를 연결하는 기술로, 대표적인 종류에는 DAS, NAS, SAN이 있다.",
	            "answer": "스토리지(Storage)"
	        }
	    },
	    {
	        "id": 447237,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "서버와 저장장치를 네트워크를 통해 연결하는 방식으로, 별도의 파일 관리 기능이 있는 NAS Storage가 내장된 저장장치를 직접 관리하며, DAS에 비해 확장성 및 유연성이 우수한 스토리지 시스템은?",
	            "answer": "NAS<br/>(Network Attached Storage)"
	        }
	    },
	    {
	        "id": 447238,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "하드디스크와 같은 데이터 저장장치를 호스트 버스 어댑터에 직접 연결하고, 저장장치와 호스트 기기 사이에 네트워크 디바이스 없이 직접 연결하는 방식으로 구성된 스토리지 시스템은?",
	            "answer": "DAS<br/>(Direct Attached Storage)"
	        }
	    },
	    {
	        "id": 447239,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "스토리지는 단일 디스크로 처리할 수 없는 대용량의 데이터를 저장하기 위해 서버와 저장장치를 연결하는 기술이다. 스토리지의 종류 세 가지는?",
	            "answer": "DAS(Direct Attached Storage), <br/>NAS(Network Attached Storage), <br/>SAN(Storage Area Network)"
	        }
	    },
	    {
	        "id": 447240,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "DAS의 빠른 처리와 NAS의 파일 공유 장점을 혼합한 방식으로, 서버와 저장장치를 연결하는 전용 네트워크를 별도로 구성하며, 파이버 채널(FC) 스위치를 이용하여 네트워크를 구성하는 스토리지 시스템은?",
	            "answer": "SAN<br/>(Storage Area Network)"
	        }
	    },
	    {
	        "id": 447241,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "논리 데이터 모델에서 정의된 엔티티를 물리 데이터 모델의 테이블로 변환하려고 할 때 논리 데이터 모델의 각 구성 요소가 물리 데이터 모델의 어떤 요소로 변환되는가?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0026.jpg\"/>",
	            "answer": "① 컬럼(Column)<br/>② 기본키(Primary Key)<br/>③ 외래키(Foreign Key)<br/>④ 관계(Relationship)"
	        }
	    },
	    {
	        "id": 447242,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "논리 데이터 모델에서 정의한 속성을 물리 데이터 모델의 컬럼으로 변환하려고 할 때 논리 데이터 모델에서의 Primary UID는 물리 데이터 모델의 (      )로 만든다.",
	            "answer": "기본키<br/>(Primary Key)"
	        }
	    },
	    {
	        "id": 447243,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "논리 데이터 모델에서 정의한 속성을 물리 데이터 모델의 컬럼으로 변환하려고 할 때 다른 엔티티와의 관계로 인해 생성된 Primary UID는 물리 데이터 모델의 (      )로 만든다.",
	            "answer": "기본키<br/>(Primary Key)"
	        }
	    },
	    {
	        "id": 447244,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "논리 데이터 모델에서 정의한 속성을 물리 데이터 모델의 컬럼으로 변환하려고 할 때 논리 모델링에서 정의된 Secondary UID 및 Alternate Key는 물리 모델에서 (      )로 만든다.",
	            "answer": "유니크키<br/>(Unique Key)"
	        }
	    },
	    {
	        "id": 447245,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "논리 데이터 모델을 물리 데이터 모델로 변환하는 과정 중 논리 데이터 모델에서 정의된 관계는 (  ①  )와 이를 참조하는 (  ②  )로 변환한다. 1:M 관계에서는 개체 A의 (  ①  )를 개체 B의 (  ②  )로 추가하여 표현하거나 별도의 테이블로 표현한다.",
	            "answer": "① 기본키(Primary Key)<br/>② 외래키(Foreign Key)"
	        }
	    },
	    {
	        "id": 447246,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "논리 데이터 모델을 물리 데이터 모델로 변환하는 과정에서 슈퍼타입과 서브타입을 테이블로 변환하는 방법 3가지는?",
	            "answer": "슈퍼타입 기준 테이블 변환, <br/>서브타입 기준 테이블 변환, <br/>개별타입 기준 테이블 변환"
	        }
	    },
	    {
	        "id": 447247,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 물리 데이터 모델의 품질 기준은?",
	            "questionPassage": "데이터 모델이 요구사항이나 업무 규칙, 표기법에 따라 정확하게 표현되었음을 의미한다.",
	            "answer": "정확성"
	        }
	    },
	    {
	        "id": 447248,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 물리 데이터 모델의 품질 기준은?",
	            "questionPassage": "데이터 모델이 데이터 모델의 구성 요소를 누락 없이 정의하고 요구사항이나 업무 영역을 누락 없이 반영하였음을 의미한다.",
	            "answer": "완전성"
	        }
	    },
	    {
	        "id": 447249,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 물리 데이터 모델의 품질 기준은?",
	            "questionPassage": "데이터 모델이 데이터 표준, 표준화 규칙, 법적 요건 등을 정확하게 준수하였음을 의미한다.",
	            "answer": "준거성"
	        }
	    },
	    {
	        "id": 447250,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 물리 데이터 모델의 품질 기준은?",
	            "questionPassage": "최신성 데이터 모델이 최근의 이슈나 현행 시스템을 반영하고 있음을 의미한다.",
	            "answer": "최신성"
	        }
	    },
	    {
	        "id": 447251,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 물리 데이터 모델의 품질 기준은?",
	            "questionPassage": "일관성 데이터 모델이 표현상의 일관성을 유지하고 있음을 의미한다.",
	            "answer": "일관성"
	        }
	    },
	    {
	        "id": 447252,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "다음 무방향 그래프의 최대 간선 수는?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0027.jpg\"/>",
	            "answer": "10",
	            "solution": "무방향 그래프의 최대 간선 수는 n(n-1)/2, 즉 5(5-1)/2 = 10입니다."
	        }
	    },
	    {
	        "id": 447253,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "자료 구조 중 배열(Array)에 대해 간략히 서술하시오.",
	            "answer": "배열은 크기와 형(Type)이 동일한 자료들이 순서대로 나열된 자료의 집합이다."
	        }
	    },
	    {
	        "id": 447254,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 정점(Vertex)와 간선(Edge)의 두 집합으로 이루어진는 자료 구조로, 사이클이 없는 그래프(Graph)를 트리(Tree)라 한다.",
	            "answer": "그래프(Graph)"
	        }
	    },
	    {
	        "id": 447255,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "선형 리스트는 일정한 순서에 의해 나열된 자료 구조로, 배열을 이용하는 (  ①  )와 포인터를 이용하는 (  ②  )로 구분된다.",
	            "answer": "① 연속 리스트(Contiguous List)<br/>② 연결 리스트(Linked List)"
	        }
	    },
	    {
	        "id": 447256,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 리스트의 한쪽 끝으로만 자료의 삽입, 삭제 작업이 이루어지는 자료 구조로, 가장 나중에 삽입된 자료가 가장 먼저 삭제되는 후입선출(LIFO; Last In First Out) 방식으로 자료를 처리한다.",
	            "answer": "스택(Stack)"
	        }
	    },
	    {
	        "id": 447257,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "자료 구조 중 리스트의 한쪽에서는 삽입 작업이 이루어지고 다른 한쪽에서는 삭제 작업이 이루어지도록 구성한 자료 구조는?",
	            "answer": "큐(Queue)"
	        }
	    },
	    {
	        "id": 447258,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 동일한 자료형의 데이터들이 같은 크기로 나열되어 순서를 가진 집합으로, 정적인 자료 구조이며 기억장소의 추가가 어렵고, 데이터 삭제 시 데이터가 저장되어 있던 기억장소는 빈 공간으로 남아있어 메모리의 낭비가 발생한다.",
	            "answer": "배열(Array)"
	        }
	    },
	    {
	        "id": 447259,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "기억 공간에 임의의 위치에 저장된 자료들을 포인터를 이용하여 연결시킨 자료 구조는?",
	            "answer": "연결 리스트<br/>(Linked List)"
	        }
	    },
	    {
	        "id": 447260,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 배열과 같이 연속되는 기억장소에 저장되는 자료 구조로, 중간에 데이터를 삽입하기 위해서는 연속된 빈 공간이 있어야 하며, 삽입·삭제 시 자료의 이동이 필요하다.",
	            "answer": "연속 리스트<br/>(Contiguous List)"
	        }
	    },
	    {
	        "id": 447261,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "후입선출 방식의 자료 구조로, 가장 나중에 삽입된 자료가 가장 먼저 삭제되는 특성을 가지고 있으며, 한쪽 방향으로만 자료의 입·출력이 수행되는 자료 구조는?",
	            "answer": "스택(Stack)"
	        }
	    },
	    {
	        "id": 447262,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "8개의 정점을 가진 방향 그래프가 가질 수 있는 최대 간선 수는?",
	            "answer": "56",
	            "solution": "정점을 n이라고 했을 때 방향 그래프의 최대 간선 수는 n(n-1), 즉 8(8-1) = 56입니다."
	        }
	    },
	    {
	        "id": 447263,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 트리 구조에서 트리의 디그리(Degree) 수는?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0028.jpg\"/>",
	            "answer": "3",
	            "solution": "트리의 차수(Degree)는 가장 차수가 많은 노드의 차수입니다."
	        }
	    },
	    {
	        "id": 447264,
	        "templateId": 8,
	        "registeredDate": 1652337946000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 트리의 단말 노드(Terminal Node) 수는?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0029.jpg\"/>",
	            "answer": "4"
	        }
	    },
	    {
	        "id": 447265,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 트리의 차수(Degree)의 수는?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0029.jpg\"/>",
	            "answer": "2"
	        }
	    },
	    {
	        "id": 447266,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "다음 Postfix 연산식에 대한 연산 결과는?",
	            "questionPassage": "3 4 * 5 6 * ＋",
	            "answer": "42",
	            "solution": "후위 표기(Postfix)란 연산자가 해당 피연산자 2개의 뒤(오른쪽)에 표기되어 있는 것을 말합니다. 그러므로 피연자 2개와 연산자를 묶은 후 연산자를 피연산자 사이에 옮겨 놓고 계산하면 됩니다.<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0030.jpg\"/><br/>= ( ( 3 * 4 ) + ( 5 * 6 ) ) <br/>= 12 + 30 = 42"
	        }
	    },
	    {
	        "id": 447267,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "다음 트리를 전위 순회(Preorder Traversal)했을 때 방문한 노드를 순서대로 나열하면?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0031.jpg\"/>",
	            "answer": " ＋ * * / A B C D E",
	            "solution": "먼저 서브트리를 하나의 노드로 생각할 수 있도록 서브트리 단위로 묶습니다.<br/>❶ Preorder는 Root → Left → Right 이므로 +1E입니다.<br/>❷ 1은 *2D이므로 +*2DE입니다.<br/>❸ 2는 *3C이므로 +**3CDE입니다.<br/>❹ 3은 /AB이므로 +**/ABCDE입니다.<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0032.jpg\"/>"
	        }
	    },
	    {
	        "id": 447268,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "다음 트리를 Preorder 운행법으로 운행할 경우 가장 먼저 탐색되는 노드는?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0033.jpg\"/>",
	            "answer": "A",
	            "solution": "먼저 서브트리를 하나의 노드로 생각할 수 있도록 서브트리 단위로 묶습니다.<br/>❶ Preorder는 Root → Left → Right 이므로 A12가 됩니다.<br/>❷ 1은 BD이므로 ABD2가 됩니다.<br/>❸ 2는 C3F이므로 ABDC3F가 됩니다.<br/>❹ 3은 EGH이므로 ABDCEGHF가 됩니다.<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0034.jpg\"/>"
	        }
	    },
	    {
	        "id": 447269,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 트리로 INORDER 운행을 수행했을 때 방문한 노드를 순서대로 나열하면?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0035.jpg\"/>",
	            "answer": "D B A E C F",
	            "solution": "먼저 서브트리를 하나의 노드로 생각할 수 있도록 서브트리 단위로 묶습니다.<br/>❶ Inorder는 Left → Root → Right 이므로 1A2가 됩니다.<br/>❷ 1은 DB이므로 DBA2가 됩니다.<br/>❷ 2는 ECF이므로 DBAECF가 됩니다.<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0036.jpg\"/>"
	        }
	    },
	    {
	        "id": 447270,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 이진 트리를 후위 순서(Postorder)로 운행한 결과는?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0052.jpg\"/>",
	            "answer": "D B G H E F C A",
	            "solution": "먼저 서브트리를 하나의 노드로 생각할 수 있도록 서브트리 단위로 묶습니다.<br/>❶ Postorder는 Left → Right → Root이므로 12A가 됩니다.<br/>❷ 1은 DB이므로 DB2A가 됩니다.<br/>❸ 2는 3FC이므로 DB3FCA가 됩니다.<br/>❹ 3은 GHE이므로 DBGHEFCA가 됩니다.<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0053.jpg\"/>"
	        }
	    },
	    {
	        "id": 447271,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음의 중위식(Infix)을 전위(Prefix)식으로 변환한 결과는?",
	            "questionPassage": "A * B + C - D / E",
	            "answer": "- + * A B C / D E",
	            "solution": "❶ 연산 우선순위에 따라 괄호로 묶습는다.<br/>( ( ( A * B ) + C ) - ( D / E ) )<br/>❷ 연산자를 해당 괄호의 앞(왼쪽)으로 옮깁니다.<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0054.jpg\"/><br/>❸ 필요없는 괄호를 제거합니다.<br/>- + * A B C / D E"
	        }
	    },
	    {
	        "id": 447272,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "다음 자료에 대하여 선택(Selection) 정렬을 이용하여 오름차순으로 정렬하고자 한다. 3회전 후의 결과는?",
	            "questionPassage": "37, 14, 17, 40, 35",
	            "answer": "14, 17, 35, 40, 37",
	            "solution": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0037.jpg\"/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0038.jpg\"/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0039.jpg\"/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0040.jpg\"/><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0041.jpg\"/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0042.jpg\"/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0043.jpg\"/><img src=\"https://memorybox.s3.ap-northeast-2.amazonaws.com/images/cardImages/123/<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0044.jpg\"/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0045.jpg\"/><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0046.jpg\"/>\"/>"
	        }
	    },
	    {
	        "id": 447273,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "다음 초기 자료에 대하여 삽입 정렬(Insertion Sort)을 이용하여 오름차순 정렬할 경우 1회전 후의 결과는?",
	            "questionPassage": "초기 자료 : 8, 3, 4, 9, 7",
	            "answer": "3, 8, 4, 9, 7",
	            "solution": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0047.jpg\"/><br/>두 번째 값 3을 첫 번째 값과 비교하여 첫 번째 자리에 삽입하고 8을 한 칸 뒤로 이동시킵니다.<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0048.jpg\"/><br/>세 번째 값 4를 첫 번째, 두 번째 값과 비교하여 8자리에 삽입하고 8을 한 칸 뒤로 이동시킵니다.<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0049.jpg\"/><br/>네 번째 값 9를 첫 번째, 두 번째, 세 번째 값과 비교한 후 삽입할 곳이 없다면 다음 회전으로 넘어갑니다.<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0050.jpg\"/><br/>다섯 번째 값 7을 처음부터 비교하여 8자리에 삽입하고 나머지를 한 칸씩 뒤로 이동시킵니다."
	        }
	    },
	    {
	        "id": 447274,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(    )은 입력 파일을 어떤 매개변수의 값으로 서브파일을 구성하고, 각 서브파일을 Insertion 정렬 방식으로 순서 배열하는 과정을 반복하는 정렬 방식으로, 삽입 정렬(Insertion Sort)을 확장한 개념이다.",
	            "answer": "쉘 정렬(Shell Sort)"
	        }
	    },
	    {
	        "id": 447275,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "하나의 파일을 부분적으로 나누어 가면서 정렬하는 방법으로, 키를 기준으로 작은 값은 왼쪽에, 큰 값은 오른쪽 서브 파일로 분해시키는 방식으로 정렬해 나가는 정렬 방식은?",
	            "answer": "퀵 정렬(Quick Sort)"
	        }
	    },
	    {
	        "id": 447276,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 전이진 트리를 이용한 정렬 방식으로, 구성된 전이진 트리(Complete Binary Tree)를 Heap Tree로 변환하여 정렬한다.",
	            "answer": "힙 정렬(Heap Sort)"
	        }
	    },
	    {
	        "id": 447277,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 이미 정렬되어 있는 두 개의 파일을 한 개의 파일로 합병하는 정렬 방식으로, 평균과 최악 모두 시간 복잡도는 O(nlog[subscript:2]n)이다.",
	            "answer": "2-Way 합병 정렬<br/>(Merge Sort)"
	        }
	    },
	    {
	        "id": 447278,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "버블 정렬(Bubble Sort) 알고리즘의 평균 수행 시간 복잡도는?",
	            "answer": "O(n[superscript:2])"
	        }
	    },
	    {
	        "id": 447279,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "두 번째 키와 첫 번째 키를 비교해 순서대로 나열하고, 이어서 세 번째 키를 첫 번째, 두 번째 키와 비교해 순서대로 나열하고, 계속해서 n번째 키를 앞의 n-1개의 키와 비교하여 알맞은 순서에 삽입하여 정렬하는 방식으로, 평균과 최악 모두 수행 시간 복잡도가 O(n[superscript:2])인 정렬 알고리즘은?",
	            "answer": "삽입 정렬<br/>(Insertion Sort)"
	        }
	    },
	    {
	        "id": 447280,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 자료를 버블 정렬을 이용하여 오름차순으로 정렬할 경우 PASS 2의 결과는?",
	            "questionPassage": "9, 6, 7, 3, 5",
	            "answer": "6, 3, 5, 7, 9",
	            "solution": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0055.jpg\"/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0056.jpg\"/><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0057.jpg\"/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0058.jpg\"/><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0059.jpg\"/><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0060.jpg\"/>"
	        }
	    },
	    {
	        "id": 447281,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "데이터 입출력 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "각 자리의 숫자별로 큐(Queue)를 이용하여 정렬하는 방식으로, 레코드의 키값을 분석하여 같은 수 또는 같은 문자끼리 그 순서에 맞는 버킷에 분배하였다가 버킷의 순서대로 레코드를 꺼내어 정렬하는 정렬 방식은?",
	            "answer": "기수 정렬<br/>(Radix Sort, Bucket Sort)"
	        }
	    },
	    {
	        "id": 447282,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명이 의미하는 것은?",
	            "questionPassage": "ㆍ사용자 요구사항의 해결 및 새로운 서비스 창출을 위해 단위 기능을 하는 모듈 간의 연계와 통합을 의미한다.<br/>ㆍ시스템 아키텍처 구성, 송·수신 방식 및 모듈 구현 방식에 따라 다양하기 때문에 구축 환경과 사용자 요구사항에 따라 적합한 방식을 설계해야 한다.",
	            "answer": "통합 구현"
	        }
	    },
	    {
	        "id": 447283,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "통합 구현은 사용자의 요구사항을 해결하고, 새로운 서비스 창출을 위해 단위 기능을 하는 모듈 간의 연계와 통합을 의미한다. 일반적인 통합 구현의 5가지 구성 요소는?",
	            "answer": "송신 시스템과 모듈, 수신 시스템과 모듈, 중계 시스템, 연계 데이터, 네트워크"
	        }
	    },
	    {
	        "id": 447284,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "연계 데이터를 구성하기 위해서는 연계 데이터를 식별하고 식별된 연계 데이터를 표준화한 후 이를 기반으로 연계 정의서를 작성해야 한다. \\<보기\\>에 제시된 연계 데이터 식별 및 표준화 절차를 순서대로 나열하면?",
	            "questionPassage": "㉠ 연계 데이터 식별자와 변경 구분 추가<br/>㉡ 연계 범위 및 항목 정의<br/>㉢ 연계 정의서 및 명세서 작성<br/>㉣ 연계 코드 변환 및 매핑<br/>㉤ 연계 데이터 표현 방법 정의",
	            "answer": "㉡ → ㉣ → ㉠ → ㉤ → ㉢"
	        }
	    },
	    {
	        "id": 447285,
	        "templateId": 9,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★★☆☆☆",
	            "question": "사용자의 요구사항에 맞춰 송·수신 모듈과 중계 모듈 간의 연계를 구현하는 통합 구현의 구성 요소를 모두 고르면?",
	            "questionPassage": [
	                "㉠ 인터페이스 데이터 표준",
	                "㉡ 중계 시스템",
	                "㉢ 수신 시스템과 모듈",
	                "㉣ 연계 테스트"
	            ],
	            "answer": [
	                "2",
	                "3"
	            ]
	        }
	    },
	    {
	        "id": 447286,
	        "templateId": 9,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★☆☆☆☆",
	            "question": "사용자의 요구사항에 맞춰 송·수신 모듈과 중계 모듈 간의 연계를 구현하는 통합 구현의 구성 요소를 모두 고르면?",
	            "questionPassage": [
	                "㉠ 연계 데이터",
	                "㉡ EAI",
	                "㉢ 송신 시스템과 모듈",
	                "㉣ 네트워크"
	            ],
	            "answer": [
	                "1",
	                "3",
	                "4"
	            ]
	        }
	    },
	    {
	        "id": 447287,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음은 일반적인 통합 구현의 구성 요소에 대한 설명이다. 괄호에 들어갈 알맞은 구성 요소는?",
	            "questionPassage": "ㆍ송신 시스템은 데이터를 생성 및 변환하여 전송하는 시스템으로, 송신 모듈과 모니터링 기능으로 구성된다.<br/>ㆍ(      )은 내·외부 시스템 간 또는 내부 시스템 간의 연계 시 사용되는 아키텍처이다.<br/>ㆍ수신 시스템은 수신 받은 데이터를 정제 및 변환하는 시스템으로, 수신 모듈과 모니터링 기능으로 구성된다.",
	            "answer": "중계 시스템"
	        }
	    },
	    {
	        "id": 447288,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음은 일반적인 통합 구현의 구성 요소에 대한 설명이다. 괄호에 들어갈 알맞은 구성 요소는?",
	            "questionPassage": "ㆍ송신 시스템은 데이터를 생성 및 변환하여 전송하는 시스템으로, 송신 모듈과 모니터링 기능으로 구성된다.<br/>ㆍ수신 시스템은 수신 받은 데이터를 정제 및 변환하는 시스템으로, 수신 모듈과 모니터링 기능으로 구성된다.<br/>ㆍ(     )는 송신 시스템과 수신 시스템, 송신 시스템과 중계 시스템, 수신 시스템과 중계 시스템을 연결해주는 통신망이다.",
	            "answer": "네트워크"
	        }
	    },
	    {
	        "id": 447289,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음은 일반적인 통합 구현의 구성 요소에 대한 설명이다. 괄호에 들어갈 알맞은 구성 요소는?",
	            "questionPassage": "ㆍ송신 시스템은 데이터를 생성 및 변환하여 전송하는 시스템으로, 송신 모듈과 모니터링 기능으로 구성된다.<br/>ㆍ수신 시스템은 수신 받은 데이터를 정제 및 변환하는 시스템으로, 수신 모듈과 모니터링 기능으로 구성된다.<br/>ㆍ(      )는 송·수신 시스템 간 송·수신되는 데이터로, 속성, 길이(Size), 타입(Type) 등이 포함된다.",
	            "answer": "연계 데이터"
	        }
	    },
	    {
	        "id": 447290,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에서 괄호에 공통적으로 들어갈 가장 알맞은 용어는?",
	            "questionPassage": "ㆍ(          )은 통합 구현을 위해 사용자 요구사항을 분석하여 연계 데이터를 식별 및 표준화하여 연계 데이터를 정의하는 것이다.<br/>ㆍ(          ) 절차<br/> ❶ 하드웨어 및 소프트웨어 구성, 네트워크 현황 확인<br/> ❷ 테이블 정의서, 코드 정의서 등의 문서 확인<br/> ❸ 체크리스트 작성<br/> ❹ 관련 문서 공유 및 인터뷰·설문 조사 실시<br/> ❺ 요구사항 정의서 작성",
	            "answer": "연계 요구사항 분석"
	        }
	    },
	    {
	        "id": 447291,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음은 연계 데이터 식별 및 표준화 절차를 나열한 것이다. 괄호에 들어갈 알맞은 내용은?",
	            "questionPassage": "연계 범위 및 항목 정의 → (         ) → 연계 데이터 식별자와 변경 구분 추가 → 연계 데이터 표현 방법 정의 → 연계 정의서 및 명세서 작성",
	            "answer": "연계 코드 변환 및 매핑"
	        }
	    },
	    {
	        "id": 447292,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음은 연계 데이터 식별 및 표준화 절차를 나열한 것이다. 괄호에 들어갈 알맞은 내용은?",
	            "questionPassage": "연계 범위 및 항목 정의 → 연계 코드 변환 및 매핑 → 연계 데이터 (     )와 변경 구분 추가 → 연계 데이터 표현 방법 정의 → 연계 정의서 및 명세서 작성",
	            "answer": "식별자"
	        }
	    },
	    {
	        "id": 447293,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음은 연계 데이터 식별 및 표준화 절차를 나열한 것이다. 괄호에 공통적으로 들어갈 알맞은 내용은?",
	            "questionPassage": "연계 범위 및 항목 정의 → 연계 코드 변환 및 매핑 → (      ) 식별자와 변경 구분 추가 → (      ) 표현 방법 정의 → 연계 정의서 및 명세서 작성",
	            "answer": "연계 데이터"
	        }
	    },
	    {
	        "id": 447294,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에서 괄호에 공통적으로 들어갈 가장 알맞은 용어는?",
	            "questionPassage": "ㆍ(        )은 데이터의 생성 및 전송을 담당하는 송신 시스템과 데이터 수신 및 운영 DB 반영을 담당하는 수신 시스템으로 구성된다.<br/>ㆍ송·수신 시스템 사이에는 데이터의 송·수신과 송·수신 시스템 현황을 모니터링하는 중계 시스템을 설치할 수 있다.<br/>ㆍ(        )의 연계 방식은 중간 매개체 없이 송·수신 시스템을 직접 연계하는 방식과 송·수신 시스템 사이에 중간 매개체를 두어 연계하는 방식으로 구분된다.",
	            "answer": "연계 메커니즘"
	        }
	    },
	    {
	        "id": 447295,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "연계 메커니즘의 로그(Log) 기록에 대해 간략히 서술하면?",
	            "answer": "로그 기록은 송·수신 시스템에서 수행되는 모든 과정에 관한 <span class=\"underline\">결과 및 오류에 대한 정보를 로그 테이블이나 파일에 기록하는 과정</span>이다."
	        }
	    },
	    {
	        "id": 447296,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 그림은 연계 메커니즘에서 송신 시스템의 주요 기능 및 역할을 표현한 것이다. 괄호에 들어갈 알맞은 용어는? <br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9998.png\"/>",
	            "answer": "연계 데이터 생성 및 추출"
	        }
	    },
	    {
	        "id": 447297,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 그림은 연계 메커니즘에서 송신 시스템의 주요 기능 및 역할을 표현한 것이다. 괄호에 들어갈 알맞은 용어는? <br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9997.png\"/>",
	            "questionPassage": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9997.png\"/>",
	            "answer": "코드 매핑 및 데이터 변환"
	        }
	    },
	    {
	        "id": 447298,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 그림은 연계 메커니즘에서 송신 시스템의 주요 기능 및 역할을 표현한 것이다. 괄호에 들어갈 알맞은 용어는? <br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9996.png\"/>",
	            "answer": "인터페이스 테이블 또는 파일 생성"
	        }
	    },
	    {
	        "id": 447299,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 그림은 연계 메커니즘에서 송신 시스템의 주요 기능 및 역할을 표현한 것이다. 괄호에 들어갈 알맞은 용어는? <br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9995.png\"/>",
	            "questionPassage": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9995.png\"/>",
	            "answer": "로그 기록"
	        }
	    },
	    {
	        "id": 447300,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음은 연계 메커니즘의 구성 요소에 대한 설명이다. 괄호에 공통적으로 들어갈 알맞은 내용은?",
	            "questionPassage": "ㆍ(        ) : 데이터를 전송 형식에 맞게 변환하고 송·수신을 수행하는 등 송·수신과 관련된 모든 처리 수행<br/>ㆍ송신 어댑터 : 인터페이스 테이블 또는 파일의 데이터를 전송 형식에 맞도록 변환 및 송신 수행<br/>ㆍ수신 어댑터 : 수신 데이터를 인터페이스 테이블이나 파일로 생성",
	            "answer": "연계 서버"
	        }
	    },
	    {
	        "id": 447301,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음은 연계 메커니즘의 구성 요소에 대한 설명이다. 괄호에 공통적으로 들어갈 알맞은 내용은?",
	            "questionPassage": "ㆍ연계 서버 : 데이터를 전송 형식에 맞게 변환하고 송·수신을 수행하는 등 송·수신과 관련된 모든 처리 수행<br/>ㆍ(        ) : 인터페이스 테이블 또는 파일의 데이터를 전송 형식에 맞도록 변환 및 송신 수행<br/>ㆍ수신 어댑터 : 수신 데이터를 인터페이스 테이블이나 파일로 생성",
	            "answer": "송신 어댑터"
	        }
	    },
	    {
	        "id": 447302,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "연계 매커니즘 구간 중 다음과 같은 오류 발생 시점과 관계된 구간은?",
	            "questionPassage": "ㆍ데이터 생성 및 추출 시<br/>ㆍ코드 매핑 및 데이터 변환 시<br/>ㆍ인터페이스 테이블 또는 파일 등록 시",
	            "answer": "송신 시스템"
	        }
	    },
	    {
	        "id": 447303,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "연계 매커니즘 구간 중 다음과 같은 오류 발생 시점과 관계된 구간은?",
	            "questionPassage": "ㆍ연계 데이터 로드(Load) 시<br/>ㆍ코드 매핑 및 데이터 변환 시<br/>ㆍ운영 DB에 반영 시",
	            "answer": "수신 시스템"
	        }
	    },
	    {
	        "id": 447304,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "연계 매커니즘 구간 중 다음과 같은 오류 발생 시점과 관계된 구간은?",
	            "questionPassage": "ㆍ연계 데이터 로드(Load) 및 전송 형식으로 변환 시<br/>ㆍ연계 데이터 송·수신 시<br/>ㆍ수신 시스템의 데이터 형식으로 변환 및 로드(Load) 시",
	            "answer": "연계 서버"
	        }
	    },
	    {
	        "id": 447305,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "연계 메커니즘에 따라 각 시스템 구현 시 장애 및 오류 현황의 기록과 확인을 위해 정의하고 설계해야 하는 항목들 중 다음이 설명하는 항목은?",
	            "questionPassage": "송·수신 시스템의 연계 프로그램에서 관리하는 장애 및 오류를 관리 대상으로 정의한다.",
	            "answer": "장애 및 오류 관리 대상"
	        }
	    },
	    {
	        "id": 447306,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "연계 메커니즘에 따라 각 시스템 구현 시 장애 및 오류 현황의 기록과 확인을 위해 정의하고 설계해야 하는 항목들 중 다음이 설명하는 항목은?",
	            "questionPassage": "오류 로그 테이블이나 파일은 기록 단위에 따라 인터페이스 테이블이나 파일에 대한 로그, 연계 데이터에 대한 로그로 설계한다.",
	            "answer": "장애 및 오류 기록 방식"
	        }
	    },
	    {
	        "id": 447307,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "연계 메커니즘에 따라 각 시스템 구현 시 장애 및 오류 현황의 기록과 확인을 위해 정의하고 설계해야 하는 항목들 중 다음이 설명하는 항목은?",
	            "questionPassage": "관리 대상에서 식별한 오류 내용을 주제별로 분류한 후 각 오류 내용에 오류 코드를 부여하고 오류 메시지를 정의한다.",
	            "answer": "관리 대상의 장애 및 오류 코드와 메시지"
	        }
	    },
	    {
	        "id": 447308,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "연계 메커니즘에 따라 각 시스템 구현 시 장애 및 오류 현황의 기록과 확인을 위해 정의하고 설계해야 하는 항목들 중 다음이 설명하는 항목은?",
	            "questionPassage": "관리 대상 오류 코드와 오류 메시지가 많은 경우에는 테이블관리 방식을, 적은 경우에는 파일 관리 방식 선택한다.",
	            "answer": "장애 및 오류 코드와 메시지 관리 방식"
	        }
	    },
	    {
	        "id": 447309,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "송신 시스템에서 수신 시스템으로 전송되는 연계 데이터는 보안에 취약할 수 있으므로 데이터의 중요성을 고려하여 보안을 적용해야 한다. 일반적인 연계 데이터 보안 방식 두 가지는?",
	            "answer": "전송 구간 보안, 데이터 보안"
	        }
	    },
	    {
	        "id": 447310,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "전송되는 데이터나 패킷(Packet)을 쉽게 가로챌 수 없도록 암호화 기능이 포함된 프로토콜을 사용하거나, 데이터나 패킷을 가로채더라도 내용을 쉽게 확인할 수 없도록 데이터나 패킷을 암호화하는 연계 데이터 보안 방식은?",
	            "answer": "전송 구간 보안"
	        }
	    },
	    {
	        "id": 447311,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음은 데이터 보안에 대한 설명이다. 괄호(①, ②)에 들어갈 알맞은 용어는?",
	            "questionPassage": "ㆍ데이터 보안은 송신 시스템에서 연계 데이터를 추출할 때와 수신 시스템에서 데이터를 운영 DB에 반영할 때 데이터를 ( ① )와 ( ② ) 하는 것이다.<br/>?데이터의 ( ① )와 ( ② ) 처리 절차<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/yk_9999.png\"/>",
	            "answer": "① 암호화<br/>② 복호화"
	        }
	    },
	    {
	        "id": 447312,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 괄호에 들어갈 알맞은 용어는?",
	            "questionPassage": "연계 데이터 보안 적용 시 암·복호화 적용 대상은 연계 데이터의 중요도에 따라 선정한다. 중요도는 송·수신 시스템에 정의한 기준에 따라 다르지만 공통적인 적용 대상으로 주민등록번호, 운전면허번호, 은행계좌번호, 신용카드번호 등 (      )에 근거한 개인 정보가 있다.",
	            "answer": "개인정보 보호법"
	        }
	    },
	    {
	        "id": 447313,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 내용을 암·복호화 적용 절차 순으로 나열하면?",
	            "questionPassage": "㉠ 암호화 적용 대상, 암호화 알고리즘, 암호화 키(Key) 선정<br/>㉡ 암호화 적용 대상 컬럼(Column)의 데이터 길이 변경<br/>㉢ 암호화 알고리즘 라이브러리 확보 및 설치<br/>㉣ 연계 응용 프로그램에서 암·복호화 처리 수행",
	            "answer": "㉠ → ㉡ → ㉢ → ㉣"
	        }
	    },
	    {
	        "id": 447314,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "SW 인터페이스 구현에 관련된 다음 설명에서 괄호에 들어갈 알맞은 용어는?",
	            "questionPassage": "(      )은 원활한 데이터의 연계를 위해 송·수신 시스템 간에 전송되는 데이터가 동일한 구조로 구성될 수 있도록 형태를 정의하는 역할을 수행하며, 다음과 같은 특징이 있다.<br/>- 유니코드 문자 : 텍스트 데이터 형식으로 유니코드를 사용하여 전 세계 언어를 지원한다.<br/>- (      ) 파서 : 대다수의 웹 브라우저가 해석을 위한 번역기(Parser)를 내장하고 있다.<br/>- 마크업과 내용 : (      ) 문서의 문자들은 마크업과 내용으로 구분된다.",
	            "answer": "XML(eXtensible Markup Language)"
	        }
	    },
	    {
	        "id": 447315,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "통합 구현과 관련하여 다음 설명의 괄호에 공통으로 들어갈 알맞은 답은?",
	            "questionPassage": "HTTP, HTTPS, SMTP 등을 사용하여 xml 기반의 메시지를 네트워크 상에서 교환하는 프로토콜로, (      ) envelope, 헤더(header), 바디(body) 등이 추가된 xml 문서이다. (      )는 복잡하고 무거운 구조로 구성되어 있어 (      ) 보다는 restful 프로토콜을 이용하기도 한다.",
	            "answer": "SOAP(Simple Object Access Protocol)"
	        }
	    },
	    {
	        "id": 447316,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "웹브라우저 간 HTML 문법이 호환되지 않는 문제와 SGML의 복잡함을 해결하기 위하여 개발된 다목적 마크업 언어의 명칭은?",
	            "answer": "XML(eXtensible Markup Language)"
	        }
	    },
	    {
	        "id": 447317,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 용어는?",
	            "questionPassage": "ㆍ컴퓨터 네트워크 상에서 다양한 프로토콜을 이용하여 XML을 교환하기 위한 통신 규약이다.<br/>ㆍ웹 서비스에서 사용되는 메시지의 형식과 처리 방법을 지정한다.<br/>ㆍ기본적으로 HTTP 기반에서 동작하기 때문에 프록시와 방화벽의 영향 없이 통신할 수 있다.",
	            "answer": "SOAP(Simple Object Access Protocol)"
	        }
	    },
	    {
	        "id": 447318,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "웹 서비스(Web Service)에서 사용하는 WSDL(Web Services Description Language)에 대해 간략히 서술하면?",
	            "answer": "WSDL은 <span class=\"underline\">웹 서비스와 관련된 서식이나 프로토콜 등을 표준적인 방법으로 기술하고 게시하기 위한 언어</span>이다."
	        }
	    },
	    {
	        "id": 447319,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "통합 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "연계 테스트는 구축된 연계 시스템과 연계 시스템의 구성 요소가 정상적으로 동작하는지 확인하는 활동이다. 연계 테스트를 다음과 같이 4단계로 나누어 수행한다고 가정 했을 때 괄호에 들어갈 가장 적합한 용어는?",
	            "questionPassage": "(     ) → 연계 테스트 환경 구축 → 연계 테스트 수행 → 연계 테스트 수행 결과 검증",
	            "answer": "연계 테스트 케이스 작성"
	        }
	    },
	    {
	        "id": 447320,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "웹 서버(Web Server)의 요청에 따라 가공된 데이터를 제공하는 역할을 수행하고, 가공된 데이터를 제공하는 동적 서비스뿐만 아니라 웹 서버와 DB 서버 사이에서 인터페이스의 역할도 수행하는 서버는?",
	            "answer": "WAS<br/>(Web Application Server,<br/>웹 애플리케이션 서버)"
	        }
	    },
	    {
	        "id": 447321,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 보기에서 설명하는 서버는?",
	            "questionPassage": "ㆍHTTP 및 HTTPS 기능을 지원하며, 처리한 요청들을 기록한다.<br/>ㆍHTML, CSS, 이미지 등의 정적 파일들을 저장하고 관리하며, 네트워크 트래픽의 포화를 방지하기 위해 응답 속도를 제한할 수 있다.<br/>ㆍ하나의 서버로 여러 개의 도메인 이름을 연결하는 기능을 갖고 있으며, 사용자를 인증하는 역할을 수행한다.",
	            "answer": "웹 서버(Web Server)"
	        }
	    },
	    {
	        "id": 447322,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "산출물들을 버전별로 관리하여 품질 향상을 지원하는 도구로, Git,<br/>Subversion 등이 있으며, 산출물들의 변경사항을 파악하고 제어 및 관리함으로써 개발 과정에서 발생할 수 있는 문제점들을 최소화할 수 있도록 지원하는 역할을 수행하는 소프트웨어 환경 도구는?",
	            "answer": "형상 관리 도구 <br/>또는 <br/>버전 관리 도구"
	        }
	    },
	    {
	        "id": 447323,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "웹 서버(Web Server)의 기능 중 네트워크 트래픽의 포화를 방지하기 위해 응답 속도를 제한하는 기능은?",
	            "answer": "대역폭 제한<br/>(Bandwidth Throtting)"
	        }
	    },
	    {
	        "id": 447324,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "웹 서버(Web Server)의 기능 중 하나의 서버로 여러 개의 도메인 이름을 연결하는 기능은?",
	            "answer": "가상 호스팅<br/>(Virtual Hosting)"
	        }
	    },
	    {
	        "id": 447325,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "웹 서버(Web Server)에서 브라우저로부터 요청을 받아 응답할 때 사용되는 프로토콜 중 (      )는 하이퍼텍스트 문서를 전송하기 위해 사용하는 프로토콜이다.",
	            "answer": "HTTP"
	        }
	    },
	    {
	        "id": 447326,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "웹 서버(Web Server)에서 브라우저로부터 요청을 받아 응답할 때 사용되는 프로토콜 중 (      )는 HTTP에 보안 모듈을 결합시킨 프로토콜이다.",
	            "answer": "HTTPS"
	        }
	    },
	    {
	        "id": 447327,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "웹 애플리케이션을 개발하는데 필요한 하드웨어 환경 중 동적 서비스를 제공하거나, 웹 서버와 데이터베이스 서버 또는 웹 서버와 파일 서버 사이에서 인터페이스 역할을 수행하는 서버는?",
	            "answer": "WAS(Web Application Server)"
	        }
	    },
	    {
	        "id": 447328,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발에서 개발 언어 선정 시 언어가 다른 개발 사례가 충분히 존재하고, 이미 여러 곳에서 사용하고 있는지를 판단하는 기준을 가리키는 용어는?",
	            "answer": "범용성"
	        }
	    },
	    {
	        "id": 447329,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발에서 개발 언어 선정 시 언어가 개발하려는 소프트웨어의 목적에 적합한지를 판단하는 기준을 가리키는 용어는?",
	            "answer": "적정성"
	        }
	    },
	    {
	        "id": 447330,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발에서 개발 언어 선정 시 언어가 다양한 시스템 및 환경에 적용이 가능한지를 판단하는 기준을 가리키는 용어는?",
	            "answer": "이식성"
	        }
	    },
	    {
	        "id": 447331,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발에서 개발 언어 선정 시 개발 언어에 대한 개발자들의 이해도와 활용도가 높은지를 판단하는 기준을 가리키는 용어는?",
	            "answer": "친밀성"
	        }
	    },
	    {
	        "id": 447332,
	        "templateId": 9,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★★☆",
	            "question": "다음 보기에서 애플리케이션 개발 과정 중 상위 설계에 포함되는 작업을 고르면?",
	            "questionPassage": [
	                "ⓐ 모듈 설계",
	                "ⓑ 컴포넌트 설계",
	                "ⓒ 알고리즘 구현",
	                "ⓓ 인터페이스 설계"
	            ],
	            "answer": [
	                "4"
	            ]
	        }
	    },
	    {
	        "id": 447333,
	        "templateId": 9,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★★☆",
	            "question": "다음 보기에서 애플리케이션 개발 과정 중 상위 설계에 포함되는 작업을 고르면?",
	            "questionPassage": [
	                "ⓐ 자료 구조 설계",
	                "ⓑ 유지 및 보수",
	                "ⓒ 패키징",
	                "ⓓ 아키텍처 설계"
	            ],
	            "answer": [
	                "4"
	            ]
	        }
	    },
	    {
	        "id": 447334,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "컴포넌트 설계 단계에 대한 설명에서 괄호에 들어갈 가장 알맞은 용어는?",
	            "questionPassage": "컴포넌트 설계 시 “(      )에 의한 설계”를 따를 경우, 해당 명세에서는<br/>(1) 컴포넌트의 오퍼레이션 사용 전에 참이 되어야 할 선행 조건<br/>(2) 사용 후 만족되어야 할 결과 조건<br/>(3) 오퍼레이션이 실행되는 동안 항상 만족되어야 할 불변조건 등이 포함되어야 한다.",
	            "answer": "협약(Contract)"
	        }
	    },
	    {
	        "id": 447335,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 소프트웨어 아키텍처의 설계 과정이다. 괄호에서 수행해야 할 알맞은 설계 과정은?",
	            "questionPassage": "설계 목표 설정 → (     ) → 아키텍처 패턴 적용 → 서브시스템 구체화 → 검토",
	            "answer": "시스템 타입 결정"
	        }
	    },
	    {
	        "id": 447336,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 아키택처 설계의 기본 원리 중 추상화(Abstraction)에 대해 간략히 서술하면?",
	            "answer": "추상화는 문제의 <span class=\"underline\">전체적이고 포괄적인 개념을 설계한 후</span> 차례로 세분화하여 <span class=\"underline\">구체화시켜 나가는 것</span>이다."
	        }
	    },
	    {
	        "id": 447337,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "추상화의 유형 중 자세한 수행 과정을 정의하지 않고, 전반적인 흐름만 파악할 수 있게 설계하는 유형은?",
	            "answer": "과정 추상화"
	        }
	    },
	    {
	        "id": 447338,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "추상화의 유형 중 데이터의 세부적인 속성이나 용도를 정의하지 않고, 데이터 구조를 대표할 수 있는 표현으로 대체하는 유형은?",
	            "answer": "데이터 추상화"
	        }
	    },
	    {
	        "id": 447339,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "추상화의 유형 중 이벤트 발생의 정확한 절차나 방법을 정의하지 않고, 대표할 수 있는 표현으로 대체하는 유형은?",
	            "answer": "제어 추상화"
	        }
	    },
	    {
	        "id": 447340,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어의 성능 향상, 시스템의 수정 및 재사용, 유지 관리 등이<br/>용이하도록 시스템의 기능들을 모듈 단위로 나누는 소프트웨어 아키텍처 설계의 기본 원리는?",
	            "answer": "모듈화<br/>(Modularity)"
	        }
	    },
	    {
	        "id": 447341,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다른 모듈이 모듈 내부의 절차와 자료들의 정보에 접근 및 변경하는 것을 막기 위한 기법으로, 모듈을 독립적으로 수행할 수 있고, 하나의 모듈이 변경되더라도 다른 모듈에 영향을 주지 않으므로 수정, 시험, 유지보수가 용이한 소프트웨어 아키텍처 설계의 기본 원리는?",
	            "answer": "정보 은닉<br/>(Information Hiding)"
	        }
	    },
	    {
	        "id": 447342,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 아키텍처(Software Architecture)에 대해 간략히 서술하면?",
	            "answer": "소프트웨어 아키텍처는 <span class=\"underline\">소프트웨어를 구성하는 요소들 간의 관계를 표현하는 시스템의 구조 또는 구조체</span>이다."
	        }
	    },
	    {
	        "id": 447343,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "협약(Contract)에 의한 설계는 컴포넌트 설계 시 클래스에 대한 여러 가정을 공유할 수 있도록 명세한 것으로, 컴포넌트에 대한 상세한 인터페이스가 명세되어 있다. 인터페이스 명세 시 포함되어야하는 조건에는 (     ), (     ), (     )이 있다.",
	            "answer": "선행 조건<br/>결과 조건<br/>불변 조건"
	        }
	    },
	    {
	        "id": 447344,
	        "templateId": 9,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "question": "소프트웨어 아키텍처의 품질을 평가하는데 사용되는 요소들 중 업무(Business)적인 측에서 평가되어야할 요소를 다음 보기에서 고르면?",
	            "questionPassage": [
	                "ⓐ 성능",
	                "ⓑ 시장 적시성",
	                "ⓒ 정확성",
	                "ⓓ 비용과 혜택",
	                "ⓔ 확장성",
	                "ⓕ 목표 시장 "
	            ],
	            "answer": [
	                "2",
	                "4",
	                "6"
	            ]
	        }
	    },
	    {
	        "id": 447345,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "문제를 상위의 중요 개념으로부터 하위의 개념으로 구체화시키는 하향식 설계 기법으로, 소프트웨어의 기능에서부터 시작하여 점차적으로 구체화하고, 알고리즘, 자료 구조 등 상세한 내역은 가능한 한 뒤로 미루어 진행하는 아키텍처 설계의 기본 원리는?",
	            "answer": "단계적 분해<br/>(Stepwise Refinement)"
	        }
	    },
	    {
	        "id": 447346,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "서브시스템이 입력 데이터를 받아 처리하고 결과를 다음 서브시스템으로 넘겨주는 과정을 반복하는 아키텍처 패턴은?",
	            "answer": "파이프-필터 패턴<br/>(Pipe-Filter Pattern)"
	        }
	    },
	    {
	        "id": 447347,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 그림과 같이 소스(Source)가 특정 채널에 이벤트 메시지를 발행(Publish)하면, 해당 채널(Channel)을 구독(Subscribe)한 리스너(Listener)들이 메시지를 받아 이벤트를 처리하는 아키텍처 패턴은?",
	            "questionPassage": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0001.jpg\"/>",
	            "answer": "이벤트-버스 패턴<br/>(Event-Bus Pattern)"
	        }
	    },
	    {
	        "id": 447348,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "MVC 패턴은 서브시스템을 세 개의 컴포넌트로 구조화하는 패턴으로, 대화형 애플리케이션에 가장 많이 사용되는 패턴 중 하나이다. MVC 패턴에서 세 개의 컴포넌트는 (     ), (     ), (     )이다.",
	            "answer": "모델(Model)<br/>뷰(View)<br/>컨트롤러(Controller)"
	        }
	    },
	    {
	        "id": 447349,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 설계와 관련된 다음 설명에 해당하는 용어는?",
	            "questionPassage": "ㆍ아키텍처를 설계할 때 참조할 수 있는 전형적인 해결 방식 또는 예제이다.<br/>ㆍ소프트웨어 시스템의 구조를 구성하기 위한 기본적인 윤곽을 제시한다.<br/>ㆍ서브시스템들과 그 역할이 정의되어 있으며, 서브시스템 사이의 관계와 여러 규칙·지침 등이 포함되어 있다.",
	            "answer": "아키텍처 패턴<br/>(Architecture Pattern)"
	        }
	    },
	    {
	        "id": 447350,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "목표로 하는 시스템이나 고객의 핵심적인 요구사항에 따라 적합한 아키텍처 패턴을 선정해야 한다. 막대한 연산이 필요한 작업을 수행하기 위해 여러 대의 컴퓨터를 병렬로 연결하고자 한다면 (  ①  ) 패턴이, 외국어를 번역하거나 프로그래밍 언어를 개발할 때는 (  ②  ) 패턴이 상황에 맞는 아키텍처 패턴에 해당한다.",
	            "answer": "① 마스터-슬레이브(Master-Slave) <br/>② 인터프리터(Interpreter)"
	        }
	    },
	    {
	        "id": 447351,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "시스템을 계층으로 구분하여 구성하는 고전적인 아키텍처 패턴의 하나로, 서브시스템들이 계층 구조를 이루어 서로 마주보는 두 개의 계층 사이에서만 상호작용이 수행되며, 상위 계층은 하위 계층에 대한 서비스 제공자가 되고 하위 계층은 상위 계층의 클라이언트가 되는 아키텍처 패턴은?",
	            "answer": "레이어 패턴<br/>(Layers pattern)"
	        }
	    },
	    {
	        "id": 447352,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "사용자가 클라이언트를 통해 서버에 요청하면 클라이언트가 응답을 받아 사용자에게 제공하는 방식으로, 하나의 서버 컴포넌트와 다수의 클라이언트 컴포넌트로 구성되는 아키텍처 패턴은?",
	            "answer": "클라이언트-서버 패턴<br/>(Client-Server Pattern)"
	        }
	    },
	    {
	        "id": 447353,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "전형적인 멀티스레딩 방식을 사용하며, 하나의 컴포넌트가 서비스를 호출하는 클라이언트가 될 수도, 서비스를 제공하는 서버가 될 수도 있는 아키텍처 패턴은?",
	            "answer": "피어-투-피어 패턴<br/>(Peer-To-Peer Pattern)"
	        }
	    },
	    {
	        "id": 447354,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(       ) 패턴은 사용자가 원하는 서비스와 특성을 (       ) 컴포넌트에 요청하면 (       ) 컴포넌트가 요청에 맞는 컴포넌트와 사용자를 연결해주는 아키텍처 패턴이다.",
	            "answer": "브로커<br/>(Broker)"
	        }
	    },
	    {
	        "id": 447355,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "소스가 특정 채널에 이벤트 메시지를 발행(Publish)하면, 해당 채널을 구독(Subscribe)한 리스너(Listener)들이 메시지를 받아 이벤트를 처리하는 아키텍처 패턴은?",
	            "answer": "이벤트-버스 패턴<br/>(Event-Bus Pattern)"
	        }
	    },
	    {
	        "id": 447356,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "음성 인식, 차량 식별, 신호 해석 등에 사용되는 (       ) 패턴은 모든 컴포넌트들이 공유 데이터 저장소와 (       )  컴포넌트에 접근이 가능한 아키텍처 패턴이다.",
	            "answer": "블랙보드<br/>(Blackboard)"
	        }
	    },
	    {
	        "id": 447357,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "프로그램 코드의 각 라인을 수행하는 방법을 지정하고, 기호마다 클래스를 갖도록 구성된 아키텍처 패턴은?",
	            "answer": "인터프리터 패턴<br/>(Interpreter Pattern)"
	        }
	    },
	    {
	        "id": 447358,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "객체지향 소프트웨어 공학에서 하나 이상의 유사한 객체들을 묶어서 하나의 공통된 특성을 표현하며, 데이터를 추상화하는 단위로 사용되는 객체지향의 구성 요소는?",
	            "answer": "클래스(Class)"
	        }
	    },
	    {
	        "id": 447359,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "다음 설명과 가장 밀접한 관계가 있는 객체지향의 특징은?",
	            "questionPassage": "ㆍ인터페이스가 단순화 된다.<br/>ㆍ소프트웨어 재사용성이 높아진다.<br/>ㆍ변경 발생 시 오류의 파급 효과가 적다.<br/>ㆍ정보 은닉과 관계가 있다.",
	            "answer": "캡슐화<br/>(Encapsulation)"
	        }
	    },
	    {
	        "id": 447360,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "객체지향 기법에서 연관성(Relationship)을 나타내는 표현들 중 ‘부분-전체(Part-Whole)’ 관계 또는 ‘부분(is-a-part-of)’의 관계로 설명되는 연관성은?",
	            "answer": "집단화<br/>(Aggregation)"
	        }
	    },
	    {
	        "id": 447361,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 객체지향 기법의 특징은?",
	            "questionPassage": "이미 정의된 상위 클래스(부모 클래스)의 모든 속성과 연산을 하위 클래스(자식 클래스)가 물려받는 것으로, 이를 이용하면 하위 클래스는 상위 클래스의 모든 속성과 연산을 자신의 클래스 내에서 다시 정의하지 않고서도 즉시 사용할 수 있다.",
	            "answer": "상속<br/>(Inheritance)"
	        }
	    },
	    {
	        "id": 447362,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명이 가리키는 객체지향 기법의 구성 요소는?",
	            "questionPassage": "ㆍ실세계 또는 개념적으로 존재하는 세계의 사물들이다.<br/>ㆍ데이터를 가지며 이 데이터를 변경하는 함수를 가지고 있는 경우도 있다.<br/>ㆍ상호작용의 수단으로 메시지를 사용한다.",
	            "answer": "객체(Object)"
	        }
	    },
	    {
	        "id": 447363,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명이 가리키는 객체지향 기법의 구성 요소는?",
	            "questionPassage": "ㆍ객체들 간의 상호작용에 사용되는 수단으로, 객체의 동작이나 연산을 일으키는 외부의 요구 사항이다.<br/>ㆍ이를 받은 객체는 대응하는 연산을 수행하여 예상된 결과를 반환한다.",
	            "answer": "메시지(Message)"
	        }
	    },
	    {
	        "id": 447364,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "객체지향 기법에서 사용하는 상속(Inheritance)의 개념을 간략히 서술하시오.",
	            "answer": "상속은 <span class=\"underline\">상위 클래스의 모든 속성과 연산을 하위 클래스가 물려받는 것</span>이다."
	        }
	    },
	    {
	        "id": 447365,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "객체지향 기법에서 연관성(Relationship)을 나타내는 표현들 중 동일한 형의 특성을 갖는 객체들을 모아 구성한 것으로, ‘is instance of’로 표현되는 연관성은?",
	            "answer": "분류화<br/>(Classfication)"
	        }
	    },
	    {
	        "id": 447366,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "객체지향 기법에서 연관성(Relationship)을 나타내는 표현들 중 2개 이상의 객체가 상호 관련되어 있음을 의미하는 것으로, ‘is member of’로 표현되는 연관성은?",
	            "answer": "연관화<br/>(Association)"
	        }
	    },
	    {
	        "id": 447367,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "객체지향 기법에서 연관성(Relationship)을 나타내는 표현들 중공통적인 성질들로 추상화한 상위 객체를 구성하는 것으로, ‘is a’로 표현되는 연관성은?",
	            "answer": "일반화(Generalization)"
	        }
	    },
	    {
	        "id": 447368,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "메시지에 의해 클래스가 연산을 수행하게 될 때 하나의 메시지에 대해 각각의 클래스가 가지고 있는 고유한 특성으로 응답할 수 있는 능력으로, 응용 프로그램 상에서 하나의 함수나 연산자가 두 개 이상의 서로 다른 클래스의 인스턴스들을 같은 클래스에 속한 인스턴스처럼 수행할 수 있도록 하는 객체지향 기법의 특징은?",
	            "answer": "다형성<br/>(Polymorphism)"
	        }
	    },
	    {
	        "id": 447369,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "객체지향 분석 방법론 중 E-R 다이어그램을 사용하여 객체의 행위를 모델링하며, 객체 식별, 구조 식별, 주체 정의, 속성 및 관계 정의, 서비스 정의 등의 과정으로 구성되는 기법은?",
	            "answer": "Coad와 Yourdon 방법"
	        }
	    },
	    {
	        "id": 447370,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "객체지향 분석 방법론 중 분석 활동을 객체 모델, 동적 모델, 기능 모델로 나누어 수행하는 기법은?",
	            "answer": "럼바우(Rumbaugh) 기법"
	        }
	    },
	    {
	        "id": 447371,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "객체지향 분석 방법론 중  미시적(Micro) 개발 프로세스와 거시적(Macro) 개발 프로세스를 모두 사용하고 클래스와 객체들을 분석 및 식별하고 클래스의 속성과 연산을 정의하는 기법은?",
	            "answer": "Booch(부치) 방법"
	        }
	    },
	    {
	        "id": 447372,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "객체지향 분석 방법론 중 분석과 설계 간의 구분이 없고, 고객 명세서를 평가해서 설계 작업까지 연속적으로 수행하는 기법은?",
	            "answer": "Wirfs-Brock 방법"
	        }
	    },
	    {
	        "id": 447373,
	        "templateId": 9,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★★★",
	            "question": "그래픽 표기법을 이용하여 소프트웨어 구성 요소를 모델링하는 럼바우 분석 기법에 포함되는 것을 모두 고르면?",
	            "questionPassage": [
	                "ⓐ 객체 모델링",
	                "ⓑ 정적 모델링",
	                "ⓒ 동적 모델링",
	                "ⓓ 코드 모델링",
	                "ⓔ 기능 모델링"
	            ],
	            "answer": [
	                "1",
	                "3",
	                "5"
	            ]
	        }
	    },
	    {
	        "id": 447374,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "다음 럼바우(Rumbaugh)의 객체지향 분석 절차의 괄호에 들어갈 알맞은 절차는?",
	            "questionPassage": "객체 모형 → (     ) → 기능 모형",
	            "answer": "동적 모형"
	        }
	    },
	    {
	        "id": 447375,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "럼바우 분석 활동 중 시스템에서 요구되는 객체를 찾아내어 속성과 연산 식별 및 객체들 간의 관계를 규정하여 객체 다이어그램으로 표시하는 모델링은?",
	            "answer": "객체 모델링<br/>(Object Modeling)"
	        }
	    },
	    {
	        "id": 447376,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "럼바우 분석 활동 중 상태 다이어그램을 이용하여 시간의 흐름에 따른 객체들 간의 제어 흐름, 상호 작용, 동작 순서 등의 동적인 행위를 표현하는 모델링은?",
	            "answer": "동적 모델링<br/>(Dynamic Modeling)"
	        }
	    },
	    {
	        "id": 447377,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "럼바우 분석 활동 중 자료 흐름도(DFD)를 이용하여 다수의 프로세스들 간의 자료 흐름을 중심으로 처리 과정을 표현하는 모델링은?",
	            "answer": "기능 모델링<br/>(Functional Modeling)"
	        }
	    },
	    {
	        "id": 447378,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "다음 내용이 설명하는 객체지향 설계 원칙은?",
	            "questionPassage": "ㆍ클라이언트는 자신이 사용하지 않는 메소드와 의존관계를 맺으면 안된다.<br/>ㆍ클라이언트가 사용하지 않는 인터페이스 때문에 영향을 받아서는 안된다.",
	            "answer": "인터페이스 분리 원칙(ISP)"
	        }
	    },
	    {
	        "id": 447379,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "객체지향 설계 원칙 중 서브타입(상속받은 하위 클래스)은 어디에서나 자신의 기반타입(상위 클래스)으로 교체할 수 있어야 함을 의미하는 원칙은?",
	            "answer": "리스코프 치환 원칙(LSP)"
	        }
	    },
	    {
	        "id": 447380,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "객체지향 설계 원칙 중 응집도는 높고, 결합도는 낮게 설계하는 것으로 객체는 단 하나의 책임만 가져야 한다는 원칙은?",
	            "answer": "단일 책임 원칙(SRP)"
	        }
	    },
	    {
	        "id": 447381,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "객체지향 설계 원칙 중 기존의 코드를 변경하지 않고 기능을 추가할 수 있도록 설계해야 한다는 원칙은?",
	            "answer": "개방-폐쇄 원칙(OCP)"
	        }
	    },
	    {
	        "id": 447382,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "객체지향 설계 원칙 중 의존 관계 성립 시 추상성이 높은 클래스와 의존 관계를 맺어야 한다는 원칙은?",
	            "answer": "의존 역전 원칙(DIP)"
	        }
	    },
	    {
	        "id": 447383,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "객체지향 설계 시 지켜야 할 5가지 원칙을 (     ) 원칙이라 하며, 이는 각 원칙의 앞 글자를 따 만들어졌다. 종류에는 단일 책임 원칙, 개방-폐쇄 원칙, 리스코프 치환 원칙, 인터페이스 분리 원칙, 의존 역전 원칙이 있으며, 이는 변경이나 확장에 유연한 시스템을 설계하기 위해 지켜져야 한다.",
	            "answer": "SOLID"
	        }
	    },
	    {
	        "id": 447384,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 패키징이란 모듈별로 생성한 실행 파일들을 묶어 배포용 설치 파일을 만드는 것을 말한다. 소스 코드는 향후 관리를 고려하여 모듈화하여 패키징한다. 모듈화는 모듈 간 (  ①  )의 최소화와 모듈 내 요소들의 (  ②  )를 최대화하는 것이 목표이다.",
	            "answer": "① 결합도(Coupling)<br/>② 응집도(Cohesion)"
	        }
	    },
	    {
	        "id": 447385,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "다음의 모듈 관계를 표현한 시스템 구조도를 참고하여 팬인(Fan-In)이 2 이상인 모듈을 모두 고르면?",
	            "questionPassage": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0002.jpg\"/>",
	            "answer": "F, H",
	            "solution": "팬인(Fan-In)은 문제의 그림에서 특정 모듈로 들어오는(In) 선(Line)의 수라고 생각하면 됩니다. 그러므로 팬인이 2 이상인 모듈은 2개의 선이 들어오는 F, H 모듈이 됩니다."
	        }
	    },
	    {
	        "id": 447386,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "데이터 결합도(Data Coupling)에 대해 간략히 서술하면?",
	            "answer": "데이터 결합도는 모듈 간의 인터페이스가 자료 요소로만 구성될 때의 결합도이다."
	        }
	    },
	    {
	        "id": 447387,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 결합도를 강한 것부터 약한 것 순으로 차례대로 나열하면?",
	            "questionPassage": "ⓐ Control Coupling<br/>ⓑ External Coupling<br/>ⓒ Stamp Coupling<br/>ⓓ Content Coupling<br/>ⓔ Data Coupling<br/>ⓕ Common Coupling ",
	            "answer": "ⓓ → ⓕ → ⓑ → ⓐ → ⓒ  → ⓔ "
	        }
	    },
	    {
	        "id": 447388,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "어떤 모듈이 다른 모듈의 내부 논리 조직을 제어하기 위한 목적으로 제어 신호를 이용하여 통신하는 경우이며, 하위 모듈에서 상위 모듈로 제어 신호가 이동하여 상위 모듈에게 처리 명령을 부여하는 권리 전도 현상이 발생하게 되는 결합도는?",
	            "answer": "제어 결합도<br/>(Control Coupling)"
	        }
	    },
	    {
	        "id": 447389,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "한 모듈이 다른 모듈의 내부 기능 및 그 내부 자료를 직접 참조하거나 수정할 때의 결합도는?",
	            "answer": "내용 결합도<br/>(Content Coupling)"
	        }
	    },
	    {
	        "id": 447390,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "공유되는 공통 데이터 영역을 여러 모듈이 사용할 때의 결합도는?",
	            "answer": "공통(공유) 결합도<br/>(Common Coupling)"
	        }
	    },
	    {
	        "id": 447391,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "어떤 모듈에서 선언한 데이터(변수)를 외부의 다른 모듈에서 참조할 때의 결합도는?",
	            "answer": "외부 결합도<br/>(External Coupling)"
	        }
	    },
	    {
	        "id": 447392,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "모듈 간의 인터페이스로 배열이나 레코드 등의 자료 구조가 전달될 때의 결합도는?",
	            "answer": "스탬프(검인) 결합도<br/>(Stamp Coupling)"
	        }
	    },
	    {
	        "id": 447393,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "서로 간에 어떠한 의미 있는 연관 관계도 지니지 않은 기능 요소로 구성되는 경우이며, 서로 다른 상위 모듈에 의해 호출되어 처리상의 연관성이 없는 서로 다른 기능을 수행하는 경우의 응집도는?",
	            "answer": "우연적 응집도<br/>(Coincidental Cohesion)"
	        }
	    },
	    {
	        "id": 447394,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "모듈이 다수의 관련 기능을 가질 때 모듈 안의 구성 요소들이 그 기능을 순차적으로 수행할 경우의 응집도는?",
	            "answer": "절차적 응집도<br/>(Procedural Cohesion)"
	        }
	    },
	    {
	        "id": 447395,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "모듈 내부의 모든 기능 요소들이 단일 문제와 연관되어 수행될 경우의 응집도는?",
	            "answer": "기능적 응집도<br/>(Functional Cohesion)"
	        }
	    },
	    {
	        "id": 447396,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "모듈 내 하나의 활동으로부터 나온 출력 데이터를 그 다음 활동의 입력 데이터로 사용할 경우의 응집도는?",
	            "answer": "순차적 응집도<br/>(Sequential Cohesion)"
	        }
	    },
	    {
	        "id": 447397,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "동일한 입력과 출력을 사용하여 서로 다른 기능을 수행하는 구성 요소들이 모였을 경우의 응집도는?",
	            "answer": "교환(통신)적 응집도<br/>(Communication Cohesion)"
	        }
	    },
	    {
	        "id": 447398,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "특정 시간에 처리되는 몇 개의 기능을 모아 하나의 모듈로 작성할 경우의 응집도는?",
	            "answer": "시간적 응집도<br/>(Temporal Cohesion)"
	        }
	    },
	    {
	        "id": 447399,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "유사한 성격을 갖거나 특정 형태로 분류되는 처리 요소들로 하나의 모듈이 형성되는 경우의 응집도는?",
	            "answer": "논리적 응집도<br/>(Logical Cohesion)"
	        }
	    },
	    {
	        "id": 447400,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "다음 응집도를 응집도를 강한 것부터 약한 것 순으로 차례대로 나열하면?",
	            "questionPassage": "ⓐ 기능적 응집도<br/>ⓑ 시간적 응집도<br/>ⓒ 절차적 응집도<br/>ⓓ 우연적 응집도<br/>ⓔ 순차적 응집도<br/>ⓕ 교환(통신)적 응집도<br/>ⓖ 논리적 응집도 ",
	            "answer": "ⓐ → ⓔ → ⓕ → ⓒ → ⓑ → ⓖ  → ⓓ "
	        }
	    },
	    {
	        "id": 447401,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 내용이 설명하는 용어는?",
	            "questionPassage": "ㆍ논리의 기술에 중점을 둔 도형식 표현 방법이다.<br/>ㆍ연속, 선택 및 다중 선택, 반복 등의 제어 논리 구조로 표현한다.<br/>ㆍ조건이 복합되어 있는 곳의 처리를 시각적으로 명확히 식별하는데 적합하다.",
	            "answer": "N-S 차트<br/>(Nassi-Schneiderman Chart)"
	        }
	    },
	    {
	        "id": 447402,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "시스템을 설계할 때 필요한 설계 지침으로 두 모듈 간의 상호 의존도 또는 두 모듈 사이의 연관 관계를 의미하는 용어는?",
	            "answer": "결합도<br/>(Coupling)"
	        }
	    },
	    {
	        "id": 447403,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "결합 정도에 따라 결합도의 종류를 나열할 경우 괄호에 들어갈 가장 적합한 결합도는?",
	            "questionPassage": "자료 결합도 \\< (  ①  )  \\< 제어 결합도 \\< (  ②  ) \\< (  ③  ) \\< 내용 결합도",
	            "answer": "① 스탬프 결합도 <br/>② 외부 결합도 <br/>③ 공통 결합도"
	        }
	    },
	    {
	        "id": 447404,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "모듈이 독립적인 기능으로 정의되어 있는 정도를 가리키는 응집도는 응집도가 가장 강한 기능적 응집도부터 가장 약한 우연적 응집도까지 다양한 종류가 존재한다. 이러한 응집도 중 모듈이 다수의 관련 기능을 가질 때 모듈 안의 구성 요소들이 그 기능을 순차적으로 수행하는 경우를 가리키는 응집도는?",
	            "answer": "절차적 응집도<br/>(Procedural Cohesion)"
	        }
	    },
	    {
	        "id": 447405,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "모듈 간의 인터페이스가 자료 요소로만 구성될 때의 결합도로, 어떤 모듈이 다른 모듈을 호출하면서 매개 변수나 인수로 데이터를 넘겨주고, 호출 받은 모듈은 받은 데이터에 대한 처리 결과를 다시 돌려주는 방식의  결합도는?",
	            "answer": "자료 결합도<br/>(Data Coupling)"
	        }
	    },
	    {
	        "id": 447406,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "모듈과 시스템 구조에 대한 다음 설명의 괄호에 들어갈 용어는?",
	            "questionPassage": "ㆍ( ① )은 어떤 모듈을 호출하는 모듈의 수를 의미하며, ( ② )은 어떤 모듈에 의해 호출되는 모듈의 수를 의미한다.<br/>ㆍ( ① )이 높다는 것은 재사용 측면에서 설계가 잘 되어있다고 볼 수 있으나, 단일 장애점이 발생할 수 있으므로 중점적인 관리 및 테스트가 필요하다.<br/>ㆍ( ② )이 높은 경우 불필요하게 다른 모듈을 호출하고 있는지 검토하고, 단순화 여부에 대한 검토가 필요하다.",
	            "answer": "① 팬인(Fan-In)<br/>② 팬아웃(Fan-Out)"
	        }
	    },
	    {
	        "id": 447407,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음의 모듈 관계를 표현한 시스템 구조도를 참고하여 팬아웃(Fan-Out)이 2 이상인 모듈을 모두 고르면?",
	            "questionPassage": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0004.jpg\"/>",
	            "answer": "A, B, C",
	            "solution": "모듈로 들어오면 팬인(Fan-In), 모듈에서 나가면 팬아웃(Fan-Out)이란 걸 염두에 두고 생각해 보면 쉽게 해결할 수 있습니다.<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0005.jpg\"/>"
	        }
	    },
	    {
	        "id": 447408,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 구현을 위해 필요한 여러 동작 중 한 가지 동작을 수행하는 작은 기능을 모듈로 구현한 것을 무엇이라고 하는가?",
	            "answer": "단위 모듈<br/>(Unit Module)"
	        }
	    },
	    {
	        "id": 447409,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 내용이 설명하는 용어는?",
	            "questionPassage": "ㆍ모듈 간 통신 방식을 구현하기 위해 사용되는 대표적인 프로그래밍 인터페<br/>이스 집합이다.<br/>ㆍ복수의 프로세스를 수행하며 이뤄지는 프로세스 간 통신까지 구현이 가능하다.<br/>ㆍ대표적인 메소드로 Shared Memory, Socket, Semaphores 등이 있다.",
	            "answer": "IPC<br/>(Inter-Process Communication)"
	        }
	    },
	    {
	        "id": 447410,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "애플리케이션 테스트에 사용되는 테스트 케이스(Test Case)에 대해 간략히 서술하면?",
	            "answer": "테스트 케이스는 <span class=\"underline\">구현된 소프트웨어가 사용자의 요구사항을 정확하게 준수했는지를 확인하기 위한 테스트 항목에 대한 명세서</span>이다."
	        }
	    },
	    {
	        "id": 447411,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "IPC(Inter-Process Communication)의 메소드 중 (     )는 공유 가능한 메모리를 구성하여 다수의 프로세스가 통신하는 방식이다.",
	            "answer": "Shared Memory"
	        }
	    },
	    {
	        "id": 447412,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "IPC(Inter-Process Communication)의 메소드 중 (     )는 네트워크 소켓을 이용하여 네트워크를 경유하는 프로세스 간에 통신하는 방식이다.",
	            "answer": "Socket"
	        }
	    },
	    {
	        "id": 447413,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "IPC(Inter-Process Communication)의 메소드 중 (     )는 공유 자원에 대한 접근 제어를 통해 통신하는 방식이다.",
	            "answer": "Semaphores"
	        }
	    },
	    {
	        "id": 447414,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "IPC(Inter-Process Communication)의 메소드 중 (     )는 ‘Pipe’라고 불리는 선입선출 형태로 구성된 메모리를 여러 프로세스가 공유하여 통신하는 방식이다.",
	            "answer": "Pipes & named Pipes"
	        }
	    },
	    {
	        "id": 447415,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "IPC(Inter-Process Communication)의 메소드 중 (     )는 메시지가 발생하면 이를 전달하는 방식으로 통신하는 방식이다.",
	            "answer": "Message Queueing"
	        }
	    },
	    {
	        "id": 447416,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "한 가지 동작을 수행하는 기능을 모듈로 구현한 것으로, 독립적인 컴파일이 가능하며, 구현 시 구현할 기능에 대한 명세를 작성하고, 입·출력 기능을 구현한 후 알고리즘이 구현되는 것은?",
	            "answer": "단위 모듈<br/>(Unit Module)"
	        }
	    },
	    {
	        "id": 447417,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "구현된 소프트웨어가 사용자의 요구사항을 정확하게 준수했는지를 확인하기 위해 설계된 입력 값, 실행 조건, 기대 결과 등으로 구성된 테스트 항목에 대한 명세서를 가리키는 용어는?",
	            "answer": "테스트 케이스<br/>(Test Case)"
	        }
	    },
	    {
	        "id": 447418,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "IPC(Inter-Process Communication)에서 공유된 메모리를 이용하여 둘 이상의 프로세스가 통신할 수 있도록 기능을 제공하는 메소드는?",
	            "answer": "Shared Memory"
	        }
	    },
	    {
	        "id": 447419,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "공통 모듈 명세 시 해당 기능에 대해 일관되게 이해되고 한 가지로 해석될 수 있도록 작성해야 한다는 명세 기법 원칙은?",
	            "answer": "명확성(Clarity)"
	        }
	    },
	    {
	        "id": 447420,
	        "templateId": 9,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★★☆",
	            "question": "다음 중 공통 모듈의 재사용 규모에 따른 분류에 해당하는 것을 모두 고르시오.",
	            "questionPassage": [
	                "ⓐ 컴포넌트",
	                "ⓑ 더미코드",
	                "ⓒ 함수와 객체",
	                "ⓓ 애플리케이션",
	                "ⓔ 주석",
	                "ⓕ 파일 구조 "
	            ],
	            "answer": [
	                "1",
	                "3",
	                "4"
	            ]
	        }
	    },
	    {
	        "id": 447421,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음의 설명에 가장 부합하는 용어는?",
	            "questionPassage": "ㆍ여러 프로그램에서 공통적으로 사용할 수 있는 모듈을 의미하며, 자주 사용되는 계산식이나 사용자 인증과 같은 기능들이 여기에 해당한다.<br/>ㆍ재사용성의 확보와 중복 개발 회피를 통해 프로그램 개발에 소모되는 자원을 절약할 수 있다.<br/>ㆍ구현 시 다른 개발자들이 해당 기능을 명확히 이해할 수 있도록 명세 기법을 준수해야 한다.",
	            "answer": "공통 모듈"
	        }
	    },
	    {
	        "id": 447422,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발에서 재사용(Reuse)에 대한 개념을 간략히 서술하면?",
	            "answer": "재사용은 <span class=\"underline\">이미 개발된 기능들을 새로운 시스템이나 기능 개발에 사용하기 적합하도록 최적화하는 작업</span>이다."
	        }
	    },
	    {
	        "id": 447423,
	        "templateId": 9,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "question": "다음 중 공통 모듈의 명세 기법에 해당하는 것을 모두 고르면?",
	            "questionPassage": [
	                "ⓐ 호환성",
	                "ⓑ 정확성",
	                "ⓒ 변경성",
	                "ⓓ 명확성",
	                "ⓔ 이식성"
	            ],
	            "answer": [
	                "2",
	                "4"
	            ]
	        }
	    },
	    {
	        "id": 447424,
	        "templateId": 9,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "question": "다음 중 공통 모듈의 명세 기법에 해당하는 것을 모두 고르면?",
	            "questionPassage": [
	                "ⓐ 자원 효율성",
	                "ⓑ 완전성",
	                "ⓒ 일관성",
	                "ⓓ 추적성",
	                "ⓔ 친밀성 "
	            ],
	            "answer": [
	                "2",
	                "3",
	                "4"
	            ]
	        }
	    },
	    {
	        "id": 447425,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "공통 모듈의 명세 기법 중 일관성(Consistency)에 대해 간략히 서술하시오.",
	            "answer": "일관성은 공통 기능들 간 상호 충돌이 발생하지 않도록 작성하는 기법이다."
	        }
	    },
	    {
	        "id": 447426,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "공통 모듈 구현 시 다른 개발자들이 해당 기능을 명확히 이해할 수 있도록 5가지의 명세 기법을 준수해야 한다. 이 중 기능에 대한 요구사항의 출처, 관련 시스템 등의 관계를 파악할 수 있도록 작성해야 한다는 것을 의미하는 원칙은?",
	            "answer": "추적성<br/>(Traceability)"
	        }
	    },
	    {
	        "id": 447427,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "공통 모듈 구현 시 다른 개발자들이 해당 기능을 명확히 이해할 수 있도록 5가지의 명세 기법을 준수해야 한다. 이 중 시스템 구현 시 해당 기능이 필요하다는 것을 알 수 있도록 작성해야 한다는 것을 의미하는 원칙은?",
	            "answer": "정확성<br/>(Correctness)"
	        }
	    },
	    {
	        "id": 447428,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "공통 모듈 명세 시 시스템 구현을 위해 필요한 모든 것을 기술해야 한다는 명세 기법 원칙은?",
	            "answer": "완전성<br/>(Completeness)"
	        }
	    },
	    {
	        "id": 447429,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "공통 모듈 명세 시 공통 기능들 간 상호 충돌이 발생하지 않도록 작성해야 한다는 명세 기법 원칙은?",
	            "answer": "일관성<br/>(Consistency)"
	        }
	    },
	    {
	        "id": 447430,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 작게는 클래스나 메소드부터 크게는 애플리케이션 단위에서 수행되는 작업으로, 비용과 개발 시간을 절약하기 위해 이미 개발된 기능들을 파악하고 재구성하여 새로운 시스템 또는 기능 개발에 사용하기 적합하도록 최적화하는 작업이다. 이 작업의 대상은 외부 모듈과의 결합도는 낮고, 응집도는 높아야 한다.",
	            "answer": "재사용(Reuse)"
	        }
	    },
	    {
	        "id": 447431,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "코드 설계에서 일정한 일련번호를 부여하는 코드 부여 방식은?",
	            "answer": "순차 코드<br/>(Sequence Code)"
	        }
	    },
	    {
	        "id": 447432,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "코드화 대상 항목의 중량, 면적, 용량 등의 물리적 수치를 이용하여 코드를 부여하는 코드 부여 방식은?",
	            "answer": "표의 숫자 코드<br/>(Significant Digit Code)"
	        }
	    },
	    {
	        "id": 447433,
	        "templateId": 9,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "question": "사원 번호의 발급 과정에서 둘 이상의 서로 다른 사람에게 동일한 번호가 부여된 경우에 코드의 어떤 기능을 만족시키지 못한 것인지 다음 보기에서 고르면?",
	            "questionPassage": [
	                "ⓐ 표준화 기능",
	                "ⓑ 식별 기능",
	                "ⓒ 배열 기능",
	                "ⓓ 연상 기능",
	                "ⓔ 분류 기능",
	                "ⓕ 간소화 기능"
	            ],
	            "answer": [
	                "2"
	            ]
	        }
	    },
	    {
	        "id": 447434,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "코드화 대상 자료 전체를 계산하여 이를 필요로 하는 분류 단위로 구분하고, 각 블록 내에서 순서대로 번호를 부여하는 방식으로, 구분 코드라고도 불리는 코드는?",
	            "answer": "블록 코드<br/>(Block Code)"
	        }
	    },
	    {
	        "id": 447435,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "코드화 대상 항목을 10진 분할하고, 다시 그 각각에 대하여 10진 분할하는 방법을 필요한 만큼 반복하는 코드로서, 코드 대상 항목의 추가가 용이하며 무제한적으로 확대할 수 있으나 자릿수가 길어질 수 있고 기계 처리에는 적합하지 않은 코드는?",
	            "answer": "10진 코드<br/>(Decimal Code)"
	        }
	    },
	    {
	        "id": 447436,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "회사에서 각 부서의 명칭을 코드화하기 위하여 대분류, 중분류, 소분류 등으로 나누어 나타내고자 할 때 사용하기에 가장 적합한 코드(Code)의 종류는?",
	            "answer": "그룹 분류 코드<br/>(Group Classification Code)"
	        }
	    },
	    {
	        "id": 447437,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "코드(Code)는 자료의 분류, 추출, 조합, 집계 등을 효과적으로 수행하기 위해 사용하는 것이다. 이러한 코드의 주요 기능 중 자료에 의미를 부여하거나 나열할 수 있는 기능을 가리키는 용어는?",
	            "answer": "배열 기능"
	        }
	    },
	    {
	        "id": 447438,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음과 같이 제품에 코드를 부여했을 때 사용된 코드(Code)의 종류는? <br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0006.jpg\"/>",
	            "answer": "연상 코드<br/>(Mnemonic Code)"
	        }
	    },
	    {
	        "id": 447439,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "필요한 기능을 하나의 코드로 수행하기 어려운 경우 2개 이상의 코드를 조합하여 만드는 코드는?",
	            "answer": "합성 코드<br/>(Combined Code)"
	        }
	    },
	    {
	        "id": 447440,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "디자인 패턴(Design Pattern)은 23가지로, 생성, 구조, (     )의 3가지로 분류한다.",
	            "answer": "행위"
	        }
	    },
	    {
	        "id": 447441,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "디자인 패턴 중 한 객체의 상태가 바뀌면 그 객체에 의존하는 다른 객체들에게 연락이 가서 자동으로 내용이 갱신되는 방식으로, 일대다의 의존성을 정의하는 패턴이다. 상호 작용을 하는 객체 사이에서는 가능하면 느슨하게 결합하는 패턴은?",
	            "answer": "옵서버<br/>(Observer)"
	        }
	    },
	    {
	        "id": 447442,
	        "templateId": 9,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "question": "다음에서 객체지향 소프트웨어 설계 시 사용되는 디자인 패턴의 구성 요소를 모두 고르면?",
	            "questionPassage": [
	                "ⓐ 문제 및 배경",
	                "ⓑ 개발자 이름",
	                "ⓒ 최근 업데이트 날짜",
	                "ⓓ 사례",
	                "ⓔ 참조 문서",
	                "ⓕ 샘플 코드"
	            ],
	            "answer": [
	                "1",
	                "4",
	                "6"
	            ]
	        }
	    },
	    {
	        "id": 447443,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "GoF(Gangs of Four) 디자인 패턴 분류 3가지는?",
	            "answer": "생성 패턴<br/>구조 패턴<br/>행위 패턴"
	        }
	    },
	    {
	        "id": 447444,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "객체를 생성하기 위한 인터페이스를 정의하여 어떤 클래스가 인스턴스화 될 것인지는 서브 클래스가 결정하도록 하는 것으로, Virtual-Constructor 패턴이라고도 불리는 패턴은?",
	            "answer": "팩토리 메소드<br/>(Factory Method)"
	        }
	    },
	    {
	        "id": 447445,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "구체적인 클래스에 의존하지 않고, 인터페이스를 통해 서로 연관·의존하는 객체들의 그룹으로 생성하여 추상적으로 표현하는 것으로 연관된 서브 클래스를 묶어 한 번에 교체하는 것이 가능한 생성 패턴은?",
	            "answer": "추상 팩토리<br/>(Abstract Factory)"
	        }
	    },
	    {
	        "id": 447446,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "작게 분리된 인스턴스를 건축 하듯이 조합하여 객체를 생성하는 것으로  객체의 생성 과정과 표현 방법을 분리하고 있어, 동일한 객체 생성에서도 서로 다른 결과를 만들어 낼 수 있는 생성 패턴은?",
	            "answer": "빌더(Builder)"
	        }
	    },
	    {
	        "id": 447447,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "원본 객체를 복제하는 방법으로 객체를 생성하는 패턴으로 일반적인 방법으로 객체를 생성하며, 비용이 큰 경우 주로 이용하는 생성 패턴은?",
	            "answer": "프로토타입<br/>(Prototype)"
	        }
	    },
	    {
	        "id": 447448,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "하나의 객체를 생성하면 생성된 객체를 어디서든 참조할 수 있지만, 여러 프로세스가 동시에 참조할 수는 없는 것는 생성 패턴은?",
	            "answer": "싱글톤(Singleton)"
	        }
	    },
	    {
	        "id": 447449,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "구현부에서 추상층을 분리하여, 서로가 독립적으로 확장할 수 있도록 구성한 패턴은?",
	            "answer": "브리지(Bridge)"
	        }
	    },
	    {
	        "id": 447450,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "Windows 운영체제의 폴더와 같이 폴더 내에 폴더가 존재할 수 있는 트리 구조로 복합 객체와 단일 객체를 다룰 수 있는 패턴은?",
	            "answer": "컴포지트<br/>(Composite)"
	        }
	    },
	    {
	        "id": 447451,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "호환성이 없는 클래스들의 인터페이스를 다른 클래스가 이용할 수 있도록 변환해주고, 기존의 클래스를 이용하고 싶지만 인터페이스가 일치하지 않을 때 이용하는 구조 패턴은?",
	            "answer": "어댑터<br/>(Adapter)"
	        }
	    },
	    {
	        "id": 447452,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "GoF의 디자인 패턴 중 객체 간의 결합을 통해 능동적으로 기능들을 확장할 수 있는 패턴은?",
	            "answer": "데코레이터<br/>(Decorator)"
	        }
	    },
	    {
	        "id": 447453,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 상황에 가장 적합한 디자인 패턴(Design Pattern)은?",
	            "questionPassage": "메모리가 적은 소형 PC에 설치될 응용 프로그램을 개발해야 한다. 따라서 효율적인 메모리 자원의 운용을 위해 유사한 클래스들의 인스턴스를 매번 생성하지 않고 가능한 공유해서 사용하기로 결정했다.",
	            "answer": "플라이웨이트<br/>(Flyweight\\)"
	        }
	    },
	    {
	        "id": 447454,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "복잡한 서브 클래스들을 피해 더 상위에 인터페이스를 구성함으로써 서브 클래스들의 기능을 간편하게 사용할 수 있도록 하는 구조패턴 은?",
	            "answer": "퍼싸드(Facade)"
	        }
	    },
	    {
	        "id": 447455,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "접근이 어려운 객체와 여기에 연결하려는 객체 사이에서 인터페이스 역할을 수행하는 구조 패턴은?",
	            "answer": "프록시(Proxy)"
	        }
	    },
	    {
	        "id": 447456,
	        "templateId": 9,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "question": "다음 보기 중 GoF(Gang of Four)의 디자인 패턴에서 행위 패턴에 속하는 것을 모두 고르시오.",
	            "questionPassage": [
	                "ⓐ Builder",
	                "ⓑ Facade",
	                "ⓒ Command",
	                "ⓓ Composite",
	                "ⓔ Observer"
	            ],
	            "answer": [
	                "3",
	                "5"
	            ]
	        }
	    },
	    {
	        "id": 447457,
	        "templateId": 9,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "question": "다음 보기 중 GoF(Gang of Four)의 디자인 패턴에서 행위 패턴에 속하는 것을 모두 고르시오.",
	            "questionPassage": [
	                "ⓐ Proxy",
	                "ⓑ State",
	                "ⓒ Visitor",
	                "ⓓ Singleton"
	            ],
	            "answer": [
	                "2",
	                "3"
	            ]
	        }
	    },
	    {
	        "id": 447458,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "[key:Ctrl]+[key:Z]와 같은 실행 취소 및 되돌리기 기능을 개발할 때 주로 사용되는 패턴으로, 특정 시점에서의 객체 내부 상태를 객체화함으로써 이후 요청에 따라 객체를 해당 시점의 상태로 돌릴 수 있는 기능을 제공하는 패턴은?",
	            "answer": "메멘토<br/>(Memento)"
	        }
	    },
	    {
	        "id": 447459,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "동일한 계열의 알고리즘들이 개별적으로 캡슐화되어 있고, 알고리즘들의 변경 및 상호 교환이 용이하며, 클라이언트가 알고리즘을 자유롭게 선택할 수 있는 디자인 패턴은?",
	            "answer": "전략<br/>(Strategy)"
	        }
	    },
	    {
	        "id": 447460,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "요청을 처리할 수 있는 객체가 둘 이상 존재하여 한 객체가 처리하지 못하면 다음 객체로 넘어가는 형태의 행위 패턴은?",
	            "answer": "책임 연쇄<br/>(Chain of<br/>Responsibility)"
	        }
	    },
	    {
	        "id": 447461,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "요청을 객체의 형태로 캡슐화하여 재이용하거나 취소할 수 있도록 요청에 필요한 정보를 저장하거나 로그에 남기는 행위 패턴은?",
	            "answer": "커맨드<br/>(Command)"
	        }
	    },
	    {
	        "id": 447462,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "SQL이나 통신 프로토콜과 같은 것을 개발할 때 사용하는 것으로 언어에 문법 표현을 정의하는 행위 패턴은?",
	            "answer": "인터프리터<br/>(Interpreter)"
	        }
	    },
	    {
	        "id": 447463,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "자료 구조와 같이 접근이 잦은 객체에 대해 동일한 인터페이스를 사용하도록 하는 행위 패턴은?",
	            "answer": "반복자(Iterator)"
	        }
	    },
	    {
	        "id": 447464,
	        "templateId": 8,
	        "registeredDate": 1652337947000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "수많은 객체들 간의 복잡한 상호작용(Interface)을 캡슐화하여 객체로 정의하는 행위 패턴은?",
	            "answer": "중재자(Mediator)"
	        }
	    },
	    {
	        "id": 447465,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "객체 상태를 캡슐화하고 이를 참조하는 방식으로 처리하는 것으로 객체의 상태에 따라 동일한 동작을 다르게 처리해야 할 때 사용하는 행위 패턴은?",
	            "answer": "상태(State)"
	        }
	    },
	    {
	        "id": 447466,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "상위 클래스에서 골격을 정의하고, 하위 클래스에서 세부 처리를 구체화하는 구조의 행위 패턴은?",
	            "answer": "템플릿 메소드<br/>(Template<br/>Method)"
	        }
	    },
	    {
	        "id": 447467,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "편집기, 컴파일러, 디버거 등 개발에 필요한 다양한 툴을 하나의 인터페이스로 통합하여 제공하는 소프트웨어 또는 서비스를 의미한다. 코드를 자동으로 생성해줄 뿐만 아니라 컴파일 과정까지 자동으로 수행해주며, 그 밖의 여러 기능도 다운로드하여 추가하는 것이 가능한 개발 지원 도구는?",
	            "answer": "통합 개발 환경<br/>(IDE, Integrated Development Environment)"
	        }
	    },
	    {
	        "id": 447468,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "소스 코드 파일들을 컴퓨터에서 실행할 수 있는 제품 소프트웨어로 변환하는 빌드 도구의 하나로, 아파치 소프트웨어 재단에서 Ant의 대안으로 개발하였다. 의존성을 사용하여 라이브러리를 관리하며, 규칙이나 표준이 존재하여 예외 사항만 기록하면 되는 빌드 도구는?",
	            "answer": "Maven"
	        }
	    },
	    {
	        "id": 447469,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 개발 지원 도구는?",
	            "questionPassage": "ㆍ아파치 소프트웨어 재단에서 개발하였다.<br/>ㆍ자바 프로젝트의 공식적인 빌드 도구이다.<br/>ㆍ정해진 규칙이나 표준이 없다.",
	            "answer": "Ant(Another Neat<br/>Tool)"
	        }
	    },
	    {
	        "id": 447470,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "그룹웨어(Groupware)라고도 불리는 (         )은 개발에 참여하는 사람들이 서로 다른 작업 환경에서 원활히 프로젝트를 수행할 수 있도록 도와주는 도구이다. ",
	            "answer": "협업 도구"
	        }
	    },
	    {
	        "id": 447471,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 개발 지원 도구는?",
	            "questionPassage": "ㆍ안드로이드 스튜디오의 공식 빌드 도구이다.<br/>ㆍ의존성(Dependency)을 활용하여 라이브러리를 관리한다.<br/>ㆍ동적 객체지향 프로그래밍 언어 Groovy를 빌드 스크립트로 사용한다.",
	            "answer": "Gradle"
	        }
	    },
	    {
	        "id": 447472,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "편집기(Editor), 컴파일러(Compiler), 디버거(Debugger) 등의 다양한 툴을 하나의 인터페이스로 통합하여 제공하는 통합 개발 환경 도구 중 하나로, JetBrains에서 만들었으며 멀티 플랫폼을 기반으로 실행되고, Java, JSP, XML, GO, Kotlin 등의 다양한 언어를 지원하는 소프트웨어는?",
	            "answer": "IDEA"
	        }
	    },
	    {
	        "id": 447473,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 JAVA를 기반으로 만든 프레임워크로, 전자정부 표준 프레임워크의 기반 기술로 사용되고 있다.",
	            "answer": "Spring"
	        }
	    },
	    {
	        "id": 447474,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 Python을 기반으로 만든 프레임워크로, 컴포넌트의 재사용과 플러그인화를 강조하여 신속한 개발이 가능하도록 지원한다.",
	            "answer": "Django"
	        }
	    },
	    {
	        "id": 447475,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 PHP를 기반으로 만든 프레임워크로, 인터페이스가 간편하며 서버 자원을 적게 사용한다.",
	            "answer": "Codeigniter"
	        }
	    },
	    {
	        "id": 447476,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 JavaScript를 기반으로 만든 프레임워크로, 비동기 입·출력 처리와 이벤트 위주의 높은 처리 성능을 갖고 있어 실시간으로 입·출력이 빈번한 애플리케이션에 적합하다.",
	            "answer": "Node.js"
	        }
	    },
	    {
	        "id": 447477,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 Ruby를 기반으로 만든 프레임워크로, 테스트를 위한 웹 서버를 지원하며 데이터베이스 작업을 단순화, 자동화시켜 개발 코드의 길이가 짧아지게 함으로써 신속한 개발이 가능하다.",
	            "answer": "Ruby on Rails"
	        }
	    },
	    {
	        "id": 447478,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "서버 프로그램 개발을 위해 구현되는 모듈 중 하나로, 사용자의 요청에 적절한 서비스를 호출하여 그 결과를 사용자에게 반환하는 객체는?",
	            "answer": "Controller"
	        }
	    },
	    {
	        "id": 447479,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "서버 프로그램 개발에 대한 다음 설명 중 괄호에 공통으로 들어갈 적합한 용어는?",
	            "questionPassage": "(     )는 서버 프로그램 개발을 위해 생성하는 객체 중 하나로, 데이터베이스에 접근하고 데이터를 실제로 조작한다. 데이터베이스를 조작하기 위해서 사용되는 SQL문은 (     )의 내부에 직접 입력되거나, 외부의 XML 문서에 삽입하여 호출하는 방식을 사용한다.",
	            "answer": "DAO<br/>(Data Access Object)"
	        }
	    },
	    {
	        "id": 447480,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 서버 프로그램 개발 시 사용할 수 있는 다양한 클래스 및 인터페이스를 제공해줌으로써 생산성에 큰 도움을 주는 소프트웨어로, Java의 Spring, Python의 Django, PHP의 Codeigniter가 여기에 해당한다.",
	            "answer": "서버 개발 프레임워크"
	        }
	    },
	    {
	        "id": 447481,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "서버와 클라이언트의 연결과 이 연결로 발생하는 정보를 관리하는 것을 말하며, 이를 잘못 관리하는 경우 사용자의 접속 정보가 노출되어 인가되지 않은 시스템의 기능을 이용하거나 중요한 정보에 접근할 수 있는 보안 점검 항목은?",
	            "answer": "세션 통제"
	        }
	    },
	    {
	        "id": 447482,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "애플리케이션 개발에 사용되는 API(Application Programming Interface)의 개념에 대해 간략히 서술하면?",
	            "answer": "API는 운영체제나 프로그래밍 언어 등에 있는 <div class=\"border-block\">라이브러리를 이용할 수 있도록 규칙 등을 정의해 놓은 인터페이스</div>이다."
	        }
	    },
	    {
	        "id": 447483,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발에서 운영체제나 프로그래밍 언어 등에 있는 라이브러리를 이용할 수 있도록 규칙 등을 정의해 놓은 인터페이스를 가리키는 용어는?",
	            "answer": "API<br/>(Application Programming Interface)"
	        }
	    },
	    {
	        "id": 447484,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "배치 프로그램(Batch Program)의 필수 요소 중 (     )는 심각한 오류가 발생하는 상황을 제외하고는 사용자의 개입 없이 수행되어야 하는 것을 의미한다.",
	            "answer": "자동화"
	        }
	    },
	    {
	        "id": 447485,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "배치 프로그램(Batch Program)의 필수 요소 중 (     )는 오류가 발생하면 오류의 발생 위치, 시간 등을 추적할 수 있어야 하는 것을 의미한다.",
	            "answer": "안정성/신뢰성"
	        }
	    },
	    {
	        "id": 447486,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "배치 프로그램(Batch Program)의 필수 요소 중 (     )은 잘못된 데이터나 데이터 중복 등의 상황으로 중단되는 일 없이 수행되어야 하는 것을 의미한다.",
	            "answer": "견고성"
	        }
	    },
	    {
	        "id": 447487,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "배치 프로그램(Batch Program)의 필수 요소 중 (     )은 많은 양의 데이터를 가져오거나, 전달하거나, 계산하는 등의 처리가 가능해야 한다는 것을 의미한다.",
	            "answer": "대용량 데이터"
	        }
	    },
	    {
	        "id": 447488,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "배치 프로그램(Batch Program)의 필수 요소 중 (     )은 다른 응용 프로그램의 수행을 방해하지 않아야 하며, 지정된 시간 내에 처리가 완료되어야 함을 의미한다.",
	            "answer": "성능"
	        }
	    },
	    {
	        "id": 447489,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 배치 프로그램이 일괄 처리 작업을 설정된 주기에 맞춰 원활히 수행하도록 지원하는 도구로, 이 도구를 사용하면 코드를 직접 작성하여 구현하는 것에 비해 안정적이며 생산성에서도 큰 차이가 있다. 주로 사용되는 도구로는 Spring Batch, Quartz, Cron이 있다.",
	            "answer": "배치 스케줄러<br/>(Batch Scheduler)"
	        }
	    },
	    {
	        "id": 447490,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "스프링 프레임워크로 개발되는 응용 프로그램들의 일괄 처리를 위한 다양한 기능을 제공하는 오픈 소스 라이브러리로 수행할 작업과 수행 시간을 관리하는 요소들을 분리하여 일괄 처리 작업에 유연성을 제공하는 배치 스케줄러(Batch Scheduler)는?",
	            "answer": "Quartz"
	        }
	    },
	    {
	        "id": 447491,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "리눅스(Linux)의 크론탭(crontab) 명령어를 이용하여 다음의 설명에 해당하는 작업을 등록하는 명령문은?",
	            "questionPassage": "A사의 개발자는 3월, 6월, 9월, 12월 마다 수행되어야 하는 데이터 백업 작업을 예약하고자 한다. 해당 작업은 각 월의 25일에 서버 이용이 가장 적은 시간대인 오후 10시 정각에 처음 실행되어 15분마다 총 4회 수행할 예정이다. 백업과 관련된 명령어는 /backup/batch.sh 파일에 모두 준비해 두었다.",
	            "answer": "*/15 22 25 */3 * /backup/batch.sh",
	            "solution": "ㆍ시간은 24시 표기법으로 사용하기 때문에 오후 10시에 해당하는 22를 적어야 합니다.<br/>ㆍ분과 월에는 ‘/’를 사용하지 않고, 분에 0, 15, 30, 45로 쓰거나 월을 3, 6, 9, 12로 작성해도 됩니다.<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0003.jpg\"/>"
	        }
	    },
	    {
	        "id": 447492,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "Spring Source 사와 Accenture 사가 2007년 공동 개발한 오픈 소스 프레임워크로, 데이터베이스나 파일의 데이터를 교환하는데 필요한 컴포넌트들을 제공하며, 로그 관리, 추적, 트랜잭션 관리, 작업 처리 통계, 작업 재시작 등의 다양한 기능을 제공하는 배치 스케줄러(Batch Scheduler)는?",
	            "answer": "스프링 배치<br/>(Spring Batch)"
	        }
	    },
	    {
	        "id": 447493,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "리눅스(Linux)의 크론탭(crontab) 명령어를 이용하여 다음의 설명에 해당하는 작업을 등록하는 명령문을 작성하시오.",
	            "questionPassage": "ㆍ작업 예약 형식은 ‘분’, ‘시’, ‘일’, ‘월’, ‘요일’, ‘명령어 및 실행파일’이다.<br/>ㆍ수행할 작업은 /dev/autobot.sh 파일을 실행하는 것이다.<br/>ㆍ매월 15일 18시 정각마다 수행되도록 설정한다.",
	            "answer": "0 18 15 * * /dev/autobot.sh",
	            "solution": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0007.jpg\"/><br/>위의 crontab 명령어를 해석하면, 매월 15일 18시 0분에 (요일에 상관없이) ‘/dev/autobot.sh’를 실행하라는 의미가 됩니다."
	        }
	    },
	    {
	        "id": 447494,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "서버 프로그램 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발에 관한 다음 설명에 해당하는 용어는?",
	            "questionPassage": "ㆍ기업에서 일반적으로 사용하는 여러 기능들을 통합하여 제공하는 소프트웨어를 의미한다.<br/>ㆍ소프트웨어를 구입하여 기업 환경에 적합하게 커스터마이징(Customizing)하여 사용한다.<br/>ㆍ기능 요구사항을 70% 이상 충족시키는 소프트웨어가 있을 때만 사용하는 것이 적합하다.",
	            "answer": "패키지 소프트웨어<br/>(Package Software)"
	        }
	    },
	    {
	        "id": 447495,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 DML 시스템 인터페이스 요구사항 분석 절차를 순서대로 나열하면?",
	            "questionPassage": "ⓐ 요구사항 분석 및 명세서 구체화<br/>ⓑ 요구사항 분류<br/>ⓒ 요구사항 관련 자료 준비<br/>ⓓ 요구사항 선별<br/>ⓔ 요구사항 명세서 공유",
	            "answer": "ⓓ  → ⓒ  → ⓑ  → ⓐ  → ⓔ "
	        }
	    },
	    {
	        "id": 447496,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "독립적으로 떨어져 있는 시스템들끼리 서로 연동하여 상호 작용하기 위한 접속 방법이나 규칙을 의미하는 용어는?",
	            "answer": "시스템 인터페이스"
	        }
	    },
	    {
	        "id": 447497,
	        "templateId": 9,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★☆☆☆",
	            "question": "다음 보기에서 시스템 인터페이스 요구사항 명세서의 구성 요소에 해당하는 것을 모두 고르면?",
	            "questionPassage": [
	                "ⓐ 인터페이스 보안 ",
	                "ⓑ 연계 방식 ",
	                "ⓒ 인터페이스 주기 ",
	                "ⓓ 정황 시나리오 ",
	                "ⓔ 사전/사후 조건 "
	            ],
	            "answer": [
	                "2",
	                "3"
	            ]
	        }
	    },
	    {
	        "id": 447498,
	        "templateId": 9,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★☆☆☆☆",
	            "question": "다음 보기에서 시스템 인터페이스 요구사항 명세서의 구성 요소에 해당하는 것을 모두 고르면?",
	            "questionPassage": [
	                "ⓐ 연계 대상 시스템",
	                "ⓑ 인터페이스 예외 처리 ",
	                "ⓒ 인터페이스 이름 ",
	                "ⓓ 내·외부 모듈 "
	            ],
	            "answer": [
	                "1",
	                "3"
	            ]
	        }
	    },
	    {
	        "id": 447499,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음은 인터페이스 요구사항 검증 수행 순서이다. 괄호에 들어갈 알맞은 내용은?",
	            "questionPassage": "요구사항 검토 계획 수립 → 검토 및 오류 수정 → (          ) 설정",
	            "answer": "베이스라인"
	        }
	    },
	    {
	        "id": 447500,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "검토 회의 전에 요구사항 명세서를 미리 배포하여 사전 검토한 후 짧은 검토 회의를 통해 오류를 조기에 검출하는데 목적을 두는 요구사항 검토 방법은?",
	            "answer": "워크스루<br/>(Walk Through)"
	        }
	    },
	    {
	        "id": 447501,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "작성자 이외의 전문 검토 그룹이 요구사항 명세서를 상세히 조사하여 결함, 표준 위배, 문제점 등을 파악하는 방식의 인터페이스 요구사항 검토 방법은?",
	            "answer": "인스펙션<br/>(Inspection)"
	        }
	    },
	    {
	        "id": 447502,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "요구사항 명세서 작성자가 요구사항 명세서를 설명하고 이해관계자들이 설명을 들으면서 결함을 발견하는 방식의 인터페이스 요구사항 검토 방법은?",
	            "answer": "동료검토<br/>(Peer Review)"
	        }
	    },
	    {
	        "id": 447503,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 내용에 해당하는 인터페이스 요구사항 검증 항목은?",
	            "questionPassage": "모든 참여자가 요구사항을 명확히 이해할 수 있는가?",
	            "answer": "명확성<br/>(Unambiguity)"
	        }
	    },
	    {
	        "id": 447504,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 내용에 해당하는 인터페이스 요구사항 검증 항목은?",
	            "questionPassage": "요구사항이 ‘어떻게(How to)’ 보다 ‘무엇을(What)’에 중점을 두고 있는가?",
	            "answer": "기능성<br/>(Functionality)"
	        }
	    },
	    {
	        "id": 447505,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 내용에 해당하는 인터페이스 요구사항 검증 항목은?",
	            "questionPassage": "사용자의 요구사항이 누락되지 않고 모두 반영되어 있는가?",
	            "answer": "완전성<br/>(Completeness)"
	        }
	    },
	    {
	        "id": 447506,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 내용에 해당하는 인터페이스 요구사항 검증 항목은?",
	            "questionPassage": "요구사항이 사용자의 요구를 모두 만족하고, 개발된 소프트웨어가 사용자의 요구 내용과 일치하는지를 검증할 수 있는가?",
	            "answer": "검증 가능성<br/>(Verifiability)"
	        }
	    },
	    {
	        "id": 447507,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 내용에 해당하는 인터페이스 요구사항 검증 항목은?",
	            "questionPassage": "요구사항이 모순되거나 충돌되는 점 없이 일정하게 유지하고 있는가?",
	            "answer": "일관성<br/>(Consistency)"
	        }
	    },
	    {
	        "id": 447508,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 내용에 해당하는 인터페이스 요구사항 검증 항목은?",
	            "questionPassage": "요구사항 명세서와 설계서를 추적할 수 있는가?",
	            "answer": "추적 가능성<br/>(Traceability)"
	        }
	    },
	    {
	        "id": 447509,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "사용자의 요구사항을 정확히 파악하기 위해 실제 개발될 소프트웨어에 대한 견본품을 만들어 최종 결과물을 예측하는 요구사항 검증 방법은?",
	            "answer": "프로토타이핑<br/>(Prototyping)"
	        }
	    },
	    {
	        "id": 447510,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "인터페이스 표준 항목 중 (     )는 시스템 간 연동 시 필요한 공통 정보로, 구성 정보에는 인터페이스 ID, 전송 시스템 정보, 서비스 코드 정보, 응답 결과 정보, 장애 정보 등이 있다.",
	            "answer": "시스템 공통부"
	        }
	    },
	    {
	        "id": 447511,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "인터페이스 표준 항목 중 (     )는 시스템들이 연동된 후 송·수신 되는 데이터를 처리할 때 필요한 정보로, 구성 정보에는 직원 정보, 승인자 정보, 기기 정보, 매체 정보 등이 있다.",
	            "answer": "거래 공통부"
	        }
	    },
	    {
	        "id": 447512,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "인터페이스 통신 유형 중 (     )는 시스템에서 거래를 요청하고 응답이 올 때까지 대기(Request-Reply)하는 방식이다.",
	            "answer": "동기"
	        }
	    },
	    {
	        "id": 447513,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "인터페이스 통신 유형 중 (     )는 시스템에서 거래를 요청하고 다른 작업을 수행하다 응답이 오면 처리하는 방식(Send-Receive, Send-Receive-Acknowledge, Publish-Subscribe)이다.",
	            "answer": "비동기"
	        }
	    },
	    {
	        "id": 447514,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "인터페이스 방법을 명세화 할 때 필요한 시스템 연계 기술 중 서버는 통신을 위해 포트를 할당하고 클라이언트는 통신을 요청해 클라이언트와 연결하여 통신하는 네트워크 기술은?",
	            "answer": "소켓(Socket)"
	        }
	    },
	    {
	        "id": 447515,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "시스템 연계 기술 중 네트워크의 정보를 표준화된 서비스 형태로 만들어 공유하는 기술로, WSDL, UDDI, SOAP 프로토콜을 이용하여 연계하는 기술은?",
	            "answer": "웹 서비스<br/>(Web Service)"
	        }
	    },
	    {
	        "id": 447516,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명의 괄호에 공통적으로 들어갈 용어는?",
	            "questionPassage": "시스템 연계 기술 중 (     )는 데이터베이스(DB)에서 제공하는 (     ) 객체를 이용하는 방식이다.",
	            "answer": "DB Link"
	        }
	    },
	    {
	        "id": 447517,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "시스템 연계 기술 중 (     )는 송신 시스템의 데이터베이스(DB)에서 데이터를 읽어와 제공하는 애플리케이션 프로그래밍 인터페이스 프로그램이다.",
	            "answer": "API/Open API"
	        }
	    },
	    {
	        "id": 447518,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "시스템 연계 기술 중 (     )는 EAI 서버와 송·수신 시스템에 설치되는 클라이언트(Client)를 이용하는 방식이다.",
	            "answer": "연계 솔루션"
	        }
	    },
	    {
	        "id": 447519,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "인터페이스 처리 유형은 송·수신 데이터를 어떤 형태로 처리할 것인지에 대한 방식을 의미하며, 업무의 성격과 송·수신 데이터 전송량을 고려하여 (  ①  ) 방식, (  ②  ) 방식, (  ③  ) 방식 등으로 구분한다.",
	            "answer": "① 실시간<br/>② 지연 처리<br/>③ 배치"
	        }
	    },
	    {
	        "id": 447520,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "인터페이스 처리 유형 중 (     ) 방식은 사용자가 요청한 내용을 바로 처리해야 할 때 사용하는 방식이다.",
	            "answer": "실시간"
	        }
	    },
	    {
	        "id": 447521,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "인터페이스 처리 유형 중 (     ) 방식은 데이터를 매건 단위로 처리할 경우 비용이 많이 발생할 때 사용하는 방식이다.",
	            "answer": "지연 처리"
	        }
	    },
	    {
	        "id": 447522,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "인터페이스 처리 유형 중 (     ) 방식은 대량의 데이터를 처리할 때 사용하는 방식이다.",
	            "answer": "배치"
	        }
	    },
	    {
	        "id": 447523,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "(     )는 클라이언트와 서버 간의 통신을 담당하는 시스템 소프트웨어로, 표준화된 인터페이스를 제공함으로써 시스템 간의 데이터 교환에 일관성을 보장하며, 통신 제공 방법이나 기능에 따라 DB, RPC, MOM, TPMonitor, ORB, WAS 등으로 구분한다.",
	            "answer": "미들웨어<br/>(Middleware)"
	        }
	    },
	    {
	        "id": 447524,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "트랜잭션이 올바르게 처리되고 있는지 데이터를 감시하고 제어하는 역할을 하는 미들웨어는?",
	            "answer": "TP-Monitor<br/>(Transaction Processing Monitor, <br/>트랜잭션 처리 모니터)"
	        }
	    },
	    {
	        "id": 447525,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "분산 프로그램 객체를 생성, 배포, 관리하기 위한 규격인 코바(CORBA)의 표준 스펙을 구현한 객체 지향 미들웨어는?",
	            "answer": "ORB<br/>(Object Request Broker, <br/>객체 요청 브로커)"
	        }
	    },
	    {
	        "id": 447526,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "메시지 기반의 비동기형 메시지를 전달하는 방식으로, 온라인 업무보다는 이기종 분산 데이터 시스템의 데이터 동기를 위해 많이 사용되는 미들웨어는?",
	            "answer": "MOM<br/>(Message Oriented Middlware,<br/>메시지 지향 미들웨어)"
	        }
	    },
	    {
	        "id": 447527,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "정적인 콘텐츠를 처리하는 웹 서버와 달리 사용자의 요구에 따라 변하는 동적인 콘텐츠를 처리하기 위해 사용되며, 클라이언트/서버 환경보다는 웹 환경을 구현하기 위한 미들웨어는?",
	            "answer": "WAS<br/>(Web Application Server,<br/>웹 애플리케이션 서버)"
	        }
	    },
	    {
	        "id": 447528,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "데이터베이스 벤더에서 제공하는 클라이언트에서 원격의 데이터베이스와 연결하는 미들웨어는?",
	            "answer": "DB"
	        }
	    },
	    {
	        "id": 447529,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "응용 프로그램의 프로시저를 사용하여 원격 프로시저를 마치 로컬 프로시저처럼 호출하는 미들웨어는?",
	            "answer": "RPC(원격 프로시저 호출)"
	        }
	    },
	    {
	        "id": 447530,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "각 시스템의 구성 요소를 표현한 다이어그램을 통해 만든 설계서로, 시스템을 구성하는 주요 구성 요소 간 트랜잭션을 보여 주고 이를 통해 시스템에서 인터페이스는 어디에 속하고 어떤 트랜잭션이 인터페이스를 통해 상호 교환되는지 확인할 수 있는 설계서는?",
	            "answer": "정적·동적 모형을 통한 인터페이스 설계서"
	        }
	    },
	    {
	        "id": 447531,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 EAI의 구축 유형은?",
	            "questionPassage": "ㆍ가장 기본적인 애플리케이션 통합 방식으로, 애플리케이션을 1:1로 연결한다.<br/>ㆍ변경 및 재사용이 어렵다.",
	            "answer": "Point-to-Point"
	        }
	    },
	    {
	        "id": 447532,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 EAI의 구축 유형은?",
	            "questionPassage": "ㆍ단일 접점인 허브 시스템을 통해 데이터를 전송하는 중앙 집중형 방식이다.<br/>ㆍ확장 및 유지 보수가 용이하다.<br/>ㆍ허브 장애 발생 시 시스템 전체에 영향을 미친다.",
	            "answer": "Hub & Spoke"
	        }
	    },
	    {
	        "id": 447533,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 EAI의 구축 유형은?",
	            "questionPassage": "ㆍHub & Spoke와 Message Bus의 혼합 방식이다.<br/>ㆍ필요한 경우 한 가지 방식으로 EAI 구현이 가능하다.<br/>ㆍ데이터 병목 현상을 최소화할 수 있다.",
	            "answer": "Hybrid"
	        }
	    },
	    {
	        "id": 447534,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "애플리케이션 사이에 미들웨어(Middleware)를 두어 처리하는 방식으로, 확장성이 뛰어나며 대용량 처리가 가능한 EAI 구축 유형은?",
	            "answer": "Message Bus"
	        }
	    },
	    {
	        "id": 447535,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "애플리케이션 간 연계, 데이터 변환, 웹 서비스 지원 등 표준 기반의 인터페이스를 제공하는 솔루션으로, 특정 서비스에 국한되지 않고 범용적으로 사용하기 위하여 애플리케이션과의 결합도(Coupling)를 약하게(Loosely) 유지하는 모듈 연계 방식은?",
	            "answer": "ESB<br/>(Enterprise Service Bus)"
	        }
	    },
	    {
	        "id": 447536,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "서비스 지향 아키텍처(SOA) 개념을 실현하는 대표적인 모듈 연계 방법으로, 네트워크의 정보를 표준화된 서비스 형태로 만들어 공유하는 기술은?",
	            "answer": "웹 서비스(Web Service)"
	        }
	    },
	    {
	        "id": 447537,
	        "templateId": 9,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★☆☆☆☆",
	            "question": "다음 보기에서 내·외부 모듈 간 인터페이스 데이터 표준을 확인하는데 사용되는 정보 두 가지를 고르면?",
	            "questionPassage": [
	                "ⓐ 데이터 인터페이스 ",
	                "ⓑ 인터페이스 명세 ",
	                "ⓒ 인터페이스 목록 ",
	                "ⓓ 인터페이스 기능"
	            ],
	            "answer": [
	                "1",
	                "4"
	            ]
	        }
	    },
	    {
	        "id": 447538,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 인터페이스를 위해 인터페이스가 되어야 할 범위의 데이터들의 형식과 표준을 정의하는 것으로, 기존에 있던 데이터 중 공통의 영역을 추출하여 정의하는 경우도 있고, 인터페이스를 위해 한쪽의 데이터를 변환하여 정의하는 경우도 있다.",
	            "answer": "인터페이스 데이터 표준"
	        }
	    },
	    {
	        "id": 447539,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "모듈 세부 설계서 중 (     )는 컴포넌트의 개요 및 내부 클래스의 동작, 인터페이스를 통해 외부와 통신하는 명세 등을 정의한 것이다.",
	            "answer": "컴포넌트 명세서"
	        }
	    },
	    {
	        "id": 447540,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "모듈 세부 설계서 중 (     )는 컴포넌트 명세서의 항목 중 인터페이스 클래스의 세부 조건 및 기능 등을 정의한 것이다.",
	            "answer": "인터페이스 명세서"
	        }
	    },
	    {
	        "id": 447541,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명의 괄호에 공통적으로 들어갈 용어는?",
	            "questionPassage": "데이터 통신을 이용한 인터페이스 구현은 애플리케이션 영역에서 데이터 포맷을 인터페이스 대상으로 전송하면 이를 수신 측에서 (        )하여 해석하는 방식이다. (        )은 주어진 문장이 정의된 문법 구조에 따라 완전한 문장으로 사용될 수 있는가를 확인하는 작업을 말한다.",
	            "answer": "파싱(Parsing)"
	        }
	    },
	    {
	        "id": 447542,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "클라이언트와 서버 간 자바스크립트 및 XML을 비동기 방식으로 처리하며, 전체 페이지를 새로 고치지 않고도 웹페이지 일부 영역만을 업데이트할 수 있도록 하는 기술을 의미하는 용어는?",
	            "answer": "AJAX<br/>(Asynchronous JavaScript and XML)"
	        }
	    },
	    {
	        "id": 447543,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "(     )은 속성-값 쌍(Attribute-Value Pairs)으로 이루어진 데이터 객체를 전달하기 위해 사람이 읽을 수 있는 텍스트를 사용하는 개방형 표준 포맷이다. 비동기 처리에 사용되는 AJAX에서 XML을 대체하여 사용되고 있다.",
	            "answer": "JSON<br/>(JavaScript Object Notation)"
	        }
	    },
	    {
	        "id": 447544,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "인터페이스 예외 처리는 인터페이스를 구현하고 동작하는 과정에서 기능상 예외 상황이 발생했을 때 이를 처리하는 절차로, 데이터 통신을 이용한 인터페이스 예외 처리와 인터페이스 (     )를 이용한 예외 처리가 있다.",
	            "answer": "엔티티(Entity)"
	        }
	    },
	    {
	        "id": 447545,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "네트워크 트래픽에 대해 IP(Internet Protocol) 계층에서 IP 패킷 단위의 데이터 변조 방지 및 은닉 기능을 제공하는 네트워크 계층에서의 보안 통신 규약은?",
	            "answer": "Ipsec<br/>(IP Security)"
	        }
	    },
	    {
	        "id": 447546,
	        "templateId": 9,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★★★",
	            "question": "다음 보기에서 데이터 무결성 검사 도구를 모두 고르면?",
	            "questionPassage": [
	                "ⓐ trace",
	                "ⓑ tripwire",
	                "ⓒ AIDE",
	                "ⓓ udpdump"
	            ],
	            "answer": [
	                "2",
	                "3"
	            ]
	        }
	    },
	    {
	        "id": 447547,
	        "templateId": 9,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★☆☆",
	            "question": "다음 보기에서 데이터 무결성 검사 도구를 고르면?",
	            "questionPassage": [
	                "ⓐ udpdump",
	                "ⓑ samhain",
	                "ⓒ cron",
	                "ⓓ trace"
	            ],
	            "answer": [
	                "2"
	            ]
	        }
	    },
	    {
	        "id": 447548,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "TCP/IP 계층과 애플리케이션 계층 사이에서 인증(Authentication), 암호화(Encryption), 무결성(Integrity)을 보장하는 보안 통신 규약은?",
	            "answer": "SSL<br/>(Secure Sockets Layer)"
	        }
	    },
	    {
	        "id": 447549,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "인터페이스 보안 기능은 일반적으로 (     ), (     ), (     ) 영역에 적용한다.",
	            "answer": "네트워크, <br/>애플리케이션, <br/>데이터베이스"
	        }
	    },
	    {
	        "id": 447550,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "인터페이스 보안 기능에서 인터페이스 송·수신 간 스니핑 등을 이용한 데이터 탈취 및 변조 위협을 방지하기 위해 네트워크 트래픽에 대한 암호화를 설정하는 영역은?",
	            "answer": "네트워크 영역"
	        }
	    },
	    {
	        "id": 447551,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "인터페이스 보안 기능에서 소프트웨어 개발 보안 가이드를 참조하여 애플리케이션 코드 상의 보안 취약점을 보완하는 방향으로 보안 기능을 적용하는 영역은?",
	            "answer": "애플리케이션 영역"
	        }
	    },
	    {
	        "id": 447552,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "인터페이스 보안 기능에서 데이터베이스, 스키마, 엔티티의 접근 권한과 프로시저, 트리거 등 데이터베이스 동작 객체의 보안 취약점에 보안 기능을 적용하는 영역은?",
	            "answer": "데이터베이스 영역"
	        }
	    },
	    {
	        "id": 447553,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "인터페이스 구현 검증 도구 중 서비스 호출, 컴포넌트 재사용 등 다양한 환경을 지원하는 테스트 프레임워크로, 각 테스트 대상 분산 환경에 데몬을 사용하여 테스트 대상 프로그램을 테스트하고, 이를 통합하여 자동화하는 검증 도구는?",
	            "answer": "STAF"
	        }
	    },
	    {
	        "id": 447554,
	        "templateId": 9,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★★★",
	            "question": "다음 보기에서 인터페이스 구현 검증 도구를 모두 고르면?",
	            "questionPassage": [
	                "ⓐ ESB ",
	                "ⓑ RPC ",
	                "ⓒ xUnit ",
	                "ⓓ STAF ",
	                "ⓔ JSON ",
	                "ⓕ NTAF "
	            ],
	            "answer": [
	                "3",
	                "4",
	                "6"
	            ]
	        }
	    },
	    {
	        "id": 447555,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "애플리케이션의 성능 관리를 위해 접속자, 자원 현황, 트랜잭션 수행 내역, 장애 진단 등 다양한 모니터링 기능을 제공하며, Nagios, Zabbix, Cacti 등의 리소스 방식과 VisualVM, 제니퍼, 스카우터 등의 엔드투엔드(End-to-End) 방식이 있는 인터페이스 구현 감시 도구는?",
	            "answer": "APM<br/>(Application Performance Management/Monitoring)"
	        }
	    },
	    {
	        "id": 447556,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "인터페이스 구현 검증 도구 중 FitNesse의 장점인 협업 기능과 STAF의 장점인 재사용 및 확장성을 통합한 NHN(Naver)의 테스트 자동화 프레임워크는?",
	            "answer": "NTAF"
	        }
	    },
	    {
	        "id": 447557,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "인터페이스 구현 검증 도구 중 Java, C++, .Net 등 다양한 언어를 지원하는 단위 테스트 프레임워크는?",
	            "answer": "xUnit"
	        }
	    },
	    {
	        "id": 447558,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "인터페이스 구현 검증 도구 중 웹 기반 테스트 케이스 설계, 실행, 결과 확인 등을 지원하는 테스트 프레임워크는?",
	            "answer": "FitNesse"
	        }
	    },
	    {
	        "id": 447559,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "인터페이스 구현",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "인터페이스 구현 검증 도구 중 다양한 브라우저 및 개발 언어를 지원하는 웹 애플리케이션 테스트 프레임워크는?",
	            "answer": "Selenium"
	        }
	    },
	    {
	        "id": 447560,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "UI(User Interface)의 설계 원칙 중 직관성에 대해 간략히 서술하면?",
	            "answer": "직관성은 <div class=\"border-block\">누구나 쉽게 이해하고 사용할 수 있어야 한다는 설계 원칙</div>이다."
	        }
	    },
	    {
	        "id": 447561,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 사용자 인터페이스(UI)의 기본 원칙은?",
	            "questionPassage": "누구나 쉽게 이해하고 사용할 수 있어야 한다.",
	            "answer": "직관성"
	        }
	    },
	    {
	        "id": 447562,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 사용자 인터페이스(UI)의 기본 원칙은?",
	            "questionPassage": "사용자의 목적을 정확하고 완벽하게 달성해야 한다.",
	            "answer": "유효성"
	        }
	    },
	    {
	        "id": 447563,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 사용자 인터페이스(UI)의 기본 원칙은?",
	            "questionPassage": "누구나 쉽게 배우고 익힐 수 있어야 한다.",
	            "answer": "학습성"
	        }
	    },
	    {
	        "id": 447564,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 사용자 인터페이스(UI)의 기본 원칙은?",
	            "questionPassage": "사용자의 요구사항을 최대한 수용하고 실수를 최소화해야 한다.",
	            "answer": "유연성"
	        }
	    },
	    {
	        "id": 447565,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 사용자와 시스템 간의 상호작용이 원활하게 이뤄지도록 도와주는 장치나 소프트웨어로, 초기에는 단순히 사용자와 컴퓨터 간의 상호작용에만 국한되었지만 점차 사용자가 수행할 작업을 구체화시키는 기능 위주로 변경되었고, 최근에는 정보 내용을 전달하기 위한 표현 방법으로 변경되었다.",
	            "answer": "사용자 인터페이스<br/>(UI; User Interface)"
	        }
	    },
	    {
	        "id": 447566,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "명령과 출력이 텍스트 형태로 이뤄지는 사용자 인터페이스(UI)는?",
	            "answer": "CLI<br/>(Command Line Interface)"
	        }
	    },
	    {
	        "id": 447567,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "아이콘이나 메뉴를 마우스로 선택하여 작업을 수행하는 그래픽 환경의 사용자 인터페이스(UI)는?",
	            "answer": "GUI<br/>(Graphical User Interface)"
	        }
	    },
	    {
	        "id": 447568,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "사용자의 말이나 행동으로 기기를 조작하는 사용자 인터페이스(UI)는?",
	            "answer": "NUI<br/>(Natural User Interface)"
	        }
	    },
	    {
	        "id": 447569,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음에 제시된 개발자나 디자이너가 UI 개발 시 기준이 되는 UI 스타일 가이드 작성 순서를 차례대로 나열하면?",
	            "questionPassage": "ⓐ 구동 환경 정의<br/>ⓑ 네비게이션 정의<br/>ⓒ 레이아웃 정의<br/>ⓓ 구성 요소 정의<br/>ⓔ 기능 정의",
	            "answer": "ⓐ → ⓒ →ⓑ → ⓔ → ⓓ"
	        }
	    },
	    {
	        "id": 447570,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 데이터를 테이블 형식으로 쉽게 표시할 수 있도록 해주는 도구로, 이를 이용하여 화면에 표시할 데이터를 정의한다.",
	            "answer": "그리드"
	        }
	    },
	    {
	        "id": 447571,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 사용자가 사이트에서 원하는 정보를 빠르게 찾을 수 있도록 안내하는 것으로, 위계적인 구조 외에도 사이트 맵, 검색 창, 링크 등 다양한 경로와 방법을 통해 원하는 정보를 쉽고 빠르게 접근할 수 있도록 제공한다.",
	            "answer": "네비게이션<br/>(Navigation)"
	        }
	    },
	    {
	        "id": 447572,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "기획 단계의 초기에 제작하는 것으로, 페이지에 대한 개략적인 레이아웃이나 UI 요소 등에 대한 뼈대를 설계하며, 각 페이지의 영역 구분, 콘텐츠, 텍스트 배치 등을 화면 단위로 설계하는 UI 설계 도구는?",
	            "answer": "와이어프레임<br/>(Wireframe)"
	        }
	    },
	    {
	        "id": 447573,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "UI를 설계할 때 와이어프레임에 콘텐츠에 대한 설명과 페이지 간 이동 흐름 등을 추가한 문서로, 화면 설계도이며 구체적인 작업 지침서 역할을 하는 UI 설계 도구는?",
	            "answer": "스토리보드<br/>(Story Board)"
	        }
	    },
	    {
	        "id": 447574,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "UI 설계 도구 중 (     )은 사용자 요구사항을 기반으로 실제 동작하는 것처럼 만든 동적인 형태의 모형으로, 사용자의 요구사항을 개발자가 맞게 해석했는지 검증하기 위한 것이다. ",
	            "answer": "프로토타입<br/>(Prototype)"
	        }
	    },
	    {
	        "id": 447575,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "UI 설계 도구 중 (     )은 와이어프레임보다 좀 더 실제 화면과 유사하게 만든 정적인 형태의 모형으로 시각적으로만 구성 요소를 배치하는 것으로 실제로 구현되지는 않는다.",
	            "answer": "목업(Mockup)"
	        }
	    },
	    {
	        "id": 447576,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "UI 설계 도구 중 (     )는 사용자의 요구사항을 기능 단위로 표현하는 것으로 사용자의 요구사항을 빠르게 파악함으로써 프로젝트의 초기에 시스템의 기능적인 요구를 결정하고 그 결과를 문서화할 수 있다.",
	            "answer": "유스케이스(Use Case)"
	        }
	    },
	    {
	        "id": 447577,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "UI 요구사항을 작성할 때는 여러 경로를 통해 수집된 사용자들의 요구사항을 검토하고 분석하여 UI 개발 목적에 맞게 작성하되, 반드시 (     ) 중심으로 작성해야 한다.",
	            "answer": "실사용자"
	        }
	    },
	    {
	        "id": 447578,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 용어는?",
	            "questionPassage": "ㆍ사용자의 요구사항을 도출하기 위해 작성하는 것으로, 사용자가 목표를 달성하기 위해 수행하는 방법을 순차적으로 묘사한 것이다.<br/>ㆍ요구사항 정의에 사용되는 초기 시나리오로, 사용자가 주로 사용하는 기능 위주로 작성해야 한다.",
	            "answer": "정황 시나리오"
	        }
	    },
	    {
	        "id": 447579,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 UI 요구사항 요소는?",
	            "questionPassage": "사용자가 요구하는 모델과 객체들의 주요 특성을 기반으로 하여 데이터 객체들을 정리한다.",
	            "answer": "데이터 요구"
	        }
	    },
	    {
	        "id": 447580,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 UI 요구사항 요소는?",
	            "questionPassage": "사용자의 목적 달성을 위해 무엇을 실행해야 하는지를 동사형으로 설명한다.",
	            "answer": "기능 요구"
	        }
	    },
	    {
	        "id": 447581,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 UI 요구사항 요소는?",
	            "questionPassage": "데이터 및 기능 요구 외에 제품의 품질, 서비스, 여기에 감성적인 품질 등을 고려하여 작성한다.",
	            "answer": "제품/서비스의 품질"
	        }
	    },
	    {
	        "id": 447582,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 UI 요구사항 요소는?",
	            "questionPassage": "제품 완료 데드라인, 전체 개발 및 제작에 필요한 비용, 시스템 준수에 필요한 규제가 포함된다.",
	            "answer": "제약 사항"
	        }
	    },
	    {
	        "id": 447583,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "ISO/IEC 9126의 소프트웨어 품질 특성 중 (     )은 소프트웨어가 사용자의 요구사항을 정확하게 만족하는 기능을 제공하는지 여부를 나타내며, 하위 특성에는 적절성, 정밀성, 상호 운용성, 보안성, 준수성이 있다.",
	            "answer": "기능성<br/>(Functionality)"
	        }
	    },
	    {
	        "id": 447584,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 품질 관련 표준 중 패키지 소프트웨어의 일반적인 제품 품질 요구사항 및 테스트를 위한 국제 표준은?",
	            "answer": "ISO/IEC 12119"
	        }
	    },
	    {
	        "id": 447585,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "ISO/IEC 9126의 소프트웨어 품질 특성 중 (     )은 주어진 시간동안 주어진 기능을 오류 없이 수행할 수 있는 정도를 나타내며, 하위 특성에는 성숙성, 고장 허용성, 회복성이 있다.",
	            "answer": "신뢰성<br/>(Reliability)"
	        }
	    },
	    {
	        "id": 447586,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 품질 특성 중 사용자와 컴퓨터 사이에 발생하는 어떠한 행위에 대하여 사용자가 정확하게 이해하고 사용하며, 향후 다시 사용하고 싶은 정도를 나타내는 특성은?",
	            "answer": "사용성<br/>(Usability)"
	        }
	    },
	    {
	        "id": 447587,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 품질 특성 중 사용자가 요구하는 기능을 얼마나 빠르게 처리할 수 있는지 정도를 나타내는 특성은?",
	            "answer": "효율성<br/>(Efficiency)"
	        }
	    },
	    {
	        "id": 447588,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 품질 특성 중 (     )은 환경의 변화 또는 새로운 요구사항이 발생했을 때 소프트웨어를 개선하거나 확장할 수 있는 정도를 나타내며, 하위 특성에는 분석성, 변경성, 안정성, 시험성이 있다.",
	            "answer": "유지 보수성<br/>(Maintainability)"
	        }
	    },
	    {
	        "id": 447589,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 품질 특성 중 (     )은 소프트웨어가 다른 환경에서도 얼마나 쉽게 적용할 수 있는지 정도를 나타내며, 하위 특성에는 적용성, 설치성, 대체성, 공존성이 있다.",
	            "answer": "이식성<br/>(Portability)"
	        }
	    },
	    {
	        "id": 447590,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 품질 관련 표준 중 ISO/IEC 9126에 호환성과 보안성을 강화하여 개정한 소프트웨어 제품에 대한 국제 표준은?",
	            "answer": "ISO/IEC 25010"
	        }
	    },
	    {
	        "id": 447591,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 품질 관련 표준 중 소프트웨어 품질의 측정과 평가에 필요 절차를 규정한 표준은?",
	            "answer": "ISO/IEC 14598"
	        }
	    },
	    {
	        "id": 447592,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "UI 화면 설계 중 흐름 설계에 대한 다음 내용을 작성 순서대로 나열하면?",
	            "questionPassage": "ⓐ 화면에 입력할 요소 화인<br/>ⓑ 기능을 토대로 텍스트/콤보/라디오/체크 박스 등의 확인 및 규칙 정의<br/>ⓒ 화면에 표현할 기능 작성<br/>ⓓ UI 유스케이스 설계",
	            "answer": "ⓒ → ⓐ → ⓓ → ⓑ"
	        }
	    },
	    {
	        "id": 447593,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 화면의 정보를 한눈에 파악하기 위한 시각적인 콘텐츠 모형으로, 일반적으로 테이블 형태로 되어 있고, 위에서부터 아래로 내려가며 정보를 찾을 수 있는 계층형으로 되어 있는 것이 보통이다.",
	            "answer": "사이트 맵<br/>(Site Map)"
	        }
	    },
	    {
	        "id": 447594,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "UI 화면 설계 중 상세 설계에 대한 내용을 작성 순서대로 나열하면?",
	            "questionPassage": "ⓐ UI 구조 설계<br/>ⓑ 화면 설계<br/>ⓒ 요구사항 확인<br/>ⓓ UI 설계서 표지 및 개정 이력 작성<br/>ⓔ 메뉴 구조 설계",
	            "answer": "ⓒ → ⓓ → ⓐ → ⓔ → ⓑ"
	        }
	    },
	    {
	        "id": 447595,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 UI 시나리오 문서의 요건은?",
	            "questionPassage": "누락되지 않도록 최대한 상세하게 기술해야 한다.",
	            "answer": "완전성<br/>(Complete)"
	        }
	    },
	    {
	        "id": 447596,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 UI 시나리오 문서의 요건은?",
	            "questionPassage": "서비스 목표, 시스템 및 사용자의 요구사항, UI 스타일 등이 모두 일관성을 유지해야 한다.",
	            "answer": "일관성<br/>(Consistent)"
	        }
	    },
	    {
	        "id": 447597,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 UI 시나리오 문서의 요건은?",
	            "questionPassage": "누구나 쉽게 이해할 수 있도록 설명한다.",
	            "answer": "이해성<br/>(Understandable)"
	        }
	    },
	    {
	        "id": 447598,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 UI 시나리오 문서의 요건은?",
	            "questionPassage": "표준화된 템플릿 등을 활용하여 문서를 쉽게 읽을 수 있도록 해야 한다.",
	            "answer": "가독성<br/>(Readable)"
	        }
	    },
	    {
	        "id": 447599,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 UI 시나리오 문서의 요건은?",
	            "questionPassage": "시나리오의 수정이나 개선이 쉬워야 한다.",
	            "answer": "수정 용이성<br/>(Modifiable)"
	        }
	    },
	    {
	        "id": 447600,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 UI 시나리오 문서의 요건은?",
	            "questionPassage": "변경 사항은 언제, 어떤 부분이, 왜 발생했는지 쉽게 추적할 수 있어야 한다.",
	            "answer": "추적 용이성<br/>(Traceable)"
	        }
	    },
	    {
	        "id": 447601,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "사람과 컴퓨터 시스템 간의 상호작용을 연구하고 설계하는 학문으로, 시스템을 사용하는데 있어 최적의 사용자 경험(UX)을 만드는 것을 목표로 하는 학문은?",
	            "answer": "HCI<br/>(Human Computer Interaction or Interface)"
	        }
	    },
	    {
	        "id": 447602,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "화면 설계",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(      )는 사용자가 시스템이나 서비스를 이용하면서 느끼고 생각하게 되는 총체적인 경험으로, 단순히 기능이나 절차상의 만족뿐만 아니라 사용자가 참여, 사용, 관찰하고, 상호 교감을 통해서 알 수 있는 가치 있는 경험을 말한다.",
	            "answer": "UX<br/>(User Experience)"
	        }
	    },
	    {
	        "id": 447603,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "애플리케이션 테스트에서 사용되는 살충제 패러독스(Pesticide Paradox)의 개념을 간략히 서술하면?",
	            "answer": "살충제 페러독스는 <div class=\"border-block\">동일한 테스트 케이스로 동일한 테스트를 반복하면 더 이상 결함이 발견되지 않는 현상</div>을 의미한다."
	        }
	    },
	    {
	        "id": 447604,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "소프트웨어 테스트에서 오류의 80%는 전체 모듈의 20% 내에서 발견된다는 법칙은?",
	            "answer": "파레토 법칙<br/>(Pareto Principle)"
	        }
	    },
	    {
	        "id": 447605,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어의 결함을 모두 제거해도 사용자의 요구사항을 만족시키지 못하면 해당 소프트웨어는 품질이 높다고 말할 수 없다는 것을 의미하는 애플리케이션 테스트의 기본 원칙은?",
	            "answer": "오류-부재의 궤변<br/>(Absence of Errors Fallacy)"
	        }
	    },
	    {
	        "id": 447606,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "애플리케이션 테스트에서 (  ①  )은 개발된 소프트웨어가 사용자의 입장에서 고객의 요구사항에 맞게 구현되었는지, (  ②  )은 개발된 소프트웨어가 개발자의 입장에서 명세서에 맞게 만들어졌는지를 보는 것이다.",
	            "answer": "① 확인(Validation)<br/>② 검증(Verification)"
	        }
	    },
	    {
	        "id": 447607,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "애플리케이션을 실행하지 않고, 소스 코드에 대한 코딩 표준, 코딩 스타일, 코드 복잡도 및 남은 결함을 발견하기 위하여 사용하는 테스트는?",
	            "answer": "정적 테스트"
	        }
	    },
	    {
	        "id": 447608,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "프로그램을 실행하여 오류를 찾는 테스트로 소프트웨어 개발의 모든 단계에서 수행하는 테스트는?",
	            "answer": "동적 테스트"
	        }
	    },
	    {
	        "id": 447609,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 테스트는?",
	            "questionPassage": "ㆍ사용자의 요구사항을 빠짐없이 테스트 케이스로 만들어 구현하고 있는지 확인하는 테스트이다.<br/>ㆍ종류에는 동등 분할, 경계 값 분석 등이 있다.",
	            "answer": "명세 기반 테스트"
	        }
	    },
	    {
	        "id": 447610,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 테스트는?",
	            "questionPassage": "ㆍ소프트웨어 내부의 논리 흐름에 따라 테스트 케이스를 작성<br/>하고 확인하는 테스트이다.<br/>ㆍ종류에는 구문 기반, 결정 기반, 조건 기반 등이 있다.",
	            "answer": "구조 기반 테스트"
	        }
	    },
	    {
	        "id": 447611,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 테스트는?",
	            "questionPassage": "ㆍ유사 소프트웨어나 기술 등에 대한 테스터의 경험을 기반으<br/>로 수행하는 테스트이다.<br/>ㆍ사용자의 요구사항에 대한 명세가 불충분하거나 테스트 시간에 제약이 있는 경우 수행하면 효과적이다.<br/>ㆍ종류에는 에러 추정, 체크 리스트, 탐색적 테스팅 등이 있다.",
	            "answer": "경험 기반 테스트"
	        }
	    },
	    {
	        "id": 447612,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "애플리케이션 테스트 중 확인(Validation) 테스트의 개념을 간략히 서술하면?",
	            "answer": "확인 테스트는 <div class=\"border-block\">사용자의 시각에서 생산된 제품의 결과를 테스트하는 것</div>이다."
	        }
	    },
	    {
	        "id": 447613,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 테스트는?",
	            "questionPassage": "ㆍ개발자의 시각에서 제품의 생산 과정을 테스트하는 것이다.<br/>ㆍ제품이 명세서대로 완성됐는지를 테스트한다.",
	            "answer": "검증(Verification)<br/>테스트"
	        }
	    },
	    {
	        "id": 447614,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "애플리케이션 테스트 중 시스템에 여러 가지 결함을 주어 실패하도록 한 후 올바르게 복구되는지를 확인하는 테스트는?",
	            "answer": "회복 테스트<br/>(Recovery Test)"
	        }
	    },
	    {
	        "id": 447615,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "애플리케이션 테스트 중 소프트웨어의 실시간 성능이나 전체적인 효율성을 진단하는 테스트로, 소프트웨어의 응답 시간, 처리량 등을 확인하는 테스트는?",
	            "questionPassage": "",
	            "answer": "성능 테스트<br/>(Performance Test)",
	            "solution": "",
	            "solutionPassage": ""
	        }
	    },
	    {
	        "id": 447616,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 테스트의 목적은 오류를 찾아내는 데 있다. 테스트 종류 중 개발자의 입장에서 소프트웨어가 요구사항에 맞는지를 추적하는데 중점을 두는 테스트는?",
	            "answer": "검증 테스트<br/>(Verification Test)"
	        }
	    },
	    {
	        "id": 447617,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "시스템에 과도한 정보량이나 빈도 등을 부과하여 과부하 시에도 소프트웨어가 정상적으로 실행되는지를 확인하는 애플리케이션 테스트는?",
	            "answer": "강도 테스트<br/>(Stress Test)"
	        }
	    },
	    {
	        "id": 447618,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어의 변경 또는 수정된 코드에 새로운 결함이 없음을 확인하는 애플리케이션 테스트는?",
	            "answer": "회귀 테스트<br/>(Regression Test)"
	        }
	    },
	    {
	        "id": 447619,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "변경된 소프트웨어와 기존 소프트웨어에 동일한 데이터를 입력하여 결과를 비교하는 애플리케이션 테스트는?",
	            "answer": "병행 테스트<br/>(Parallel Test)"
	        }
	    },
	    {
	        "id": 447620,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "시스템에 설치된 시스템 보호 도구가 불법적인 침입으로부터 시스템을 보호할 수 있는지를 확인하는 테스트는?",
	            "answer": "안전 테스트<br/>(Security Test)"
	        }
	    },
	    {
	        "id": 447621,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 내부의 논리적인 경로, 소스 코드의 복잡도 등을 평가하는 테스트는?",
	            "answer": "구조 테스트<br/>(Structure Test)"
	        }
	    },
	    {
	        "id": 447622,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "다음 화이트박스 테스트의 프로그램 제어 흐름에서 순서도를 참고하여 분기 커버리지로 구성할 테스트 케이스를 작성하면?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0008.jpg\"/>",
	            "answer": "① → ② → ③ → ④ → ⑤ → ⑥ → ⑦<br/>① → ② → ④ → ⑤ → ⑥ → ①",
	            "solution": "ㆍ화이트박스 테스트의 검증 기준(Coverage) 중 분기 검증 기준(Branch Coverage)은 소스 코드의 모든 조건문이 한 번 이상 수행되도록 테스트 케이스를 설계하는 방법입니다.<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0008.jpg\"/><br/>ㆍ위의 순서도를 기반으로 한 테스트 케이스는 ①번에서 시작한 프로세스가 조건문인 ②번과 ⑥번에 도달했을 때 반드시 한 번은 Yes로 한 번은 No로 진행되도록 설계되어야 합니다. 또한 문제지의 답란에 7칸의 괄호와 6칸의 괄호가 제시되어 있으므로, 두 번의 프로세스로 모든 코드가 수행되도록 설계해야 합니다.<br/>ㆍ7칸 괄호 : ① → ② → ③ → ④ → ⑤ → ⑥ → ⑦<br/>ㆍ6칸 괄호 : ① → ② → ④ → ⑤ → ⑥ → ①<br/>※ 7칸 괄호에 맞는 테스트 케이스를 설계할 때 ②번 조건문에서 Yes로, ⑥번 조건문에서 No로 진행되도록 설계했으므로, 6칸 괄호에 맞는 테스트 케이스는 ②번 조건문에서 No로, ⑥번 조건문에서 Yes로 진행되도록 설계해야 합니다."
	        }
	    },
	    {
	        "id": 447623,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "화이트박스 테스트의 검증 기준 중 소스 코드의 모든 구문이 한 번 이상 수행되도록 테스트 케이스를 설계하는 기준은?",
	            "answer": "문장 검증 기준<br/>(Statement Coverage)"
	        }
	    },
	    {
	        "id": 447624,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "화이트박스 테스트의 검증 기준 중 소스 코드의 모든 조건문에 대해 조건이 True인 경우와 False인 경우가 한 번 이상 수행되도록 테스트 케이스를 설계하는 기준은?",
	            "questionPassage": "",
	            "answer": "분기 검증 기준<br/>(Condition Coverage)",
	            "solution": "",
	            "solutionPassage": ""
	        }
	    },
	    {
	        "id": 447625,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어가 수행할 특정 기능을 알기 위해서 각 기능이 완전히 작동되는 것을 입증하는 테스트로, 동치 클래스 분해 및 경계값 분석을 이용하는 테스트 기법은?",
	            "answer": "블랙박스 테스트<br/>(Black Box Test)"
	        }
	    },
	    {
	        "id": 447626,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "다음과 같이 \\<평가 점수표\\>를 미리 정해 놓은 후 각 영역에 해당하는 입력값을 넣고, 예상되는 출력값이 나오는지 실제 값과 비교하는 명세 기반 테스트 기법은?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0009.jpg\"/><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0010.jpg\"/>",
	            "answer": "동치 분할 검사<br/>(Equivalence Partitioning Testing)"
	        }
	    },
	    {
	        "id": 447627,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "입력 데이터 간의 관계와 출력에 영향을 미치는 상황을 체계적으로 분석한 다음 효용성이 높은 테스트 케이스를 선정하여 검사하는 테스트 기법은?",
	            "answer": "원인-효과 그래프 검사<br/>(Cause-Effect<br/>Graphing Testing)"
	        }
	    },
	    {
	        "id": 447628,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "여러 버전의 프로그램에 동일한 테스트 자료를 제공하여 동일한 결과가 출력되는지 테스트하는 기법은?",
	            "answer": "비교 검사<br/>(Comparison Testing"
	        }
	    },
	    {
	        "id": 447629,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "평가 점수에 따른 성적부여는 다음 표와 같다. 이를 구현한 소프트웨어를 경계값 분석 기법으로 테스트 하고자 할 때, 테스트 케이스의 입력 값으로 알맞은 숫자를 모두 고르시오.<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0011.jpg\"/><br/>\\<테스트 케이스 입력값\\><br/><div class=\"border-block\">101, 100, 90, 80, 79, 70, 60, 59, 50, 0, -1</div>",
	            "answer": "101, 100, 80, 79, 60, 59, 0, -1",
	            "solution": "경계값 분석 기법은 입력 조건의 경계값을 테스트 케이스로 선정하여 검사하는 기법으로, 성적이 분리되는 평가점수의 경계값인 101, 100, 80, 79, 60, 59, 0, -1이 적절한 입력값에 해당합니다."
	        }
	    },
	    {
	        "id": 447630,
	        "templateId": 9,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★☆☆",
	            "question": "다음에서 블랙박스 테스트 기법을 모두 고르면?",
	            "questionPassage": [
	                "ⓐ 경계값 분석 ",
	                "ⓑ 오류 예측 ",
	                "ⓒ 동등 분할 기법 ",
	                "ⓓ 조건, 루프 검사"
	            ],
	            "answer": [
	                "1",
	                "2",
	                "3"
	            ]
	        }
	    },
	    {
	        "id": 447631,
	        "templateId": 9,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★★☆",
	            "question": "다음에서 블랙박스 테스트 기법을 모두 고르면?",
	            "questionPassage": [
	                "ⓐ 기초 경로 검사 ",
	                "ⓑ 데이터 흐름 검사 ",
	                "ⓒ 동치 클래스 분해 ",
	                "ⓓ 원인 결과 그래프"
	            ],
	            "answer": [
	                "3",
	                "4"
	            ]
	        }
	    },
	    {
	        "id": 447632,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 테스트에 사용되는 방식으로, 모듈의 논리적 구조를 체계적으로 점검하는 구조 테스트이며, 유형에는 기초 경로 검사, 조건 검사, 데이터 흐름 검사, 루프 검사 등이 있는 테스트 방식은?",
	            "answer": "화이트박스 테스트<br/>(White Box Test)"
	        }
	    },
	    {
	        "id": 447633,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 인터페이스에서 실시되는 기능 테스트로, 소프트웨어의 기능이 의도대로 작동하고 있는지 테스트 하는 기법은?",
	            "answer": "블랙박스 테스트<br/>(Black Box Test)"
	        }
	    },
	    {
	        "id": 447634,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "개발자의 장소에서 사용자가 개발자 앞에서 행해지며, 오류와 사용상의 문제점을 사용자와 개발자가 함께 확인하면서 검사하는 검증 검사 기법은?",
	            "answer": "알파 테스트"
	        }
	    },
	    {
	        "id": 447635,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "알파 테스트, 베타 테스트와 가장 밀접한 연관이 있는 테스트로, 개발한 소프트웨어가 사용자의 요구사항을 충족하는지에 중점을 두고 테스트하는 기법은?",
	            "answer": "인수 테스트<br/>(Acceptance Test)"
	        }
	    },
	    {
	        "id": 447636,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "애플리케이션 테스트 중 코딩 직후 소프트웨어 설계의 최소 단위인 모듈이나 컴포넌트에 초점을 맞춰 테스트하는 기법은?",
	            "answer": "단위 테스트<br/>(Unit Test)"
	        }
	    },
	    {
	        "id": 447637,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "애플리케이션 테스트 중 단위 테스트가 완료된 모듈들을 결합하여 하나의 시스템으로 완성시키는 과정에서 테스트하는 기법은?",
	            "answer": "통합 테스트<br/>(Integration Test)"
	        }
	    },
	    {
	        "id": 447638,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "애플리케이션 테스트 중 (       )는 개발된 소프트웨어가 해당 컴퓨터 시스템에서 완벽하게 수행되는가를 점검하는 테스트로, 기능적 요구사항과 비기능적 요구사항으로 구분하여 각각을 만족하는지 테스트한다.",
	            "answer": "시스템 테스트<br/>(System Test)"
	        }
	    },
	    {
	        "id": 447639,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "인수 테스트 중 (    ) 테스트는 선정된 최종 사용자가 여러 명의 사용자 앞에서 행하는 테스트 기법으로 개발자에 의해 제어되지 않은 상태에서 사용자가 직접 테스트를 수행하며, 발견된 오류와 사용상의 문제점을 기록하고 개발자에게 주기적으로 보고한다.",
	            "answer": "베타"
	        }
	    },
	    {
	        "id": 447640,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "(     )은 하향식 통합에 있어서 모듈 간의 통합 시험을 위해 일시적으로 필요한 조건만을 가지고 임시로 제공되는 시험용 모듈이다.",
	            "answer": "스텁(Stub)"
	        }
	    },
	    {
	        "id": 447641,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "다음이 설명하는 애플리케이션 통합 테스트 유형은?",
	            "questionPassage": "ㆍ깊이 우선 방식 또는 너비 우선 방식이 있다.<br/>ㆍ상위 컴포넌트를 테스트 하고 점증적으로 하위 컴포넌트를 테스트 한다.<br/>ㆍ하위 컴포넌트 개발이 완료되지 않은 경우 스텁(Stub)을 사용하기도 한다.",
	            "answer": "하향식 통합 테스트<br/>(Top Down Integration Test)"
	        }
	    },
	    {
	        "id": 447642,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 보기에 제시된 상향식 통합 테스트의 단계들을 순서대로 나열하면?",
	            "questionPassage": "ⓐ 드라이버라는 제어 프로그램의 작성 <br/>ⓑ 낮은 수준의 모듈들을 클러스터로 결합 <br/>ⓒ 클러스터의 검사 <br/>ⓓ 드라이버를 제거하고 클러스터를 상위로 결합 ",
	            "answer": "ⓑ → ⓐ → ⓒ → ⓓ"
	        }
	    },
	    {
	        "id": 447643,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "하나의 주요 제어 모듈과 관련된 종속 모듈의 그룹인 클러스터(Cluster)가 필요하고, 데이터의 입·출력을 확인하기 위해 더미 모듈인 드라이버를 생성하며, 테스트가 완료되면 클러스터는 프로그램 구조의 상위로 이동하여 결합하고 드라이버는 실제 모듈로 대체되는 테스트 기법은?",
	            "answer": "상향식 통합 테스트<br/>(Bottom Up Integration Test)"
	        }
	    },
	    {
	        "id": 447644,
	        "templateId": 8,
	        "registeredDate": 1652337948000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "상향식 통합 방식의 수행 단계에서는 최하위 레벨의 모듈 또는 컴포넌트들이 하위 모듈의 기능을 수행하는 (     )로 결합된다.",
	            "answer": "클러스터(Cluster)"
	        }
	    },
	    {
	        "id": 447645,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "상향식 통합 방식의 수행 단계에서는 상위의 모듈에서 데이터의 입력과 출력을 확인하기 위한 더미 모듈인 (     )를 작성한다.",
	            "answer": "드라이버(Driver)"
	        }
	    },
	    {
	        "id": 447646,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "이미 테스트된 프로그램의 테스팅을 반복하는 테스트로, 통합 테스<br/>트로 인해 변경된 모듈이나 컴포넌트에 새로운 오류가 있는지 확인하며, 수정한 모듈이나 컴포넌트가 다른 부분에 영향을 미치는지, 오류가 생기지 않았는지 테스트하여 새로운 오류가 발생하지 않음을 보증하기 위해 반복 테스트하는 것은?",
	            "answer": "회귀 테스트<br/>(Regression Test)"
	        }
	    },
	    {
	        "id": 447647,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음에 제시된 애플리케이션 테스트 프로세스의 단계들을 순서대로 나열하면?",
	            "questionPassage": "ⓐ 테스트 분석 <br/>ⓑ 테스트 계획 <br/>ⓒ 테스트 실행 <br/>ⓓ 테스트 케이스 작성 <br/>ⓔ 테스트 결과 분석",
	            "answer": "테스트 계획 → 테스트 분석 → 테스트 케이스 작성 → 테스트 실행 → 테스트 결과 분석"
	        }
	    },
	    {
	        "id": 447648,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음에 제시된 결함 관리 단계들을 순서대로 나열하면?",
	            "questionPassage": "ⓐ 에러 발견 <br/>ⓑ 에러 등록 <br/>ⓒ 에러 분석 <br/>ⓓ 결함 확정 <br/>ⓔ 결함 할당 <br/>ⓕ 결함 조치",
	            "answer": "에러 발견 → 에러 등록 → 에러 분석 → 결함 확정 → 결함 할당 → 결함 조치"
	        }
	    },
	    {
	        "id": 447649,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "특정한 몇몇 테스트 케이스의 입력 값들에 대해서만 기대하는 결과를 제공하는 오라클로, 전수 테스트가 불가능한 경우 사용하고, 경계값 및 구간별 예상값 결과 작성시 사용하는 오라클은?",
	            "answer": "샘플링 오라클<br/>(Sampling Oracle)"
	        }
	    },
	    {
	        "id": 447650,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 테스트의 결과가 참인지 거짓인지를 판단하기 위해서 사전에 정의된 참값을 입력하여 비교하는 기법 및 활동으로, 종류에는 참, 샘플링, 휴리스틱, 일관성 검사가 존재한다.",
	            "answer": "테스트 오라클<br/>(Test Oracle)"
	        }
	    },
	    {
	        "id": 447651,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "구현된 소프트웨어가 사용자의 요구사항을 정확하게 준수했는지를 확인하기 위해 설계된 입력 값, 실행 조건, 기대 결과 등으로 구성된 테스트 항목에 대한 명세서는?",
	            "answer": "테스트 케이스<br/>(Test Case)"
	        }
	    },
	    {
	        "id": 447652,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "테스트 케이스를 적용하는 순서에 따라 여러 개의 테스트 케이스들을 묶은 집합으로, 테스트 케이스들을 적용하는 구체적인 절차를 명세한 문서이며, 테스트 순서에 대한 구체적인 절차, 사전 조건, 입력 데이터 등이 설정되어 있는 것은?",
	            "answer": "테스트 시나리오<br/>(Test Scenario)"
	        }
	    },
	    {
	        "id": 447653,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "특정 테스트 케이스의 입력 값에 대해 기대하는 결과를 제공하고, 나머지 입력 값들에 대해서는 추정으로 처리하는 테스트 오라클은?",
	            "answer": "추정 오라클<br/>(Heuristic Oracle)"
	        }
	    },
	    {
	        "id": 447654,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "모든 테스트 케이스의 입력 값에 대해 기대하는 결과를 제공하고, 발생된 모든 오류를 검출할 수 있는 테스트 오라클은?",
	            "answer": "참 오라클<br/>(True Oracle)"
	        }
	    },
	    {
	        "id": 447655,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "애플리케이션의 변경이 있을 때, 테스트 케이스의 수행 전과 후의<br/>결과 값이 동일한지를 확인하는 테스트 오라클은?",
	            "answer": "일관성 검사 오라클<br/>(Consistent Oracle)"
	        }
	    },
	    {
	        "id": 447656,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "프로그램을 실행하지 않고 분석하는 도구로, 소스 코드에 대한 코딩 표준, 코딩 스타일, 코드 복잡도 및 남은 결함 등을 발견하기 위해 사용되며, 테스트를 수행하는 사람이 작성된 소스 코드를 이해하고 있어야만 분석이 가능한 테스트 자동화 도구는?",
	            "answer": "정적 분석 도구<br/>(Static Analysis Tools)"
	        }
	    },
	    {
	        "id": 447657,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "애플리케이션의 처리량, 응답 시간, 경과 시간, 자원 사용률 등을 인위적으로 적용한 가상의 사용자를 만들어 테스트를 수행함으로써 성능의 목표 달성 여부를 확인하는 테스트 자동화 도구는?",
	            "answer": "성능 테스트 도구<br/>(Performance Test Tools)"
	        }
	    },
	    {
	        "id": 447658,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 테스트 하네스의 구성 요소는?",
	            "questionPassage": "테스트 대상의 하위 모듈을 호출하고, 파라미터를 전달하고, 모듈 테스트 수행 후의 결과를 도출하는 도구이다.",
	            "answer": "테스트 드라이버<br/>(Test Driver)"
	        }
	    },
	    {
	        "id": 447659,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 테스트 하네스의 구성 요소는?",
	            "questionPassage": "제어 모듈이 호출하는 타 모듈의 기능을 단순히 수행하는 도구로, 일시적으로 필요한 조건만을 가지고 있는 테스트용 모듈이다.",
	            "answer": "테스트 스텁<br/>(Test Stub)"
	        }
	    },
	    {
	        "id": 447660,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 테스트 하네스의 구성 요소는?",
	            "questionPassage": "자동화된 테스트 실행 절차에 대한 명세서이다.",
	            "answer": "테스트 스크립트<br/>(Test Script)"
	        }
	    },
	    {
	        "id": 447661,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 테스트 하네스의 구성 요소는?",
	            "questionPassage": "사전에 사용자의 행위를 조건부로 입력해 두면, 그 상황에 맞는 예정된 행위를 수행하는 객체이다.",
	            "answer": "목 오브젝트<br/>(Mock Object)"
	        }
	    },
	    {
	        "id": 447662,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "애플리케이션의 컴포넌트 및 모듈을 테스트하는 환경의 일부분으<br/>로, 테스트를 지원하기 위해 생성된 코드와 데이터를 의미하는 테스트 자동화 도구는?",
	            "answer": "테스트 하네스<br/>(Test Harness)"
	        }
	    },
	    {
	        "id": 447663,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 오류 발생, 작동 실패 등과 같이 소프트웨어가 개발자의 설계와 다르게 동작하거나 다른 결과가 발생되는 것을 의미한다. 사용자가 예상한 결과와 실행 결과 간의 차이나 업무 내용과의 불일치 등으로 인해 변경이 필요한 부분도 모두 여기에 해당된다.",
	            "answer": "결함(Fault)"
	        }
	    },
	    {
	        "id": 447664,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "애플리케이션 테스트에서 발견된 결함을 처리하는 결함 관리 프로세스의 단계를 처리 순서대로 나열하면?",
	            "questionPassage": "ⓐ 결함 관리 계획 <br/>ⓑ 결함 검토 <br/>ⓒ 결함 재확인 <br/>ⓓ 결함 수정 <br/>ⓔ 결함 기록 <br/>ⓕ 결함 상태 추적 및 모니터링 활동 <br/>ⓖ 최종 결함 분석 및 보고서 작성",
	            "answer": "ⓐ → ⓔ → ⓑ → ⓓ → ⓒ → ⓕ → ⓖ"
	        }
	    },
	    {
	        "id": 447665,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "테스트를 완료한 후에는 발견된 결함에 대한 결함 관리 측정 지표의 속성 값들을 분석하고 향후 어떤 결함이 발생할지를 추정해야 한다. 결함 관리 측정 지표 3가지는?",
	            "answer": "결함 분포<br/>결함 추세<br/>결함 에이징"
	        }
	    },
	    {
	        "id": 447666,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음이 설명하는 결함 관리 측정 지표는?",
	            "questionPassage": "모듈 또는 컴포넌트의 특정 속성에 해당하는 결함 수 측정",
	            "answer": "결함 분포"
	        }
	    },
	    {
	        "id": 447667,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음이 설명하는 결함 관리 측정 지표는?",
	            "questionPassage": "테스트 진행 시간에 따른 결함 수의 추이 분석",
	            "answer": "결함 추세"
	        }
	    },
	    {
	        "id": 447668,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음이 설명하는 결함 관리 측정 지표는?",
	            "questionPassage": "특정 결함 상태로 지속되는 시간 측정",
	            "answer": "결함 에이징"
	        }
	    },
	    {
	        "id": 447669,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 애플리케이션 성능 측정의 지표는?",
	            "questionPassage": "일정 시간 내에 애플리케이션이 처리하는 일의 양",
	            "answer": "처리량<br/>(Throughput)"
	        }
	    },
	    {
	        "id": 447670,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 애플리케이션 성능 측정의 지표는?",
	            "questionPassage": "애플리케이션에 요청을 전달한 시간부터 응답이 도착할 때까지 걸린 시간",
	            "answer": "응답 시간<br/>(Response Time)"
	        }
	    },
	    {
	        "id": 447671,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 애플리케이션 성능 측정의 지표는?",
	            "questionPassage": "애플리케이션에 작업을 의뢰한 시간부터 처리가 완료될 때까지 걸린 시간",
	            "answer": "경과 시간<br/>(Turn Around Time)"
	        }
	    },
	    {
	        "id": 447672,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 애플리케이션 성능 측정의 지표는?",
	            "questionPassage": "애플리케이션이 의뢰한 작업을 처리하는 동안의 CPU, 메모리, 네트워크 등의 자원 사용률",
	            "answer": "자원 사용률<br/>(Resource Usage)"
	        }
	    },
	    {
	        "id": 447673,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "애플리케이션의 성능 분석 도구는 (     ) 도구는 애플리케이션에 부하나 스트레스를 가하면서 애플리케이션의 성능 측정 지표를 점검하는 도구로, 종류에는 JMeter, LoadUI, OpenSTA 등이 있다.",
	            "answer": "성능 테스트"
	        }
	    },
	    {
	        "id": 447674,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "애플리케이션의 성능 분석 도구는 (     ) 도구는 애플리케이션이 실행되었을 때 시스템 자원의 사용량을 확인하고 분석하는 도구로 종류에는 Scouter, Zabbix 등이 있다.",
	            "answer": "시스템 모니터링"
	        }
	    },
	    {
	        "id": 447675,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "애플리케이션 성능이란 사용자가 요구한 기능에 대해 최소한의 자원을 사용하여 최대한 많은 기능을 신속하게 처리하는 정도를 나타낸다. 애플리케이션의 성능을 측정하기 위한 지표 4가지는?",
	            "answer": "처리량(Throughput), <br/>응답 시간(Response Time), <br/>경과 시간(Turn Around Time), <br/>자원 사용률(Resource Usage)"
	        }
	    },
	    {
	        "id": 447676,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "빅오 표기법(Big-O Notation)에서 알고리즘의 수행시간이 입력 데이터 수와 관계 없이 일정하다는 것을 의미하는 알고리즘 시간 복잡도는?",
	            "answer": "O(1)"
	        }
	    },
	    {
	        "id": 447677,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "정렬된 N개의 데이터를 처리하는데 O(Nlog[subscript:2]N)의 시간이 소요되는 정렬 알고리즘 두 가지는?",
	            "answer": "힙 정렬(Heap Sort),<br/>2-Way 합병 정렬(Merge Sort)"
	        }
	    },
	    {
	        "id": 447678,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "제어 흐름 그래프가 다음과 같을 때 McCabe의 cyclomatic 수는 얼마인가?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0012.jpg\"/>",
	            "answer": "4",
	            "solution": "순환 복잡도는 화살표로 구분되는 각 영역의 개수를 구하면 됩니다.<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0012.jpg\"/><br/>내부 영역 3(❶, ❷, ❸) + 외부 영역 1(❹) = 4"
	        }
	    },
	    {
	        "id": 447679,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음에 해당하는 최악의 시간 복잡도를 빅오 표기법으로 표시하면?",
	            "questionPassage": "입력값(n)에 관계 없이 일정하게 문제 해결에 하나의 단계만을 거친다.",
	            "answer": "O(1)"
	        }
	    },
	    {
	        "id": 447680,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음에 해당하는 최악의 시간 복잡도를 빅오 표기법으로 표시하면?",
	            "questionPassage": "문제 해결에 필요한 단계가 입력값(n) 또는 조건에 의해 감소한다.",
	            "answer": "O(log[subscript:2]n)"
	        }
	    },
	    {
	        "id": 447681,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음에 해당하는 최악의 시간 복잡도를 빅오 표기법으로 표시하면?",
	            "questionPassage": "문제 해결에 필요한 단계가 입력값(n)과 1:1의 관계를 가진다.",
	            "answer": "O(n)"
	        }
	    },
	    {
	        "id": 447682,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음에 해당하는 최악의 시간 복잡도를 빅오 표기법으로 표시하면?",
	            "questionPassage": "문제 해결에 필요한 단계가 n(log2n)번만큼 수행된다.",
	            "answer": "O(nlog[subscript:2]n)"
	        }
	    },
	    {
	        "id": 447683,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음에 해당하는 최악의 시간 복잡도를 빅오 표기법으로 표시하면?",
	            "questionPassage": "문제 해결에 필요한 단계가 입력값(n)의 제곱만큼 수행된다.",
	            "answer": "O(n[superscript:2])"
	        }
	    },
	    {
	        "id": 447684,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음에 해당하는 최악의 시간 복잡도를 빅오 표기법으로 표시하면?",
	            "questionPassage": "문제 해결에 필요한 단계가 2의 입력값(n) 제곱만큼 수행된다.",
	            "answer": "O(2[superscript:n])"
	        }
	    },
	    {
	        "id": 447685,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(        )는 알고리즘을 수행하기 위해 프로세스가 수행하는 연산 횟수를 수치화한 것을 의미한다. (        )가 낮을수록 알고리즘의 실행시간이 짧고, 높을수록 실행시간이 길어진다.",
	            "answer": "시간 복잡도"
	        }
	    },
	    {
	        "id": 447686,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "제어 흐름도 이론에 기초를 둔 (        )는 한 프로그램의 논리적인 복잡도를 측정하기 위한 소프트웨어의 척도로 맥케이브 복잡도 메트릭(McCabe’s Complexity Metrics)이라고도 한다.",
	            "answer": "순환 복잡도"
	        }
	    },
	    {
	        "id": 447687,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "다음에서 설명하는 클린 코드 작성 원칙은?",
	            "questionPassage": "ㆍ한 번에 한 가지 처리만 수행한다.<br/>ㆍ클래스/메소드/함수를 최소 단위로 분리한다.",
	            "answer": "단순성"
	        }
	    },
	    {
	        "id": 447688,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "외계인 코드(Alien Code)에 대해 간략히 서술하면?",
	            "questionPassage": "61403508.77",
	            "answer": "외계인 코드는 <div class=\"border-block\">아주 오래되거나</div> 참고문서 또는 <div class=\"border-block\">개발자가 없어 유지보수 작업이 어려운 코드</div>이다."
	        }
	    },
	    {
	        "id": 447689,
	        "templateId": 9,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★★★",
	            "question": "다음 소스코드 품질 분석 도구 중 정적 분석 도구를 모두 고르면?",
	            "questionPassage": [
	                "ⓐ pmd ",
	                "ⓑ cppcheck ",
	                "ⓒ valMeter ",
	                "ⓓ checkstyle ",
	                "ⓔ Valgrind "
	            ],
	            "answer": [
	                "1",
	                "2",
	                "4"
	            ]
	        }
	    },
	    {
	        "id": 447690,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(      )는 누구나 쉽게 이해하고 수정 및 추가할 수 있는 단순, 명료한 코드, 즉 잘 작성된 코드를 의미한다.",
	            "answer": "클린 코드<br/>(Clean Code)"
	        }
	    },
	    {
	        "id": 447691,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음에서 설명하는 클린 코드 작성 원칙은?",
	            "questionPassage": "ㆍ누구든지 쉽게 이해하는 코드를 작성한다.<br/>ㆍ코드 작성 시 이해하기 쉬운 용어를 사용하거나 들여쓰기 기능 등을 사용한다.",
	            "answer": "가독성"
	        }
	    },
	    {
	        "id": 447692,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음에서 설명하는 클린 코드 작성 원칙은?",
	            "questionPassage": "ㆍ코드가 다른 모듈에 미치는 영향을 최소화한다.<br/>ㆍ코드 변경 시 다른 부분에 영향이 없도록 작성한다.",
	            "answer": "의존성 배제"
	        }
	    },
	    {
	        "id": 447693,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "애플리케이션 테스트 관리",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음에서 설명하는 클린 코드 작성 원칙은?",
	            "questionPassage": "상위 클래스/메소드/함수에서는 간략하게 애플리케이션의 특성을 나타내고, 상세 내용은 하위 클래스/메소드/함수에서 구현한다.",
	            "answer": "추상화"
	        }
	    },
	    {
	        "id": 447694,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 \\<속성 정의서\\>를 참고하여 \\<학생\\> 테이블에 20자의 가변 길이를 가진 ‘주소’ 속성을 추가하는 \\<SQL문\\>을 완성하면?<br/>\\<속성 정의서\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_024.png\"/><br/>\\<SQL문\\><br/><div class=\"border-block\">( ① ) TABLE 학생 ( ② ) 주소 VARCHAR(20);</div>",
	            "answer": "① ALTER <br/>② ADD",
	            "solution": "<div class=\"border-block\">ALTER TABLE 학생 <br/>ADD 주소 VARCHAR(20);</div><br/>❶ 수정할 테이블의 이름은 \\<학생\\>이다.<br/>❷ 가변 길이의 문자 20자리인 ‘주소’ 속성을 추가한다."
	        }
	    },
	    {
	        "id": 447695,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "다음 \\<student\\> 테이블을 참고하여 ‘name’ 속성으로 ‘idx_name’이라는 인덱스를 생성하는 SQL문은?<br/>\\<student\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_025.png\"/>",
	            "answer": "CREATE INDEX idx_name <br/>ON student(name);",
	            "solution": "<div class=\"border-block\">CREATE INDEX idx_name<br/>ON student(name);</div><br/>❶ ‘idx_name’이라는 이름의 인덱스를 생성한다.<br/>❷ \\<student\\> 테이블의 ‘name’ 속성을 사용한다."
	        }
	    },
	    {
	        "id": 447696,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "아래의 \\<요구사항\\>을 만족하는 테이블 \\<patient\\>를 정의하는 SQL문은?<br/>\\<요구사항\\>",
	            "questionPassage": "ㆍ‘id(문자 5)’, ‘name(문자 10) ’, ‘sex(문자 1) ’, ‘phone(문자 20)’ 속성을 가진다.<br/>ㆍ‘id ’ 속성은 기본키이다.<br/>ㆍ‘sex’ 속성은 ‘f ’ 또는 ‘m’ 값만 갖도록 한다(제약조건명 : sex_ck).<br/>ㆍ‘id’는 \\<doctor\\> 테이블에 있는 ‘doc_id ’를 참조한다(제약조건명 : id_fk).",
	            "answer": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_026.png\"/>",
	            "solution": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_026.png\"/><br/>❶ 생성한 테이블 이름은 \\<patient\\>이다.<br/>❷ ‘id’ 속성은 문자 5자리이며, 기본키이다.<br/>❸ ‘name’ 속성은 문자 10자리이다.<br/>❹ ‘sex’ 속성은 문자 1자리이다.<br/>❺ ‘phone’ 속성은 문자 20자리이다.<br/>❻ ‘sex’ 속성은 ‘f’ 또는 ‘m’만 입력되어야 하며, 이 제약 조건의 이름은 ‘sex_ck’이다.<br/>❼ ‘id’ 속성은 <doctor> 테이블의 기본키인 ‘doc_id’ 속성을 참조하는 외래키이며, 이 제약 조건의 이름은 ‘id_fk’이다."
	        }
	    },
	    {
	        "id": 447697,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "아래의 \\<요구사항\\>을 만족하는 테이블 \\<Instructor\\>를 정의하는 SQL문은?<br/>\\<요구사항\\>",
	            "questionPassage": "ㆍ‘id(문자 5)’, ‘name(문자 15)’, ‘dept(문자 15)’ 속성을 가진다.<br/>ㆍ‘id’ 속성은 기본키이다.<br/>ㆍ‘name’ 속성은 Null이 올 수 없다.<br/>ㆍ‘dept‘  속성은 \\<Department\\> 테이블의 ‘name’ 속성을 참조하는 외래키이다.<br/>- \\<Department\\> 테이블에서 튜플이 삭제되면 관련된 모든 튜플의 ‘dept’ 속성의 값은 NULL로 변경되어야 한다.<br/>- \\<Department\\> 테이블의 ‘name’ 속성이 변경되면 \\<Instructor\\> 테이블의 관련된 모든 속성 값도 같은 값으로 변경되어야 한다.",
	            "answer": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_027.png\"/>",
	            "solution": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_027.png\"/><br/>❶ 생성한 테이블 이름은 \\<Instructor\\>이다.<br/>❷ ‘id’ 속성은 문자 5자리이다.<br/>❸ ‘name’ 속성은 문자 15자리이며, NULL 값을 갖지 않는다.<br/>❹ ‘dept’ 속성은 문자 15자리이다.<br/>❺ ‘id’ 속성은 기본키이다.<br/>❻ ‘dept’ 속성은 \\<Department\\> 테이블의 기본키인 ‘name’ 속성을 참조하는 외래키이다.<br/>❼ \\<Department\\> 테이블에서 튜플이 삭제되면 관련된 모든 튜플의 ‘dept’<br/>속성의 값을 NULL로 변경한다.<br/>❽ \\<Department\\> 테이블에서 튜플이 변경되면 관련된 모든 튜플의 ‘dept’<br/>속성의 값도 같은 값으로 변경한다.",
	            "solutionPassage": ""
	        }
	    },
	    {
	        "id": 447698,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "\\<patient\\> 테이블에 데이터 타입이 문자 20자리인 ‘job’ 속성을 추가하는 SQL문은?",
	            "answer": "ALTER TABLE patient<br/>ADD job CHAR(20);",
	            "solution": "<div class=\"border-block\">❶ ALTER TABLE patient<br/>❷ ADD job CHAR(20);</div><br/>❶수정할 테이블 이름은 <patient>이다.<br/>❷ 문자 20자리인 ‘job’ 속성을 추가한다."
	        }
	    },
	    {
	        "id": 447699,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "아래의 \\<요구사항\\>을 만족하는 뷰 \\<CC\\>를 정의하는 SQL문은?<br/>\\<요구사항\\>",
	            "questionPassage": "ㆍ\\<Course\\>와 \\<Instructor\\> 릴레이션을 이용한다.<br/>ㆍ\\<Course\\>의 ‘instructor’ 속성 값과 \\<Instructor\\>의 ‘ id’ 속성이 같은 자료에 대한 view를 정의한다.<br/>ㆍ\\<cc\\> 뷰는 ‘ccid’, ‘ccname’, ‘instname’ 속성을 가진다.<br/>ㆍ\\<cc\\> 뷰는 \\<Course\\> 테이블의 ‘id’, ‘name’, \\<Instructor❶> 테이블의 ‘name ’ 속성을 사용한다.",
	            "answer": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_028.png\"/>",
	            "solution": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_028.png\"/><br/>❶ 생성한 뷰의 ‘이름’은 \\<CC\\>이며, ‘ccid’, ‘ccname’, ‘instname’ 속성을<br/>갖는다.<br/>❷ \\<Course\\> 테이블에서 ‘id’와 ‘name’ 속성을 가져오고, \\<instructor\\> 테이블에서 ‘name’ 속성을 가져온다.<br/>❸ \\<Course\\>와 \\<Instructor\\> 테이블에서 속성을 가져와 뷰를 생성한다.<br/>❹ \\<course\\> 테이블의 ‘instructor’ 속성과 \\<instructor\\> 테이블의 ‘id’ 속성의 값이 같은 자료만을 뷰로 생성한다."
	        }
	    },
	    {
	        "id": 447700,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "\\<사원\\> 테이블을 정의하는 SQL문이다. 아래의 \\<요구사항\\>을 만족하도록 괄호(①, ②)에 적합한 명령을 넣어 SQL문을 완성하시오.<br/>\\<요구사항\\><br/><div class=\"border-block\">ㆍ‘ 근무지번호 ’는 \\<근무지\\> 테이블의 ‘ 근무지번호 ’를 참조하는 외래키이다.<br/>ㆍ\\<근무지\\> 테이블에서 ‘ 근무지번호 ’가 삭제되면 \\<사원\\> 테이블의 ‘ 근무지번호 ’도 삭제된다.</div><br/>\\<SQL문\\><br/><div class=\"border-block\"> CREATE TABLE 사원<br/>  ( 사원번호 NUMBER(4) PRIMARY KEY,<br/>    사원명 VARCHAR2(10),<br/>    근무지번호 NUMBER(2) ( ① ) 근무지<br/>    ON DELETE ( ② )<br/>  );</div>",
	            "answer": "① FOREIGN KEY REFERENCES<br/>② CASCADE",
	            "solution": "<div class=\"border-block\">CREATE TABLE 사원<br/> ( 사원번호 NUMBER(4) PRIMARY KEY,<br/>   사원명 VARCHAR2(10),<br/>   근무지번호 NUMBER(2) FOREIGN KEY REFERENCES 근무지<br/>   ON DELETE CASCADE );</div><br/>❶ 생성한 테이블 이름은 \\<사원\\>이다.<br/>❷ ‘사원번호’ 속성은 숫자 4자리이며, 기본키이다.<br/>❸ ‘사원명’ 속성은 문자 10자리이다.<br/>❹ ‘근무지번호’는 숫자 2자리이며, \\<근무지\\> 테이블의 ‘근무지번호’를 참조하는 외래키이다.<br/>❺ \\<근무지\\> 테이블에서 ‘근무지번호’가 삭제되면, \\<사원\\> 테이블의 ‘근무지번호’도 삭제된다."
	        }
	    },
	    {
	        "id": 447701,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "\\<Student\\> 테이블의 ssn 속성에 대해, 중복을 허용하지 않도록 ‘Stud_idx’라는 이름으로 오름차순 인덱스를 정의하는 SQL문은?",
	            "answer": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_031.png\"/>",
	            "solution": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_031.png\"/><br/>❶ 생성한 인덱스의 이름은 \\<Stud_idx\\>이며, 중복값이 없는 속성으로 인덱스를 생성한다.<br/>❷ \\<Student\\> 테이블의 ‘ssn’ 속성을 오름차순 정렬한다."
	        }
	    },
	    {
	        "id": 447702,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음은 기본키인 ‘직위’ 속성의 값으로 “사원”, “대리”, “과장”, “부장”, “이사”, “사장”만을 허용하고, 기본 값으로 “사원”을 취하는 도메인 무결성 제약 조건을 설정하기 위한 SQL문이다. 괄호를 채워 SQL문을 완성하면?<br/>\\<SQL문\\><br/><div class=\"border-block\">CREATE DOMAIN 직위 VARCHAR2(10)<br/>( ① )<br/>( ② ) VALID-직위 ( ③ );</div>",
	            "answer": "① DEFAULT ‘사원’ <br/>② CONSTRAINT <br/>③ CHECK ( VALUE IN(‘사원’, ‘대리’, ‘과장’, ‘부장’, ‘이사’, ‘사장’) )",
	            "solution": "<div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_124.png\"/></div><br/>❶ ‘직위’ 속성에 대한 도메인을 생성한다. 크기는 문자 10자이다.<br/>❷ ‘직위’ 도메인의 기본 값은 “사원”이다.<br/>❸ ‘직위’ 속성에는 “사원”, “대리”, “과장”, “부장”, “이사”, “사장” 중 하나의 값만을 저장할 수 있다. ‘VALID-직위’는 제약 조건의 이름이다."
	        }
	    },
	    {
	        "id": 447703,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "\\<직원\\> 테이블에 대해 ‘ 이름 ’ 속성으로 ‘직원_name’이라는 인덱스를 정의하는 SQL문은?",
	            "answer": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_032.png\"/>",
	            "solution": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_032.png\"/><br/>\\<직원\\> 테이블의 ‘이름’ 속성으로 ‘직원＿name’이라는 이름의 인덱스를 생성한다."
	        }
	    },
	    {
	        "id": 447704,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 \\<처리 조건\\>에 부합하는 SQL문이 완성되도록 괄호에 적합한 옵션을 넣으면?<br/>\\<처리 조건\\><br/><div class=\"border-block\">ㆍ\\<학생\\> 테이블을 제거한다.<br/>ㆍ\\<학생\\> 테이블을 참조하는 모든 데이터도 함께 제거한다.</div><br/>\\<SQL문\\><br/><div class=\"border-block\">DROP TABLE 학생 (         );</div>",
	            "answer": "CASCADE",
	            "solution": "<div class=\"border-block\">DROP TABLE 학생 CASCADE;</div><br/>\\<학생\\> 테이블을 삭제하되, \\<학생\\> 테이블을 참조하는 다른 모든 개체를 함께 제거한다."
	        }
	    },
	    {
	        "id": 447705,
	        "templateId": 9,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "question": "다음에서 DDL에 속하는 명령어들을 모두 고르면?",
	            "questionPassage": [
	                "ⓐ Commit",
	                "ⓑ Table",
	                "ⓒ Insert",
	                "ⓓ Domain",
	                "ⓔ Update",
	                "ⓕ Query",
	                "ⓖ Create "
	            ],
	            "answer": [
	                "7"
	            ]
	        }
	    },
	    {
	        "id": 447706,
	        "templateId": 9,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "question": "다음에서 DDL에 속하는 명령어들을 모두 고르면?",
	            "questionPassage": [
	                "ⓐ Trigger",
	                "ⓑ Alter",
	                "ⓒ Rollback",
	                "ⓓ Procedure",
	                "ⓔ Drop",
	                "ⓕ Select",
	                "ⓖ Revoke"
	            ],
	            "answer": [
	                "2",
	                "5"
	            ]
	        }
	    },
	    {
	        "id": 447707,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 \\<사원\\> 테이블의 구조를 참고하여 미완성된 SQL문을 완성하시오.<br/>\\<사원\\><br/><div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_029.png\"/></div><br/>\\<SQL문\\><br/><div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_030.png\"/></div>",
	            "answer": "① CHECK <br/>② IN",
	            "solution": "<div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_125.png\"/></div><br/><사원> 테이블을 생성한다.<br/>❶ ‘직원코드’ 속성은 숫자형으로, NULL을 갖지 않는다.<br/>❷ ‘성명’ 속성은 최대 문자 10자로, 중복된 값을 가질 수 없다.<br/>❸ ‘직책’ 속성은 최대 문자 10자로, ‘사원’, ‘대리’, ‘과장’, ‘팀장’ 중에 하나의 값을 가져야 한다.<br/>❹ ‘연봉’ 속성은 숫자형이다."
	        }
	    },
	    {
	        "id": 447708,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "데이터를 제어하는 DCL의 하나인 ROLLBACK에 대해 간략히 서술하면?",
	            "answer": "ROLLBACK은 <span class=\"underline\">변경되었으나 아직 COMMIT되지 않은 모든 내용들을 취소하고 데이터베이스를 이전 상태로 되돌리는 명령어</span>이다."
	        }
	    },
	    {
	        "id": 447709,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "DBA가 사용자 PARK에게 테이블 [STUDENT]의 데이터를 갱신할 수 있는 시스템 권한을 부여하는 SQL문을 작성하려고 한다. 다음 \\<SQL문\\>을 완성하면<br/>\\<SQL문\\>",
	            "questionPassage": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_033.png\"/>",
	            "answer": "① GRANT <br/>② ON"
	        }
	    },
	    {
	        "id": 447710,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "김하늘에게 \\<학생\\> 테이블에 대한 접근 및 조작에 관한 모든 권한을 부여하는 SQL문은?<br/>\\<학사관리 시스템 스키마\\>",
	            "questionPassage": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_037.png\"/>",
	            "answer": "GRANT ALL ON 학생 TO 김하늘;"
	        }
	    },
	    {
	        "id": 447711,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "김하늘에게 \\<강좌\\> 테이블에 대해 삭제하는 권한을 부여하고, \\<강좌\\> 테이블에 대해 삭제하는 권한을 다른 사람에게 부여할 수 있는 권한을 부여하는 SQL문은?<br/>\\<학사관리 시스템 스키마\\>",
	            "questionPassage": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_037.png\"/>",
	            "answer": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_038.png\"/>"
	        }
	    },
	    {
	        "id": 447712,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "임꺽정에게 부여된 \\<교수\\> 테이블에 대한 SELECT, INSERT, DELETE 권한을 취소하는 SQL문은?<br/>\\<학사관리 시스템 스키마\\>",
	            "questionPassage": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_037.png\"/>",
	            "answer": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_039.png\"/>"
	        }
	    },
	    {
	        "id": 447713,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "\\<수강\\> 테이블에 대해 임꺽정에게 부여된 UPDATE 권한과 임꺽정이 다른 사람에게 UPDATE 권한을 부여할 수 있는 권한, 그리고 임꺽정이 다른 사람에게 부여한 UPDATE 권한도 모두 취소하는 SQL문은?<br/>\\<학사관리 시스템 스키마\\>",
	            "questionPassage": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_037.png\"/>",
	            "answer": "REVOKE UPDATE ON 수강 FROM 임꺽정 CASCADE;",
	            "solution": "※ ‘GRANT OPTION FOR’를 생략한 이유는 임꺽정에게 부여된 \\<수강\\> 테이블에 대한 UPDATE 권한을 취소하면 다른 사람에게 UPDATE 권한을 부여할 수 있는 권한도 함께 취소되기 때문입니다. 자신에게 권한이 없어지면 해당 권한을 다른 사람에게 부여할 수 없습니다."
	        }
	    },
	    {
	        "id": 447714,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "트랜잭션은 데이터베이스에서 하나의 논리적 기능을 수행하기 위한 일련의 연산 집합으로서 작업의 단위가 된다. 트랜잭션의 연산 ROLLBACK과 COMMIT 중 COMMIT의 개념을 간략히 서술하면?",
	            "answer": "COMMIT은 트랜잭션 처리가 정상적으로 완료된 후 <span class=\"underline\">트랜잭션이 수행한 내용을 데이터베이스에 반영하는 명령</span>이다."
	        }
	    },
	    {
	        "id": 447715,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "\\<학생\\> 테이블에 대해 다음 SQL문을 순차적으로 수행하였으나 작업 중 문제가 생겨 \\<학생\\> 테이블의 상태를 학번이 ‘2001’과 ‘2002’인 학생의 정보가 남아있는 상태로 복원하려고 한다. 적합한 ROLLBACK 명령을 작성하시오.<br/>\\<학생\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_034.png\"/><br/>\\<SQL문\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_035.png\"/><br/>복원하려는 \\<학생\\> 테이블 상태<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_036.png\"/>",
	            "answer": "ROLLBACK TO P1;",
	            "solution": "학번이 ‘2002’인 학생의 레코드는 ‘SAVEPOINT P1’ 명령이 수행된 이후 삭제되었고, 학번이 ‘2001’인 학생의 레코드는 ‘SAVEPOINT P2’ 명령이 수행된 이후 삭제되었으므로 학번이 ‘2002’인 학생의 레코드까지 복원하려면 ‘P1’ 저장점을 이용해서 복원을 수행해야 합니다."
	        }
	    },
	    {
	        "id": 447716,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "\\<학생\\> 테이블에서 ‘이름’이 “민수”인 튜플을 삭제하고자 한다. 다음 \\<처리 조건\\>을 참고하여 SQL문을 작성하시오.<br/>\\<처리 조건\\>",
	            "questionPassage": "ㆍ명령문 마지막의 세미콜론(;)은 생략이 가능하다.<br/>ㆍ인용 부호가 필요한 경우 작은 따옴표( ‘ ’ )를 사용한다.",
	            "answer": "DELETE <br/>FROM 학생 <br/>WHERE 이름 = ‘민수’;",
	            "solution": "<div class=\"border-block\">DELETE<br/>FROM 학생<br/>WHERE 이름 = ‘민수’;</div><br/>❶ 삭제하라.<br/>❷ <학생> 테이블을 대상으로 하라.<br/>❸ ‘이름’이 “민수”인 자료만을 대상으로 한다."
	        }
	    },
	    {
	        "id": 447717,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 \\<처리 조건\\>에 부합하는 SQL문을 작성하시오.<br/>\\<처리조건\\>",
	            "questionPassage": "1. 테이블명은 학생으로 정의한다.<br/>2. 학생 테이블의 구조는 다음과 같다.<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_041.png\"/><br/>3. 학생 테이블에 학번이 98170823, 성명이 ‘한국산’, 학년이 3, 과목이 ‘경영학개론’, 연락처가 ‘?-1234-1234’인 학생의 정보를 입력하시오.<br/>4. 명령문 마지막의 세미콜론(;)은 생략이 가능하다.<br/>5. 인용 부호가 필요한 경우 작은 따옴표(‘ ’)를 사용한다.",
	            "answer": "INSERT INTO 학생<br/>VALUES(98170823, ‘한국산’, 3, ‘경영학개론’, ‘?-1234-1234’);",
	            "solution": "<div class=\"border-block\">INSERT INTO 학생<br/>VALUES(98170823, ‘한국산’, 3, ‘경영학개론’, ‘?-1234-1234’);</div><br/>❶ \\<학생\\> 테이블에 삽입하라.<br/>❷ 첫 번째 필드부터 순서대로 98170823, ‘한국산’, 3, ‘경영학개론’,<br/>❸ ‘?-1234-1234’를 삽입하라."
	        }
	    },
	    {
	        "id": 447718,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 \\<처리 조건\\>에 부합하는 SQL문을 작성하시오.<br/>\\<처리 조건\\><br/>",
	            "questionPassage": "1. 학생 테이블에서 이름이 Scott인 튜플을 삭제하시오.<br/>2. 명령문 마지막의 세미콜론(;)은 생략이 가능하다.<br/>3. 인용 부호가 필요한 경우 작은 따옴표(‘ ’)를 사용한다.",
	            "answer": "DELETE<br/>FROM 학생<br/>WHERE 이름 = ‘Scott’;",
	            "solution": "<div class=\"border-block\">DELETE<br/>FROM 학생<br/>WHERE 이름 = ‘Scott’;</div><br/>❶ 삭제하라.<br/>❷ \\<학생\\> 테이블을 대상으로 하라.<br/>❸ ‘이름’이 ‘Scott’인 학생만을 대상으로 하라."
	        }
	    },
	    {
	        "id": 447719,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 \\<처리 조건\\>에 부합하도록 \\<SQL문\\>의 괄호(①, ②)에 가장 적합한 명령을 쓰시오.<br/>\\<처리 조건\\><br/><div class=\"border-block\">1. 테이블명은 사원이다.<br/>2. 사원 테이블 구조<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_042.png\"/><br/>3. 사원 테이블에서 직급이 ‘차장’인 사원의 연봉을 100000원 인상하시오.</span><br/>\\<SQL문\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_043.png\"/>",
	            "answer": "① SET <br/>② WHERE",
	            "solution": "<div class=\"border-block\">UPDATE 사원<br/>SET 연봉 = 연봉 + 100000<br/>WHERE 직급 = ‘차장’;</div><br/>❶ <사원> 테이블을 갱신하라.<br/>❷ ‘연봉’을 ‘연봉’에 100000을 더한 값으로 갱신하라.<br/>❸ ‘직급’이 ‘차장’인 사원만을 대상으로 하라."
	        }
	    },
	    {
	        "id": 447720,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 \\<처리 조건\\>에 부합하도록 \\<SQL문\\>의 괄호(①~③)에 가장 적합한 명령을 쓰시오.<br/>\\<처리 조건\\><br/>1. \\<학부생\\> 테이블<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_045.png\"/><br/>2. \\<학부생\\> 테이블에서 ‘담당관’의 이름이 “이”로 시작하는 튜플의 ‘학과번호’를 999로 갱신하시오.<br/>\\<SQL문\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_044.png\"/>",
	            "answer": "① SET <br/>② 학과번호 <br/>③ LIKE",
	            "solution": "<div class=\"border-block\">UPDATE 학부생<br/>SET 학과번호 = 999<br/>WHERE 담당관 LIKE ‘이%’;</div><br/>❶ \\<학부생\\> 테이블을 갱신하라.<br/>❷ ‘학과번호’를 999로 갱신하라.<br/>❸ ‘담당관’의 이름이 ‘이’로 시작하는 학부생을 대상으로 하라."
	        }
	    },
	    {
	        "id": 447721,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "<사원> 테이블에 있는 자료 중에서 ‘부서’가 “기획”인 자료를 검색하여 <기획부(성명, 경력, 주소, 기본급)> 테이블에 삽입하는 SQL문은?<br/>테이블 스키마",
	            "questionPassage": "사원(<span class=\"underline\">성명</span>, 부서, 경력, 주소, 기본급)",
	            "answer": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_046.png\"/>",
	            "solution": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_046.png\"/><br/>❶ \\<기획부\\> 테이블의 ‘성명’, ‘경력’, ‘주소’, ‘기본급’에 삽입하라.<br/>❷ 삽입할 자료 ‘성명’, ‘경력’, ‘주소’, ‘기본급’을 검색하라.<br/>❸ \\<사원\\> 테이블을 대상으로 하라.<br/>❹ ‘부서’가 “기획”인 튜플만을 대상으로 하라."
	        }
	    },
	    {
	        "id": 447722,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "다음 \\<학생\\> 테이블을 참고하여 \\<처리 조건\\>에서 요구하는 SQL문은?<br/>\\<학생\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_047.png\"/><br/>\\<처리 조건\\><br/><div class=\"border-block\">ㆍ3, 4학년의 학번, 이름을 조회한다.<br/>ㆍIN 예약어를 사용해야 한다.<br/>ㆍ속성명 아래의 괄호는 속성의 자료형을 의미한다.</div>",
	            "answer": "SELECT 학번, 이름 <br/>FROM 학생 <br/>WHERE 학년 IN (3, 4);",
	            "solution": "<div class=\"border-block\">SELECT 학번, 이름<br/>FROM 학생<br/>WHERE 학년 IN (3, 4);</div><br/>❶ ‘학번’, ‘이름’을 표시한다.<br/>❷ \\<학생\\> 테이블에서 검색한다.<br/>❸ ‘학년’의 값이 3 또는 4인 자료만을 대상으로 한다."
	        }
	    },
	    {
	        "id": 447723,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "학생(STUDENT) 테이블에 전기과 학생이 50명, 전산과 학생이 100명, 전자과 학생이 50명 있다고 할 때, 다음 SQL문의 실행 결과로 표시되는 튜플의 수는?(단, DEPT 필드는 학과를 의미한다).<br/><div class=\"border-block\">SELECT DEPT <br/>FROM STUDENT;</div>",
	            "answer": "200",
	            "solution": "<div class=\"border-block\">SELECT DEPT<br/>FROM STUDENT;</div><br/>❶ ‘DEPT’를 표시한다.<br/>❷ \\<STUDENT\\> 테이블에서 검색한다."
	        }
	    },
	    {
	        "id": 447724,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "학생(STUDENT) 테이블에 전기과 학생이 50명, 전산과 학생이 100명, 전자과 학생이 50명 있다고 할 때, 다음 SQL문의 실행 결과로 표시되는 튜플의 수는?(단, DEPT 필드는 학과를 의미한다).<br/><div class=\"border-block\">SELECT DISTINCT DEPT <br/>FROM STUDENT;</div>",
	            "answer": "3",
	            "solution": "<div class=\"border-block\">SELECT DISTINCT DEPT<br/>FROM STUDENT;</div><br/>❶ ‘DEPT’를 표시하되, 같은 ‘DEPT’ 속성의 값은 한 번만 표시한다.<br/>❷ \\<STUDENT\\> 테이블에서 검색한다."
	        }
	    },
	    {
	        "id": 447725,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "학생(STUDENT) 테이블에 전기과 학생이 50명, 전산과 학생이 100명, 전자과 학생이 50명 있다고 할 때, 다음 SQL문의 실행 결과로 표시되는 튜플의 수는?(단, DEPT 필드는 학과를 의미한다).<br/><div class=\"border-block\">SELECT COUNT(DISTINCT DEPT) <br/>FROM STUDENT <br/>WHERE DEPT = ‘전산과’;</div>",
	            "answer": "1",
	            "solution": "<div class=\"border-block\">SELECT COUNT(DISTINCT DEPT)<br/>FROM STUDENT;<br/>WHERE DEPT = ‘전산과’;</div><br/>❶ ‘DEPT’의 개수를 표시하되, 같은 ‘DEPT’ 속성의 값은 한 번만 계산한다.<br/>❷ \\<STUDENT\\> 테이블에서 검색한다.<br/>❸ ‘DEPT’가 “전산과”인 자료만을 대상으로 검색한다."
	        }
	    },
	    {
	        "id": 447726,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "관계 데이터베이스의 테이블 수강(학번, 과목명, 중간성적, 기말성적)에서 과목명이 “DB”인 모든 튜플들을 성적에 의해 정렬된 형태로 검색하고자 한다. 정렬 기준은 기말성적의 내림차순이며, 기말성적이 같은 경우 중간성적의 오름차순으로 정렬하고자 한다. 다음 SQL문의 괄호에 적합한 명령은?<br/><div class=\"border-block\">SELECT * FROM 수강 <br/>WHERE 과목명 = “DB”<br/>ORDER BY (         );</div>",
	            "answer": "기말성적 DESC, 중간성적 ASC",
	            "solution": "<div class=\"border-block\">SELECT *<br/>FROM 수강<br/>WHERE 과목명 = “DB”<br/>ORDER BY 기말성적 DESC, 중간성적 ASC;</div><br/>모든 속성을 표시한다.<br/>❶ \\<수강\\> 테이블을 대상으로 검색한다.<br/>❷ ‘과목명’이 “DB”인 자료만을 대상으로 검색한다.<br/>❸ ‘기말고사’를 기준으로 내림차순 정렬하고, ‘기말고사’가 같은 경우 ‘중간고사’를 기준으로 오름차순 정렬한다.<br/>※ 오름차순 정렬을 지정하는 ‘ASC’는 생략이 가능합니다."
	        }
	    },
	    {
	        "id": 447727,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "\\<Staff\\> 테이블과 \\<Shop\\> 테이블을 이용하여 직원 ‘id’가 10인 직원이 담당하는 상점의 이름(name)을 검색하는 SQL문을 작성하시오. (단, 중복되는 레코드는 한 번만 표시하고, 하위 질의를 이용하여 작성하시오.)<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_048.png\"/>",
	            "answer": "SELECT DISTINCT name<br/>FROM Shop<br/>WHERE id IN (<br/>   SELECT shopid<br/>   FROM Staff<br/>   WHERE id = 10);",
	            "solution": "<div class=\"border-block\">SELECT DISTINCT name<br/>FROM Shop<br/>WHERE id IN (<br/>   SELECT shopid<br/>   FROM Staff<br/>   WHERE id = 10);</div><br/>❶ ‘name’을 표시하되, 같은 ‘name’ 속성의 값은 한 번만 표시한다.<br/>❷ \\<Shop\\> 테이블에서 검색한다.<br/>❸ \\<Shop\\> 테이블의 ‘id’가 IN 다음에 쓰인 하위 질의의 검색 결과와 같은 자료만을 대상으로 한다.<br/>❹ ‘shopid’를 표시한다.<br/>❺ \\<Staff\\> 테이블에서 검색한다.<br/>❻ ‘id’가 10인 자료만을 대상으로 한다. 즉 ‘id’가 10인 자료의 ‘shopid’ 속성의 값이 표시된다.<br/>※ 조건절의 설명을 위해 4줄에 걸쳐 썼지만 보통 ‘WHERE id IN (SELECT shopid FROM Staff WHERE id = 10);’와 같이 한 줄로 입력합니다."
	        }
	    },
	    {
	        "id": 447728,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "\\<Product\\> 테이블에서 ‘price’의 속성 값이 NULL인 상품의 name을 오름차순으로 정렬하여 검색하는 SQL문을 작성하시오.<br/>\\<Product\\> 테이블<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_049.png\"/>",
	            "answer": "SELECT name<br/>FROM Product<br/>WHERE price IS NULL<br/>ORDER BY name;",
	            "solution": "<div class=\"border-block\">SELECT name<br/>FROM Product<br/>WHERE price IS NULL<br/>ORDER BY name;</div><br/>❶ ‘name’을 표시한다.<br/>❷ \\<Product\\> 테이블을 대상으로 검색한다.<br/>❸ ‘price’ 속성의 값이 NULL인, 즉 내용이 입력되지 않은 튜플만을 대상으로 검색한다.<br/>❹ ‘name’ 속성의 값을 기준으로 오름차순 정렬한다."
	        }
	    },
	    {
	        "id": 447729,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "\\<Sale\\> 테이블에서 판매량(psale)이 10~20 사이인 상품의 코드(pid)를 검색하는 SQL문을 작성하시오.<br/>\\<Sale\\> 테이블<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_050.png\"/>",
	            "answer": "SELECT pid<br/>FROM Sale<br/>WHERE psale BETWEEN 10 AND 20;",
	            "solution": "<div class=\"border-block\">SELECT pid<br/>FROM Sale<br/>WHERE psale BETWEEN 10 AND 20;</div><br/>❶ ‘pid’를 표시한다.<br/>❷ \\<Sale\\> 테이블을 대상으로 검색한다.<br/>❸ ‘psale’ 속성의 값이 10~20 사이인 자료만을 대상으로 한다.<br/>※ ‘psale BETWEEN 10 AND 20’ 대신 ‘psale >= 10 and psale <= 20’으로 입력해도 결과는 같습니다."
	        }
	    },
	    {
	        "id": 447730,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 \\<처리 조건\\>에 부합하는 SQL문을 작성하시오.<br/>\\<처리 조건\\><br/><div class=\"border-block\">1. 테이블명은 학생이다.<br/>2. 학생 테이블 구조<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_051.png\"/><br/>3. 학생 테이블에서 학년이 3학년 이상이고 점수가 80점 이상인 과목을 중복값을 제거하고 검색하시오.<br/>4. 명령문 마지막의 세미콜론(;)은 생략이 가능하다.</div>",
	            "answer": "SELECT DISTINCT 과목<br/>FROM 학생<br/>WHERE 학년>=3 AND 점수>=80;",
	            "solution": "<div class=\"border-block\">SELECT DISTINCT 과목<br/>FROM 학생<br/>WHERE 학년>=3 AND 점수>=80;</div><br/>❶ ‘과목’을 표시하되, 같은 ‘과목’은 한 번만 표시한다.<br/>❷ \\<학생\\> 테이블을 대상으로 한다.<br/>❸ ‘학년’ 속성의 값이 3 이상이고 ‘점수’ 속성의 값이 80 이상인 자료만을 대상으로 한다."
	        }
	    },
	    {
	        "id": 447731,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음의 조건을 만족하도록 괄호에 적합한 명령을 넣어 SQL문을 완성하면?<br/>\\<회사원\\> 테이블 속성<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_052.png\"/><br/>\\<조건\\><br/><div class=\"border-block\">회사원 테이블에서 사원명을 검색하는데, 조건은 연락번호가 Null이 아닌 사원명을 모두 찾는 것이다.</div><br/>\\<SQL\\><br/><div class=\"border-block\">SELECT 사원명 FROM 회사원 WHERE ( );</div>",
	            "answer": "연락번호 IS NOT NULL",
	            "solution": "<div class=\"border-block\">SELECT 사원명<br/>FROM 회사원<br/>WHERE 연락번호 IS NOT NULL;</div><br/>❶ ‘사원명’ 속성을 표시한다.<br/>❷ \\<회사원\\> 테이블을 대상으로 검색한다.<br/>❸ ‘연락번호’가 NULL이 아닌, 즉 ‘연락번호’에 값이 있는 자료만을 대상으로 검색한다."
	        }
	    },
	    {
	        "id": 447732,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "질의 내용에 대한 SQL문은?<br/>\\<질의\\><br/>학생 테이블에서 학과별 튜플의 개수를 검색하시오.<br/>(단, 아래의 실행 결과가 되도록 한다.)<br/>\\<학생\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_053.png\"/><br/>\\<실행결과\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_054.png\"/><br/>\\<처리 조건\\><br/><div class=\"border-block\">ㆍWHERE 조건절은 사용할 수 없다.<br/>ㆍGROUP BY는 반드시 포함한다.<br/>ㆍ집계함수(Aggregation Function)를 적용한다.<br/>ㆍ학과별튜플수 컬럼이름 출력에 Alias(AS)를 활용한다.<br/>ㆍ문장 끝의 세미콜론(;)은 생략해도 무방하다.<br/>ㆍ인용부호 사용이 필요한 경우 단일 따옴표( ‘ ’ : Single Quotation)를 사용한다.</div>",
	            "answer": "SELECT 학과, COUNT(*) AS 학과별튜플수 <br/>FROM 학생 <br/>GROUP BY 학과;",
	            "solution": "<div class=\"border-block\">SELECT 학과, COUNT(*) AS 학과별튜플수<br/>FROM 학생<br/>GROUP BY 학과;</div><br/>❶ ‘학과’와 개수를 표시하되, 개수는 ‘학과별튜플수’로 표시한다.<br/>❷ \\<학생\\> 테이블에서 검색한다.<br/>❸ ‘학과’를 기준으로 그룹을 지정한다."
	        }
	    },
	    {
	        "id": 447733,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "다음의 \\<성적\\> 테이블에서 과목별 점수의 평균이 90점 이상인 ‘과목이름’, ‘최소점수’, ‘최대점수’를 검색하고자 한다. \\<처리 조건\\>을 참고하여 적합한 SQL문을 작성하시오.<br/>\\<성적\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_055.png\"/><br/>\\<결과\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_056.png\"/><br/>\\<처리 조건\\><br/><div class=\"border-block\">ㆍWHERE문은 사용하지 않는다.<br/>ㆍGROUP BY와 HAVING을 이용한다.<br/>ㆍ집계함수(Aggregation Function)를 사용하여 명령문을 구성한다.<br/>ㆍ‘최소점수’, ‘최대점수’는 별칭(Alias)을 위한 AS문을 이용한다.<br/>ㆍ명령문 마지막의 세미콜론(;)은 생략이 가능하다.<br/>ㆍ인용 부호가 필요한 경우 작은 따옴표(‘ ’)를 사용한다.</div>",
	            "answer": "SELECT 과목이름, MIN(점수) AS 최소점수, MAX(점수) AS 최대점수 FROM 성적 GROUP BY 과목이름 HAVING AVG(점수) >= 90;",
	            "solution": "<div class=\"border-block\">SELECT 과목이름, MIN(점수) AS 최소점수, MAX(점수) AS 최대점수<br/>FROM 성적<br/>GROUP BY 과목이름<br/>HAVING AVG(점수) >= 90;</div><br/>❶ ‘과목이름’, ‘점수’의 최소값, ‘점수’의 최대값을 표시하되, ‘점수’의 최소값은 ‘최소점수’로, ‘점수’의 최대값은 ‘최대점수’로 표시한다.<br/>❷ \\<성적\\> 테이블에서 검색한다.<br/>❸ ‘과목이름’을 기준으로 그룹을 지정한다.<br/>❹ 각 그룹의 ‘점수’의 평균이 90보다 크거나 같은 그룹만을 표시한다."
	        }
	    },
	    {
	        "id": 447734,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 조건에 맞는 SQL문은? 단, 검색 결과는 다음과 같다.<br/>\\<학생정보\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_057.png\"/><br/>\\<신청정보\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_058.png\"/><br/>\\<조건\\><br/><div class=\"border-block\">ㆍ\\<학생정보\\> 테이블의 ‘학번’과 \\<신청정보\\> 테이블의 ‘학번’이 같고, ‘신청과목’이 “Java”인 학생들만을 대상으로 ‘이름’, ‘전공’, ‘신청과목’을 검색하려 한다.<br/>ㆍ검색된 데이터는 ‘이름’, ‘전공’, ‘신청과목’을 기준으로 그룹을 지정하되 ‘전공’이 “컴퓨터공학”인 그룹만 표시하려 한다.</div><br/>\\<검색 결과\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_059.png\"/>",
	            "answer": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_060.png\"/>",
	            "solution": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_060.png\"/><br/>❶ ‘이름’, ‘전공’, ‘신청과목’을 표시한다.<br/>❷ \\<학생정보\\>와 \\<신청정보\\> 테이블을 대상으로 검색한다.<br/>❸ \\<학생정보\\> 테이블의 ‘학번’과 \\<신청정보\\> 테이블의 ‘학번’이 같고 ‘신청과목’이 “Java”인 학생만을 대상으로 한다.<br/>❹ ‘이름’, ‘전공’, ‘신청과목’을 기준으로 그룹을 지정한다.<br/>❺ 그룹 중 ‘전공’이 “컴퓨터공학”인 학생만을 표시한다."
	        }
	    },
	    {
	        "id": 447735,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "\\<결제\\> 테이블을 이용하여 결제여부별 학생수를 검색하는 SQL문을 작성하면? 검색 결과는 다음과 같다.<br/>\\<결제\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_061.png\"/><br/>\\<검색 결과\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_062.png\"/>",
	            "answer": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_063.png\"/>",
	            "solution": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_063.png\"/><br/>❶ ‘결제여부’와 개수를 표시하되, 개수는 ‘학생수’로 표시한다.<br/>❷ \\<결제\\> 테이블을 대상으로 검색한다.<br/>❸ ‘결제여부’를 기준으로 그룹을 지정한다."
	        }
	    },
	    {
	        "id": 447736,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "\\<Sale\\> 테이블과 \\<Product\\> 테이블을 이용하여 상품명(name)이 “USB”로 시작하는 상품의 판매량(psale) 합계를 검색하는 SQL문을 작성하시오. (단, 하위 질의를 이용하여 작성하시오.)<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_064.png\"/>",
	            "answer": "SELECT SUM(psale)<br/>FROM Sale<br/>WHERE pid IN (<br/>   SELECT id<br/>   FROM Product<br/>   WHERE name LIKE ‘USB%’);",
	            "solution": "<div class=\"border-block\">SELECT SUM(psale)<br/>FROM Sale<br/>WHERE pid IN (<br/>   SELECT id<br/>   FROM Product<br/>   WHERE name LIKE ‘USB%’);</div><br/>❶ ‘psale’의 합계를 표시한다.<br/>❷ \\<Sale\\> 테이블을 대상으로 검색한다.<br/>❸ \\<Sale\\> 테이블의 ‘pid’가 IN 다음에 쓰인 하위 질의의 결과와 같은 자료만을 대상으로 한다.<br/>❹ ‘id’를 표시한다.<br/>❺ \\<Product\\> 테이블에서 검색한다.<br/>❻ ‘name’이 “USB”로 시작하는 자료만을 대상으로 한다. 즉 ‘name’이  “USB”로 시작하는 자료의 ‘id’ 속성의 값이 표시된다."
	        }
	    },
	    {
	        "id": 447737,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "테이블 지점정보(지점코드, 소속도시, 매출액)에 대해 다음의 조건을 만족하도록 괄호(①~③)에 적합한 명령을 넣어 SQL문을 완성하시오.<br/>\\<조건\\><br/><div class=\"border-block\">지점이 세 군데 이상 있는 도시에 대해 각 도시별로 그 도시에서 매출액이 1,000을 초과하는 지점들의 평균 매출액을 구하시오.</div><br/>\\<SQL문\\><br/><div class=\"border-block\">SELECT 소속도시, AVG(매출액)<br/>FROM 지점정보 WHERE ( ① )<br/>GROUP BY ( ② )<br/>HAVING COUNT( * ) \\>= ( ③ );</div>",
	            "answer": "① 매출액 > 1000 <br/>② 소속도시 <br/>③ 3",
	            "solution": "<div class=\"border-block\">SELECT 소속도시, AVG(매출액)<br/>FROM 지점정보<br/>WHERE 매출액 > 1000<br/>GROUP BY 소속도시<br/>HAVING COUNT( * ) >= 3;</div><br/>❶ ‘소속도시’, ‘매출액’의 평균을 표시한다.<br/>❷ \\<지점정보\\> 테이블을 대상으로 검색한다.<br/>❸ ‘매출액’이 1,000을 초과하는 레코드만을 대상으로 한다.<br/>❹‘소속도시’를 기준으로 그룹을 지정한다.<br/>❺ 그룹으로 지정한 ‘소속도시’의 수가 3 이상인 그룹만을 표시한다."
	        }
	    },
	    {
	        "id": 447738,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "\\<장학금\\> 테이블에 대해 \\<결과\\>와 같이 표시되도록 괄호(①~③)에 적합한 명령을 넣어 SQL문을 완성하면?<br/>\\<장학금\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_065.png\"/><br/>\\<SQL\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_066.png\"/><br/>\\<결과\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_067.png\"/>",
	            "answer": "① 장학내역 <br/>② 장학금 <br/>③ NUM",
	            "solution": "<div class=\"border-block\">SELECT 장학내역, 장학금, ROW_NUMBER( ) OVER<br/>(PARTITION BY 장학내역<br/>ORDER BY 장학금 DESC)<br/>AS NUM<br/>FROM 장학금;</div><br/>❶ ‘장학내역’, ‘장학금’, 일련 번호를 표시한다.<br/>❷ ‘장학내역’별로 묶어서 표시한다.<br/>❸ ‘장학내역’ 안에서는 ‘장학금’을 기준으로 내림차순 정렬한다.<br/>❹ 일련 번호를 표시할 필드명을 ‘NUM’으로 지정한다.<br/>❺ \\<장학금\\> 테이블을 대상으로 검색한다."
	        }
	    },
	    {
	        "id": 447739,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "\\<장학금\\> 테이블에 대해 \\<결과\\>와 같이 표시되도록 괄호(①~③)에 적합한 명령을 넣어 SQL문을 완성하면?<br/>\\<장학금\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_065.png\"/><br/>\\<SQL\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_068.png\"/><br/>\\<결과\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_069.png\"/>",
	            "answer": "① 학과 <br/>② 장학내역 <br/>③ SUM(장학금)",
	            "solution": "<div class=\"border-block\">SELECT 학과, 장학내역, SUM(장학금) AS 장학금합계<br/>FROM 장학금<br/>GROUP BY ROLLUP(학과, 장학내역);</div><br/>❶ ‘학과’, ‘장학내역’, ‘장학금’의 합계를 표시하되, 합계의 이름은 ‘장학금합계’로 표시한다.<br/>❷ \\<장학금\\> 테이블을 대상으로 검색한다.<br/>❸ ‘학과’와 ‘장학내역’을 기준으로 그룹을 지정하여 소계와 전체 합계를 구한다."
	        }
	    },
	    {
	        "id": 447740,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "SQL(Structured Query Language)에 관한 다음 설명에서 괄호에 공통으로 들어갈 알맞은 용어는?",
	            "questionPassage": "ㆍ(      )은 2개의 릴레이션에서 연관된 튜플들을 결합하여, 하나의 새로운 릴레이션을 반환한다.<br/>ㆍ(      )은 크게 INNER (      )과 OUTER (      )으로 구분된다.<br/>ㆍ(      )은 일반적으로 FROM절에 기술하지만, 릴레이션이 사용되는 곳 어디서나 사용할 수 있다.",
	            "answer": "조인(Join)"
	        }
	    },
	    {
	        "id": 447741,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음은 \\<학생\\> 테이블과 \\<학과\\> 테이블에서 ‘학과코드’ 값이 같은 튜플을 JOIN하는 SQL문이다. 괄호에 들어갈 알맞은 예약어는?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_070.png\"/><br/>\\<SQL문\\><br/><div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_071.png\"/></div>",
	            "answer": "WHERE",
	            "solution": "<div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_074.png\"/></div><br/>❶ ‘학번’, ‘이름’, ‘학과코드’, ‘학과명’을 표시한다. ‘학과코드’ 속성은 여러 테이블에 있으므로 테이블명을 지정해야 한다. ‘학과.학과코드’를 입력해도 결과는 같다.<br/>❷ \\<학생\\>과 \\<학과\\> 테이블을 대상으로 검색한다.<br/>❸ \\<학생\\> 테이블의 ‘학과코드’와 \\<학과\\> 테이블의 ‘학과코드’가 같은 튜플만을 대상으로 한다."
	        }
	    },
	    {
	        "id": 447742,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음은 \\<학생\\> 테이블과 \\<학과\\> 테이블에서 ‘학과코드’ 값이 같은 튜플을 JOIN하는 SQL문이다. 괄호에 들어갈 알맞은 예약어는?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_070.png\"/><br/>\\<SQL문\\><br/><div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_072.png\"/></div>",
	            "answer": "NATURAL JOIN",
	            "solution": "<div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_075.png\"/></div><br/>❶ ‘학번’, ‘이름’, ‘학과코드’, ‘학과명’을 표시한다.<br/>❷ \\<학생\\> 테이블과 \\<학과\\> 테이블에서 같은 속성을 기준으로 JOIN한다."
	        }
	    },
	    {
	        "id": 447743,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음은 \\<학생\\> 테이블과 \\<학과\\> 테이블에서 ‘학과코드’ 값이 같은 튜플을 JOIN하는 SQL문이다. 괄호에 들어갈 알맞은 예약어는?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_070.png\"/><br/>\\<SQL문\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_073.png\"/>",
	            "answer": "USING",
	            "solution": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_076.png\"/><br/>❶ ‘학번’, ‘이름’, ‘학과코드’, ‘학과명’을 표시한다.<br/>❷ \\<학생\\> 테이블과 <학과> 테이블에서 ‘학과코드’를 기준으로 JOIN한다."
	        }
	    },
	    {
	        "id": 447744,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "DBMS에서 시스템의 주간 마감, 일일 마감 작업 등 주로 일괄 작업에 사용되며, 데이터베이스에 저장되어 수행된다. DECLARE, CONTROL, SQL, EXCEPTION 등의 구성 요소로 이루어져 있고, EXECUTE 또는 CALL 명령어로 실행되는 절차형 SQL은?",
	            "answer": "프로시저(Procedure) 또는 스토어드 프로시저(Stored Procedure)"
	        }
	    },
	    {
	        "id": 447745,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 \\<처리 조건\\>과 \\<SQL\\>을 확인하고 괄호(①~③)에 적합한 명령을 넣어 SQL문을 완성하면?<br/>\\<처리 조건\\><br/><div class=\"border-block\">ㆍ프로시저 score_count를 생성하며 동일한 이름의 프로시저가 존재하는 경우 기존의 프로시저를 대체한다.<br/>ㆍ파라미터로 전달받은 정수는 변수 sc에 저장하여 처리되며 어떠한 값도 반환하지 않는다.<br/>ㆍ지역변수로 정수형 변수 a를 사용한다.<br/>ㆍ프로시저가 실행되면 \\<score\\> 테이블의 ‘cond’ 속성의 값이 sc보다 크거나 같은 튜플의 개수를 조회하여 \\<total\\> 테이블의 ‘mem_count’ 속성에 입력한다.</div><br/>\\<SQL\\><br/><div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_077.png\"/></div>",
	            "answer": "① OR REPLACE <br/>② IN <br/>③ BEGIN",
	            "solution": "<div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_078.png\"/></div><br/>❶ 호출 프로그램이 전달하는 값을 ‘sc’에 저장한 후 사용하는 프로시저 score_count’를 생성한다. 동일한 이름의 프로시저가 있는 경우 대체한다.<br/>❷ 변수를 선언하는 예약어로 그대로 입력한다.<br/>❸ 정수형 변수 a를 선언한다.<br/>❹ 프로시저 BODY의 시작이다. ❺부터 ❼까지가 하나의 블록이 된다.<br/>❺ \\<score\\> 테이블의 ‘cond’ 속성의 값이 sc보다 크거나 같은 튜플의 개수를 a에 저장한다.<br/>❻ \\<total\\> 테이블의 ‘mem_count’ 속성에 a의 값을 입력한다.<br/>❼ 변경된 내역을 반영한다.<br/>❽ 프로시저 BODY를 종료한다."
	        }
	    },
	    {
	        "id": 447746,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "데이터베이스 시스템에서 삽입, 갱신, 삭제 등의 이벤트가 발생할 때마다 관련 작업이 자동으로 수행되는 절차형 SQL은?",
	            "answer": "트리거(Trigger)"
	        }
	    },
	    {
	        "id": 447747,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음은 <사원> 테이블이 갱신(UPDATE)될 때, 갱신된 튜플마다 ‘태도’, ‘성과’ 속성의 평균을 계산하여 50 이상이면 “우수”를, 아니면 “미달”을 화면에 출력하는 트리거(Trigger)를 정의한 것이다. 트리거가 올바르게<br/>구현될 수 있도록 괄호(①, ②)에 적합한 명령을 넣어 SQL문을 완성하면?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_079.png\"/>",
	            "solution": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_080.png\"/><br/>❶ \\<사원\\> 테이블에 튜플을 갱신한 후에 동작하는 트리거 ‘사원_tri’를 생성한다.<br/>❷ 각각의 모든 튜플을 대상으로 트리거를 수행한다.<br/>❸ ‘태도’, ‘성과’ 속성의 평균이 50 이상이면 우수를 화면에 출력하고,<br/>❹ 아니면 미달을 화면에 출력한다.<br/>❺ IF문의 끝"
	        }
	    },
	    {
	        "id": 447748,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 가장 부합하는 절차형 SQL의 종류는?",
	            "questionPassage": "ㆍ일련의 작업을 연속적으로 처리하며, 종료 시 처리 결과를 단일값으로 반환한다.<br/>ㆍ데이터베이스에 저장되어 DML문의 호출에 의해 실행된다.<br/>ㆍRETURN을 통해 값을 반환하기 때문에 출력 파라미터가 존재하지 않는다.",
	            "answer": "사용자 정의 함수"
	        }
	    },
	    {
	        "id": 447749,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음은 ‘idx’를 전달받아 \\<product\\> 테이블의 ‘s_id’ 속성과 일치하는 튜플의 ‘s_name’ 속성의 값을 반환하는 사용자 정의 함수를 구현한 것이다. 사용자 정의 함수가 올바르게 구현될 수 있도록 괄호에 공통적으로 들어갈 명령은?<br/><div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_081.png\"/></div>",
	            "answer": "RETURN",
	            "solution": "<div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_082.png\"/></div><br/>❶ 호출 프로그램이 전달한 값을 ‘idx’에 저장한 후 사용하는 사용자 정의 함수 ‘Find_Name’을 생성한다.<br/>❷ 블록에서 리턴할 데이터의 자료형을 정의한다.<br/>❸ 10자리 크기의 문자열 변수 a를 선언한다.<br/>❹ \\<product\\> 테이블의 ‘s_id’와 idx가 일치하는 튜플의 ‘s_name’의 값을 a에 저장한다.<br/>❺ a의 값을 반환한다."
	        }
	    },
	    {
	        "id": 447750,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 \\<처리 조건\\>을 참고하여 SQL문이 올바르게 구현될 수 있도록 \\<SQL\\>의 괄호(①, ②)에 적합한 명령을 넣어 SQL문을 완성하시오.<br/>\\<처리 조건\\><br/><div class=\"border-block\">1. \\<사원\\> 테이블과 \\<사원정보\\> 테이블의 구조는 다음과 같다.<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_083.png\"/><br/>2. \\<사원\\> 테이블과 사용자 정의 함수를 이용하여 \\<사원정보\\> 테이블에 튜플을 삽입한다.<br/>3. ‘F_Sex’는 사원번호를 인수로 받아 성별을 반환하는 사용자 정의 함수이다.<br/>4. ‘F_Dept’는 사원번호를 인수로 받아 부서를 반환하는 사용자 정의 함수이다.</div><br/>\\<SQL\\><br/><div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_084.png\"/></div>",
	            "answer": "① F_Sex(사원번호) <br/>② F_Dept(사원번호)",
	            "solution": "<div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_085.png\"/></div><br/>❶ \\<사원정보\\> 테이블에 삽입한다.<br/>❷ ‘사원번호’, ‘이름’, ‘사원번호’를 인수로 사용자 정의 함수 F_Sex, F_Dept를 실행한 결과를 삽입한다.<br/>❸ \\<사원\\> 테이블을 대상으로 한다."
	        }
	    },
	    {
	        "id": 447751,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 PL/SQL로 구현된 절차형 SQL을 분석하여 그 실행 결과는?<br/><div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_086.png\"/></div>",
	            "answer": "36",
	            "solution": "<div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_087.png\"/></div><br/>❶ ❷~❺번 사이의 문장을 반복하여 수행한다.<br/>❷ i_begin의 값을 1씩 증가시킨다.<br/>❸ i_begin을 2로 나눈 나머지가 0이면 ❹번을 수행한다.<br/>※ MOD(A, B) : A를 B로 나눈 나머지를 반환하는 내장 함수<br/>❹ i_begin의 값을 i_sum에 누적시킨다.<br/>❺ i_begin이 i_end보다 크거나 같으면 LOOP문을 빠져나간다.<br/>❻ 결과 : 36<br/>※ 각 변수의 값의 변화는 다음과 같습니다.<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_088.png\"/>"
	        }
	    },
	    {
	        "id": 447752,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음은 \\<학생\\> 테이블에서 ‘국어’, ‘영어’ 점수의 평균이 20점 이하인 학생의 ‘학생코드’와 ‘이름’을 출력하는 절차형 SQL을 PL/SQL로 구현한 것이다. 괄호(①, ②)에 적합한 명령을 넣어 SQL문을 완성하면?<br/><div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_089.png\"/></div>",
	            "answer": "① cs_stu <br/>② NOTFOUND",
	            "solution": "<div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_091.png\"/></div>❶ ‘국어’, ‘영어’의 평균이 20 이하인 튜플들을 메모리에 저장한 후, 그 시작 위치를 가리키는 커서 cs_stu를 선언한다.<br/>❷ 커서 cs_stu를 연다.<br/>❸ ❹~❻번 문장을 반복하여 수행한다.<br/>❹ 커서 cs_stu로부터 데이터를 가져와 i_학생코드와 c_이름에 저장한다.<br/>❺ cs_stu에서 더 불러올 값이 없으면 LOOP문을 빠져나가 ❽번으로 이동한다.<br/>❻ i_학생코드의 값을 출력한 후 뒤에 공백을 한 칸(‘ ’) 출력하고, 그 뒤에 c_이름의 값을 출력한다.<br/>※ ||는 값이나 문자를 이어서 출력할 때 사용한다.<br/>❼ LOOP문의 끝이다.<br/>❽ 커서 cs_stu를 닫는다."
	        }
	    },
	    {
	        "id": 447753,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "절차형 SQL에서 데이터베이스의 자원에 접근하기 위해 사용하는 커서(Cursor)에 대해 간략히 서술하면?",
	            "answer": "커서는 <span class=\"underline\">쿼리문의 처리 결과가 저장되어 있는 메모리 공간을 가리키는 포인터(Pointer)</span>이다."
	        }
	    },
	    {
	        "id": 447754,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음의 설명에서 괄호에 공통적으로 들어갈 가장 적합한 용어는?",
	            "questionPassage": "(      )은 웹 서버(Web Server)와 웹 어플리케이션 서버(WAS)로 구성되며, 서비스 규모가 작은 경우 웹 서버와 웹 애플리케이션 서버를 통합하여 하나의 서버만으로 운용할 수 있다. 사용자가 DBMS로부터 데이터를 얻기 위해서는 (      )을 통해야 한다.",
	            "answer": "웹 응용 시스템"
	        }
	    },
	    {
	        "id": 447755,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "JAVA Standard Edition에 포함되어 있는 DBMS 접속 기술로, 1997년 2월 Sun Microsystems에서 개발하였으며, Java 언어로 다양한 종류의 데이터베이스에 접속하고 SQL문을 수행할 때 사용되는 표준 API는?",
	            "answer": "JDBC(Java DataBase Connectivity)"
	        }
	    },
	    {
	        "id": 447756,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음의 설명에 가장 부합하는 DBMS 접속 기술은?",
	            "questionPassage": "ㆍSQL Mapping 기반 오픈 소스 접속 프레임워크이다.<br/>ㆍJDBC로 데이터베이스에 접속하려면 다양한 메소드를 호출하고 해제해야 하는데, 이를 간소화 했고 접속 기능을 더욱 강화하였다.<br/>ㆍSQL 문장을 분리하여 XML 파일을 만들고, Mapping을 통해 SQL을 실행한다.<br/>ㆍSQL을 거의 그대로 사용할 수 있어 SQL 친화적인 국내 환경에 적합하여 많이 사용된다.",
	            "answer": "MyBatis"
	        }
	    },
	    {
	        "id": 447757,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "데이터베이스 접속 기술 중 동적 SQL(Dynamic SQL)에 대해 간략히 서술하면?",
	            "answer": "동적 <span class=\"underline\">SQL은 다양한 조건에 따라 SQL 구문을 동적으로 변경하여 처리할 수 있는 SQL 처리 방식</span>이다."
	        }
	    },
	    {
	        "id": 447758,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "DDL로 생성된 개체들의 속성, 자료형, 옵션 등의 정보를 확인하는데 사용하는 SQL 명령어로, 개체가 의도에 맞게 올바르게 생성되었는지 확인하는데 사용하는 명령어는?",
	            "answer": "DESCRIBE 또는 DESC"
	        }
	    },
	    {
	        "id": 447759,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "SQL 테스트에 대한 다음 설명에서 괄호에 공통으로 들어갈 알맞은 용어는?",
	            "questionPassage": "ㆍ프로시저, 사용자 정의 함수, 트리거 등의 절차형 SQL의 테스트는 (      )을 통해 기능의 적합성 여부를 검증한 후, 실행을 통해 결과를 확인하는 테스트를 수행한다.<br/>ㆍ(      )은 오류를 잡기 위해 소스 코드를 한 줄 한 줄 추적해 가며 변수 값의 변화를 검사하는 작업이다.",
	            "answer": "디버깅(Debugging)"
	        }
	    },
	    {
	        "id": 447760,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "데이터베이스 기술과 관련한 다음 설명에 해당하는 용어는?",
	            "questionPassage": "ㆍOOP(Object-Oriented Programming)의 객체와 RDB(Relational DataBase)를 연결하는 기술이다.<br/>ㆍSQL 코드를 입력하지 않고 프로그래밍 코드와 데이터베이스를 연결하는 것이 가능하다.<br/>ㆍ중복되는 코드를 생략할 수 있어 코드를 간결하게 작성할 수 있다.",
	            "answer": "ORM(Object-Relational Mapping)"
	        }
	    },
	    {
	        "id": 447761,
	        "templateId": 9,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★☆☆☆",
	            "question": "다음에 ORM 프레임워크에 해당하는 소프트웨어를 모두 고르면?",
	            "questionPassage": [
	                "ⓐ JPA",
	                "ⓑJDBC",
	                "ⓒ iBatis",
	                "ⓓ Eclipse",
	                "ⓔ Hibernate"
	            ],
	            "answer": [
	                "1",
	                "5"
	            ]
	        }
	    },
	    {
	        "id": 447762,
	        "templateId": 9,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★☆☆☆☆",
	            "question": "다음에 ORM 프레임워크에 해당하는 소프트웨어를 모두 고르면?",
	            "questionPassage": [
	                "ⓐ ODBC",
	                "ⓑ Doctrine",
	                "ⓒ Oracle",
	                "ⓓ PL/SQL"
	            ],
	            "answer": [
	                "2"
	            ]
	        }
	    },
	    {
	        "id": 447763,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "데이터베이스 관리 시스템(DBMS)에서 쿼리 실행 시 사용되는 옵티마이저(Optimizer)에 대해 간략히 서술하면?",
	            "answer": "옵티마이저는 <span class=\"underline\">작성된 SQL이 가장 효율적으로 수행되도록 최적의 경로를 찾아 주는 모듈</span>이다."
	        }
	    },
	    {
	        "id": 447764,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "옵티마이저의 한 종류로, 쿼리의 입·출력 속도, CPU 사용량, 블록 개수, 개체의 속성, 튜플 개수 등을 종합하여 산출되는 비용을 기반으로 쿼리가 가장 효율적으로 수행되는 최적의 경로를 찾는 모듈의 영문 약어 또는 풀네임(Full-name)은?",
	            "answer": "CBO(Cost Based Optimizer)"
	        }
	    },
	    {
	        "id": 447765,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "\\<직원\\> 테이블을 삭제하는 SQL문은?",
	            "answer": "DROP TABLE 직원;",
	            "solution": "<div class=\"border-block\">DROP TABLE 직원;</div><br/>\\<직원\\> 테이블을 제거한다."
	        }
	    },
	    {
	        "id": 447766,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 \\<요구사항\\>을 만족하는 \\<직원\\> 테이블을 정의하는 SQL문은?<br/>\\<요구사항\\>",
	            "questionPassage": "ㆍ‘사번(문자 15)’, ‘이름(문자 4)’, ‘전화번호(문자 20)’, ‘부서번호(문자 10)’, ‘경력(숫자)’, ‘기본급(숫자)’ 속성을 가진다.<br/>ㆍ‘사번’ 속성은 기본키이다.<br/>ㆍ‘이름’은 반드시 입력하여야 한다.<br/>ㆍ\\<직원\\> 테이블의 ‘부서번호’는 \\<부서\\> 테이블에 있는 ‘부서번호’를 참조한다.<br/>ㆍ‘기본급’은 최소한 1,000,000원 이상이어야 한다.<br/>ㆍ‘전화번호’는 중복될 수 없다.",
	            "answer": "<div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_092.png\"/></div>",
	            "solution": "<div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_092.png\"/></div>❶ 생성한 테이블 이름은 \\<직원\\>이다.<br/>❷ ‘사번’ 속성은 문자 15자리이다.<br/>❸ ‘이름’ 속성은 문자 4자리인데, NULL 값을 가질 수 없다.<br/>❹ ‘전화번호’ 속성은 문자 20자리이다.<br/>❺ ‘부서번호’ 속성은 문자 10자리이다.<br/>❻ ‘경력’ 속성은 숫자이다.<br/>❼ ‘기본급’ 속성은 숫자이다.<br/>❽ ‘사번’ 속성은 기본키이다.<br/>❾ ‘전화번호’ 속성은 중복된 값을 가질 수 없다.<br/>❿ ‘부서번호’ 속성은 \\<부서\\> 테이블의 ‘부서번호’를 참조하는 외래키이다.<br/>⓫ ‘기본급’ 속성은 숫자이다.<br/>⓬ ‘사번’ 속성은 기본키이다.<br/>⓭ ‘전화번호’ 속성은 중복된 값을 가질 수 없다.<br/>⓮ ‘기본급’ 속성은 1000000보다 크거나 같은 값을 가져야 한다."
	        }
	    },
	    {
	        "id": 447767,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "\\<사원\\> 테이블의 모든 데이터를 검색하는 SQL문은?",
	            "answer": "SELECT *<br/>FROM 사원;",
	            "solution": "<div class=\"border-block\">SELECT *<br/>FROM 사원;</div><br/>❶ 모든 속성을 표시한다.<br/>❷ \\<사원\\> 테이블을 대상으로 검색한다."
	        }
	    },
	    {
	        "id": 447768,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "자격증 취득 경력이 3년 이상인 사원의 ‘이름’을 검색하되, 같은 이름은 한 번만 나오게 하는 SQL문은? 검색 결과는 다음과 같다.<br/>\\<자격증\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_093.png\"/><br/>\\<검색 결과\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_094.png\"/>",
	            "answer": "SELECT DISTINCT 이름<br/>FROM 자격증<br/>WHERE 경력 >= 3;",
	            "solution": "<div class=\"border-block\">SELECT DISTINCT 이름<br/>FROM 자격증<br/>WHERE 경력 >= 3;</div><br/>❶ ‘이름’을 표시하되, 같은 ‘이름’은 한 번만 표시한다.<br/>❷ \\<자격증\\> 테이블을 대상으로 검색한다.<br/>❸ ‘경력’이 3 이상인 자료만을 대상으로 검색한다."
	        }
	    },
	    {
	        "id": 447769,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "하위 질의를 이용하여 사원 중에 자격증이 없는 사원의 ‘이름’, ‘재직년도’, ‘기본급’을 검색하는 SQL문은? 검색 결과는 다음과 같다.<br/>\\<사원\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_095.png\"/><br/>\\<자격증\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_093.png\"/><br/>\\<검색 결과\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_096.png\"/>",
	            "answer": "<div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_097.png\"/></div>",
	            "solution": "<div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_097.png\"/></div>❶ ‘이름’, ‘재직년도’, ‘기본급’을 표시한다.<br/>❷ \\<사원\\> 테이블을 대상으로 검색한다.<br/>❸ \\<자격증\\> 테이블에 ‘이름’이 NOT IN 다음에 쓰인 하위 질의의 결과에 없는 자료만을 대상으로 한다.<br/>❹ ‘이름’을 표시한다.<br/>❺ \\<자격증\\> 테이블에서 검색한다. 즉, <자격증> 테이블의 ‘이름’을 표시한다."
	        }
	    },
	    {
	        "id": 447770,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "자격증을 2개 이상 가진 사원의 ‘이름’을 검색하는 SQL문은? 검색 결과는 다음과 같다.<br/>\\<자격증\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_093.png\"/><br/>\\<검색 결과\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_098.png\"/>",
	            "answer": "SELECT 이름<br/>FROM 자격증<br/>GROUP BY 이름<br/>HAVING COUNT(*) >= 2;",
	            "solution": "<div class=\"border-block\">SELECT 이름<br/>FROM 자격증<br/>GROUP BY 이름<br/>HAVING COUNT(*) >= 2;</div><br/>❶ ‘이름’을 표시한다.<br/>❷ \\<자격증\\> 테이블을 대상으로 검색한다.<br/>❸ ‘이름’을 기준으로 그룹을 지정한다.<br/>❹ 그룹 중 개수가 2개 이상인 자료만을 표시한다. 즉 자격증이 2개 이상인 사원의 ‘이름’을 검색한다."
	        }
	    },
	    {
	        "id": 447771,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "\\<학생\\> 테이블에서 3학년 학생에 대한 모든 속성을 추출한 \\<3학년학생\\> 뷰를 정의하는 SQL문은? (단, \\<3학년학생\\> 뷰는 갱신이나 삽입 연산이 수행될 때 뷰 정의 조건을 따라야 한다.)",
	            "questionPassage": "테이블 스키마<br/>학생(<span class=\"underline\">학번</span>, 주민등록번호, 이름, 학년, 전화번호, 주소)",
	            "answer": "CREATE VIEW 3학년학생<br/>AS SELECT *<br/>FROM 학생<br/>WHERE 학년 = 3<br/>WITH CHECK OPTION;",
	            "solution": "<div class=\"border-block\">CREATE VIEW 3학년학생<br/>AS SELECT *<br/>FROM 학생<br/>WHERE 학년 = 3<br/>WITH CHECK OPTION;</div>❶ 생성한 뷰의 이름은 \\<3학년학생\\>이다.<br/>❷ 모든 속성을 가져온다.<br/>❸ \\<학생\\> 테이블에서 속성을 가져온다.<br/>❹ ‘학년’이 3인 학생만을 대상으로 한다.<br/>❺ 생성된 \\<3학년학생\\> 뷰에 갱신이나 삽입 연산 수행 시 뷰의 정의 조건(학년이 3학년)을 위배하면 실행을 거절한다."
	        }
	    },
	    {
	        "id": 447772,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "\\<강좌\\> 테이블과 \\<교수\\> 테이블에서 ‘교수번호’가 같은 튜플을 조인하여 ‘강좌명’, ‘강의실’, ‘수강제한인원’, ‘교수이름’ 속성을 갖는 \\<강좌교수\\> 뷰를 정의하는 SQL문은?<br/>테이블 스키마<br/><div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_099.png\"/></div>",
	            "answer": "<div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_100.png\"/></div>",
	            "solution": "<div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_100.png\"/></div>❶ 생성한 뷰의 이름은 \\<강좌교수\\>로, ‘강좌명’, ‘강의실’, ‘수강제한인원’, ‘교수이름’으로 속성을 표시한다.<br/>❷ ‘강좌명’, ‘강의실’, ‘수강인원’, ‘이름’ 속성을 가져온다.<br/>❸ \\<강좌\\> 테이블과 \\<교수\\> 테이블에서 속성을 가져온다.<br/>❹ \\<강좌\\> 테이블의 ‘교수번호’와 \\<교수\\> 테이블의 ‘교수번호’가 같은 자료만을 대상으로 한다."
	        }
	    },
	    {
	        "id": 447773,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에서 괄호에 들어갈 가장 적합한 DCL(Data Control Language)의 명령어는?",
	            "questionPassage": "(       )은 트랜잭션의 모든 변경 내용들을 영구적으로 데이터베이스에 반영하는 명령어이다. 트랜잭션이 성공적으로 끝나면 데이터베이스가 새로운 일관성(Consistency) 상태를 가지기 위해 수행된 모든 변경을 데이터베이스에 반영하여 (      )하여야 한다.",
	            "answer": "commit "
	        }
	    },
	    {
	        "id": 447774,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에서 괄호에 들어갈 가장 적합한 DCL(Data Control Language)의 명령어는?",
	            "questionPassage": "(       )은 변경된 모든 내용들을 취소하고 데이터베이스를 이전 상태로 되돌리는 명령어이다. 트랜잭션의 일부를 성공적으로 끝내지 못하면 데이터베이스가 비일관성(Inconsistency)인 상태를 가질 수 있기 때문에(즉 트랜잭션이 수행한 일부 변경이 데이터베이스에 반영될 가능성이 있기 때문에) 일부분만 완료된 트랜잭션은 (         )되어야 한다.",
	            "answer": "rollback "
	        }
	    },
	    {
	        "id": 447775,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "DCL(Data Control Language) 명령어 중 (   ①     )는 데이터베이스 관리자가 데이터베이스 사용자에게 권한을 부여하는 명령어이며, (  ②  )는 권한을 취소하기 위한 명령어이다. ",
	            "answer": "① grant <br/>② revoke "
	        }
	    },
	    {
	        "id": 447776,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": " grant와 revoke의 추가적인 옵션 중 권한 취소 시 권한을 부여받았던 사용자가 다른 사용자에게 부여한 권한도 연쇄적으로 취소하는 옵션은 (       )이다.",
	            "answer": "cascade"
	        }
	    },
	    {
	        "id": 447777,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "홍길동에게 \\<강좌\\> 테이블을 검색하는 권한을 부여하는 SQL문은?",
	            "answer": "GRANT SELECT <br/>ON 강좌 <br/>TO 홍길동;"
	        }
	    },
	    {
	        "id": 447778,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "홍길동에게 \\<학생\\> 테이블에 대한 접근 및 조작에 관한 모든 권한을 부여하고, 해당 권한을 다른 사람에게 부여할 수 있는 권한을 부여하는 SQL문은?",
	            "answer": "GRANT ALL ON 학생 <br/>TO 홍길동 <br/>WITH GRANT OPTION;"
	        }
	    },
	    {
	        "id": 447779,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "박문수에게 부여된 \\<교수\\> 테이블에 대한 INSERT 권한을 취소하는 SQL문은?",
	            "answer": "REVOKE INSERT <br/>ON 교수 <br/>FROM 박문수;"
	        }
	    },
	    {
	        "id": 447780,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "\\<수강\\> 테이블에 대해 박문수에게 부여된 SELECT 권한과 박문수가 다른 사람에게 SELECT 권한을 부여할 수 있는 권한, 그리고 박문수가 다른 사람에게 부여한 SELECT 권한을 모두 취소하는 SQL문은?",
	            "answer": "REVOKE SELECT <br/>ON 수강 <br/>FROM 박문수 CASCADE;",
	            "solution": "※ 박문수에게 부여된 \\<수강\\> 테이블에 대한 SELECT 권한을 취소하면 박문수가 다른 사람에게 SELECT 권한을 부여할 수 있는 권한도 함께 취소됩니다. 자신에게 권한이 없어지면 해당 권한을 다른 사람에게 부여할 수 없기 때문입니다.<br/>※ 박문수에게 부여된 \\<수강\\> 테이블에 대해 SELECT 권한은 유지하면서 다른 사람에게 부여할 수 있는 권한만 제거하려면 다음과 같이 작성합니다.<br/><div class=\"border-block\">REVOKE GRANT OPTION FOR SELECT ON 수강 FROM 박문수;</div>"
	        }
	    },
	    {
	        "id": 447781,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "\\<상품\\> 테이블을 관리하던 도중 ‘제품코드’가 “P-20”인 제품이 여러 개 발견되었다. 이를 모두 삭제하는 \\SQL문은?",
	            "questionPassage": "상품(제품코드, 상품명, 단가, 제조경비)",
	            "answer": "DELETE<br/>FROM 상품<br/>WHERE 제품코드 = ‘P-20’;",
	            "solution": "<div class=\"border-block\">DELETE<br/>FROM 상품<br/>WHERE 제품코드 = ‘P-20’;</div><br/>❶ 삭제하라.<br/>❷ \\<상품\\> 테이블을 대상으로 하라.<br/>❸ ‘제품코드’가 “P-20”인 상품만을 대상으로 하라."
	        }
	    },
	    {
	        "id": 447782,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "\\<상품\\> 테이블을 관리하던 도중 ‘제품코드’가 “P-20”인 제품이 여러 개 발견되어 이를 모두 삭제하였다. (“P-20”, “PLAYER”, 8800, 6600)인 제품을 다시 입력하는 SQL문은?",
	            "questionPassage": "상품(제품코드, 상품명, 단가, 제조경비)",
	            "answer": "<img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_101.png\"/>",
	            "solution": "<div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_101.png\"/></div><br/>❶ 삽입하라.<br/>❷ \\<상품\\> 테이블에 삽입하라.<br/>❸ “P-20”, “PLAYER”, 8800, 6600을 <상품> 테이블의 각 필드에 삽입하라."
	        }
	    },
	    {
	        "id": 447783,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 테이블에서 ‘총액’이 가장 큰 거래처의 ‘상호’와 ‘총액’을 검색하는 SQL문은? 검색 결과는 다음과 같다.<br/>\\<거래내역\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_102.png\"/><br/>\\<검색 결과\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_103.png\"/>",
	            "answer": "SELECT 상호, 총액<br/>FROM 거래내역<br/>WHERE 총액 In (<br/>  SELECT MAX(총액)<br/>  FROM 거래내역);",
	            "solution": "<div class=\"border-block\">SELECT 상호, 총액<br/>FROM 거래내역<br/>WHERE 총액 In (<br/>  SELECT MAX(총액)<br/>  FROM 거래내역);</div><br/>❶ ‘상호’와 ‘총액’을 표시한다.<br/>❷ \\<거래내역\\> 테이블을 대상으로 검색한다.<br/>❸ ‘총액’과 IN 다음에 쓰인 하위 질의의 결과와 같은 거래처를 대상으로 한다.<br/>❹ ‘총액’ 중 가장 큰 값을 표시한다.<br/>❺ \\<거래내역\\> 테이블에서 검색한다. 즉, \\<거래내역\\> 테이블에서 ‘총액’ 중 가장 큰 값을 표시한다."
	        }
	    },
	    {
	        "id": 447784,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "사원(EMPLOYEE) 테이블에 기획부 직원이 100명, 생산부 직원이 200명, 홍보부 직원이 150명 있다고 할 때, 다음 SQL문의 실행 결과로 표시되는 튜플의 수는? (단, DEPT 필드는 부서명을 의미한다.)",
	            "questionPassage": "SELECT DEPT <br/>FROM EMPLOYEE;",
	            "answer": "450",
	            "solution": "\\<EMPLOYEE\\> 테이블에서 ‘DEPT’를 검색합니다. 총 450개의 튜플이 들어 있고 검색 조건이 없으므로 튜플의 수는 450입니다."
	        }
	    },
	    {
	        "id": 447785,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "사원(EMPLOYEE) 테이블에 기획부 직원이 100명, 생산부 직원이 200명, 홍보부 직원이 150명 있다고 할 때, 다음 SQL문의 실행 결과로 표시되는 튜플의 수는? (단, DEPT 필드는 부서명을 의미한다.)",
	            "questionPassage": "SELECT DISTINCT DEPT <br/>FROM EMPLOYEE;",
	            "answer": "3",
	            "solution": "\\<EMPLOYEE\\> 테이블에서 ‘DEPT’를 검색하는 데 중복된 결과는 처음의 한 개만 검색에 포함시킵니다. 기획부 100개 튜플의 ‘DEPT’ 속성의 값이 같으므<br/>로 1개, 생산부 200개 튜플의 ‘DEPT’ 속성의 값이 같으므로 1개, 홍보부 150개 튜플의 ‘DEPT’ 속성의 값이 같으므로 1개를 검색에 포함시키므로 3개의 튜<br/>플이 검색됩니다."
	        }
	    },
	    {
	        "id": 447786,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "사원(EMPLOYEE) 테이블에 기획부 직원이 100명, 생산부 직원이 200명, 홍보부 직원이 150명 있다고 할 때, 다음 SQL문의 실행 결과로 표시되는 튜플의 수는? (단, DEPT 필드는 부서명을 의미한다.)",
	            "questionPassage": "SELECT COUNT(DISTINCT DEPT) <br/>FROM EMPLOYEE <br/>WHERE DEPT = ‘기획부’;",
	            "answer": "1",
	            "solution": "\\<EMPLOYEE\\> 테이블에서 ‘DEPT’ 속성의 값이 ‘기획부’인 튜플에 대해 중복을 제거하고 개수를 세므로 1이 검색 결과로 표시됩니다."
	        }
	    },
	    {
	        "id": 447787,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음은 \\<사원\\> 테이블과 \\<연락처\\> 테이블에 대해 제시된 SQL문을 수행했을 때의 결과이다. \\<결과\\> 테이블의 괄호(①~③)에 들어갈 알맞은 내용은?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_104.png\"/><br/>\\<SQL\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_105.png\"/><br/>\\<결과\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_106.png\"/>",
	            "answer": "① 송윤아 <br/>② 24 <br/>③ 사원",
	            "solution": "<div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_107.png\"/></div>❶ ‘성명’, ‘나이’, ‘직책’을 표시한다.<br/>❷ \\<사원\\>, \\<연락처\\> 테이블을 대상으로 검색한다.<br/>❸ \\<연락처\\> 테이블의 ‘성별’이 “여”이고 \\<사원\\> 테이블의 ‘사번’과<br/>❹ \\<연락처\\> 테이블의 ‘사번’이 같은 자료만을 대상으로 검색한다."
	        }
	    },
	    {
	        "id": 447788,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 SQL문에서 WHERE 절의 조건이 의미하는 것을 간략히 서술하면?",
	            "questionPassage": "SELECT 학번, 이름<br/>FROM 성적<br/>WHERE 학번 LIKE ‘S_ _’;",
	            "answer": "학번이 ‘S’로 시작하는 3문자를 표시한다.",
	            "solution": "LIKE는 지정된 문자열의 패턴을 비교하여 속성의 값을 찾습니다. 문자열의 시작이 ‘S’이고 ‘_’이 두 개 있으므로 학번이 ‘S’로 시작하는 3문자를 검색하라는 조건이 됩니다."
	        }
	    },
	    {
	        "id": 447789,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "\\<장학금\\> 테이블에서 장학내역별로 장학금에 대한 순위를 구하는 다음의 SQL문을 수행했을 때 표시되는 \\<결과\\>의 괄호(①~③)에 들어갈 가장 적합한 순위는?<br/>\\<장학금\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_109.png\"/><br/>\\<SQL\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_108.png\"/><br/>\\<결과\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_110.png\"/>",
	            "answer": "① 2 <br/>② 2 <br/>③ 4",
	            "solution": "RANK( ) 함수는 공동 순위가 있는 경우 공동 순위를 반영하여 다음 순위를 정합니다. 즉 80점은 공동 2위가 되고, 50점은 4위가 됩니다."
	        }
	    },
	    {
	        "id": 447790,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "\\<장학금\\> 테이블에 대해 \\<결과\\>와 같이 표시되도록 괄호(①~③)에 가장 적합한 명령은?<br/>\\<SQL\\> <br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_111.png\"/><br/>\\<결과\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_112.png\"/>",
	            "answer": "① 장학내역 <br/>② 학과 <br/>③ AVG(장학금)",
	            "solution": "<div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_113.png\"/></div>❶ ‘장학내역’, ‘학과’, ‘장학금’의 평균을 표시하되, 평균은 ‘장학금평균’으로 표시한다.<br/>❷ \\<장학금\\> 테이블을 대상으로 검색한다.<br/>❸ ‘장학내역’과 ‘학과’를 기준으로 그룹을 지정하여 그룹 평균과 전체 평균을 구한다."
	        }
	    },
	    {
	        "id": 447791,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음의 \\<지원자\\> 테이블에 대해 SQL문을 수행하려고 한다. 제시된 조건에 부합하도록 괄호(①, ②)에 가장 적합한 명령을 넣어 SQL문을 완성하면?<br/>\\<지원자\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_114.png\"/><br/>\\<조건\\><br/><div class=\"border-block\">ㆍ‘지원ID’, ‘이름’, ‘지원학과’, ‘연락처’ 속성을 표시한다.<br/>ㆍ\\<지원자\\> 테이블을 대상으로 한다.<br/>ㆍ점수가 60점 이상인 지원자만을 검색한다.<br/>ㆍ‘지원학과’를 기준으로 오름차순 정렬하고 ‘지원학과’가 같은 경우 ‘점수’를 기준으로 내림차순 정렬한다.</div><br/>\\<SQL\\><br/><div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_115.png\"/></div>",
	            "answer": "① 59 <br/>② 지원학과, 점수 DESC <br/>또는 <br/>지원학과 ASC, 점수 DESC",
	            "solution": "<div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_116.png\"/></div>❶ ‘지원ID’, ‘이름’, ‘지원학과’, ‘연락처’를 표시한다.<br/>❷ \\<지원자\\> 테이블을 대상으로 검색한다.<br/>❸ ‘점수’가 59를 초과하는, 즉 60점 이상인 자료만을 대상으로 한다.<br/>❹ ‘지원학과’를 기준으로 오름차순 정렬하고 ‘지원학과’가 같은 경우<br/>❺ ‘점수’를 기준으로 내림차순 정렬한다."
	        }
	    },
	    {
	        "id": 447792,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음은 \\<학생\\> 테이블에 ‘주소’ 필드를 추가하는 SQL문이다. 괄호(①, ②)에 들어갈 가장 적합한 명령은?<br/>\\<SQL\\>",
	            "questionPassage": "( ① ) 학생<br/>( ② ) 주소 CHAR(20);",
	            "answer": "① ALTER TABLE <br/>② ADD",
	            "solution": "<div class=\"border-block\">ALTER TABLE 학생<br/>ADD 주소 CHAR(20);/div><br/>❶ 수정할 테이블의 이름은 \\<학생\\>이다.<br/>❸ 문자 20자리인 ‘주소’ 속성을 추가한다."
	        }
	    },
	    {
	        "id": 447793,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "\\<공급자\\> 테이블에 대해 \\<결과\\>와 같이 표시되도록 괄호에 적합한 명령을 넣어 SQL문을 완성하면?<br/>\\<공급자\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_117.png\"/><br/>\\<결과\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_118.png\"/><br/>\\<SQL\\><br/><div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_119.png\"/></div>",
	            "answer": "%신%",
	            "solution": "<div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_120.png\"/></div>❶ 모든 속성을 표시한다.<br/>❷ \\<공급자\\> 테이블을 대상으로 검색한다.<br/>❸ ‘공급자명’에 “신”이 포함된 자료만을 대상으로 한다."
	        }
	    },
	    {
	        "id": 447794,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 질의문의 실행 결과는?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_121.png\"/><br/>\\<SQL\\><br/><div class=\"border-block\"><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_122.png\"/></div>",
	            "answer": "15000",
	            "solution": "문제의 질의문은 하위 질의가 있는 질의문입니다. 먼저 WHERE 조건에 지정된 하위 질의의 SELECT문을 검색한 다음 그 검색 결과를 본 질의의 조건에 있는 ‘책번호’ 속성과 비교합니다.<br/>❶ SELECT 책번호 FROM 도서 WHERE 책명 = ‘운영체제’; : \\<도서\\> 테이블에서 ‘책명’ 속성의 값이 “운영체제”와 같은 레코드의 ‘책번호’ 속성의 값을 검색합니다. 결과는 1111입니다.<br/>❷ SELECT 가격 FROM 도서가격 WHERE 책번호 = 1111; : \\<도서가격\\> 테이블에서 ‘책번호’ 속성의 값이 1111과 같은 레코드의 ‘가격’ 속성의 값을 검색합니다. 결과는 15000입니다."
	        }
	    },
	    {
	        "id": 447795,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "\\<성적\\> 테이블에 대해 SQL문을 수행하려고 한다. 제시된 조건에 부합하도록 괄호(①~③)에 가장 적합한 명령을 넣어 SQL문을 완성하면?<br/>\\<조건\\><br/><div class=\"border-block\">\\<성적\\> 테이블에서 이름이 ‘LEE’인 모든 튜플의 ‘점수’ 속성에 10을 더한다./div><br/>\\<SQL\\><br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/woo_123.png\"/>",
	            "answer": "① UPDATE <br/>② SET <br/>③ WHERE",
	            "solution": "<div class=\"border-block\">UPDATE 성적<br/>SET 점수 = 점수 + 10<br/>WHERE 이름 = ‘LEE’;</div><br/>❶ \\<성적\\> 테이블을 갱신한다.<br/>❷ ‘점수’ 속성의 값에 10을 더한다.<br/>❸ ‘이름’이 ‘LEE’인 자료만을 대상으로 한다."
	        }
	    },
	    {
	        "id": 447796,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음은 DBMS 접속 기술들의 특징을 설명한 것이다. 제시된 특징에 가장 적합한 접속 기술은?",
	            "questionPassage": "ㆍ( ① ) : 1992년 9월 마이크로소프트에서 출시한 표준 개방형 API로, 개발 언어에 관계없이 사용할 수 있으며, 접속하려는 DBMS의 인터페이스를 알지 못하더라도 드라이버 관리자가 해당 DBMS에 맞게 연결해준다.<br/>ㆍ( ② ) : JDBC 코드를 단순화하여 사용할 수 있는 SQL Mapping 기반 오픈 소스 접속 프레임워크로, SQL 문장을 분리하여 XML 파일을 만들고, Mapping을 통해 SQL을 실행한다.",
	            "answer": "① ODBC(Open DataBase Connectivity) <br/>② MyBatis"
	        }
	    },
	    {
	        "id": 447797,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "웹 응용 시스템에 대한 다음 설명에서 괄호(①, ②)에 들어갈 알맞은 답은?",
	            "questionPassage": "웹 응용 시스템은 사용자로부터 매개 변수를 전달받아 SQL을 실행하고 DBMS로부터 전달받은 결과를 사용자에게 전달하는 매개체 역할을 수행하는 시스템으로, 크게 ( ① )와 ( ② )로 구성되지만 규모가 작은 경우 통합하여 하나의 서버로 운용된다.",
	            "answer": "① 웹 서버(Web Server) <br/>② 웹 애플리케이션 서버(WAS, Web Application Server)"
	        }
	    },
	    {
	        "id": 447798,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "많은 코드로 구성된 프로시저, 사용자 정의 함수, 트리거 등의 절차형 SQL의 오류를 확인하는데 사용하는 명령문으로, 오류가 발생한 줄(Line), 열(Column), 오류 코드와 함께 상세한 오류 발생 내역을 보여주는 SQL 명령문을 작성하시오. (단, 오류(Error)에 대해서만 조회하며, 세미콜론(;)은 생략해도 무관하다.)",
	            "answer": "SHOW ERRORS;"
	        }
	    },
	    {
	        "id": 447799,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "SQL 응용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "데이터베이스에서 사용되는 ORM(Object-Relational Mapping)에 대해 간략히 서술하면?",
	            "answer": "ORM은 객체지향 프로그래밍의 <span class=\"underline\">객체와 관계형 데이터베이스의 데이터를 연결하는 기술</span>이다."
	        }
	    },
	    {
	        "id": 447800,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "데이터베이스 보안에서 가용성(Availabilby)에 대해 간략히 서술하시오.",
	            "answer": "가용성은 인가받은 사용자는 시스템 내의 정보와 자원을 언제라도 사용할 수 있음을 의미한다."
	        }
	    },
	    {
	        "id": 447801,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "실무적으로 검증된 개발 보안 방법론 중 하나로, SW 보안의 모범 사례를 SDLC(Software Development Life Cycle)에 통합한 소프트웨어 개발 보안 생명주기 방법론은?",
	            "answer": "Seven Touchpoints"
	        }
	    },
	    {
	        "id": 447802,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "SDLC의 초기 단계에서 보안을 강화하기 위해 개발된 개발 보안 생명주기 방법론은?",
	            "answer": "CLASP"
	        }
	    },
	    {
	        "id": 447803,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "마이크로소프트 사에서 안전한 소프트웨어 개발을 위해 기존의<br/>SDLC를 개선한 개발 보안 생명주기 방법론은?",
	            "answer": "SDL"
	        }
	    },
	    {
	        "id": 447804,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음의 SDLC 단계별 보안 활동 단계에서 괄호에 들어갈 알맞은 용어는?",
	            "questionPassage": "요구사항 분석 단계 → (  ①  ) 단계 → (  ②  ) 단계 → (  ③  ) 단계 → 유지보수 단계",
	            "answer": "① 설계<br/>② 구현<br/>③ 테스트"
	        }
	    },
	    {
	        "id": 447805,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발 보안에 있어 충족시켜야 할 보안의 3대 요소는?",
	            "answer": "기밀성(Confidentiality),<br/>무결성(Integrity), <br/>가용성(Availability)"
	        }
	    },
	    {
	        "id": 447806,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "보안 요소는 소프트웨어 개발에 있어 충족시켜야 할 요소 및 요건을 의미한다. 시스템 내의 정보는 오직 인가된 사용자만 수정할 수 있는 것을 의미하는 보안 요소는?",
	            "answer": "무결성(Integrity)"
	        }
	    },
	    {
	        "id": 447807,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 보안 요소는?",
	            "questionPassage": "시스템 내의 정보와 자원은 인가된 사용자에게만 접근이 허용된다.",
	            "answer": "기밀성<br/>(Confidentiality) "
	        }
	    },
	    {
	        "id": 447808,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 보안 요소는?",
	            "questionPassage": "인가받은 사용자는 언제라도 사용할 수 있다.",
	            "answer": "가용성<br/>(Availability)"
	        }
	    },
	    {
	        "id": 447809,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 보안 요소는?",
	            "questionPassage": "시스템 내의 정보와 자원을 사용하려는 사용자가 합법적인 사용자인지를 확인하는 모든 행위이다.",
	            "answer": "인증<br/>(Authentication)"
	        }
	    },
	    {
	        "id": 447810,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 보안 요소는?",
	            "questionPassage": "데이터를 송·수신한 자가 송·수신 사실을 부인할 수 없도록 송·수신 증거를 제공한다.",
	            "answer": "부인 방지<br/>(NonRepudiation)"
	        }
	    },
	    {
	        "id": 447811,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "보안상 안전한 소프트웨어를 개발하기 위해 SDLC에 보안 강화를 위한 프로세스를 포함한 것을 의미하는 용어는?",
	            "answer": "Secure SDLC"
	        }
	    },
	    {
	        "id": 447812,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음은 Secure SDLC의 수행 과정 중 어느 단계에서의 보안 활동인가?",
	            "questionPassage": "ㆍ식별된 보안 요구사항들을 소프트웨어 설계서에 반영하고, 보안 설계서를 작성한다.<br/>ㆍ소프트웨어에서 발생할 수 있는 위협을 식별하여 보안대책, 소요예산, 사고 발생 시 영향 범위와 대응책 등을 수립한다.",
	            "answer": "설계 단계"
	        }
	    },
	    {
	        "id": 447813,
	        "templateId": 8,
	        "registeredDate": 1652337949000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어의 구현 단계에서 발생할 수 있는 보안 취약점들을 최소화하기 위해 보안 요소들을 고려하며 코드를 구현하는 것으로, 보안 취약점을 사전에 대응하여 안정성과 신뢰성을 확보하기 위해 사용되는 것은?",
	            "answer": "시큐어 코딩<br/>(Secure Coding)"
	        }
	    },
	    {
	        "id": 447814,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 용어는?",
	            "questionPassage": "ㆍ세션의 연결과 연결로 인해 발생하는 정보를 관리하는 것을 의미한다.<br/>ㆍ소프트웨어 개발 과정 중 요구사항 분석 및 설계 단계에서 진단해야 하는 보안 점검 내용이다.<br/>ㆍ보안 약점에는 불충분한 세션 관리, 잘못된 세션에 의한 정보 노출이 있다.",
	            "answer": "세션 통제"
	        }
	    },
	    {
	        "id": 447815,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "웹 응용 프로그램에 SQL을 삽입하여 내부 데이터베이스 서버의 데이터를 유출 및 변조하고 관리자 인증을 우회하는 공격 기법은?",
	            "answer": "SQL 삽입(Injection)"
	        }
	    },
	    {
	        "id": 447816,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "웹페이지에 악의적인 스크립트를 포함시켜 사용자 측에서 실행되게 유도함으로써, 정보 유출 등의 공격을 유발할 수 있는 보안 취약점은?",
	            "answer": "크로스사이트 스크립팅(XSS)"
	        }
	    },
	    {
	        "id": 447817,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "할당된 메모리의 범위를 벗어난 위치에서 자료를 읽거나 쓰는 등 메모리를 다루는데 오류가 발생하여 잘못된 동작을 하는 프로그램 취약점은?",
	            "answer": "메모리 버퍼 오버플로"
	        }
	    },
	    {
	        "id": 447818,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 JAVA 코드에서 밑줄로 표시된 부분에는 어떤 보안 약점이 존재하는가?(단, key는 암호화 키를 저장하는 변수임)",
	            "questionPassage": "import javax.crypto,KeyGenerator;<br/>import javax.crypto.spec.ScretKeySpec;<br/>import javax.crypto.Cipher;<br/>           ... 생략<br/>public String encripString(String usr) {<br/><span class=\"underline\">String key = “22df3023sf~2;asn!@#/ >as”;</span><br/>if (key != null)<br/>byte[ ] bToEncrypt = usr.getBytes(“UTF-8”);<br/>           ... 생략",
	            "answer": "하드코드된 암호화 키",
	            "solution": "비밀키(ScretKey), 문자열 암호화(encriptString) 등의 라이브러리명이나 클래스명으로 보아 암호키를 관리하는 코드로 유추할 수 있습니다. 또한 문제에 key가 암호키를 저장하는 변수라고 제시되었으며, key 변수에 직접 값이 입력된 것으로 보아 하드코드된 암호화 키임을 알 수 있습니다."
	        }
	    },
	    {
	        "id": 447819,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 보안 기능의 보안 약점은?",
	            "questionPassage": "접근제어 기능이 없는 실행경로를 통해 정보 또는 권한을 탈취할 수 있다.",
	            "answer": "부적절한 인가"
	        }
	    },
	    {
	        "id": 447820,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 보안 기능의 보안 약점은?",
	            "questionPassage": "암호화되지 않은 평문 데이터를 탈취하여 중요한 정보를 획득할 수 있다.",
	            "answer": "중요정보 평문 저장 및 전송"
	        }
	    },
	    {
	        "id": 447821,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 보안 기능의 보안 약점은?",
	            "questionPassage": "암호화된 환경설정 파일을 해독하여 비밀번호 등의 중요정보를 탈취할 수 있다.",
	            "answer": "취약한 암호화 알고리즘 사용"
	        }
	    },
	    {
	        "id": 447822,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 검사 시점과 사용 시점을 고려하지 않고 코딩하는 경우 발생하는 보안 약점으로, 프로세스가 가진 자원 정보와 실제 자원 상태가 일치하지 않는 동기화 오류나 교착상태 등이 발생할 수 있다.",
	            "answer": "TOCTOU 경쟁 조건"
	        }
	    },
	    {
	        "id": 447823,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "보안 약점 중 오류 상황 대응 부재는 소프트웨어 개발 중 (     )를 하지 않았거나 미비로 인해 발생하는 보안 약점으로, 이를 하지 않은 오류들로 인해 소프트웨어의 실행이 중단되거나 의도를 벗어난 동작이 유도될 수 있다.",
	            "answer": "에러처리"
	        }
	    },
	    {
	        "id": 447824,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "메모리상에서 프로그램의 복귀 주소와 변수 사이에 특정 값을 저장해 두었다가 그 값이 변경되었을 경우 오버플로우 상태로 가정하여 프로그램 실행을 중단하는 기술은?",
	            "answer": "스택 가드<br/>(Stack Guard)"
	        }
	    },
	    {
	        "id": 447825,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "포인터에 NULL이 저장되어 있을 때 이를 참조할 경우 발생하며, 주로 함수의 반환값을 참조하도록 코딩한 경우 함수가 오류로 인해 NULL을 반환하면서 발생하는 보안 약점은?",
	            "answer": "널 포인터 역참조"
	        }
	    },
	    {
	        "id": 447826,
	        "templateId": 9,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★★☆",
	            "question": "다음 보기 중 Java에서 사용하는 접근 제어자에 해당하는 예약어를 모두 고르시오.",
	            "questionPassage": [
	                "ⓐ internal",
	                "ⓑ private",
	                "ⓒ default",
	                "ⓓ restrict"
	            ],
	            "answer": [
	                "2",
	                "3"
	            ]
	        }
	    },
	    {
	        "id": 447827,
	        "templateId": 9,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★★☆",
	            "question": "다음 보기 중 Java에서 사용하는 접근 제어자에 해당하는 예약어를 모두 고르시오.",
	            "questionPassage": [
	                "ⓐ public",
	                "ⓑ cascade",
	                "ⓒ protected",
	                "ⓓ abstract",
	                "ⓔ interface"
	            ],
	            "answer": [
	                "1",
	                "3"
	            ]
	        }
	    },
	    {
	        "id": 447828,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "제거되지 않고 남은 디버그 코드나 시스템 메시지, 잘못된 접근 제어자의 활용으로 인해 시스템의 내부 정보가 노출되는 등의 보안 약점을 예방하기 위해 점검해야 하는 보안 점검 항목은?",
	            "answer": "캡슐화<br/>(Encapsulation)"
	        }
	    },
	    {
	        "id": 447829,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발의 구현 단계에서 도메인명에 의존하여 보안 결정을 내리거나 보안상 취약한 API를 사용했을 때 발생하는 보안 약점을 예방하기 위해서 확인하는 보안 점검 항목은?",
	            "answer": "API 오용"
	        }
	    },
	    {
	        "id": 447830,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "2004년 국가정보원과 산학연협회가 개발한 블록 암호화 알고리즘은?",
	            "answer": "ARIA<br/>(Academy,<br/>Research Institute, Agency)"
	        }
	    },
	    {
	        "id": 447831,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "1991년 R.rivest가 MD4를 개선한 암호화 알고리즘으로, 각각의 512 비트짜리 입력 메시지 블록에 대해 차례로 동작한다. 각 512 비트 입력 메시지 블록을 처리하고 나면 128 비트 스테이트(state)의 값이 변하는 암호화 알고리즘은?",
	            "answer": "MD5<br/>(Message-Digest algorithm 5)"
	        }
	    },
	    {
	        "id": 447832,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "(     )는 1978년에 제안된 공개키 암호화 알고리즘으로, 큰 숫자는 소인수분해 하기 어렵다는 것을 기반으로 만들어졌으며, 공개키와 비밀키를 사용하는데, 여기서 키란 메시지를 열고 잠그는 상수(Constant)를 의미한다.",
	            "answer": "RSA<br/>(Rivest Shamir Adleman)"
	        }
	    },
	    {
	        "id": 447833,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "128비트의 블록 크기를 갖는 128비트 및 256비트 수준의 국산 대칭 키 블록 암호화 알고리즘으로, 2000년까지 미국이 자국 기술보호 등을 이유로 해외로 수출되는 암호 기술의 보안 수준을 40비트로 제한하자 1999년 한국정보보호진흥원에서 국내 보안수준 향상을 위해 개발한 암호화 알고리즘은?",
	            "answer": "SEED"
	        }
	    },
	    {
	        "id": 447834,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "데이터를 암호화할 때 두 개의 키를 이용하여 암호화하는 기법으로, 하나의 키는 데이터베이스 사용자에게 공개하고, 다른 하나의 키는 관리자가 관리한다. 비대칭 암호 기법이라고도 하며, 키의 분배가 용이하고 관리해야 할 키의 수가 적다는 특징을 갖고 있는 암호화 기법은?",
	            "answer": "공개키 암호화 기법<br/>(Public Key Encryption)"
	        }
	    },
	    {
	        "id": 447835,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명의 괄호에 공통으로 들어갈 용어는?",
	            "questionPassage": "임의의 길이의 입력 데이터나 메시지를 고정된 길이의 값이나 키로 변환하는 것을 의미하며, 이 변환 방법을 (     ) 알고리즘 또는 (     ) 함수라고 부른다. 대표적인 (     ) 함수의 종류에는 SHA 시리즈, MD5, N-NASH, SNEFRU 등이 있다.",
	            "answer": "해시(Hash)"
	        }
	    },
	    {
	        "id": 447836,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 1975년 미국 표준 기술 연구소(NBS)에서 발표한 개인키 암호화 알고리즘으로, 64비트의 블록 크기와 56비트의 키 길이를 갖는다. 이 알고리즘이 발표될 당시에 비해 현재의 컴퓨터는 성능이 향상되어 해독이 쉬워졌고, 3번을 반복해서 사용하는 알고리즘 또한 발표되었다. ",
	            "answer": "DES<br/>(Data Encryption Standard)"
	        }
	    },
	    {
	        "id": 447837,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "동일한 키로 데이터를 암호화하고 복호화 하는 기법으로, 암호화/복호화 속도가 빠르지만, 관리해야 할 키의 수가 많은 암호화 기법은?",
	            "answer": "개인키 암호화 기법<br/>(Private Key Encryption)"
	        }
	    },
	    {
	        "id": 447838,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 2001년 미국 표준 기술 연구소(NIST)에서 발표한 개인키 암호화 알고리즘으로, 블록 크기는 128비트이며, 키 길이에 따라 128, 192, 256으로 분류된다.",
	            "answer": "AES<br/>(Advanced Encryption Standard)"
	        }
	    },
	    {
	        "id": 447839,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "스니핑(Sniffing)에 대한 개념을 간략히 서술하시오.",
	            "answer": "스니핑은 네트워크의 중간에서 남의 패킷 정보를 도청하는 해킹 유형이다."
	        }
	    },
	    {
	        "id": 447840,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "사회 공학의 한 기법으로, 특정 대상을 선정한 후 그 대상에게 일반적인 이메일로 위장한 메일을 지속적으로 발송하여, 발송 메일의 본문 링크나 첨부된 파일을 클릭하도록 유도해 사용자의 개인 정보를 탈취하는 네트워크 침해 공격은?",
	            "answer": "스피어 피싱<br/>(Spear Phishing)"
	        }
	    },
	    {
	        "id": 447841,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다양한 IT 기술과 방식들을 이용해 조직적으로 특정 기업이나 조직 네트워크에 침투해 활동 거점을 마련한 뒤 때를 기다리면서 보안을 무력화시키고 정보를 수집한 다음 외부로 빼돌리는 형태의 네트워크 침해 공격은?",
	            "answer": "APT<br/>(Advanced Persistent Threats,<br/>지능형 지속 위협)"
	        }
	    },
	    {
	        "id": 447842,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "암호화된 문서의 암호키를 찾아내기 위해 적용 가능한 모든 값을 대입하여 공격하는 네트워크 침해 공격은?",
	            "answer": "무작위 대입 공격<br/>(Brute Force Attack)"
	        }
	    },
	    {
	        "id": 447843,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "QR코드(Quick Response Code)를 통해 악성 앱의 다운로드를 유도하거나 악성 프로그램을 설치하도록 하는 금융사기 기법은?",
	            "answer": "큐싱(Qshing)"
	        }
	    },
	    {
	        "id": 447844,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "전문 스캐너 프로그램 혹은 봇넷 등을 이용해 웹사이트를 무차별적으로 공격하는 과정에서 취약한 사이트가 발견되면 데이터베이스 등의 데이터를 조작하는 일련의 공격 방식은?",
	            "answer": "SQL 삽입(Injection) 공격"
	        }
	    },
	    {
	        "id": 447845,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "네트워크를 통한 컴퓨터 보안 공격의 하나로, 웹 페이지의 내용을 사용자 브라우저에 표현하기 위해 사용되는 스크립트의 취약점을 악용한 해킹 기법은?",
	            "answer": "크로스 사이트 스크립팅<br/>(XSS; CrossSite Scripting)"
	        }
	    },
	    {
	        "id": 447846,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 악성코드에 감염되어 다른 프로그램이나 컴퓨터를 조종하도록 만들어진 컴퓨터로, C&C(Command & Control) 서버의 제어를 받아 주로 DDoS 공격 등에 이용된다.",
	            "answer": "좀비(Zombie) PC"
	        }
	    },
	    {
	        "id": 447847,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "해커가 원격지에서 감염된 좀비 PC에 명령을 내리고 악성코드를 제어하기 위한 용도로 사용하는 서버는?",
	            "answer": "C&C 서버"
	        }
	    },
	    {
	        "id": 447848,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 악성 프로그램에 감염되어 악의적인 의도로 사용될 수 있는 다수의 컴퓨터들이 네트워크로 연결된 형태를 의미한다.",
	            "answer": "봇넷(Botnet)"
	        }
	    },
	    {
	        "id": 447849,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 네트워크를 통해 연속적으로 자신을 복제하여 시스템의 부하를 높임으로써 결국 시스템을 다운시키는 바이러스의 일종으로, 분산 서비스 거부 공격, 버퍼 오버플로 공격, 슬래머 등이 이 공격의 한 형태이다.",
	            "answer": "웜(Worm)"
	        }
	    },
	    {
	        "id": 447850,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 보안 취약점이 발견되었을 때 발견된 취약점의 존재 자체가 널리 공표되기도 전에 해당 취약점을 통하여 이루어지는 보안공격으로, 공격의 신속성을 의미한다.",
	            "answer": "제로 데이 공격<br/>(Zero Day Attack)"
	        }
	    },
	    {
	        "id": 447851,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 시스템 설계자가 서비스 기술자나 유지 보수 프로그램 작성자(Programmer)의 액세스 편의를 위해 시스템 보안을 제거하여 만들어놓은 비밀 통로로, 컴퓨터 범죄에 악용되기도 한다.",
	            "answer": "백도어<br/>(Back Door, Trap Door)"
	        }
	    },
	    {
	        "id": 447852,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 정상적인 기능을 하는 프로그램으로 위장하여 프로그램 내에 숨어 있다가 해당 프로그램이 동작할 때 활성화되어 부작용을 일으키는 것으로, 자기 복제 능력은 없다.",
	            "answer": "트로이 목마<br/>(Trojan Horse)"
	        }
	    },
	    {
	        "id": 447853,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "문자 메시지(SMS)를 이용해 사용자의 개인 신용 정보를 빼내는 네트워크 침해 공격은?",
	            "answer": "스미싱(Smishing)"
	        }
	    },
	    {
	        "id": 447854,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "아래의 패킷 로그와 같이 공격자가 패킷의 출발지 주소(Address) 또는 포트(Port)를 임의로 변경하여 송신측 IP주소 또는 포트를 동일하게 함으로써 송신 IP 주소가 자신이므로 자신에게 응답을 수행하게 되는데, 이러한 패킷을 계속 전송하여 자신에 대해 무한히 응답하게 하여 컴퓨터의 실행 속도를 느리게 하거나 동작을 마비시켜 서비스 거부 상태에 빠지도록 하는 공격 방법은?",
	            "questionPassage": "source : 192.168.1.200<br/>destination : 192.168.1.200<br/>protocol : 6<br/>src port : 21845<br/>dst port : 21845",
	            "answer": "LAND Attack<br/>(Local Area Network Denial Attack)"
	        }
	    },
	    {
	        "id": 447855,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "IP나 ICMP의 특성을 악용하여 엄청난 양의 데이터를 한 사이트에 집중적으로 보냄으로써 네트워크를 불능 상태로 만드는 서비스 거부(DoS) 공격 기법은?",
	            "answer": "스머핑<br/>(SMURFING)"
	        }
	    },
	    {
	        "id": 447856,
	        "templateId": 9,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★★☆",
	            "question": "다음 보기에서 DDoS 공격과 연관이 있는 공격 방법을 모두 고르시오.",
	            "questionPassage": [
	                "ⓐ Secure shell",
	                "ⓑ Tribe Flood Network ",
	                "ⓒ Nimda",
	                "ⓓ Stacheldraht"
	            ],
	            "answer": [
	                "2",
	                "4"
	            ]
	        }
	    },
	    {
	        "id": 447857,
	        "templateId": 9,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "question": "다음 보기에서 DDoS 공격과 연관이 있는 공격 방법을 모두 고르시오.",
	            "questionPassage": [
	                "ⓐ Nimda",
	                "ⓑ Trin00",
	                "ⓒ TFN2K ",
	                "ⓓ Deadlock "
	            ],
	            "answer": [
	                "2",
	                "3"
	            ]
	        }
	    },
	    {
	        "id": 447858,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "인터넷 사용자의 컴퓨터에 침입해 내부 문서 파일 등을 암호화해 사용자가 열지 못하게 하고, 암호 해독용 프로그램의 전달을 조건으로 사용자에게 돈을 요구하기도 하는 정보보안 침해 공격 관련 용어는?",
	            "answer": "랜섬웨어<br/>(Ransomware)"
	        }
	    },
	    {
	        "id": 447859,
	        "templateId": 9,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★★★",
	            "question": "다음 보기에서 백도어 탐지 방법에 속하는 것만 모두 고르시오.",
	            "questionPassage": [
	                "ⓐ 무결성 검사",
	                "ⓑ 열린 포트 확인",
	                "ⓒ 닫힌 포트 확인",
	                "ⓓ Offset 값 검사 "
	            ],
	            "answer": [
	                "1",
	                "2"
	            ]
	        }
	    },
	    {
	        "id": 447860,
	        "templateId": 9,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★★★",
	            "question": "다음 보기에서 백도어 탐지 방법에 속하는 것만 모두 고르시오.",
	            "questionPassage": [
	                "ⓐ 세션ID 검사 ",
	                "ⓑ 로그 분석",
	                "ⓒ SetUID 파일 검사",
	                "ⓓ Offset 값 검사 "
	            ],
	            "answer": [
	                "2",
	                "3"
	            ]
	        }
	    },
	    {
	        "id": 447861,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "컴퓨터 사용자의 키보드 움직임을 탐지해 ID, 패스워드 등 개인의 중요한 정보를 몰래 빼가는 해킹 공격 방법은?",
	            "answer": "키로거 공격<br/>(Key Logger Attack)"
	        }
	    },
	    {
	        "id": 447862,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "Offset 값을 변경시켜 수신 측에서 패킷을 재조립할 때 오류로 인한 과부하를 발생시킴으로써 시스템이 다운되도록 하는 공격 방법은?",
	            "answer": "티어드롭 공격<br/>(Teardrop Attack)"
	        }
	    },
	    {
	        "id": 447863,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "Ping 명령을 전송할 때 패킷의 크기를 인터넷 프로토콜 허용 범위 이상으로 전송하여 공격 대상의 네트워크를 마비시키는 서비스 거부 공격 방법은?",
	            "answer": "죽음의 핑<br/>(Ping of Death)"
	        }
	    },
	    {
	        "id": 447864,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "서비스 거부(DoS) 공격 기법 중 TCP가 신뢰성 있는 전송을 위해 사용하는 3-way-handshake 과정을 의도적으로 중단시킴으로써 공격 대상지인 서버가 대기 상태에 놓여 정상적인 서비스를 수행하지 못하게 하는 공격 방법은?",
	            "answer": "SYN Flooding"
	        }
	    },
	    {
	        "id": 447865,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 여러 곳에 분산된 공격 지점에서 한 곳의 서버에 대해 분산 서비스 공격을 수행하는 네트워크 공격 유형으로, 네트워크에서 취약점이 있는 호스트들을 탐색한 후 이들 호스트들에 분산 서비스 공격용 툴을 설치하여 에이전트(Agent)로 만든 후 공격에 이용한다.",
	            "answer": "DDoS<br/>(Distributed Denial of Service, 분산 서비스 거부) 공격"
	        }
	    },
	    {
	        "id": 447866,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "정부의 ‘개인정보의 기술적·관리적 보호조치 기준’에 따라 SSL 인증서 또는 암호화 응용 프로그램을 설치하여 전송 정보를 암호화하여 송·수신 하는 서버를 가리키는 용어는?",
	            "answer": "보안 서버"
	        }
	    },
	    {
	        "id": 447867,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 다중 사용자 컴퓨터 시스템 또는 네트워크 시스템에서 로그인을 요청한 사용자의 정보를 확인하고 접근 권한을 검증하는 보안 절차로, 망(Network)을 경유해서 컴퓨터에 접속해 오는 사용자가 등록된 사용자인지 확인하는 것과 전송된 메시지가 변조되거나 의미가 그릇되지 않고 송신자가 보낸 그대로의 것인지를 확인하는 것이 있다.",
	            "answer": "인증<br/>(Authentication)"
	        }
	    },
	    {
	        "id": 447868,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 인증의 유형은?",
	            "questionPassage": "사용자가 기억하고 있는 정보를 기반으로 인증을 수행하는 것으로, 관리 비용이 저렴하나, 사용자가 인증 정보를 기억하지 못하면 본인이라도 인증 받지 못한다.",
	            "answer": "지식 기반 인증<br/>(Something You Know)"
	        }
	    },
	    {
	        "id": 447869,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 인증의 유형은?",
	            "questionPassage": "사용자가 소유하고 있는 것을 기반으로 인증을 수행하는 것으로, 소유물이 쉽게 도용될 수 있으므로 지식 기반 인증 방식이나 생체 기반 인증 방식과 함께 사용된다.",
	            "answer": "소유 기반 인증<br/>(Something You Have)"
	        }
	    },
	    {
	        "id": 447870,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 인증의 유형은?",
	            "questionPassage": "사용자의 고유한 생체 정보를 기반으로 인증을 수행하는 것으로, 사용이 쉽고 도난의 위험도 적으며 위조가 어렵다.",
	            "answer": "생체 기반 인증<br/>(Something You Are)"
	        }
	    },
	    {
	        "id": 447871,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 인증의 유형은?",
	            "questionPassage": "사용자의 행동 정보를 이용해 인증을 수행하는 것이다.",
	            "answer": "행위 기반 인증<br/>(Something You Do)"
	        }
	    },
	    {
	        "id": 447872,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 인증의 유형은?",
	            "questionPassage": "인증을 시도하는 위치의 적절성을 통해 인증을 수행하는 것이다.",
	            "answer": "위치 기반 인증<br/>(Somewhere You Are)"
	        }
	    },
	    {
	        "id": 447873,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 정보 시스템의 무결성(Integrity), 가용성(Availability), 기밀<br/>성(Confidentiality)을 확보하기 위해 보안 요소 및 보안 체계를 식별하고 이들 간의 관계를 정의한 구조이다.",
	            "answer": "보안 아키텍처<br/>(Security Architecture)"
	        }
	    },
	    {
	        "id": 447874,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 안전한 정보 시스템 환경을 유지하고 보안 수준을 향상시키기 위한 체계로, 대표적인 국제 표준으로 ISO 27001이 있다.",
	            "answer": "보안 프레임워크<br/>(Security Framework)"
	        }
	    },
	    {
	        "id": 447875,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 시스템 사용에 대한 모든 내역을 기록해 놓은 것으로, 이를 이용하면 시스템 침해 사고 발생 시 해킹 흔적이나 공격 기법을 파악할 수 있다.",
	            "answer": "로그(Log)"
	        }
	    },
	    {
	        "id": 447876,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "리눅스에서 로그 정보를 관리하는 데몬이 로그 관련 파일들의 위치를 파악하는데 이 파일을 사용하며, 사용자는 이 파일에서 로그 관련 파일들의 저장 위치와 파일명을 변경할 수 있다. 이 파일의 이름은?",
	            "answer": "syslog.conf"
	        }
	    },
	    {
	        "id": 447877,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "Windows 이벤트 뷰어의 로그 중 다른 컴퓨터와의 상호 작용으로 발생하는 이벤트가 기록되는 로그는?",
	            "answer": "Forwarded Events"
	        }
	    },
	    {
	        "id": 447878,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "이용자가 인터넷과 같은 공중망에 사설망을 구축하여 마치 전용망을 사용하는 효과를 가지는 보안 솔루션은?",
	            "answer": "VPN<br/>(Virtual Private Network, <br/>가상 사설 통신망)"
	        }
	    },
	    {
	        "id": 447879,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 기업이나 조직 내부의 네트워크와 인터넷 간에 전송되는 정보를 선별하여 수용·거부·수정하는 기능을 가진 침입 차단 시스템으로, 내부 네트워크에서 외부로 나가는 패킷은 그대로 통과시키고, 외부에서 내부 네트워크로 들어오는 패킷은 내용을 엄밀히 체크하여 인증된 패킷만 통과시키는 구조이다.",
	            "answer": "방화벽(Firewall)"
	        }
	    },
	    {
	        "id": 447880,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "해커 침입 패턴에 대한 추적과 유해 정보 감시를 위해 컴퓨터 시스템의 비정상적인 사용, 오용, 남용 등을 실시간으로 탐지하는 시스템으로, 오용 탐지(Misuse Detection), 이상 탐지(Anomaly Detection) 등의 기능을 수행하는 보안 솔루션은?",
	            "answer": "침입 탐지 시스템<br/>(IDS; Intrusion Detection System)"
	        }
	    },
	    {
	        "id": 447881,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "일반 방화벽이 탐지하지 못하는 SQL 삽입 공격, XSS 등의 웹 기반 공격을 방어할 목적으로 만들어진 웹 서버에 특화된 방화벽으로, 웹 관련 공격을 감시하고 공격이 웹 서버에 도달하기 전에 이를 차단해주는 보안 솔루션은?",
	            "answer": "웹 방화벽<br/>(Web Firewall)"
	        }
	    },
	    {
	        "id": 447882,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 다양한 장비에서 발생하는 로그 및 보안 이벤트를 통합하여 관리하는 보안 솔루션으로, 방화벽, IDS, IPS, 웹 방화벽, VPN 등에서 발생한 로그 및 보안 이벤트를 통합하여 관리함으로써 비용 및 자원을 절약할 수 있다.",
	            "answer": "ESM<br/>(Enterprise Security Management)"
	        }
	    },
	    {
	        "id": 447883,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "방화벽과 침입 탐지 시스템을 결합한 것으로, 비정상적인 트래픽을 능동적으로 차단하고 격리하는 등의 방어 조치를 취하는 보안 솔루션은?",
	            "answer": "침입 방지 시스템<br/>(IPS; Intrusion Prevention System)"
	        }
	    },
	    {
	        "id": 447884,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 내부 정보의 외부 유출을 방지하는 보안 솔루션으로, 사내 직원이 사용하는 PC와 네트워크상의 모든 정보를 검색하고 메일, 메신저, 웹하드, 네트워크 프린터 등의 사용자 행위를 탐지·통제해 외부로의 유출을 사전에 막는다.",
	            "answer": "데이터 유출 방지<br/>(DLP; Data Leakage/Loss Prevention)"
	        }
	    },
	    {
	        "id": 447885,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "네트워크에 접속하는 내부 PC의 MAC 주소를 IP 관리 시스템에 등록한 후 일관된 보안 관리 기능을 제공하는 보안 솔루션으로, 내부 PC의 소프트웨어 사용 현황을 관리하여 불법적인 소프트웨어 설치를 방지하는 것은?",
	            "answer": "NAC<br/>(Network Access Control)"
	        }
	    },
	    {
	        "id": 447886,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "소프트웨어 개발 보안 구축",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음의 취약점 분석 및 평가 절차를 순서대로 나열하시오.",
	            "questionPassage": "ⓐ 취약점 분석 수행 <br/>ⓑ 취약점 분석·평가 대상 선별 <br/>ⓒ 취약점 분석·평가 계획 수립 <br/>ⓓ 취약점 평가 수행",
	            "answer": "ⓒ → ⓑ → ⓐ → ⓓ"
	        }
	    },
	    {
	        "id": 447887,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "헝가리안 표기법(Hungarian Notation)에 대해 간략히 서술하시오.",
	            "answer": "헝가리안 표기법은 변수 작성 시 변수명에 자료형을 암시하는 문자를 덧붙여 작성하는 표기법이다."
	        }
	    },
	    {
	        "id": 447888,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "1972년 미국 벨 연구소의 데니스 리치에 의해 개발되었고, 시스템 소프트웨어를 개발하기 편리하여 시스템 프로그래밍 언어로 널리<br/>사용된다. 자료의 주소를 조작할 수 있는 포인터를 제공하며, 고급 프로그래밍 언어이면서 저급 프로그램 언어의 특징을 모두 갖춘 언어는?",
	            "answer": "C"
	        }
	    },
	    {
	        "id": 447889,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 절차적 프로그래밍 언어의 한 종류로 사무 처리용으로 많<br/>이 사용된다. 영어 문장 형식으로 구성되어 있어 이해와 사용이 쉽고, Identification, Environment, Data, Procedure의 4개의 Divison으로 구성되어 있다.",
	            "answer": "COBOL"
	        }
	    },
	    {
	        "id": 447890,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "절차적 프로그래밍 언어의 종류 중 (     )은 과학 기술 계산용 언어로, 수학과 공학 분야의 공식이나 수식과 같은 형태로 프로그래밍 할 수 있다.",
	            "answer": "FORTRAN"
	        }
	    },
	    {
	        "id": 447891,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "프로그래밍 언어의 종류 중 (     )는 일련의 처리 절차를 정해진 문법에 따라 순서대로 기술해 나가는 언어이며, 주로 객체지향 프로그래밍 언어와 비교된다. 데이터를 중심으로 프로시저를 구현하며, 프로그램 전체가 유기적으로 연결되어 있는 특징이 있다.",
	            "answer": "절차적 프로그래밍 언어"
	        }
	    },
	    {
	        "id": 447892,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "수치 계산이나 논리 연산에 특화되어 있어 과학 기술 계산용으로 주로 사용되며, PASCAL과 C언어의 모체가 된 절차적 프로그래밍 언어는?",
	            "answer": "ALGOL"
	        }
	    },
	    {
	        "id": 447893,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "현실 세계의 개체를 하나의 객체로 만들어, 이 객체들을 조립해서 프로그램을 작성하는 언어는?",
	            "answer": "객체지향 프로그래밍 언어"
	        }
	    },
	    {
	        "id": 447894,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "최초로 GUI를 제공한 언어로, 1세대 객체지향 프로그래밍 언어 중 하나인 순수한 객체지향 프로그래밍 언어는?",
	            "answer": "Smalltalk"
	        }
	    },
	    {
	        "id": 447895,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "C언어에 객체지향 개념을 적용한 언어로, 모든 문제를 객체로 모델링하여 표현하는 언어는?",
	            "answer": "C++"
	        }
	    },
	    {
	        "id": 447896,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 객체지향 프로그래밍 언어는?",
	            "questionPassage": "ㆍ분산 네트워크 환경에 적용이 가능함<br/>ㆍ멀티스레드 기능을 제공하므로 여러 작업을 동시에 처리할 수 있음<br/>ㆍ운영체제 및 하드웨어에 독립적이며, 이식성이 강함",
	            "answer": "JAVA"
	        }
	    },
	    {
	        "id": 447897,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 부품을 조립하듯 객체들을 조립해서 프로그램을 작성할 수 있도록 한 프로그래밍 기법으로, 프로시저보다는 명령과 데이터로 구성된 객체를 중심으로 프로그래밍 한다.",
	            "answer": "객체지향 프로그래밍 언어"
	        }
	    },
	    {
	        "id": 447898,
	        "templateId": 9,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★★☆☆",
	            "question": "다음 보기에서 스크립트 언어(Script Language)를 모두 고르시오.",
	            "questionPassage": [
	                "ⓐ PHP",
	                "ⓑ Cobol",
	                "ⓒ Basic",
	                "ⓓ Smalltalk"
	            ],
	            "answer": [
	                "1",
	                "3"
	            ]
	        }
	    },
	    {
	        "id": 447899,
	        "templateId": 9,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★☆☆☆",
	            "question": "다음 보기에서 스크립트 언어(Script Language)를 고르시오.",
	            "questionPassage": [
	                "ⓐ Cobol",
	                "ⓑ Python",
	                "ⓒ Fortran",
	                "ⓓ Smalltalk"
	            ],
	            "answer": [
	                "2"
	            ]
	        }
	    },
	    {
	        "id": 447900,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "HTML 문서 안에 직접 코드를 삽입하여 사용하는 프로그래밍 언어로, 기계어로 컴파일 되지 않고 별도의 번역기가 소스를 분석하여 동작하게 하는 언어이다. 데이터베이스 처리 작업에 주로 사용되며, 서버용과 클라이언트용으로 구분되는 언어는?",
	            "answer": "스크립트 언어<br/>(Script Language)"
	        }
	    },
	    {
	        "id": 447901,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 넷스케이프(Netscape)의 브렌던 아이크(Brendan Eich)가 개발한 클라이언트용 스크립트 언어로, 서버에서 데이터를 전송할 때 아이디, 비밀번호, 수량 등의 입력 사항을 확인하기 위한 용도로 많이 사용된다.",
	            "answer": "자바 스크립트<br/>(Java Script)"
	        }
	    },
	    {
	        "id": 447902,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 HTML 문서 안에 직접 프로그래밍 언어를 삽입하여 사용하는 것으로, 기계어로 컴파일 되지 않고 별도의 번역기가 소스를 분석하여 동작하게 하는 언어로, 게시판 입력, 상품 검색, 회원 가입 등과 같은 데이터베이스 처리 작업을 수행하기 위해 주로 사용한다.",
	            "answer": "스크립트 언어<br/>(Script Language)"
	        }
	    },
	    {
	        "id": 447903,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 마이크로소프트 사에서 자바 스크립트에 대응하기 위해 제작한 언어로, Active X를 사용하여 마이크로소프트 사의 애플리케이션들을 컨트롤할 수 있다.",
	            "answer": "VB 스크립트<br/>(Visual Basic Script)"
	        }
	    },
	    {
	        "id": 447904,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 서버 측에서 동적으로 수행되는 페이지를 만들기 위한 스크립트 언어로, 마이크로소프트 사에서 제작하여 Windows 계열에서만 수행 가능하다.",
	            "answer": "ASP<br/>(Active Server Page)"
	        }
	    },
	    {
	        "id": 447905,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "JAVA로 만들어진 서버용 스크립트 언어로, 다양한 운영체제에서 사용 가능한 스크립트 언어는?",
	            "answer": "JSP<br/>(Java Server Page)"
	        }
	    },
	    {
	        "id": 447906,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "객체지향 기능을 지원하는 대화형 인터프리터 언어로, 플랫폼에 독립적이고 문법이 간단하여 배우기 쉬운 스크립트 언어는?",
	            "answer": "파이썬(Python)"
	        }
	    },
	    {
	        "id": 447907,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "유닉스/리눅스 계열의 쉘(Shell)에서 사용되는 명령어들의 조합으로 구성된 스크립트 언어는?",
	            "answer": "쉘 스크립트"
	        }
	    },
	    {
	        "id": 447908,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 절차지향 기능을 지원하는 대화형 인터프리터 언어로, 초보자도 쉽게 사용할 수 있는 문법 구조를 가진다.",
	            "answer": "Basic"
	        }
	    },
	    {
	        "id": 447909,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "Linux, Unix, Windows 운영체제에서 사용되고, C, Java 언어의 문법과 유사하여 배우기가 쉽고, 웹페이지 제작에 많이 사용되는 서버용 스크립트 언어는?",
	            "answer": "PHP<br/>(Professional Hypertext Preprocessor)"
	        }
	    },
	    {
	        "id": 447910,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "프로그래밍 언어의 종류 중 선언형 언어의 개념을 간략히 서술하시오.",
	            "answer": "선언형 언어는 프로그램이 수행해야 할 문제를 기술하는 언어이다."
	        }
	    },
	    {
	        "id": 447911,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "프로그래밍 언어의 종류 중 명령형 언어의 개념을 간략히 서술하시오.",
	            "answer": "명령형 언어는 문제를 해결하기 위한 방법을 기술하는 언어이다."
	        }
	    },
	    {
	        "id": 447912,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "선언형 언어 중 (     )는 병렬 처리에 유리하고 재귀 호출이 편리하여 수학적 함수를 조합하는 문제를 해결하는데 주로 이용되며, 대표적인 종류에는 LISP이 있다.",
	            "answer": "함수형 언어"
	        }
	    },
	    {
	        "id": 447913,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "선언형 언어 중 (     )는 기초 논리학에 기반을 두고 논리 문장을 이용해 프로그램을 표현 및 계산하며, 대표적인 종류에는 PROLOG가 있다.",
	            "answer": "논리형 언어"
	        }
	    },
	    {
	        "id": 447914,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "함수형 언어로 부작용(Side Effect)이 없으며, 코드가 간결하고 에러 발생 가능성이 낮은 프로그래밍 언어는?",
	            "answer": "Haskell "
	        }
	    },
	    {
	        "id": 447915,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 인터넷의 표준 문서인 하이퍼텍스트 문서를 만들기 위해 사용하는 선언형 언어로, 특별한 데이터 타입이 없는 단순한 텍스트이므로 호환성이 좋고 사용이 편리하다.",
	            "answer": "HTML"
	        }
	    },
	    {
	        "id": 447916,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 선언형 언어는?",
	            "questionPassage": "ㆍ인공지능 분야에 사용되는 언어<br/>ㆍ기본 자료 구조가 연결 리스트 구조임<br/>ㆍ재귀(Recursion) 호출을 많이 사용함",
	            "answer": "LISP"
	        }
	    },
	    {
	        "id": 447917,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "논리학을 기초로 한 고급 언어로, 인공 지능 분야에서의 논리적인 추론이나 리스트 처리 등에 주로 사용되는 선언형 언어는?",
	            "answer": "PROLOG"
	        }
	    },
	    {
	        "id": 447918,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "기존 HTML의 단점을 보완하여 웹에서 구조화된 폭넓고 다양한 문서들을 상호 교환할 수 있도록 설계된 언어로, 사용자가 새로운 태그(Tag)를 정의 할 수 있으며, 문서의 내용과 이를 표현하는 방식이 독립적인 프로그램밍 언어는?",
	            "answer": "XML"
	        }
	    },
	    {
	        "id": 447919,
	        "templateId": 9,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★☆☆☆",
	            "question": "다음에서 선언형 프로그램 언어를 모두 고르시오.",
	            "questionPassage": [
	                "ⓐ HTML",
	                "ⓑ LISP",
	                "ⓒ FORTRAN",
	                "ⓓ COBOL"
	            ],
	            "answer": [
	                "1",
	                "2"
	            ]
	        }
	    },
	    {
	        "id": 447920,
	        "templateId": 9,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★★☆☆",
	            "question": "다음에서 선언형 프로그램 언어를 모두 고르시오.",
	            "questionPassage": [
	                "ⓐ XML",
	                "ⓑ Haskell",
	                "ⓒ C",
	                "ⓓ Java "
	            ],
	            "answer": [
	                "1",
	                "2"
	            ]
	        }
	    },
	    {
	        "id": 447921,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 순차적인 명령 수행을 기본으로 하는 언어로, 문제를 처리하기 위한 방법에 초점을 두고 코드를 작성하고, 알고리즘을 명시하고 목표는 명시하지 않는다. 절차적 언어와 객체지향 언어가 있으며, 우리가 주로 사용하는 C, Java 등이 여기에 속한다.",
	            "answer": "명령형 언어"
	        }
	    },
	    {
	        "id": 447922,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "프로그램을 효율적으로 개발할 수 있도록 자주 사용하는 함수나 데이터들을 미리 만들어 모아 놓은 집합체는?",
	            "answer": "라이브러리"
	        }
	    },
	    {
	        "id": 447923,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "라이브러는 프로그래밍 언어에는 기본적으로 포함되어 있는 (  ①  )와 개발자들이 필요한 기능들을 만들어 인터넷 등에 공유해 놓은 (  ②  )가 있다.",
	            "answer": "① 표준 라이브러리<br/>② 외부 라이브러리"
	        }
	    },
	    {
	        "id": 447924,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 C언어로 구현된 프로그램을 분석하여 괄호에 들어갈 가장 적합한 헤더 파일은?",
	            "questionPassage": "#include \\<(          )\\><br/>main( ) {<br/>     int a, b, sum;<br/>     scanf(\"%d %d\", &a, &b);<br/>     sum = a + b;<br/>     printf(\"%d\", sum);<br/>}",
	            "answer": "stdio.h",
	            "solution": "문제의 코드에서 사용된 함수 scanf( )와 printf( )를 통해 #include에 들어가야 할 헤더 파일이 stdio.h라는 것을 알 수 있습니다.<br/>❶ #include \\<stdio.h\\><br/>main( ) {<br/>❷  int a, b, sum;<br/>❸  scanf(\"%d %d\", &a, &b);<br/>❹  sum = a + b;<br/>❺  printf(\"%d\", sum);<br/>}<br/>❶ scanf( ), printf( ) 함수가 정의되어 있는 헤더 파일이다.<br/>❷ 정수형 변수 a, b, sum을 선언한다.<br/>❸ 정수 2개를 입력받아 각각 a와 b에 저장한다.<br/>❹ a와 b의 합을 sum에 저장한다.<br/>❺ sum의 값을 정수로 출력한다."
	        }
	    },
	    {
	        "id": 447925,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음과 관련된 C언어의 라이브러리는?",
	            "questionPassage": "ㆍ수학 함수들을 제공한다.<br/>ㆍ주요 함수 : sqrt, pow, abs 등",
	            "answer": "math.h"
	        }
	    },
	    {
	        "id": 447926,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음과 관련된 C언어의 라이브러리는?",
	            "questionPassage": "ㆍ문자열 처리에 사용되는 기능들을 제공한다.<br/>ㆍ주요 함수 : strlen, strcpy, strcmp 등",
	            "answer": "string.h"
	        }
	    },
	    {
	        "id": 447927,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음과 관련된 C언어의 라이브러리는?",
	            "questionPassage": "ㆍ자료형 변환, 난수 발생, 메모리 할당에 사용되는 기능들을 제공한다.<br/>ㆍ주요 함수 : atoi, atof, srand, rand, malloc, free 등",
	            "answer": "stdlib.h"
	        }
	    },
	    {
	        "id": 447928,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음과 관련된 C언어의 라이브러리는?",
	            "questionPassage": "ㆍ시간 처리에 사용되는 기능들을 제공한다.<br/>ㆍ주요 함수 : time, clock 등",
	            "answer": "time.h"
	        }
	    },
	    {
	        "id": 447929,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "자바에 기본적으로 필요한 인터페이스, 자료형, 예외 처리 등에 관련된 기능을 제공하는 표준 라이브러리로, String, System, Process, Runtime 등의 다양한 클래스가 포함되어 있는 패키지는?",
	            "answer": "java.lang"
	        }
	    },
	    {
	        "id": 447930,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "파일 입·출력과 관련된 기능 및 프로토콜을 제공하는 표준 라이브러리로, InputStream, OutputStream, Reader 등의 다양한 클래스가 포함되어 있는 패키지는?",
	            "answer": "java.io"
	        }
	    },
	    {
	        "id": 447931,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "네트워크와 관련된 기능을 제공하는 표준 라이브러리로, Socket, URL, InetAddress 등의 다양한 클래스가 포함되어 있는 패키지는?",
	            "answer": "java.net"
	        }
	    },
	    {
	        "id": 447932,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "사용자 인터페이스(UI)와 관련된 기능을 제공하는 표준 라이브러리로, Frame, Panel, Dialog, Button 등의 다양한 클래스가 포함되어 있는 패키지는?",
	            "answer": "java.awt"
	        }
	    },
	    {
	        "id": 447933,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음과 관련된 Python의 라이브러리는?",
	            "questionPassage": "ㆍ운영체제와 상호 작용하기 위한 기능을 제공한다.<br/>ㆍ주요 메소드 : getcwd( ), chdir( ), system( ) 등",
	            "answer": "os"
	        }
	    },
	    {
	        "id": 447934,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음과 관련된 Python의 라이브러리는?",
	            "questionPassage": "ㆍ고급 문자열 처리를 위한 기능을 제공한다.<br/>ㆍ주요 메소드 : findall( ), sub( ) 등",
	            "answer": "re"
	        }
	    },
	    {
	        "id": 447935,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음과 관련된 Python의 라이브러리는?",
	            "questionPassage": "ㆍ복잡한 수학 연산을 위한 기능을 제공한다.<br/>ㆍ주요 메소드 : cos( ), log( ) 등",
	            "answer": "math"
	        }
	    },
	    {
	        "id": 447936,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "C언어의 헤더 파일 중 ‘stdlib.h’가 제공하는 기능에 대해 간략히 서술하시오.",
	            "answer": "stdlib.h는 자료형 변환, 난수 발생, 메모리 할당에 사용되는 기능들을 제공하는 헤더 파일이다."
	        }
	    },
	    {
	        "id": 447937,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "Java에서 날짜 처리, 난수 발생, 복잡한 문자열 처리 등에 관련된 기능을 제공하는 표준 라이브러리로, Date, Calender, Random, StringTokenizer 등의 다양한 클래스가 포함되어 있는 패키지는?",
	            "answer": "java.util"
	        }
	    },
	    {
	        "id": 447938,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명의 괄호에 공통으로 들어갈 용어는?",
	            "questionPassage": "프로그램의 정상적인 실행을 방해하는 조건이나 상태를 (     )라고 하며, (     )가 발생했을 때 일반적인 처리 루틴은 프로그램을 종료시키거나 로그를 남기도록 하는 것이다. C++, Ada, Java, 자바스크립트와 같은 언어에는 (     )를 처리하기 위한 기능이 내장되어 있다.",
	            "answer": "예외(Exception)"
	        }
	    },
	    {
	        "id": 447939,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 사례에 가장 적합한 Java의 예외 객체는?",
	            "questionPassage": "입·출력 처리가 중단된 경우",
	            "answer": "InterruptedIOException"
	        }
	    },
	    {
	        "id": 447940,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 사례에 가장 적합한 Java의 예외 객체는?",
	            "questionPassage": "잘못된 호출문으로 인해 잘못된 인자를 전달한 경우",
	            "answer": "IllegalArgumentException"
	        }
	    },
	    {
	        "id": 447941,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 사례에 가장 적합한 Java의 예외 객체는?",
	            "questionPassage": "배열을 a[10]으로 선언한 후 a[11]에 값을 저장한 경우",
	            "answer": "ArrayIndexOutOfBoundsException",
	            "solution": "ㆍJava에서 배열 a[10]을 선언한다는 것은 a[0]부터 a[9]까지 10개의 요소를 가진 배열 객체를 생성한다는 의미입니다.<br/>ㆍ사용자는 a[0]~a[9]에만 접근하여 값을 저장하거나 사용할 수 있는데, 이 때 a[10]에 값을 저장하게 되면 범위를 벗어난 배열 주소에 접근한 것이 되어 예외 ArrayIndexOutOfBoundsException이 발생하게 됩니다."
	        }
	    },
	    {
	        "id": 447942,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "프로그래밍 언어 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 사례에 가장 적합한 Java의 예외 객체는?",
	            "questionPassage": "존재하지 않은 클래스에 접근한 경우",
	            "answer": "ClassNotFoundException"
	        }
	    },
	    {
	        "id": 447943,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "컴퓨터 시스템의 자원들을 효율적으로 관리하며, 사용자가 컴퓨터를 편리하고 효과적으로 사용할 수 있도록 환경을 제공하는 여러 프로그램의 모임으로, CPU, 메모리 공간, 기억장치, 입·출력장치 등의 자원을 관리하는 것은?",
	            "answer": "운영체제<br/>(OS; Operating System)"
	        }
	    },
	    {
	        "id": 447944,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "운영체제(Operating System)의 목적 4가지는?",
	            "answer": "처리 능력 향상,<br/>사용 가능도 향상, <br/>신뢰도 향상, <br/>반환 시간 단축"
	        }
	    },
	    {
	        "id": 447945,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "일정 시간 내에 시스템이 처리하는 일의 양을 의미하는 운영체제 성능 평가 기준은?",
	            "answer": "처리 능력<br/>(Throughput)"
	        }
	    },
	    {
	        "id": 447946,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "시스템에 작업을 의뢰한 시간부터 처리가 완료될 때까지 걸린 시간을 의미하는 운영체제 성능 평가 기준은?",
	            "answer": "반환 시간<br/>(Turn Around Time)"
	        }
	    },
	    {
	        "id": 447947,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "시스템을 사용할 필요가 있을 때 즉시 사용 가능한 정도를 의미하는 운영체제 성능 평가 기준은?",
	            "answer": "사용 가능도<br/>(Availability)"
	        }
	    },
	    {
	        "id": 447948,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "시스템이 주어진 문제를 정확하게 해결하는 정도를 의미하는 운영체제 성능 평가 기준은?",
	            "answer": "신뢰도<br/>(Reliability)"
	        }
	    },
	    {
	        "id": 447949,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "리눅스의 커널 위에서 동작하며, 자바와 코틀린으로 애플리케이션을 작성하는 등 휴대용 장치에서 주로 사용되는 운영체제는?",
	            "answer": "안드로이드<br/>(Android)"
	        }
	    },
	    {
	        "id": 447950,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "(      )는 1960년대 AT&T 벨(Bell) 연구소가 MIT, General Electric 사와 함께 공동 개발한 운영체제로, 시분할 시스템(Time Sharing System)을 위해 설계되었으며, 대부분 C 언어로 작성되어 있어 이식성이 높고, 장치, 프로세스 간의 호환성이 높다.",
	            "answer": "UNIX<br/>(유닉스)"
	        }
	    },
	    {
	        "id": 447951,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "(     )은 UNIX의 가장 핵심적인 부분으로, 컴퓨터가 부팅될 때 주기억장치에 적재된 후 상주하면서 실행되고, 프로세스(CPU 스케줄링) 관리, 기억장치 관리, 파일 관리, 입·출력 관리, 프로세스간 통신, 데이터 전송 및 변환 등 여러 가지 기능을 수행한다.",
	            "answer": "커널(Kernel)"
	        }
	    },
	    {
	        "id": 447952,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "사용자의 명령어를 인식하여 프로그램을 호출하고 명령을 수행<br/>하는 명령어 해석기로, 시스템과 사용자 간의 인터페이스를 담당하는 UNIX 시스템의 구성 요소는?",
	            "answer": "쉘(Shell)"
	        }
	    },
	    {
	        "id": 447953,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "1990년대 마이크로소프트 사가 개발하였으며, GUI, 선점형 멀티태스킹, OLE, PnP 등의 특징을 갖고 있는 운영체제는?",
	            "answer": "윈도우<br/>(Windows)"
	        }
	    },
	    {
	        "id": 447954,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "키보드로 명령어를 직접 입력하지 않고, 마우스로 아이콘이나 메뉴를 선택하여 모든 작업을 수행하는 방식을 의미하는 Windows의 특징은?",
	            "answer": "그래픽 사용자 인터페이스<br/>(GUI; Graphic User Interface)"
	        }
	    },
	    {
	        "id": 447955,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 UNIX 시스템의 구성은?",
	            "questionPassage": "ㆍ일반 사용자가 작성한 응용 프로그램을 처리하는 데 사용한다.<br/>ㆍDOS에서의 외부 명령어에 해당된다.",
	            "answer": "유틸리티 프로그램<br/>(Utility Program)"
	        }
	    },
	    {
	        "id": 447956,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(           )는 애플(Apple) 사에서 개발한 유닉스 기반의 모바일 운영체제로, 아이폰, 아이팟 터치, 아이패드 등에 내장되며, 타사 제품은 (           )를 탑재할 수 없다.",
	            "answer": "iOS"
	        }
	    },
	    {
	        "id": 447957,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "컴퓨터 시스템에 프린터나 사운드 카드 등의 하드웨어를 설치했을 때, 해당 하드웨어를 사용하는 데 필요한 시스템 환경을 운영체제가 자동으로 구성해 주는 기능은?",
	            "answer": "PnP<br/>(Plug and Play, <br/>자동 감지 기능)"
	        }
	    },
	    {
	        "id": 447958,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 1991년 Linus Torvalds가 UNIX를 기반으로 개발한 운영체제로, 프로그램 소스 코드가 무료로 공개되어 있기 때문에 프로그래머가 원하는 기능을 추가할 수 있고, 다양한 플랫폼에 설치하여 사용이 가능하며, 재배포가 가능하다.",
	            "answer": "LINUX<br/>(리눅스)"
	        }
	    },
	    {
	        "id": 447959,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "1980년대 애플(Apple) 사가 UNIX를 기반으로 개발하였으며, 아이맥과 맥북 등 애플 사에서 생산하는 제품에서만 사용이 가능하고, 드라이버 설치 및 install과 uninstall의 과정이 단순한 운영체제는?",
	            "answer": "MacOS"
	        }
	    },
	    {
	        "id": 447960,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "Windows의 특징 중 (     )은 동시에 여러 개의 프로그램을 실행하는 멀티태스킹을 하면서 운영체제가 각 작업의 CPU 이용 시간을 제어하여 응용 프로그램 실행중 문제가 발생하면 해당 프로그램을 강제 종료시키고 모든 시스템 자원을 반환하는 방식이다.",
	            "answer": "선점형 멀티태스킹<br/>(Preemptive Multi-Tasking)"
	        }
	    },
	    {
	        "id": 447961,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다른 여러 응용 프로그램에서 작성된 문자나 그림 등의 개체를 현재 작성 중인 문서에 자유롭게 연결하거나 삽입하여 편집할 수 있게 하는 기능을 의미하는 Windows의 특징은?",
	            "answer": "OLE<br/>(Object Linking and Embedding)"
	        }
	    },
	    {
	        "id": 447962,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "보조기억장치에 보관중인 프로그램이나 데이터를 언제 주기억장치로 적재할 것인지를 결정하는 기억장치 관리 전략은?",
	            "answer": "반입(Fetch) 전략"
	        }
	    },
	    {
	        "id": 447963,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "반입(Fetch) 전략 중 (     )은 실행중인 프로그램이 특정 프로그램이나 데이터 등의 참조를 요구할 때 적재하는 방법이다.",
	            "answer": "요구 반입<br/>(Demand Fetch)"
	        }
	    },
	    {
	        "id": 447964,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "반입(Fetch) 전략 중 (     )은 실행중인 프로그램에 의해 참조될 프로그램이나 데이터를 미리 예상하여 적재하는 방법이다.",
	            "answer": "예상 반입<br/>(Anticipatory Fetch)"
	        }
	    },
	    {
	        "id": 447965,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "프로그램이나 데이터가 들어갈 수 있는 크기의 빈 영역 중에서 첫 번째 분할 영역에 배치시키는 배치 전략은?",
	            "answer": "최초 적합<br/>(First Fit)"
	        }
	    },
	    {
	        "id": 447966,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "프로그램이나 데이터가 들어갈 수 있는 크기의 빈 영역 중에서 단편화를 가장 작게 남기는 분할 영역에 배치시키는 배치 전략은?",
	            "answer": "최적 적합<br/>(Best Fit)"
	        }
	    },
	    {
	        "id": 447967,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "프로그램이나 데이터가 들어갈 수 있는 크기의 빈 영역 중에서 단편화를 가장 많이 남기는 분할 영역에 배치시키는 배치 전략은?",
	            "answer": "최악 적합<br/>(Worst Fit)"
	        }
	    },
	    {
	        "id": 447968,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "메모리 관리 기법 중 Worst Fit 방법을 사용할 경우 10K 크기의 프로그램 실행을 위해서는 어느 영역에 할당되는가?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0014.jpg\"/>",
	            "answer": "NO5",
	            "solution": "최악 적합(Worst Fit)은 단편화가 가장 많이 남는 영역에 할당하는 것으로 사용되지 않은 영역(FREE) 중 크기가 가장 큰 영역은 NO5입니다."
	        }
	    },
	    {
	        "id": 447969,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "기억장치의 관리 전략은 보조기억장치의 프로그램이나 데이터를 주기억장치에 적재시키는 시기, 적재 위치 등을 지정하여 한정된 주기억장치의 공간을 효율적으로 사용하기 위한 것으로 (     ) 전략, (     ) 전략, (     ) 전략이 있다.",
	            "answer": "반입(Fetch),<br/>배치(Placement),<br/>교체(Replacement)"
	        }
	    },
	    {
	        "id": 447970,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "주기억장치의 모든 영역이 이미 사용중인 상태에서 새로운 프로그램이나 데이터를 주기억장치에 배치하려고 할 때, 이미 사용되고 있는 영역 중에서 어느 영역을 사용할 것인지를 결정하는 기억장치 관리 전략은?",
	            "answer": "교체(Replacement) 전략"
	        }
	    },
	    {
	        "id": 447971,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "주기억장치의 사용자 영역을 일정 수의 고정된 크기로 분할하여 준비상태 큐에서 준비 중인 프로그램을 각 영역에 할당하여 수행하는 주기억장치 할당 기법은?",
	            "answer": "고정 분할 할당 기법<br/>(정적 할당 기법)"
	        }
	    },
	    {
	        "id": 447972,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 주기억장치를 미리 분할해 놓지 않고 프로그램을 주기억장치에 적재하면서 필요한 만큼의 크기로 영역을 분할하는 기법으로, 고정 분할 할당 기법의 단편화를 줄이기 위해 사용된다.",
	            "answer": "가변 분할 할당 기법<br/>(동적 할당 기법)"
	        }
	    },
	    {
	        "id": 447973,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "주기억장치보다 큰 사용자 프로그램을 실행하기 위한 단일 분할 할당 기법은?",
	            "answer": "오버레이<br/>(Overlay)"
	        }
	    },
	    {
	        "id": 447974,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "하나의 프로그램 전체를 주기억장치에 할당하여 사용하다 필요에 따라 다른 프로그램과 교체하는 단일 분할 할당 기법은?",
	            "answer": "스와핑<br/>(Swapping)"
	        }
	    },
	    {
	        "id": 447975,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "가상기억장치의 일반적인 구현 방법은 블록의 종류에 따라 (  ①  ) 기법과 (  ②  ) 기법으로 나눌 수 있다. (  ①  ) 기법은 프로그램을 고정된 크기의 일정한 블록으로 나누고, (  ②  )은 가변적인 크기의 블록으로 나눈다.",
	            "answer": "① 페이징(Paging)<br/>② 세그먼테이션(Segmentation)"
	        }
	    },
	    {
	        "id": 447976,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "가상기억장치(Virtual Memory)의 개념을 간략히 서술하시오.",
	            "answer": "가상기억장치는 보조기억장치의 일부를 주기억장치처럼 사용하는 것이다."
	        }
	    },
	    {
	        "id": 447977,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 가상기억장치에 보관되어 있는 프로그램과 주기억장치의 영역을 동일한 크기로 나눈 후 나눠진 프로그램을 동일하게 나눠진 주기억장치의 영역에 적재시켜 실행하는 기법으로, 외부 단편화는 발생하지 않으나 내부 단편화는 발생할 수 있다.",
	            "answer": "페이징(Paging) 기법"
	        }
	    },
	    {
	        "id": 447978,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 가상기억장치에 보관되어 있는 프로그램을 다양한 크기의 논리적인 단위로 나눈 후 주기억장치에 적재시켜 실행시키는 기법으로, 내부 단편화는 발생하지 않으나 외부 단편화는 발생할 수 있다.",
	            "answer": "세그먼테이션(Segmentation) 기법"
	        }
	    },
	    {
	        "id": 447979,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "보조기억장치(하드디스크)의 일부를 주기억장치처럼 사용하는 것으로, 용량이 작은 주기억장치를 마치 큰 용량을 가진 것처럼 사용하는 기법은?",
	            "answer": "가상기억장치<br/>(Virtual Memory)"
	        }
	    },
	    {
	        "id": 447980,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "앞으로 가장 오랫동안 사용하지 않을 페이지를 교체하는 기법으로, 벨레이디(Belady)가 제안하였으며, 페이지 부재 횟수가 가장 적게 발생하는 가장 효율적인 페이지 교체 알고리즘은?",
	            "answer": "OPT<br/>(OPTimal replacement, 최적 교체)"
	        }
	    },
	    {
	        "id": 447981,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 각 페이지가 주기억장치에 적재될 때마다 그때의 시간을 기억시켜 가장 먼저 들어와서 가장 오래 있었던 페이지를 교체하는 기법으로, 이해하기 쉽고, 프로그래밍 및 설계가 간단하다.",
	            "answer": "FIFO<br/>(First In First Out)"
	        }
	    },
	    {
	        "id": 447982,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 가장 오랫동안 주기억장치에 있던 페이지 중 자주 사용되는 페이지의 교체를 방지하기 위한 기법으로, FIFO 기법의 단점을 보완하는데 사용된다.",
	            "answer": "SCR<br/>(Second Chance Replacement, 2차 기회 교체)"
	        }
	    },
	    {
	        "id": 447983,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "4개의 페이지를 수용할 수 있는 주기억장치가 있으며, 초기에는 모두 비어 있다고 가정한다. 다음의 순서로 페이지 참조가 발생할 때, FIFO 페이지 교체 알고리즘을 사용할 경우 페이지 결함의 발생 횟수는?",
	            "questionPassage": "페이지 참조 순서 : 1, 2, 3, 1, 2, 4, 5, 1",
	            "answer": "6",
	            "solution": "4개의 페이지를 수용할 수 있는 주기억장치이므로 아래 그림과 같이 4개의 페이지 프레임으로 표현할 수 있습니다.<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0015.jpg\"/><br/>참조 페이지가 페이지 테이블에 없을 경우 페이지 결함(부재)이 발생됩니다. 초기에는 모든 페이지가 비어 있으므로 처음 1, 2, 3 그리고 4 페이지 적재 시 페이지 결함이 발생됩니다. FIFO 기법은 가장 먼저 들어와 있었던 페이지를 교체하는 기법이므로 참조 페이지 5를 참조할 때에는 1을 제거한 후 5를 가져오게 됩니다. 이러한 과정으로 모든 페이지에 대한 요구를 처리하고 나면 총 페이지 결함 발생 횟수는 6회입니다."
	        }
	    },
	    {
	        "id": 447984,
	        "templateId": 8,
	        "registeredDate": 1652337950000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "주기억장치에 완전히 비어 있는 3개의 페이지가 있다. 페이지 교체 방법으로 LRU를 사용할 때 요청된 페이지 번호의 순서가 0, 1, 2, 3, 0, 1, 4, 0인 경우 페이지 부재(Page Fault)는 몇 번 발생하는가?",
	            "answer": "7",
	            "solution": "3개의 페이지를 수용할 수 있는 주기억장치이므로 아래 그림과 같이 3개의 페이지 프레임으로 표현할 수 있습니다.<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0016.jpg\"/><br/>참조 페이지가 페이지 테이블에 없을 경우 페이지 부재(Page Fault)가 발생됩니다. 초기에는 모든 페이지가 비어 있으므로 처음 0, 1, 2 페이지 적재 시 페이지 부재가 발생됩니다. LRU 기법은 최근에 가장 오랫동안 사용하지 않은 페이지를 교체하는 기법이므로 참조 페이지 3을 참조할 때에는 0을 제거한 후 3을 가져오게 됩니다. 이러한 과정으로 모든 페이지에 대한 요구를 처리하고 나면 총 페이지 부재는 7번 발행합니다."
	        }
	    },
	    {
	        "id": 447985,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 LRU와 비슷한 알고리즘으로, 최근에 사용하지 않은 페이지를 교체하는 기법이다. 매 페이지마다 두 개의 하드웨어 비트, 즉 참조 비트(Reference Bit)와 변형 비트(Modified Bit)가 필요하다.",
	            "answer": "NUR<br/>(Not Used Recently)"
	        }
	    },
	    {
	        "id": 447986,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 가장 오랫동안 사용되지 않았던 페이지를 먼저 교체하는 기법으로, 각 페이지마다 계수기(Counter)나 스택(Stack)을 두어 현시점에서 가장 오랫동안 사용하지 않은, 즉 가장 오래전에 사용된 페이지를 교체한다.",
	            "answer": "LRU<br/>(Least Recently Used)"
	        }
	    },
	    {
	        "id": 447987,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 사용 빈도가 가장 적은 페이지를 교체하는 기법으로, 활발하게 사용되는 페이지는 사용 횟수가 많아 교체되지 않고 사용된다.",
	            "answer": "LFU<br/>(Least Frequently Used) "
	        }
	    },
	    {
	        "id": 447988,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "Denning이 제안한 프로그램의 움직임에 관한 모델로, 프로세스를 효과적으로 실행하기 위하여 주기억장치에 유지되어야 하는 페이지들의 집합을 의미하는 용어는?",
	            "answer": "워킹 셋<br/>(Working Set)"
	        }
	    },
	    {
	        "id": 447989,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "하나의 프로세스가 작업을 수행하는 과정에서 지나치게 많은 페이지 부재(Page Fault) 발생으로 인해 프로세스 수행에 소요되는 시간보다 페이지 이동에 소요되는 시간이 더 커지는 현상은?",
	            "answer": "스래싱<br/>(Thrashing)"
	        }
	    },
	    {
	        "id": 447990,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 실행중인 프로세스는 일정 시간에 메모리의 일정 부분만을 집중적으로 참조한다는 성질을 의미한다. 데닝(Denning) 교수에 의해 Locality의 개념이 증명되었고, 가상기억장치 관리와 캐시 메모리 시스템의 이론적인 근거이다.",
	            "answer": "Locality<br/>(국부성)"
	        }
	    },
	    {
	        "id": 447991,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "Locality의 종류 중 (     )은 프로세스가 실행되면서 하나의 페이지를 일정 시간 동안 집중적으로 액세스하는 현상이다.",
	            "answer": "시간 구역성<br/>(Temporal Locality)"
	        }
	    },
	    {
	        "id": 447992,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "Locality의 종류 중 (     )은 프로세스 실행 시 일정 위치의 페이지를 집중적으로 액세스하는 현상이다.",
	            "answer": "공간 구역성<br/>(Spatial Locality)"
	        }
	    },
	    {
	        "id": 447993,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 운영체제가 프로세스에 대한 중요한 정보를 저장해 놓는 곳으로, 각 프로세스가 생성될 때마다 생성되고, 프로세스가 완료되면 제거된다.",
	            "answer": "PCB<br/>(Process Control Block, <br/>프로세스 제어 블록)"
	        }
	    },
	    {
	        "id": 447994,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "다음 프로세스 상태 전이도의 괄호에 들어갈 알맞은 상태는?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0017.jpg\"/>",
	            "answer": "① 준비(Ready)<br/>② 실행(Run) <br/>③ 대기(Wait)"
	        }
	    },
	    {
	        "id": 447995,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "시스템의 여러 자원을 할당받아 실행하는 프로그램 단위 또는 프로세스 내에서의 작업 단위로, 프로세스의 일부 특성을 갖고 있기 때문에 경량(Light Weight) 프로세스라고도 불리는 것은?",
	            "answer": "스레드<br/>(Thread)"
	        }
	    },
	    {
	        "id": 447996,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명은 무엇에 대한 정의인가?",
	            "questionPassage": "ㆍ실행중인 프로그램<br/>ㆍ프로시저가 활동 중인 것<br/>ㆍ비동기적 행위를 일으키는 주체<br/>ㆍPCB의 존재로서 명시되는 것",
	            "answer": "프로세스<br/>(Proccess)"
	        }
	    },
	    {
	        "id": 447997,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "입·출력 작업이 완료되어 프로세스가 대기 상태에서 준비 상태로 전이 되는 과정을 의미하는 프로세스 상태 전이 관련 용어는?",
	            "answer": "Wake Up"
	        }
	    },
	    {
	        "id": 447998,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 입·출력장치의 공유 및 상대적으로 느린 입·출력장치의 처리 속도를 보완하고 다중 프로그래밍 시스템의 성능을 향상시키기 위해 입·출력할 데이터를 직접 입·출력장치에 보내지 않고 나중에 한꺼번에 입·출력하기 위해 디스크에 저장하는 과정이다.",
	            "answer": "스풀링(Spooling)"
	        }
	    },
	    {
	        "id": 447999,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "프로세스 상태 전이는 프로세스가 시스템 내에 존재하는 동안 프로세스의 상태가 변하는 것을 의미한다. 준비 상태에서 대기하고 있는 프로세스 중 하나가 스케줄링되어 중앙처리장치를 할당받아 실행 상태로 전이되는 과정은?",
	            "answer": "디스패치<br/>(Dispatch)"
	        }
	    },
	    {
	        "id": 448000,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "프로세스가 생성되어 실행될 때 필요한 시스템의 여러 자원을 해당 프로세스에게 할당하는 작업으로, 공정성, 처리율 증가, CPU 이용률 증가, 응답 시간 및 반환 시간 최소화를 목적으로 하는 것은?",
	            "answer": "스케줄링<br/>(Scheduling)"
	        }
	    },
	    {
	        "id": 448001,
	        "templateId": 9,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "question": "다음 보기에서 비선점 스케줄링의 종류를 모두 고르시오.",
	            "questionPassage": [
	                "ⓐ Round Robin",
	                "ⓑ 기한부",
	                "ⓒ FCFS",
	                "ⓓ 다단계 큐"
	            ],
	            "answer": [
	                "2",
	                "3"
	            ]
	        }
	    },
	    {
	        "id": 448002,
	        "templateId": 9,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "question": "다음 보기에서 비선점 스케줄링의 종류를 모두 고르시오.",
	            "questionPassage": [
	                "ⓐ HRN",
	                "ⓑ 우선순위",
	                "ⓒ SRT",
	                "ⓓ SJF",
	                "ⓔ 선점 우선순위"
	            ],
	            "answer": [
	                "1",
	                "2",
	                "4"
	            ]
	        }
	    },
	    {
	        "id": 448003,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 이미 할당된 CPU를 다른 프로세스가 강제로 빼앗아 사용할 수 없는 스케줄링 기법으로, 프로세스가 CPU를 할당받으면 해당 프로세스가 완료될 때까지 CPU를 사용하며, 종류에는 FCFS, SJF, 우선순위, HRN, 기한부 등이 있다.",
	            "answer": "비선점(Non-Preemptive) <br/>스케줄링"
	        }
	    },
	    {
	        "id": 448004,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 하나의 프로세스가 CPU를 할당받아 실행하고 있을 때 우선순위가 높은 다른 프로세스가 CPU를 강제로 빼앗아 사용할 수 있는 스케줄링 기법으로, 주로 빠른 응답 시간을 요구하는 대화식 시분할 시스템에 사용되며, 종류에는 Round Robin, SRT, 선점 우선순위, 다단계 큐, 다단계 피드백 큐 등이 있다.",
	            "answer": "선점(Preemptive) <br/>스케줄링"
	        }
	    },
	    {
	        "id": 448005,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "HRN 비선점형 스케줄링의 우선순위를 구하는 계산식은?",
	            "answer": "대기 시간 + 서비스 시간 / 서비스 시간"
	        }
	    },
	    {
	        "id": 448006,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "SJF(Shortest Job First) 스케줄링에서 다음과 같은 프로세스가 차례로 큐에 도착하였을 때, 평균 반환 시간은?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0018.jpg\"/>",
	            "answer": "11.5",
	            "solution": "SJF는 준비상태 큐에서 기다리고 있는 프로세스들 중에서 실행 시간이 가장 짧은 프로세스에게 먼저 CPU를 할당하는 기법입니다. 그러므로 프로세스 수행 순서는 다음과 같습니다.<br/>※ 대기 시간은 바로 앞 프로세스의 반환 시간이고, 반환 시간은 프로세스의 ‘대기 시간 + 실행 시간’입니다.<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0019.jpg\"/><br/>∴ 평균 대기 시간 = (0+3+7+14)/4 = 6<br/>∴ 평균 반환 시간 = (3+7+14+22)/4 = 11.5"
	        }
	    },
	    {
	        "id": 448007,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "SJF(Shortest Job First) 스케줄링에서 다음과 같은 프로세스가 차례로 큐에 도착하였을 때, 평균 대기 시간은?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0018.jpg\"/>",
	            "answer": "6",
	            "solution": "SJF는 준비상태 큐에서 기다리고 있는 프로세스들 중에서 실행 시간이 가장 짧은 프로세스에게 먼저 CPU를 할당하는 기법입니다. 그러므로 프로세스 수행 순서는 다음과 같습니다.<br/>※ 대기 시간은 바로 앞 프로세스의 반환 시간이고, 반환 시간은 프로세스의 ‘대기 시간 + 실행 시간’입니다.<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0019.jpg\"/><br/>∴ 평균 대기 시간 = (0+3+7+14)/4 = 6<br/>∴ 평균 반환 시간 = (3+7+14+22)/4 = 11.5"
	        }
	    },
	    {
	        "id": 448008,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 실행 시간이 긴 프로세스에 불리한 SJF 기법을 보완하기 위한 것으로, 대기 시간과 서비스(실행) 시간을 이용하는 기법으로, 우선순위 계산 공식을 이용하여 서비스(실행) 시간이 짧은 프로세스나 대기 시간이 긴 프로세스에게 우선순위를 주어 CPU를 할당한다.",
	            "questionPassage": "",
	            "answer": "HRN<br/>(Highest Response-ratio Next)",
	            "solution": "",
	            "solutionPassage": ""
	        }
	    },
	    {
	        "id": 448009,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "HRN 방식으로 스케줄링 할 경우, 입력된 작업이 다음과 같을 때 처리되는 작업 순서는?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0020.jpg\"/>",
	            "answer": "D → B → C → A",
	            "solution": "HRN 방식의 계산식은 ‘(대기 시간 + 서비스 시간)/서비스 시간’입니다.<br/>ㆍA 작업 : (5 + 20) / 20 = 1.25<br/>ㆍB 작업 : (40 + 20) / 20 = 3<br/>ㆍC 작업 : (15 + 45) / 45 = 1.33…<br/>ㆍD 작업 : (20 + 2) / 2 = 11<br/>숫자가 가장 높은 것부터 낮은 순으로 우선순위가 부여됩니다."
	        }
	    },
	    {
	        "id": 448010,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "SJF(Shortest Job First) 스케줄링에서 다음과 같은 프로세스가 차례로 큐에 도착하였을 때, 평균 반환 시간은?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0022.jpg\"/>",
	            "answer": "9",
	            "solution": "SJF는 준비상태 큐에서 기다리고 있는 프로세스들 중에서 실행 시간이 가장 짧은 프로세스에게 먼저 CPU를 할당하는 기법입니다. 그러므로 프로세스 수행 순서는 다음과 같습니다.<br/>※ 대기 시간은 바로 앞 프로세스의 반환 시간이고, 반환 시간은 프로세스의 ‘대기 시간 + 실행 시간’입니다.<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0023.jpg\"/><br/>∴ 평균 대기 시간 = (0+2+6+11)/4 = 4.75<br/>∴ 평균 반환 시간 = (2+6+11+17)/4 = 9"
	        }
	    },
	    {
	        "id": 448011,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "SJF(Shortest Job First) 스케줄링에서 다음과 같은 프로세스가 차례로 큐에 도착하였을 때, 평균 대기 시간은?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0022.jpg\"/>",
	            "answer": "4.75",
	            "solution": "SJF는 준비상태 큐에서 기다리고 있는 프로세스들 중에서 실행 시간이 가장 짧은 프로세스에게 먼저 CPU를 할당하는 기법입니다. 그러므로 프로세스 수행 순서는 다음과 같습니다.<br/>※ 대기 시간은 바로 앞 프로세스의 반환 시간이고, 반환 시간은 프로세스의 ‘대기 시간 + 실행 시간’입니다.<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0023.jpg\"/><br/>∴ 평균 대기 시간 = (0+2+6+11)/4 = 4.75<br/>∴ 평균 반환 시간 = (2+6+11+17)/4 = 9"
	        }
	    },
	    {
	        "id": 448012,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "HRN 방식으로 스케줄링 할 경우, 입력된 작업이 다음과 같을 때 처리되는 작업 순서는?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0024.jpg\"/>",
	            "answer": "D → C → B → A",
	            "solution": "HRN 방식의 계산식은 ‘(대기 시간 + 서비스 시간)/서비스 시간’입니다.<br/>ㆍA 작업 : (5 + 5) / 5 = 2<br/>ㆍB 작업 : (10 + 8) / 8 = 2.25<br/>ㆍC 작업 : (15 + 10) / 10 = 2.5<br/>ㆍD 작업 : (20 + 8) / 8 = 3.5<br/>숫자가 가장 높은 것부터 낮은 순으로 우선순위가 부여됩니다."
	        }
	    },
	    {
	        "id": 448013,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "준비상태 큐에서 기다리고 있는 프로세스들 중에서 실행 시간이 가장 짧은 프로세스에게 먼저 CPU를 할당하며, 가장 적은 평균 대기 시간을 제공하는 최적 알고리즘은?",
	            "answer": "SJF<br/>(Shortest Job First)"
	        }
	    },
	    {
	        "id": 448014,
	        "templateId": 9,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★☆",
	            "question": "다음 보기에서 UNIX SHELL 환경 변수를 출력하는 명령어를 모두 고르시오.",
	            "questionPassage": [
	                "ⓐ set ",
	                "ⓑ configenv ",
	                "ⓒ admintool ",
	                "ⓓ env"
	            ],
	            "answer": [
	                "1",
	                "4"
	            ]
	        }
	    },
	    {
	        "id": 448015,
	        "templateId": 9,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★☆",
	            "question": "다음 보기에서 UNIX SHELL 환경 변수를 출력하는 명령어를 모두 고르시오.",
	            "questionPassage": [
	                "ⓐ printenv ",
	                "ⓑ pkginfo ",
	                "ⓒ setenv ",
	                "ⓓ badblocks"
	            ],
	            "answer": [
	                "1",
	                "3"
	            ]
	        }
	    },
	    {
	        "id": 448016,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "시스템 소프트웨어의 동작에 영향을 미치는 동적인 값들의 모임으로, 변수명과 값으로 구성되고, 시스템의 기본 정보를 저장하는 것은?",
	            "answer": "환경 변수<br/>(Environment Variable)"
	        }
	    },
	    {
	        "id": 448017,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "Windows에서 환경 변수를 명령어나 스크립트에서 사용하려면 변수명 앞뒤에 (      )를 입력해야 한다.",
	            "answer": "%"
	        }
	    },
	    {
	        "id": 448018,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "UNIX나 LINUX에서 환경 변수를 명령어나 스크립트에서 사용하려면 변수명 앞에 (      )를 입력해야 한다.",
	            "answer": "$"
	        }
	    },
	    {
	        "id": 448019,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 UNIX 환경 변수는?",
	            "questionPassage": "현재 X 윈도 디스플레이 위치",
	            "answer": "$DISPLAY"
	        }
	    },
	    {
	        "id": 448020,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 UNIX 환경 변수는?",
	            "questionPassage": "사용자의 홈 디렉터리",
	            "answer": "$HOME"
	        }
	    },
	    {
	        "id": 448021,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 UNIX 환경 변수는?",
	            "questionPassage": "프로그램 사용 시 기본적으로 지원되는 언어",
	            "answer": "$LANG"
	        }
	    },
	    {
	        "id": 448022,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 UNIX 환경 변수는?",
	            "questionPassage": "현재 작업하는 디렉터리",
	            "answer": "$PWD"
	        }
	    },
	    {
	        "id": 448023,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 UNIX 환경 변수는?",
	            "questionPassage": "실행 파일을 찾는 경로",
	            "answer": "$PATH"
	        }
	    },
	    {
	        "id": 448024,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 UNIX 환경 변수는?",
	            "questionPassage": "쉘 프롬프트 정보",
	            "answer": "$PS1"
	        }
	    },
	    {
	        "id": 448025,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 UNIX 환경 변수는?",
	            "questionPassage": "로긴 터미널 타입",
	            "answer": "$TERM"
	        }
	    },
	    {
	        "id": 448026,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 UNIX 환경 변수는?",
	            "questionPassage": "사용자의 이름",
	            "answer": "$USER"
	        }
	    },
	    {
	        "id": 448027,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 Windows 환경 변수는?",
	            "questionPassage": "설치된 프로그램의 필요 데이터가 저장된 폴더",
	            "answer": "%APPDATA%"
	        }
	    },
	    {
	        "id": 448028,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 Windows 환경 변수는?",
	            "questionPassage": "로그인한 계정의 정보가 저장된 드라이브",
	            "answer": "%HOMEDRIVE%"
	        }
	    },
	    {
	        "id": 448029,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 Windows 환경 변수는?",
	            "questionPassage": "기본 프로그램의 설치 폴더",
	            "answer": "%PROGRAMFILES%"
	        }
	    },
	    {
	        "id": 448030,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "UNIX에서 'a.txt' 파일에 대해 다음과 같이 권한을 부여하는 명령문을 작성하면?",
	            "questionPassage": "ㆍ사용자에게 읽기, 쓰기, 실행 권한을 부여한다.<br/>ㆍ그룹에게 읽기, 실행 권한을 부여한다.<br/>ㆍ기타 사용자에게 실행 권한을 부여한다.<br/>ㆍ한 줄로 작성하고, 8진법 숫자를 이용한 명령문을 이용한다.",
	            "answer": "chmod 751 a.txt",
	            "solution": "사용자는 읽기, 쓰기, 실행 권한이 모두 있으므로 rwx<br/>그룹은 읽기, 실행 권한만 있으므로 r-x<br/>기타 사용자는 실행 권한만 있으므로 - -x가 됩니다.<br/>이를 8진수로 변환하는 과정은 다음과 같습니다.<br/>rwx r-x - -x<br/>       ↓<br/>111 101 001<br/>       ↓<br/>  7    5    1<br/>       ↓<br/>chmod 751 a.txt"
	        }
	    },
	    {
	        "id": 448031,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "Windows에서 사용하는 dir 명령어의 기능을 간략히 서술하시오.",
	            "answer": "dir은 현재 디렉터리의 파일 목록을 표시하는 명령어이다."
	        }
	    },
	    {
	        "id": 448032,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "UNIX에서 현재 시스템의 프로세스와 메모리 사용 현황을 표시할 때 사용하는 명령어는?",
	            "answer": "top"
	        }
	    },
	    {
	        "id": 448033,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "Windows에서 디스크 표면을 트랙과 섹터로 나누어 초기화할 때 사용하는 명령어는?",
	            "answer": "format"
	        }
	    },
	    {
	        "id": 448034,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "UNIX의 명령어 중 fork의 기능을 간략히 서술하시오.",
	            "answer": "fork는 새로운 프로세스를 생성하는 명령어이다."
	        }
	    },
	    {
	        "id": 448035,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "Windows의 명령 프롬프트에서 file.txt 파일의 읽기 전용 속성은 해제하고 숨김 속성은 지정하는 명령문을 작성하면?",
	            "answer": "attrib -r +h file.txt"
	        }
	    },
	    {
	        "id": 448036,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "UNIX에서 abc.txt 파일에 대해 다른 사용자의 읽기, 쓰기 권한을 제거하는 명령문을 작성하면?",
	            "answer": "chmod o-rw abc.txt"
	        }
	    },
	    {
	        "id": 448037,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "Windows의 명령 프롬프트에서 C 드라이브에 있는 file1.txt 파일을 file2.txt로 이름을 변경하여 D 드라이브로 이동하는 명령문을 작성하면?",
	            "answer": "move file1.txt d:\\file2.txt"
	        }
	    },
	    {
	        "id": 448038,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "UNIX에서 text1이라는 디렉터리를 생성하는 명령문을 작성하면?",
	            "answer": "mkdir text1"
	        }
	    },
	    {
	        "id": 448039,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "UNIX에서 text2라는 디렉터리를 삭제하는 명령문을 작성하면?",
	            "answer": "rmdir text2"
	        }
	    },
	    {
	        "id": 448040,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "Windows의 명령 프롬프트에서 file.txt 파일의 내용 중 ‘가나다’ 문자열을 찾는 명령문을 작성하면?",
	            "answer": "find \"가나다\" file.txt"
	        }
	    },
	    {
	        "id": 448041,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "UNIX에서 현재 디렉터리에 있는 file1.txt 파일을 dir 디렉터리로 이동하되 파일명을 file2.txt로 변경하여 이동시키려는 명령문을 작성하면?",
	            "answer": "mv file1.txt dir/file2.txt"
	        }
	    },
	    {
	        "id": 448042,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "UNIX에서 'file.txt' 파일에 대해 다음과 같이 권한을 부여하는 명령문을 작성하면?",
	            "questionPassage": "ㆍ사용자에게 읽기, 쓰기, 실행 권한을 부여한다.<br/>ㆍ그룹에게 읽기, 쓰기, 실행 권한을 부여한다.<br/>ㆍ기타 사용자에게 읽기, 실행 권한을 부여한다.<br/>ㆍ한 줄로 작성하고, 8진법 숫자를 이용한 명령문을 이용한다.",
	            "answer": "chmod 775 file.txt",
	            "solution": "사용자는 읽기, 쓰기, 실행 권한이 모두 있으므로 rwx<br/>그룹은 읽기, 실행 권한만 있으므로 r-x<br/>기타 사용자는 실행 권한만 있으므로 - -x가 됩니다.<br/>이를 8진수로 변환하는 과정은 다음과 같습니다.<br/>rwx rwx r-x<br/>       ↓<br/>111 111 101<br/>       ↓<br/>  7    7    5<br/>       ↓<br/>chmod 775 file.txt"
	        }
	    },
	    {
	        "id": 448043,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "UNIX에서 사용하는 명령어 중 find의 기능을 간략히 서술하시오.",
	            "answer": "find는 파일을 찾을 때 사용하는 명령어이다."
	        }
	    },
	    {
	        "id": 448044,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "UNIX에서 media1.txt 파일의 소유자를 user12로 변경하려고 한다. 알맞은 명령문을 작성하면?",
	            "answer": "chown user12 media1.txt"
	        }
	    },
	    {
	        "id": 448045,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "Windows의 명령 프롬프트에서 현재 디렉터리의 파일 목록을 한 화면 단위로 표시하려고 한다. 알맞은 명령문을 작성하면?",
	            "answer": "dir/p"
	        }
	    },
	    {
	        "id": 448046,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 인터넷에 연결된 모든 컴퓨터 자원을 구분하기 위한 고유한 주소로, 8비트씩 4부분, 총 32비트로 구성되어 있으며, A 클래스에서 E 클래스까지 총 5단계로 구성되어 있다.",
	            "answer": "IP 주소<br/>(Internet Protocol Address)"
	        }
	    },
	    {
	        "id": 448047,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "할당된 네트워크 주소를 다시 여러 개의 작은 네트워크로 나누어<br/>사용하는 것을 의미하는 용어는?",
	            "answer": "서브네팅<br/>(Subnetting)"
	        }
	    },
	    {
	        "id": 448048,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "IPv4는 (  ①  ) 비트, IPv6은 (  ②  ) 비트의 주소 공간을 제공한다.",
	            "answer": "① 32<br/>② 128"
	        }
	    },
	    {
	        "id": 448049,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "IPv4의 주소 부족 문제를 해결하기 위해 개발된 IPv6의 주소 체계 세 가지는?",
	            "answer": "유니캐스트(Unicast), <br/>멀티캐스트(Multicast), <br/>애니캐스트(Anycast)"
	        }
	    },
	    {
	        "id": 448050,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(    )은 숫자로 된 IP 주소를 사람이 이해하기 쉬운 문자 형태로 표현한 것으로, 호스트 컴퓨터 이름, 소속 기관 이름, 소속 기관의 종류, 소속 국가명 순으로 구성된다.",
	            "answer": "도메인 네임<br/>(Domain Name)"
	        }
	    },
	    {
	        "id": 448051,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "컴퓨터가 이해할 수 있는 IP 주소로 변환하는 역할을 하는 시스템은?",
	            "answer": "DNS<br/>(Domain Name System)"
	        }
	    },
	    {
	        "id": 448052,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 IPv4의 주소 부족 문제를 해결하기 위해 개발된 것으로, 128비트의 긴 주소를 사용하므로 주소 부족 문제를 해결할 수 있으며, 인증성, 기밀성, 데이터 무결성의 지원으로 보안 문제를 해결할 수 있다.",
	            "answer": "IPv6<br/>(Internet Protocol version 6)"
	        }
	    },
	    {
	        "id": 448053,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "IPv6은 현재 사용하고 있는 IP 주소 체계의 주소 부족 문제를 해결하기 위해 개발된 주소 체계로, (  ①  )bit씩 (  ②  ) 부분, 총 (  ③  )bit로 구성되어 있다.",
	            "answer": "① 16 <br/>② 8 <br/>③ 128"
	        }
	    },
	    {
	        "id": 448054,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "IPv6은 현재 사용하고 있는 IP 주소 체계의 주소 부족 문제를 해결하기 위해 개발된 주소 체계로, 각 부분을 (  ①  ) 진수로 표현하고, (  ②  )으로 구분한다.",
	            "answer": "① 16 <br/>② 콜론(:)"
	        }
	    },
	    {
	        "id": 448055,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 IPv6 주소 체계는?",
	            "questionPassage": "단일 송신자와 단일 수신자 간의 통신(1 대 1 통신에 사용)",
	            "answer": "유니캐스트<br/>(Unicast)"
	        }
	    },
	    {
	        "id": 448056,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 IPv6 주소 체계는?",
	            "questionPassage": "단일 송신자와 다중 수신자 간의 통신(1 대 다 통신에 사용)",
	            "answer": "멀티캐스트<br/>(Multicast)"
	        }
	    },
	    {
	        "id": 448057,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 IPv6 주소 체계는?",
	            "questionPassage": "단일 송신자와 가장 가까이 있는 단일 수신자 간의 통신(1 대 1 통신에 사용)",
	            "answer": "애니캐스트<br/>(Anycast)"
	        }
	    },
	    {
	        "id": 448058,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "OSI(Open System Interconnection) 참조 모델의 개념을 간략히 서술하시오.",
	            "answer": "OSI 참조 모델은 다른 시스템 간의 원활한 통신을 위해 ISO(국제표준화기구)에서 제안한 통신 규약이다."
	        }
	    },
	    {
	        "id": 448059,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "다양한 전송매체를 통해 비트 스트림을 전송하고, 전송에 필요한 두 장치 간의 실제 접속과 절단 등 기계적, 전기적, 기능적, 절차적 특성에 대한 규칙을 정의하는 OSI 계층은?",
	            "answer": "물리 계층<br/>(Physical Layer)"
	        }
	    },
	    {
	        "id": 448060,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "OSI-7 Layer에서 링크의 설정과 유지 및 종료를 담당하며, 노드간의 오류 제어와 흐름 제어 기능을 수행하는 계층은?",
	            "answer": "데이터 링크 계층<br/>(Data Link Layer)"
	        }
	    },
	    {
	        "id": 448061,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "OSI 7계층에서 단말기 사이에 오류 수정과 흐름 제어를 수행하여 신뢰성 있고 명확한 데이터를 전달하는 계층은?",
	            "answer": "전송 계층<br/>(Transport Layer)",
	            "solution": "‘단말기 사이’, 즉 종단 시스템(End-to-End) 간에 오류 수정과 흐름 제어를 수행하는 계층은 전송 계층입니다."
	        }
	    },
	    {
	        "id": 448062,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "송·수신 측 간의 관련성을 유지하고 프로세스 간의 대화 제어(Dialogue Control) 및 동기점(Synchronization Point)을 이용한 효율적인 데이터 복구를 제공하는 OSI 참조 모델의 계층은?",
	            "answer": "세션 계층<br/>(Session Layer)"
	        }
	    },
	    {
	        "id": 448063,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "OSI 7계층 중 (     )은 개방 시스템들 간의 네트워크 연결을 관리하는 기능과 데이터의 교환 및 중계 기능을 수행하는 계층으로, 주요 기능으로는 통신 시스템 간의 경로 배정, 패킷 전달, 주소 설정, 통신량의 폭주 제어 등이 있다.",
	            "answer": "네트워크 계층<br/>(Network Layer)"
	        }
	    },
	    {
	        "id": 448064,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "OSI 7계층 중 (     )은 서로 다른 데이터 표현 형태를 갖는 시스템 간의 상호 접속을 위해 필요한 계층으로, 주요 기능으로는 코드 변환, 데이터 암호화, 데이터 압축, 구문 검색, 정보 형식(포맷) 변환, 문맥 관리 등이 있다.",
	            "answer": "표현 계층<br/>(Presentation Layer)"
	        }
	    },
	    {
	        "id": 448065,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "OSI-7계층에서 종단 간 신뢰성 있고 효율적인 데이터를 전송하기 위해 오류 검출과 복구, 흐름 제어를 수행하는 계층은?",
	            "answer": "전송 계층<br/>(Transport Layer)"
	        }
	    },
	    {
	        "id": 448066,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "물리적 계층의 신뢰도를 높여 주고 링크의 확립 및 유지할 수 있는 수단을 제공하고, 에러 제어, 흐름 제어 등의 기능을 수행하는 OSI-7계층은?",
	            "answer": "데이터 링크 계층<br/>(Data Link Layer)"
	        }
	    },
	    {
	        "id": 448067,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "응용 프로세스 간의 정보 교환, 전자 사서함, 파일 전송, 가상 터미널 등 사용자(응용 프로그램)가 OSI 환경에 접근할 수 있도록 서비스를 제공하는데 사용되는 OSI 참조 모델의 계층은?",
	            "answer": "응용 계층<br/>(Application Layer)"
	        }
	    },
	    {
	        "id": 448068,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 컴퓨터와 컴퓨터 또는 컴퓨터와 네트워크를 연결하는 장치로, 정보 전송 시 정보가 케이블을 통해 전송될 수 있도록 정보 형태를 변경하며, 이더넷 카드(LAN 카드) 혹은 네트워크 어댑터라고도 한다.",
	            "answer": "네트워크 인터페이스 카드<br/>(NIC; Network Interface Card)"
	        }
	    },
	    {
	        "id": 448069,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "디지털 회선의 중간에 위치하는 것으로, 거리가 증가할수록 감쇠하는 디지털 신호의 장거리 전송을 위해 수신한 신호를 새로 재생시키거나 출력 전압을 높여 전송하는 네트워크 관련 장비는?",
	            "answer": "리피터<br/>(Repeater)"
	        }
	    },
	    {
	        "id": 448070,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 브리지와 같이 LAN과 LAN을 연결하여 훨씬 더 큰 LAN을 만드는 장치로,  하드웨어를 기반으로 처리하므로 전송 속도가 빠르며, OSI 참조 모델의 데이터 링크 계층에서 사용된다.",
	            "answer": "스위치(Switch)"
	        }
	    },
	    {
	        "id": 448071,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "프로토콜이 다른 네트워크를 연결시켜 주는 장치로, 응용 계층을 연결하여 데이터 형식의 변환 및 프로토콜의 변환 등을 수행한다. 주로 LAN에서 다른 네트워크에 데이터를 보내거나 다른 네트워크로부터 데이터를 받아들이는 출입구 역할을 하는 네트워크 관련 장비는?",
	            "answer": "게이트웨이<br/>(Gateway)"
	        }
	    },
	    {
	        "id": 448072,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "한 사무실이나 가까운 거리의 컴퓨터들을 연결하는 장치로, 각 회선을 통합적으로 관리하며, 신호 증폭 기능을 하는 리피터(Repeater)의 역할도 포함하는 네트워크 관련 장비는?",
	            "answer": "허브<br/>(Hub)"
	        }
	    },
	    {
	        "id": 448073,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "리피터와 동일한 기능을 수행하지만, 단순 신호 증폭뿐만 아니라 네트워크 분할을 통해 트래픽을 감소시키며, 물리적으로 다른 네트워크를 연결할 때 사용하는 네트워크 관련 장비는?",
	            "answer": "브리지<br/>(Bridge)"
	        }
	    },
	    {
	        "id": 448074,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "인터넷에 접속할 때 반드시 필요한 장비로, 가장 최적의 경로를 설정하여 전송하고, OSI 참조 모델의 네트워크 계층에서 동작하는 네트워크 관련 장비는?",
	            "answer": "라우터<br/>(Router)"
	        }
	    },
	    {
	        "id": 448075,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "브리지(Bridge)는 LAN과 LAN을 연결하거나 LAN 안에서의 컴퓨터 그룹을 연결하는 기능을 수행한다. 브리지를 이용한 서브넷Subnet) 구성 시 브리지가 15개일 경우 전송 가능한 회선 수는?",
	            "answer": "105",
	            "solution": "계산식 : 15(15-1) / 2"
	        }
	    },
	    {
	        "id": 448076,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "LAN과 LAN을 연결하거나 LAN 안에서의 컴퓨터 그룹을 연결하는 기능을 수행하고, 네트워크의 수많은 단말기들에 의해 발생되는 트래픽 병목 현상을 줄일 수 있는 네트워크 관련 장비는?",
	            "answer": "브리지(Bridge)"
	        }
	    },
	    {
	        "id": 448077,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "OSI 전 계층의 프로토콜 구조가 다른 네트워크의 연결과 세션 계층, 표현 계층, 응용 계층 간을 연결하여 데이터 형식 변환, 주소 변환, 프로토콜 변환 등을 수행하는 네트워크 관련 장비는?",
	            "answer": "게이트웨이<br/>(Gateway)"
	        }
	    },
	    {
	        "id": 448078,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "심리학자 톰 마릴은 컴퓨터가 메시지를 전달하고, 메시지가 제대로 도착했는지 확인하며, 도착하지 않았을 경우 메시지를 재전송하는 일련의 방법을 ‘기술적 은어’를 뜻하는 (      )이라는 용어로 정의하였다.",
	            "answer": "프로토콜<br/>(Protocol)"
	        }
	    },
	    {
	        "id": 448079,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "프로토콜은 서로 다른 기기들 간의 데이터 교환을 원활하게 수행할 수 있도록 표준화시켜 놓은 통신 규약이다. 프로토콜의 기본 요소 3가지는?",
	            "answer": "구문(Syntax),<br/>의미(Semantics), <br/>시간(Timing)"
	        }
	    },
	    {
	        "id": 448080,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "사용자의 컴퓨터에서 작성된 메일(E-mail)을 다른 사람의 계정이 있는 곳으로 전송하는 프로토콜은?",
	            "answer": "SMTP<br/>(Simple Mail Transfer Protocol)"
	        }
	    },
	    {
	        "id": 448081,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 멀리 떨어져 있는 컴퓨터에 접속하여 자신의 컴퓨터처럼 사용할 수 있도록 해주는 서비스로, 프로그램을 실행하는 등 시스템 관리 작업을 할 수 있는 가상의 터미널(Virtual Terminal) 기능을 수행한다.",
	            "answer": "텔넷(TELNET)"
	        }
	    },
	    {
	        "id": 448082,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "TCP/IP의 네트워크 관리하고, 라우터나 허브 등 네트워크 기기의 네트워크 정보를 네트워크 관리 시스템에 보내는데 사용되는 표준 통신 규약(Protocol)은?",
	            "answer": "SNMP<br/>(Simple Network Management Protocol)"
	        }
	    },
	    {
	        "id": 448083,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "월드 와이드 웹(WWW)에서 HTML 문서를 송수신 하기 위한 표준 프로토콜은?",
	            "answer": "HTTP<br/>(HyperText Transfer Protocol)"
	        }
	    },
	    {
	        "id": 448084,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 RTP 패킷의 전송 품질을 제어하기 위한 제어 프로토콜로, 세션(Session)에 참여한 각 참여자들에게 주기적으로 제어 정보를 전송하며, 데이터 전송을 모니터링하고 최소한의 제어와 인증 기능만을 제공한다.",
	            "answer": "RTCP<br/>(Real-Time Control Protocol)"
	        }
	    },
	    {
	        "id": 448085,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "멀티캐스트를 지원하는 호스트나 라우터 사이에서 멀티캐스트 그룹 유지를 위해 사용되는 프로토콜은?",
	            "answer": "IGMP<br/>(Internet Group<br/>Management Protocol)"
	        }
	    },
	    {
	        "id": 448086,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(      )는 TCP/IP 기반의 인터넷 통신 서비스에서 인터넷 프로토콜(IP)과 조합하여 통신 중에 발생하는 오류의 처리와 전송 경로의 변경 등을 위한 제어 메시지를 취급하는 무연결 전송용 프로토콜로, OSI 기본 참조 모델의 네트워크 계층에 속한다.",
	            "answer": "ICMP<br/>(Internet Control Message Protocol)"
	        }
	    },
	    {
	        "id": 448087,
	        "templateId": 9,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★★",
	            "question": "다음 TCP/IP 프로토콜 중 전송 계층 프로토콜을 모두 고르시오.",
	            "questionPassage": [
	                "ⓐ HTTP ",
	                "ⓑ SMTP ",
	                "ⓒ FTP ",
	                "ⓓ TCP "
	            ],
	            "answer": [
	                "4"
	            ]
	        }
	    },
	    {
	        "id": 448088,
	        "templateId": 9,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★☆",
	            "question": "다음 TCP/IP 프로토콜 중 전송 계층 프로토콜을 모두 고르시오.",
	            "questionPassage": [
	                "ⓐ IP ",
	                "ⓑ UDP ",
	                "ⓒ ARP ",
	                "ⓓ RTCP "
	            ],
	            "answer": [
	                "2",
	                "4"
	            ]
	        }
	    },
	    {
	        "id": 448089,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 프로토콜은?",
	            "questionPassage": "ㆍ신뢰성이 있는 연결 지향형 전달 서비스이다.<br/>ㆍ기본 헤더는 기본적으로 20Byte에서 60Byte까지 사용할 수 있다.<br/>ㆍ스크림 전송 기능을 제공한다.<br/>ㆍ순서 제어, 오류 제어, 흐름 제어 기능을 제공한다.",
	            "answer": "TCP<br/>(Transmission Control Protocol)"
	        }
	    },
	    {
	        "id": 448090,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "데이터 전송 전에 연결을 설정하지 않는 비연결형 서비스를 제공하고, 흐름 제어나 순서 제어가 없어 전송 속도가 빠른 TCP/IP 전송 계층의 프로토콜은?",
	            "answer": "UDP<br/>(User Datagram Protocol)"
	        }
	    },
	    {
	        "id": 448091,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "컴퓨터와 컴퓨터 또는 컴퓨터와 인터넷 사이에서 파일을 주고받을 수 있도록 하는 원격 파일 전송 프로토콜은?",
	            "answer": "FTP<br/>(File Transfer Protocol)"
	        }
	    },
	    {
	        "id": 448092,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "TCP/IP 인터넷 계층의 프로토콜 중 ( ① )는 TCP/IP에서 사용되는 논리 주소를 물리 주소(MAC Address)로 변환시켜주는 프로토콜이고, ( ② )는 호스트의 물리 주소를 통하여 논리 주소인 IP 주소를 얻어오기 위해 사용되는 프로토콜이다.",
	            "answer": "① ARP(Address Resolution Protocol) <br/>② RARP(Reverse Address Resolution Protocol)"
	        }
	    },
	    {
	        "id": 448093,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "비연결형인 데이터그램 방식을 사용하고, 전송할 데이터의 주소 지정, 경로 설정 등의 기능을 제공하는 TCP/IP 인터넷 계층의 프로토콜은?",
	            "answer": "IP<br/>(Internet Protocol)"
	        }
	    },
	    {
	        "id": 448094,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "프로토콜의 기본 요소 중 구문(Syntax)의 개념을 간략히 서술하시오.",
	            "answer": "구문은 전송하고자 하는 데이터의 형식, 부호화, 신호 레벨 등을 규정한다."
	        }
	    },
	    {
	        "id": 448095,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "프로토콜의 기본 요소 중 의미 (Semantics)의 개념을 간략히 서술하시오.",
	            "answer": "의미는 두 기기 간의 효율적이고 정확한 정보 전송을 위한 협조 사항과 오류 관리를 위한 제어 정보를 규정한다."
	        }
	    },
	    {
	        "id": 448096,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "프로토콜의 기본 요소 중 시간(Timing)의 개념을 간략히 서술하시오.",
	            "answer": "시간은 두 기기 간의 통신 속도, 메시지의 순서 제어 등을 규정한다."
	        }
	    },
	    {
	        "id": 448097,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "Linked Data와 Open Data를 결합한 용어로, 웹상에 존재하는 데이터를 개별 URI로 식별하고, 각 URI에 링크 정보를 부여함으로써 상호 연결된 웹을 지향하는 모형은?",
	            "answer": "개방형 링크드 데이터<br/>(LOD; Linked Open Data)"
	        }
	    },
	    {
	        "id": 448098,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "기존 무선 랜의 한계 극복을 위해 등장하였으며, 대규모 디바이스의 네트워크 생성에 최적화되어 차세대 이동통신, 홈네트워킹, 공공 안전 등의 특수목적에 사용되는 새로운 방식의 네트워크 기술은?",
	            "answer": "메시 네트워크<br/>(Mesh Network)"
	        }
	    },
	    {
	        "id": 448099,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "여러 개의 독립된 통신장치가 UWB(Ultra Wide Band) 기술 또는 블루투스(Bluetooth) 기술을 사용하여 통신망을 형성하는 무선 네트워크 기술은?",
	            "answer": "피코넷<br/>(PICONET)"
	        }
	    },
	    {
	        "id": 448100,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "(     )는 광섬유를 이용한 통신기술의 하나로, 파장이 서로 다른 복수의 광신호를 동시에 이용하고, 빛의 파장 축과 파장이 다른 광선은 서로 간섭을 일으키지 않는 성질을 이용한다.",
	            "answer": "파장 분할 다중화<br/>(WDM; Wavelength Division Multiplexing)"
	        }
	    },
	    {
	        "id": 448101,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음이 설명하는 용어는?",
	            "questionPassage": "ㆍ컴퓨팅, 네트워킹, 스토리지, 관리 등을 모두 소프트웨어로 정의한다.<br/>ㆍ인력의 개입 없이 소프트웨어 조작만으로 자동 제어 관리한다.<br/>ㆍ데이터 센터 내 모든 자원을 가상화하여 서비스한다.",
	            "answer": "소프트웨어 정의 데이터 센터<br/>(SDDC; Software Defined Data Center)"
	        }
	    },
	    {
	        "id": 448102,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "인터넷 상에서 서버 및 회선, 플랫폼, 소프트웨어 등과 같은 정보기술 자원을 소유하지 않고 서비스 형태로 빌려 쓰는 방식으로, 매우 큰 가상화된 컴퓨팅 환경을 의미하는 기술은?",
	            "answer": "클라우드 컴퓨팅<br/>(Cloud Computing)"
	        }
	    },
	    {
	        "id": 448103,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 ITU-T에서 개발하고 있는 유선망 기반의 차세대 통신망으로, 유선망뿐만 아니라 이동 사용자를 목표로 하며, 이동통신에서 제공하는 완전한  이동성(Full Mobility) 제공을 목표로 개발되고 있다.",
	            "answer": "NGN<br/>(Next Generation Network, 차세대 통신망)"
	        }
	    },
	    {
	        "id": 448104,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "네트워크를 컴퓨터처럼 모델링하여 여러 사용자가 각각의 소프트웨어로 네트워킹을 가상화하여 제어하고 관리하는 네트워크는?",
	            "answer": "SDN<br/>(Software Defined Networking, 소프트웨어 정의 네트워킹)"
	        }
	    },
	    {
	        "id": 448105,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 고주파(HF)를 이용한 근거리 무선 통신 기술로, 아주 가까운 거리에서 양방향 통신을 지원하는 RFID 기술의 일종이다.",
	            "answer": "NFC<br/>(Near Field Communication, 근거리 무선 통신)"
	        }
	    },
	    {
	        "id": 448106,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 짧은 거리에서 많은 양의 디지털 데이터를 낮은 전력으로 전송하기 위한 무선 기술로, 0.5m/W 정도의 저전력으로 많은 양의 데이터를 1km의 거리까지 전송할 수 있을 뿐만 아니라, 땅속이나 벽면 뒤로도 전송이 가능하다.",
	            "answer": "UWB<br/>(Ultra WideBand,<br/>초광대역)"
	        }
	    },
	    {
	        "id": 448107,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "웨어러블(Wearable) 또는 몸에 심는(Implant) 형태의 센서나 기기를 무선으로 연결하는 개인 영역 네트워킹 기술은?",
	            "answer": "WBAN<br/>(Wireless Body Area Network)"
	        }
	    },
	    {
	        "id": 448108,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 지리적인 자료를 수집·저장·분석·출력할 수 있는 컴퓨터 응용 시스템으로, 위성을 이용해 모든 사물의 위치 정보를 제공해 준다.",
	            "answer": "GIS<br/>(Geographic Information System, 지리 정보 시스템)"
	        }
	    },
	    {
	        "id": 448109,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 주변 상황에 맞추어 스스로 망을 구성하는 네트워크로, 통신망 커버리지 및 전송 용량 확장의 경제성 문제를 해결하고, 망의 운영과 관리의 효율성을 높이는 것을 목적으로 한다.",
	            "answer": "SON<br/>(Self Organizing Network, 자동 구성 네트워크)"
	        }
	    },
	    {
	        "id": 448110,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "재난 현장과 같이 별도의 고정된 유선망을 구축할 수 없는 장소에서 모바일 호스트(Mobile Host)만을 이용하여 구성한 네트워크는?",
	            "answer": "애드 혹 네트워크<br/>(Ad-hoc Network)"
	        }
	    },
	    {
	        "id": 448111,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "네트워크에서 하나의 물리적인 코어 네트워크 인프라(Infrastructure)를 독립된 다수의 가상 네트워크로 분리하여 각각의 네트워크를 통해 다양한 고객 맞춤형 서비스를 제공하는 것을 목적으로 하는 네트워크 기술은?",
	            "answer": "네트워크 슬라이싱<br/>(Network Slicing)"
	        }
	    },
	    {
	        "id": 448112,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "일반 블루투스와 동일한 2.4GHz 주파수 대역을 사용하지만 연결되지 않은 대기 상태에서는 절전모드를 유지하는 기술은?",
	            "answer": "저전력 블루투스 기술<br/>(BLE; Bluetooth Low Energy)"
	        }
	    },
	    {
	        "id": 448113,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "스마트 시티, 스마트 스테이션 등 4차 산업혁명 시대를 맞아 새로운 변화에 따라 급격하게 증가하는 데이터 트래픽을 효과적으로 수용하기 위해 시행되는 과학기술정보통신부 주관 사업은?",
	            "answer": "지능형 초연결망"
	        }
	    },
	    {
	        "id": 448114,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "지리적으로 분산된 컴퓨터 자원을 초고속 인터넷망을 통해 격자 구조로 연결하여 공유함으로써 하나의 고성능 컴퓨터처럼 사용하는 방법은?",
	            "answer": "그리드 컴퓨팅<br/>(Grid Computing)"
	        }
	    },
	    {
	        "id": 448115,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "모든 사물에 부착된 RFID 태그 또는 센서를 통해 탐지된 사물의 인식 정보는 물론 주변의 온도, 습도, 위치 정보, 압력, 오염 및 균열 정도 등과 같은 환경 정보를 실시간으로 네트워크와 연결하여 수집하고 관리하는 네트워크 시스템은?",
	            "answer": "USN<br/>(Ubiquitous Sensor Network, <br/>유비쿼터스 센서 네트워크)"
	        }
	    },
	    {
	        "id": 448116,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 무선 통신을 이용한 기계와 기계 사이의 통신으로, 변압기 원격 감시, 전기, 가스 등의 원격 검침, 무선 신용 카드 조회기, 위치 추적 시스템, 시설물 관리 등을 무선으로 통합하여 상호 작용한다.",
	            "answer": "M2M<br/>(Machine to Machine, 사물 통신)"
	        }
	    },
	    {
	        "id": 448117,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "휴대형 기기로 이동하면서 자유로이 네트워크에 접속하여 업무를 처리할 수 있는 환경을 의미하는 기술은?",
	            "answer": "모바일 컴퓨팅<br/>(Mobile Computing)"
	        }
	    },
	    {
	        "id": 448118,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "각기 다른 클라우드 서비스를 연동하거나 컴퓨팅 자원의 동적 할당이 가능하도록 여러 클라우드 서비스 제공자들이 제공하는 클라우드 서비스나 자원을 연결하는 기술은?",
	            "answer": "인터클라우드 컴퓨팅<br/>(Inter-Cloud Computing)"
	        }
	    },
	    {
	        "id": 448119,
	        "templateId": 8,
	        "registeredDate": 1652337951000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "스마트 그리드와 같은 장거리 무선 통신을 필요로 하는 사물 인터넷(IoT) 서비스를 위한 저전력 장거리(LPWA) 통신 기술은?",
	            "answer": "와이선(Wi-SUN)"
	        }
	    },
	    {
	        "id": 448120,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 콘텐츠 자체의 정보와 라우터 기능만으로 데이터 전송을 수행하는 기술로, 클라이언트와 서버가 패킷의 헤더에 내장되어 있는 주소 정보를 이용하여 연결되던 기존의 IP망을 대체할 인터넷 아키텍처이다.",
	            "answer": "NDN<br/>(Named Data Networking)"
	        }
	    },
	    {
	        "id": 448121,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "정보 통신 기술을 기반으로 실세계(Physical World)와 가상 세계(Virtual World)의 다양한 사물들을 인터넷으로 서로 연결하여 진보된 서비스를 제공하기 위한 서비스 기반 기술은?",
	            "answer": "IoT<br/>(Internet of Things, <br/>사물 인터넷)"
	        }
	    },
	    {
	        "id": 448122,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "회사, 학교, 연구소 등에서 비교적 가까운 거리에 있는 컴퓨터, 프린터, 저장장치 등과 같은 자원을 연결하여 구성하며, 사이트 간의 거리가 짧아 데이터의 전송 속도가 빠르고, 에러 발생율이 낮은 네트워크는?",
	            "answer": "근거리 통신망<br/>(LAN; Local Area Network)"
	        }
	    },
	    {
	        "id": 448123,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "국가와 국가 혹은 대륙과 대륙 등과 같이 멀리 떨어진 사이트들을 연결하여 구성하며, 사이트 간의 거리가 멀기 때문에 통신 속도가 느리고, 에러 발생률이 높은 네트워크는?",
	            "answer": "광대역 통신망<br/>(WAN; Wide Area Network)"
	        }
	    },
	    {
	        "id": 448124,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "한 개의 통신 회선에 여러 대의 단말장치가 연결되어 있는 형태로, 단말장치의 추가와 제거가 용이하며, 단말장치가 고장나더라도 통신망 전체에 영향을 주지 않기 때문에 신뢰성을 높일 수 있는 네트워크 구성 형태(Topology)는?",
	            "answer": "버스형(Bus)"
	        }
	    },
	    {
	        "id": 448125,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "다음 LAN의 네트워크 토폴로지(Topology)는?<br/><img src=\"https://memorybox.s3.amazonaws.com/images/cardImages/107/kji_0021.jpg\"/>",
	            "answer": "버스형(Bus)"
	        }
	    },
	    {
	        "id": 448126,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "‘네트워크 주소 변환’이라는 의미의 영문 3글자 약자로, 1개의 정식 IP 주소에 대량의 가상 사설 IP 주소를 할당 및 연결하는 방식은?",
	            "answer": "NAT<br/>(Network Address Translation)"
	        }
	    },
	    {
	        "id": 448127,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "중앙에 호스트 컴퓨터가 있고 이를 중심으로 터미널들이 연결되는 네트워크 구성 형태(Topology)는?",
	            "answer": "성형(Star)"
	        }
	    },
	    {
	        "id": 448128,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "컴퓨터와 단말장치들을 서로 이웃하는 것끼리 Point-to-Point 방식으로 연결시킨 형태로, 두 노드 사이의 채널이 고장나면 전체 네트워크가 손상될 수 있는 단점을 가지는 토폴로지는?",
	            "answer": "링형(Ring, 루프형)"
	        }
	    },
	    {
	        "id": 448129,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "IEEE 802.11 워킹 그룹의 무선 LAN 표준화 현황 중 QoS 강화를 위해 MAC 지원 기능을 채택한 규격은?",
	            "answer": "802.11e"
	        }
	    },
	    {
	        "id": 448130,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 IEEE 802의 주요 표준 규격은?",
	            "questionPassage": "전체의 구성, OSI 참조 모델과의 관계, 통신망 관리 등에 관한 규약이다.",
	            "answer": "802.1"
	        }
	    },
	    {
	        "id": 448131,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 IEEE 802의 주요 표준 규격은?",
	            "questionPassage": "논리 링크 제어(LLC) 계층에 관한 규약이다.",
	            "answer": "802.2"
	        }
	    },
	    {
	        "id": 448132,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 IEEE 802의 표준 규격은?",
	            "questionPassage": "CSMA/CD 방식의 매체 접근 제어 계층에 관한 규약이다.",
	            "answer": "802.3"
	        }
	    },
	    {
	        "id": 448133,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 IEEE 802의 주요 표준 규격은?",
	            "questionPassage": "토큰 버스 방식의 매체 접근 제어 계층에 관한 규약이다.",
	            "answer": "802.4"
	        }
	    },
	    {
	        "id": 448134,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 IEEE 802의 주요 표준 규격은?",
	            "questionPassage": "토큰 링 방식의 매체 접근 제어 계층에 관한 규약이다.",
	            "answer": "802.5"
	        }
	    },
	    {
	        "id": 448135,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 IEEE 802의 주요 표준 규격은?",
	            "questionPassage": "도시형 통신망(MAN)에 관한 규약이다.",
	            "answer": "802.6"
	        }
	    },
	    {
	        "id": 448136,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 IEEE 802의 주요 표준 규격은?",
	            "questionPassage": "종합 음성/데이터 네트워크에 관한 규약이다.",
	            "answer": "802.9"
	        }
	    },
	    {
	        "id": 448137,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 IEEE 802의 주요 표준 규격은?",
	            "questionPassage": "무선 LAN에 관한 규약이다.",
	            "answer": "802.11"
	        }
	    },
	    {
	        "id": 448138,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "2.4GHz 대역 전파와 CSMA/CA 기술을 사용해 최고 2Mbps까지의 전송 속도를 지원하는 IEEE 802의 규격은?",
	            "answer": "802.11"
	        }
	    },
	    {
	        "id": 448139,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "5GHz 대역의 전파를 사용하며, OFDM 기술을 사용해 최고 54Mbps까지의 전송 속도를 지원하는 IEEE 802의 규격은?",
	            "questionPassage": "5GHz 대역의 전파를 사용하며, OFDM 기술을 사용해 최고 54Mbps까지의 전송 속도를 지원한다.",
	            "answer": "802.11a"
	        }
	    },
	    {
	        "id": 448140,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "802.11 초기 버전의 개선안으로 등장하였으며, 초기 버전의 대역 전파와 기술을 사용해 최고 11Mbps의 전송 속도로 기존에 비해 5배 이상 빠르게 개선된 규격은?",
	            "answer": "802.11b"
	        }
	    },
	    {
	        "id": 448141,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "802.11의 버전 중 (     )는 2.4GHz 대역의 전파를 사용하지만 5GHz 대역의 전파를 사용하는 802.11a와 동일한 최고 54Mbps까지의 전송 속도를 지원한다.",
	            "answer": "802.11g"
	        }
	    },
	    {
	        "id": 448142,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "802.11의 버전 중 (     )는 2.4GHz 대역과 5GHz 대역을 사용하는 규격으로, 최고 600Mbps까지의 전송 속도를 지원한다.",
	            "answer": "802.11n"
	        }
	    },
	    {
	        "id": 448143,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "중앙 컴퓨터와 일정지역의 단말장치까지는 하나의 통신 회선으로 연결하고, 이웃하는 단말장치는 일정 지역 내에 설치된 중간 단말장치로부터 다시 연결하는 통신망의 구성 형태는?",
	            "answer": "계층형(Tree) "
	        }
	    },
	    {
	        "id": 448144,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 중앙에 중앙 컴퓨터가 있고 이를 중심으로 단말장치들이 연결되는 중앙 집중식의 네트워크 구성 형태로, 각 단말장치들은 중앙 컴퓨터를 통하여 데이터를 교환한다.",
	            "answer": "성형(Star) "
	        }
	    },
	    {
	        "id": 448145,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "모든 지점의 컴퓨터와 단말장치를 서로 연결한 형태로, 많은 단말장치로부터 많은 양의 통신을 필요로 하는 경우에 유리한 네트워크 구성 형태는?",
	            "answer": "망형(Mesh) "
	        }
	    },
	    {
	        "id": 448146,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 서로 이웃하는 컴퓨터 또는 단말장치들을 포인트 투 포인트(Point-to-Point) 방식으로 연결시킨 형태로, 양방향인 경우 양쪽 방향으로 접근이 가능하여 통신 회선 장애에 대한 융통성이 있다.",
	            "answer": "링형(Ring)"
	        }
	    },
	    {
	        "id": 448147,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "25개의 구간을 망형(Mesh)으로 연결하면 필요한 회선의 수는?",
	            "answer": "300",
	            "solution": "25(25 - 1) / 2<br/>※ 망형 연결 시 필요한 회선의 수는 ‘n(n-1)/2’입니다."
	        }
	    },
	    {
	        "id": 448148,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "스위치(Switch) 종류 중 (     )는 OSI의 2계층에 속하는 장비로, MAC 주소를 기반으로 프레임을 전송한다.",
	            "answer": "L2 스위치"
	        }
	    },
	    {
	        "id": 448149,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "스위치(Switch) 종류 중 (     )는 OSI의 3계층에 속하는 장비로, L1에 라우터 기능이 추가되었으며, IP 주소를 기반으로 패킷을 전송한다.",
	            "answer": "L3 스위치"
	        }
	    },
	    {
	        "id": 448150,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "스위치(Switch) 종류 중 (     )는 OSI 4계층에 속하는 장비로, IP 주소 및 TCP/UDP를 기반으로 사용자들의 요구를 서버의 부하가 적은 곳에 배분하는 로드밸런싱 기능을 제공한다.",
	            "answer": "L4 스위치"
	        }
	    },
	    {
	        "id": 448151,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "스위치(Switch) 종류 중 (     )는 OSI 7계층에 속하는 장비로, IP 주소, TCP/UDP 포트 정보에 패킷 내용까지 참조하여 세밀한 로드밸런싱을 수행한다.",
	            "answer": "L7 스위치"
	        }
	    },
	    {
	        "id": 448152,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 괄호에 공통으로 들어갈 용어는?",
	            "questionPassage": "네트워크들을 연결할 때 중추적 역할을 하는 네트워크를 (     )이라 하고, 백본에서 스위칭 역할을 하는 장비를 (     ) 스위치라고 한다. (     ) 스위치는 모든 패킷이 지나가는 네트워크의 중심에 배치한다.",
	            "answer": "백본(Backbone)"
	        }
	    },
	    {
	        "id": 448153,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "네트워크 구성 시 사용되는 모델인 Hierarchical 3 Layer 모델은 사용자가 네트워크에 접속할 때 최초로 연결되는 지점인 (  ①  ) 계층, LAN 간에 라우팅 기능을 수행하는 (  ②  ) 계층, 전자우편, 인터넷 접속, 화상 회의 등의 기능을 수행하는 (  ③  ) 계층으로 나뉜다.",
	            "answer": "① 액세스(Access)<br/>② 디스트리뷰션(Distribution)<br/>③ 코어(Core)"
	        }
	    },
	    {
	        "id": 448154,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 RIP의 단점을 해결하여 새로운 기능을 지원하는 인터넷 프로토콜로, 인터넷 망에서 이용자가 최단 경로를 선정할 수 있도록 라우팅 정보에 노드 간의 거리 정보, 링크 상태 정보를 실시간으로 반영하여 최단 경로로 라우팅을 지원한다.",
	            "answer": "OSPF<br/>(Open Shortest Path First protocol)"
	        }
	    },
	    {
	        "id": 448155,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "소규모 네트워크 환경에 적합고, 최대 홉 카운트를 15홉으로 제한하며, 최단 경로 탐색에 Bellman-Ford 알고리즘을 사용하는 프로토콜은?",
	            "answer": "RIP<br/>(Routing Information Protocol)"
	        }
	    },
	    {
	        "id": 448156,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "자율 시스템(AS) 간의 라우팅, 즉 게이트웨이 간의 라우팅에 사용되는 프로토콜은?",
	            "answer": "EGP<br/>(Exterior Gateway Protocol)"
	        }
	    },
	    {
	        "id": 448157,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "TCP 흐름 제어 기법 중 프레임이 손실되었을 때, 손실된 프레임 1개를 전송하고 수신자의 응답을 기다리는 방식으로 한 번에 프레임 1개만 전송할 수 있는 기법은?",
	            "answer": "정지-대기<br/>(Stop-and-Wait)"
	        }
	    },
	    {
	        "id": 448158,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "EGP의 단점을 보완하기 위해 만들어졌고, AS(Autonomous System) 간의 라우팅 테이블을 전달하는데 주로 이용되는 라우팅 프로토콜은?",
	            "answer": "BGP<br/>(Border Gateway Protocol)"
	        }
	    },
	    {
	        "id": 448159,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "현재 가장 널리 사용되는 라우팅 프로토콜로, 거리 벡터 라우팅 프로토콜이라고도 불리며, 최대 홉수를 15로 제한한 라우팅 프로토콜은?",
	            "answer": "RIP<br/>(Routing Information Protocol)"
	        }
	    },
	    {
	        "id": 448160,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 링크 상태 알고리즘을 사용하는 대규모 네트워크에 적합한 내부 라우팅 프로토콜(IGP), 최단 경로 탐색에 다익스트라(Dijkstra) 알고리즘을 사용한다.",
	            "answer": "OSPF<br/>(Open Shortest Path First protocol)"
	        }
	    },
	    {
	        "id": 448161,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "수신 측의 확인 신호를 받지 않더라도 미리 정해진 패킷의 수만큼 연속적으로 전송하는 방식으로, 한 번에 여러 개의 프레임을 나누어 전송할 경우 효율적인 흐름 제어 기법은?",
	            "answer": "슬라이딩 윈도우<br/>(Sliding Window)"
	        }
	    },
	    {
	        "id": 448162,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "흐름 제어(Flow Control)가 송·수신 측 사이의 패킷 수를 제어하는 기능이라면, (     )는 네트워크 내의 패킷 수를 조절하여 네트워크의 오버플로(Overflow)를 방지하는 기능을 한다 .",
	            "answer": "폭주 제어<br/>(Congestion Control)"
	        }
	    },
	    {
	        "id": 448163,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 인간의 두뇌와 같이 컴퓨터 스스로 추론, 학습, 판단 등 인간지능적인 작업을 수행하는 시스템으로, 패턴 인식, 전문가 시스템, 로봇 공학 등에 사용된다.",
	            "answer": "인공지능<br/>(AI; Artificial Intelligence)"
	        }
	    },
	    {
	        "id": 448164,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "미국의 전기자동차 회사 테슬라(Tesla)의 CEO 일론 머스크(Elon Musk)가 사람의 뇌와 컴퓨터를 결합하는 기술을 개발하기 위해 2017년 3월 설립한 회사는?",
	            "answer": "뉴럴링크<br/>(Neuralink)"
	        }
	    },
	    {
	        "id": 448165,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "인간의 두뇌를 모델로 만들어진 인공 신경망(ANN; Artificial<br/>Neural Network)을 기반으로 하는 기계 학습 기술은?",
	            "answer": "딥 러닝<br/>(Deep Learning)"
	        }
	    },
	    {
	        "id": 448166,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "의료 진단 등과 같은 특정 분야의 전문가가 수행하는 고도의 업무를 지원하기 위한 컴퓨터 응용 프로그램은?",
	            "answer": "전문가 시스템<br/>(Expert System)"
	        }
	    },
	    {
	        "id": 448167,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "중앙 관리자나 중앙 데이터 저장소가 존재하지 않고 P2P 망내의 참여자들에게 모든 거래 목록이 분산 저장되어 거래가 발생할 때마다 지속적으로 갱신되는 디지털 원장을 의미하는 용어는?",
	            "answer": "분산 원장 기술<br/>(DLT; Distributed Ledger Technology)"
	        }
	    },
	    {
	        "id": 448168,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "임의의 길이의 입력 데이터나 메시지를 고정된 길이의 값이나 키로 변환하는 것을 의미하는 용어는?",
	            "answer": "해시(Hash)"
	        }
	    },
	    {
	        "id": 448169,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 양자 통신을 위해 비밀키를 분배하여 관리하는 기술로, 두 시스템이 암호 알고리즘 동작을 위한 비밀키를 안전하게 공유하기 위해 양자 암호키 분배 시스템을 설치하여 운용하는 방식으로 활용된다.",
	            "answer": "양자 암호키 분배<br/>(QKD; Quantum Key Distribution)"
	        }
	    },
	    {
	        "id": 448170,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 개인정보 침해 위험을 관리하기 위한 핵심 기술로, 암호화, 익명화 등 개인정보를 보호하는 기술에서 사용자가 직접 개인정보를 통제하기 위한 기술까지 다양한 사용자 프라이버시 보호 기술을 통칭한다.",
	            "answer": "프라이버시 강화 기술<br/>(PET; Privacy Enhancing Technology)"
	        }
	    },
	    {
	        "id": 448171,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 1999년 6월 8일 ISO 15408 표준으로 채택된 정보 보호 제품 평가 기준으로, 정보화 순기능 역할을 보장하기 위해 정보화 제품의 정보 보호 기능과 이에 대한 사용 환경 등급을 정한 기준이다.",
	            "answer": "공통 평가 기준<br/>(CC; Common Criteria)"
	        }
	    },
	    {
	        "id": 448172,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "개인 정보를 활용하는 새로운 정보시스템의 도입 및 기존 정보시스템의 중요한 변경 시 시스템의 구축·운영이 기업의 고객은 물론 국민의 사생활에 미칠 영향에 대해 미리 조사·분석·평가하는 제도는?",
	            "answer": "개인정보 영향평가 제도<br/>(PIA; Privacy Impact Assessment)"
	        }
	    },
	    {
	        "id": 448173,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "판매 계획 또는 배포 계획은 발표되었으나 실제로 고객에게 판매되거나 배포되지 않고 있는 소프트웨어는?",
	            "answer": "증발품(Vaporware)"
	        }
	    },
	    {
	        "id": 448174,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "애플리케이션 공유를 위한 웹 서비스를 그리드 상에서 제공하기 위해 만든 개방형 표준은?",
	            "answer": "오픈 그리드 서비스 아키텍처<br/>(OGSA; Open Grid Service Architecture)"
	        }
	    },
	    {
	        "id": 448175,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어의 여러 기능 중에서 사용자가 필요로 하는 서비스만 이용할 수 있도록 한 소프트웨어는?",
	            "answer": "서비스형 소프트웨어<br/>(SaaS; Software as a Service)"
	        }
	    },
	    {
	        "id": 448176,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "실시간으로 발생하는 많은 사건들 중 의미가 있는 것만을 추출할 수 있도록 사건 발생 조건을 정의하는 데이터 처리 방법은?",
	            "answer": "복잡 이벤트 처리<br/>(CEP; Complex Event Processing)"
	        }
	    },
	    {
	        "id": 448177,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "피투피(P2P) 네트워크를 이용하여 온라인 금융거래 정보를 온라인 네트워크 참여자(Peer)의 디지털 장비에 분산 저장하는 기술은?",
	            "answer": "블록체인<br/>(Blockchain)"
	        }
	    },
	    {
	        "id": 448178,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 웹에서 제공하는 정보 및 서비스를 이용하여 새로운 소프트웨어나 서비스, 데이터베이스 등을 만드는 기술로, 구글 지도에 부동산 매물 정보를 결합한 구글의 하우징맵스(Housing Maps)가 대표적인 예이다.",
	            "answer": "매시업<br/>(Mashup)"
	        }
	    },
	    {
	        "id": 448179,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 기업의 소프트웨어 인프라인 정보시스템을 공유와 재사용이 가능한 서비스 단위나 컴포넌트 중심으로 구축하는 정보기술 아키텍처로, 이 아키텍처 기반 애플리케이션은 표현 계층, 업무 프로세스 계층, 서비스 중간 계층, 애플리케이션 계층, 데이터 저장 계층으로 구성한다.",
	            "answer": "서비스 지향 아키텍처<br/>(SOA; Service Oriented Architecture)"
	        }
	    },
	    {
	        "id": 448180,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "물리적인 사물과 컴퓨터에 동일하게 표현되는 가상의 모델로, 실제 물리적인 자산 대신 소프트웨어로 가상화함으로써 실제 자산의 특성에 대한 정확한 정보를 얻을 수 있고, 자산 최적화, 돌발사고 최소화, 생산성 증가 등 설계부터 제조, 서비스에 이르는 모든 과정의 효율성을 향상시킬 수 있는 모델은?",
	            "answer": "디지털 트윈<br/>(Digital Twin)"
	        }
	    },
	    {
	        "id": 448181,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "사용자가 눈으로 보는 현실 화면이나 실제 영상에 문자나 그래픽과 같은 가상의 3차원 정보를 실시간으로 겹쳐 보여주는 새로운 멀티미디어 기술은?",
	            "answer": "증강현실<br/>(AR; Augmented Reality)"
	        }
	    },
	    {
	        "id": 448182,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발자의 지식재산권을 보호하고 사용자는 저렴한 비용으로 소프트웨어를 안정적으로 사용 및 유지보수 할 수 있도록 소스 프로그램과 기술 정보 등을 제3의 기관에 보관하는 것을 의미하는 용어는?",
	            "answer": "소프트웨어 에스크로<br/>(Software Escrow)"
	        }
	    },
	    {
	        "id": 448183,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "정보들 사이의 연관성을 컴퓨터가 이해하고 처리할 수 있는 에이전트 프로그램을 통해 사용자가 원하는 정보를 찾아 제공하고, 컴퓨터들끼리 정보를 주고받으면서 자체적으로 필요한 일을 처리할 수 있는 차세대 지능형 웹은?",
	            "answer": "시맨틱 웹<br/>(Semantic Web)"
	        }
	    },
	    {
	        "id": 448184,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어를 제공하는 입장에서는 악의적이지 않은 유용한 소프트웨어라고 주장할 수 있지만 사용자 입장에서는 유용할 수도 있고 악의적일 수도 있는 소프트웨어는?",
	            "answer": "그레이웨어<br/>(Grayware)"
	        }
	    },
	    {
	        "id": 448185,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "플래시 애니메이션 기술과 웹 서버 애플리케이션 기술을 통합하여 기존 HTML 보다 역동적이고 인터랙티브한 웹 페이지를 제공하는 신개념의 플래시 웹 페이지 제작 기술을 의미하는 용어는?",
	            "answer": "리치 인터넷 애플리케이션<br/>(RIA; Rich Internet Application)"
	        }
	    },
	    {
	        "id": 448186,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 내용을 수행하는 소프트웨어 개발 보안 관련 기관은?",
	            "questionPassage": "소프트웨어 개발 보안 정책 총괄, 법·지침 등 제도 정비 등",
	            "answer": "행전안전부"
	        }
	    },
	    {
	        "id": 448187,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 내용을 수행하는 소프트웨어 개발 보안 관련 기관은?",
	            "questionPassage": "소프트웨어 개발 보안 정책 및 가이드 개발 등",
	            "answer": "한국인터넷진흥원"
	        }
	    },
	    {
	        "id": 448188,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 내용을 수행하는 소프트웨어 개발 보안 관련 기관은?",
	            "questionPassage": "소프트웨어 개발 보안 계획 수립, 소프트웨어 개발 보안 능력을 갖춘 사업자 선정 등",
	            "answer": "발주기관"
	        }
	    },
	    {
	        "id": 448189,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 내용을 수행하는 소프트웨어 개발 보안 관련 기관은?",
	            "questionPassage": "소프트웨어 개발 보안 관련 기술 수준 및 적용 계획 명시, 관련 인력을 대상으로 교육 실시 등",
	            "answer": "사업자"
	        }
	    },
	    {
	        "id": 448190,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발 시 응용 프로그램에 대한 보안 전략을 조직 구성원들에게 전달하고, 조직 구성원들에게 응용 프로그램 보안 영향을 이해시키는 사람은?",
	            "answer": "프로젝트 관리자<br/>(Project Manager)"
	        }
	    },
	    {
	        "id": 448191,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "보안 오류가 발생하지 않도록 보안 기술 문제를 충분히 이해하고, 시스템에 사용되는 모든 리소스 정의 및 각 리소스별로 적절한 보안 요구사항을 적용하는 사람은?",
	            "answer": "아키텍트<br/>(Architect)"
	        }
	    },
	    {
	        "id": 448192,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "특정 기술에 대해 보안 요구사항의 만족성 여부를 확인하고, 문제 발생 시 최선의 문제 해결 방법을 결정하는 사람은?",
	            "answer": "설계자<br/>(Designer)"
	        }
	    },
	    {
	        "id": 448193,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발 요구사항과 구현 결과를 반복적으로 확인하는 사람은?",
	            "answer": "테스트 분석가<br/>(Test Analyst)"
	        }
	    },
	    {
	        "id": 448194,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발 프로젝트의 현재 상태의 보안을 보장하고, 요구사항 검토 시 요구사항의 적합성과 완전성을 확인하는 사람은?",
	            "answer": "보안 감사자<br/>(Security Auditor)"
	        }
	    },
	    {
	        "id": 448195,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "고도로 구조화된 개발 환경에서 프로그램을 구현하기 위해 시큐어 코딩 표준을 준수하여 개발하고, 제 3자가 소프트웨어의 안전 여부를 쉽게 판단할 수 있도록 문서화 하는 사람은?",
	            "answer": "구현 개발자"
	        }
	    },
	    {
	        "id": 448196,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "아키텍트가 고려해야 할 보안 관련 비즈니스 요구사항들을 자세히 설명하고, 프로젝트 팀이 고려해야 할 구조를 정의한 다음 해당 구조에 존재하는 자원에 대한 보안 요구사항을 결정하는 사람은?",
	            "answer": "요구사항 분석가<br/>(Requirement Specifier)"
	        }
	    },
	    {
	        "id": 448197,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "개인정보 처리자가 개인정보를 처리함에 있어 개인정보가 분실, 도난, 유출, 위조, 변조 또는 훼손되지 않도록 안전성 확보에 필요한 기술적, 관리적, 물리적 안전조치에 관한 최소한의 기준을 정하는 것을 목적으로 하는 소프트웨어 개발 보안 활동 관련 법령은?",
	            "answer": "개인정보의 안전성 확보 조치 기준"
	        }
	    },
	    {
	        "id": 448198,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "지문, 홍채, 음성, 필적 등 개인을 식별할 수 있는 신체적 또는 행동적 특징에 관한 정보의 보호와 안전한 활용을 위한 원칙 및 조치사항의 안내를 목적으로 하는 IT 기술 관련 규정은?",
	            "answer": "바이오정보 보호 가이드라인"
	        }
	    },
	    {
	        "id": 448199,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "개인정보의 처리 및 보호에 관한 사항을 정함으로써 개인의 자유와 권리를 보호하는 것을 목적으로 하는 소프트웨어 개발 보안 활동 관련 법령은?",
	            "answer": "개인정보 보호법"
	        }
	    },
	    {
	        "id": 448200,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "긴 시간동안 안정적인 서비스 운영을 위해 장애 발생 시 즉시 다른 시스템으로 대체 가능한 환경을 구축하는 메커니즘은?",
	            "answer": "고가용성<br/>(HA; High Availability)"
	        }
	    },
	    {
	        "id": 448201,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 대상을 평면에 출력하는 것이 아니라 손으로 만질 수 있는 실제 물체로 만들어내는 것으로, 아주 얇은 두께로 한층한층 쌓아 하나의 형태를 만들어 내는 기술을 이용한다.",
	            "answer": "3D Printing"
	        }
	    },
	    {
	        "id": 448202,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "특정 시간이나 환경 조건이 갖추어지면 스스로 형태를 변화시키거나 제조되는 자가 조립(Self-Assembly) 기술이 적용된 제품을 3D Printing하는 기술은?",
	            "answer": "4D Printing"
	        }
	    },
	    {
	        "id": 448203,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "여러 개의 하드디스크로 디스크 배열을 구성하여 파일을 구성하고 있는 데이터 블록들을 서로 다른 디스크들에 분산 저장할 경우, 그 블록들을 여러 디스크에서 동시에 읽거나 쓸 수 있으므로 디스크의 속도가 매우 향상되는데, 이 기술을 (     )라고 한다.",
	            "answer": "RAID"
	        }
	    },
	    {
	        "id": 448204,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "차세대 고화질 모니터의 해상도를 지칭하는 용어로, 가로 픽셀 수가 3840이고, 세로 픽셀 수가 2160인 영상의 해상도를 의미하는 것은?",
	            "answer": "4K 해상도"
	        }
	    },
	    {
	        "id": 448205,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "앤 스크린(N Screen)의 한 종류로, TV 방송 시청 시 방송 내용을 공유하며 추가적인 기능을 수행할 수 있는 스마트폰, 태블릿PC 등을 의미하는 것은?",
	            "answer": "컴패니언 스크린<br/>(Companion Screen)"
	        }
	    },
	    {
	        "id": 448206,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "폰(Phone)과 태블릿(Tablet)의 합성어로, 태블릿 기능을 포함한 5인치 이상의 대화면 스마트폰을 의미하는 용어는?",
	            "answer": "패블릿(Phablet)"
	        }
	    },
	    {
	        "id": 448207,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 범용 인터페이스 규격인 USB의 표준 중 하나로, 기존 A형에 비하여 크기가 작고, 24핀으로 위아래의 구분이 없어 어느 방향으로든 연결이 가능하다.",
	            "answer": "C형 유에스비(USB Type-C)"
	        }
	    },
	    {
	        "id": 448208,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "메모리(Memory)와 레지스터(Resister)의 합성어로, 전류의 방향과 양 등 기존의 경험을 모두 기억하는 특별한 소자는?",
	            "answer": "멤리스터<br/>(Memristor)"
	        }
	    },
	    {
	        "id": 448209,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 한 번의 기록만으로 자료를 영구 보관할 수 있는 광 저장장치로, 디스크 표면의 무기물층에 레이저를 이용해 자료를 조각해서 기록한다.",
	            "answer": "엠디스크<br/>(M-DISC; Millennial DISC)"
	        }
	    },
	    {
	        "id": 448210,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "PC, TV, 휴대폰 등 여러 개의 서로 다른 단말기에서 동일한 콘텐츠를 자유롭게 이용할 수 있는 서비스는?",
	            "answer": "앤 스크린<br/>(N-Screen)"
	        }
	    },
	    {
	        "id": 448211,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "하드디스크나 주변장치 없이 기본적인 메모리만 갖추고 서버와 네트워크로 운용되므로 정보가 유출될 우려가 없는 개인용 컴퓨터는?",
	            "answer": "신 클라이언트 PC<br/>(Thin Client PC)"
	        }
	    },
	    {
	        "id": 448212,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "하나의 프로세서 내에 일반 애플리케이션을 처리하는 일반 구역(Normal World)과 보안이 필요한 애플리케이션을 처리하는 보안 구역(Secure World)으로 분할하여 관리하는 하드웨어 기반의 보안 기술은?",
	            "answer": "트러스트존 기술<br/>(TrustZone Technology)"
	        }
	    },
	    {
	        "id": 448213,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "초정밀 반도체 제조 기술을 바탕으로 센서, 액추에이터(Actuator) 등 기계 구조를 다양한 기술로 미세 가공하여 전기기계적 동작을 할 수 있도록 한 초미세 장치는?",
	            "answer": "멤스<br/>(MEMS; Micro-Electro Mechanical Systems)"
	        }
	    },
	    {
	        "id": 448214,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "컴퓨터 운영체제의 커널(Kernel)에 보안 기능을 추가한 것으로, 운영체제의 보안상 결함으로 인하여 발생 가능한 각종 해킹으로부터 시스템을 보호하기 위하여 사용되는 운영체제는?",
	            "answer": "Secure OS"
	        }
	    },
	    {
	        "id": 448215,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "보호 대상 객체에 대한 접근통제를 수행하는 추상머신인 참조 모니터(Reference Monitor)의 특징 3가지는?",
	            "answer": "격리성(Isolation), <br/>검증가능성(Verifiability), <br/>완전성(Completeness)"
	        }
	    },
	    {
	        "id": 448216,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "기존의 관리 방법이나 분석 체계로는 처리하기 어려운 막대한 양의 정형 또는 비정형 데이터 집합을 의미하는 용어는?",
	            "answer": "빅데이터<br/>(Big Data)"
	        }
	    },
	    {
	        "id": 448217,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 디지털 정보 자원을 장기적으로 보존하기 위한 작업으로, 아날로그 콘텐츠는 디지털로 변환한 후 압축해서 저장하고, 디지털 콘텐츠도 체계적으로 분류하고 메타 데이터를 만들어 DB화하는 작업이다.",
	            "answer": "디지털 아카이빙<br/>(Digital Archiving)"
	        }
	    },
	    {
	        "id": 448218,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "오픈 소스 기반 분산 컴퓨팅 플랫폼인 아파치 하둡(Apache Hadoop) 기반의 분산 데이터 웨어하우스 프로젝트는?",
	            "answer": "타조(Tajo)"
	        }
	    },
	    {
	        "id": 448219,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "데이터를 삭제하는 것이 아니라 압축하고, 중복된 정보는 중복을 배제하고, 새로운 기준에 따라 나누어 저장하는 작업은?",
	            "answer": "데이터 다이어트<br/>(Data Diet)"
	        }
	    },
	    {
	        "id": 448220,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다차원으로 이루어진 데이터로부터 통계적인 요약 정보를 분석하여 의사결정에 활용하는 방식으로, Roll-up, Drill-down, Drill-through, Drillacross, Pivoting, Slicing, Dicing 등의 연산이 있다.",
	            "answer": "OLAP<br/>(OnLine Analytical Processing)"
	        }
	    },
	    {
	        "id": 448221,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "(     )은 구글의 맵리듀스(MapReduce) 엔진을 사용하고 있는 오픈 소스 기반 분산 컴퓨팅 플랫폼으로, 일반 PC급 컴퓨터들로 가상화된 대형 스토리지를 형성하고 그 안에 보관된 거대한 데이터 세트를 병렬로 처리할 수 있도록 개발되었다.",
	            "answer": "하둡(Hadoop)"
	        }
	    },
	    {
	        "id": 448222,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "데이터 마이닝(Data Mining)의 개념을 간략히 서술하시오.",
	            "answer": "데이터 마이닝은 대량의 데이터를 분석하여 데이터에 내재된 변수 사이의 상호관계를 규명하여 일정한 패턴을 찾아내는 기법이다."
	        }
	    },
	    {
	        "id": 448223,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "(     )는 대용량 데이터를 분산 처리하기 위한 목적으로 개발된 프로그래밍 모델로, 대표적인 대용량 데이터 처리를 위한 병렬 처리 기법을 제공하며, 임의의 순서로 정렬된 데이터를 분산 처리하고 이를 다시 합치는 과정을 거친다.",
	            "answer": "맵리듀스<br/>(MapReduce)"
	        }
	    },
	    {
	        "id": 448224,
	        "templateId": 9,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★☆",
	            "question": "다음 보기에서 데이터웨어하우스의 기본적인 OLAP 연산에 해당하는 것을 모두 고르시오.",
	            "questionPassage": [
	                "ⓐ translate ",
	                "ⓑ roll-up ",
	                "ⓒ dicing ",
	                "ⓓ drill-down"
	            ],
	            "answer": [
	                "2",
	                "3",
	                "4"
	            ]
	        }
	    },
	    {
	        "id": 448225,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 일련의 데이터를 정의하고 설명해 주는 데이터로, 컴퓨터에서는 데이터 사전의 내용, 스키마 등을 의미한다.",
	            "answer": "메타 데이터<br/>(Meta Data)"
	        }
	    },
	    {
	        "id": 448226,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음에서 설명하는 용어는?",
	            "questionPassage": "ㆍ다양한 채널에서 소비자와 상호 작용을 통해 생성된 데이터이다.<br/>ㆍ이전에 사용하지 않거나 알지 못했던 새로운 데이터이다.<br/>ㆍ기존 데이터에 새로운 가치가 더해진 데이터이다.",
	            "answer": "브로드 데이터<br/>(Broad Data)"
	        }
	    },
	    {
	        "id": 448227,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "트랜잭션이 데이터를 변경하면 트랜잭션이 부분 완료되기 전이라<br/>도 즉시 실제 DB에 그 내용을 반영하는 기법으로, 장애가 발생하여 회복 작업할 경우를 대비하여 갱신된 내용들을 로그(Log)에 보관시키는 데이터베이스 회복 기법은?",
	            "answer": "즉각 갱신 기법<br/>(Immediate Update)"
	        }
	    },
	    {
	        "id": 448228,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "갱신 이전의 데이터베이스를 일정 크기의 페이지 단위로 구성하여 각 페이지마다 복사본인 그림자 페이지를 별도 보관해 놓고, 실제 페이지를 대상으로 갱신 작업을 수행하다가 장애가 발생하여 트랜잭션 작업을 Rollback시킬 때는 갱신 이후의 실제 페이지 부분을 그림자 페이지로 대체하여 회복시키는 기법은?",
	            "answer": "그림자 페이지 대체 기법<br/>(Shadow Paging)"
	        }
	    },
	    {
	        "id": 448229,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "트랜잭션 실행 중 특정 단계에서 재실행할 수 있도록 갱신 내용이나 시스템에 대한 상황 등에 관한 정보와 함께 검사점을 로그에 보관해 두고, 장애 발생 시 트랜잭션 전체를 철회하지 않고 검사점부터 회복 작업을 수행하여 회복시간을 절약하도록 하는 기법은?",
	            "answer": "검사점 기법<br/>(Check Point)"
	        }
	    },
	    {
	        "id": 448230,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 다중 프로그램의 이점을 활용하여 동시에 여러 개의 트랜잭션을 병행수행할 때, 동시에 실행되는 트랜잭션들이 데이터베이스의 일관성을 파괴하지 않도록 트랜잭션 간의 상호 작용을 제어하는 것이다.",
	            "answer": "병행제어<br/>(Concurrency Control)"
	        }
	    },
	    {
	        "id": 448231,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "트랜잭션들이 어떤 로킹 단위를 액세스하기 전에 Lock(잠금)을 요청해서 Lock이 허락되어야만 그 로킹 단위를 액세스할 수 있도록 하는 기법은?",
	            "answer": "로킹(Locking)"
	        }
	    },
	    {
	        "id": 448232,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "병행수행하고자 하는 대부분의 트랜잭션이 판독 전용(Read Only) 트랜잭션일 경우, 트랜잭션 간의 충돌률이 매우 낮아서 병행제어 기법을 사용하지 않고 실행되어도 이 중의 많은 트랜잭션은 시스템의 상태를 일관성 있게 유지한다는 점을 이용한 기법은?",
	            "answer": "최적 병행수행"
	        }
	    },
	    {
	        "id": 448233,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 타임 스탬프의 개념을 이용하는 기법으로, 타임 스태프 기법은 트랜잭션 및 데이터들이 이용될 때의 시간을 시간표로 관리하지만, 이 기법은 갱신될 때 마다의 버전을 부여하여 관리한다.",
	            "answer": "다중 버전 기법"
	        }
	    },
	    {
	        "id": 448234,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 괄호에 공통으로 들어갈 용어는?",
	            "questionPassage": "ㆍ트랜잭션들이 어떤 (      )를 액세스하기 전에 Lock(잠금)을 요청해서 Lock이 허락되어야만 그 (      )를 액세스할 수 있도록 하는 기법이다.<br/>ㆍ(      )는 한꺼번에 로킹할 수 있는 객체의 크기를 의미한다.<br/>ㆍ(      )가 작아지면 병행성 수준이 높아진다.",
	            "answer": "로킹 단위<br/>(Locking Granularity)"
	        }
	    },
	    {
	        "id": 448235,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "트랜잭션들을 수행하는 도중 장애로 인해 손상된 데이터베이스를 손상되기 이전의 정상적인 상태로 복구시키는 작업은?",
	            "answer": "회복<br/>(Recovery)"
	        }
	    },
	    {
	        "id": 448236,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "회복 기법 중 트랜잭션이 성공적으로 완료될 때까지 데이터베이스에 대한 실질적인 갱신을 연기하는 방법으로 Redo 작업만 가능한 기법은?",
	            "answer": "연기 갱신 기법<br/>(Deferred Update)"
	        }
	    },
	    {
	        "id": 448237,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "병행제어 기법 중 트랜잭션과 트랜잭션이 읽거나 갱신한 데이터에 대해 트랜잭션이 실행을 시작하기 전에 시간표를 부여하여 부여된 시간에 따라 트랜잭션 작업을 수행하는 기법은?",
	            "answer": "타임 스탬프 순서<br/>(Time Stamp Ordering)"
	        }
	    },
	    {
	        "id": 448238,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "교착 상태(DeadLock) 발생의 필요 충분 조건 4가지는?",
	            "answer": "상호 배제(Mutual Exclusion),<br/>점유와 대기(Hold and Wait), <br/>비선점(Non-preemption), <br/>환형 대기(Circular Wait)"
	        }
	    },
	    {
	        "id": 448239,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "상호 배제에 의해 나타나는 문제점으로, 둘 이상의 프로세스들이 자원을 점유한 상태에서 서로 다른 프로세스가 점유하고 있는 자원을 요구하며 무한정 기다리는 현상은?",
	            "answer": "교착상태<br/>(Dead Lock)"
	        }
	    },
	    {
	        "id": 448240,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "교착상태(DeadLock)의 해결 방법 중 교착상태가 발생하지 않도록 사전에 시스템을 제어하는 방법으로 자원 낭비가 가장 심한 기법은?",
	            "answer": "예방 기법<br/>(Prevention)"
	        }
	    },
	    {
	        "id": 448241,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다른 프로세스에 할당된 자원은 사용이 끝날 때까지 강제로 빼앗을 수 없어야 한다는 것을 의미하는 교착상태(DeadLock) 발생의 필요 충분 조건은?",
	            "answer": "비선점<br/>(Non-preemption)"
	        }
	    },
	    {
	        "id": 448242,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "공유 자원과 공유 자원을 사용하기 위해 대기하는 프로세스들이 원형으로 구성되어 있어 자신에게 할당된 자원을 점유하면서 앞이나 뒤에 있는 프로세스의 자원을 요구해야 한다는 것을 의미하는 교착상태(DeadLock) 발생의 필요 충분 조건은?",
	            "answer": "환형 대기<br/>(Circular Wait)"
	        }
	    },
	    {
	        "id": 448243,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "한 번에 한 개의 프로세스만이 공유 자원을 사용할 수 있어야 한다는 것을 의미하는 교착상태(DeadLock) 발생의 필요 충분 조건은?",
	            "answer": "상호 배제<br/>(Mutual Exclusion)"
	        }
	    },
	    {
	        "id": 448244,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "최소한 하나의 자원을 점유하고 있으면서 다른 프로세스에 할당되어 사용되고 있는 자원을 추가로 점유하기 위해 대기하는 프로세스가 있어야 한다는 것을 의미하는 교착상태(DeadLock) 발생의 필요 충분 조건은?",
	            "answer": "점유와 대기<br/>(Hold and Wait)"
	        }
	    },
	    {
	        "id": 448245,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 교착상태 해결 방법은?",
	            "questionPassage": "교착상태가 발생할 가능성을 배제하지 않고 교착상태가 발생하면 적절히 피해나가는 방법으로, 주로 은행원 알고리즘(Banker’s Algorithm)이 사용된다.",
	            "answer": "회피 기법<br/>(Avoidance) "
	        }
	    },
	    {
	        "id": 448246,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 교착상태 해결 방법은?",
	            "questionPassage": "교착상태를 일으킨 프로세스를 종료하거나 교착상태의 프로세스에 할당된 자원을 선점하여 프로세스나 자원을 회복하는 것을 의미한다.",
	            "answer": "회복 기법<br/>(Recovery)"
	        }
	    },
	    {
	        "id": 448247,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 교착상태 해결 방법은?",
	            "questionPassage": "시스템에 교착상태가 발생했는지 점검하여 교착상태에 있는 프로세스와 자원을 발견하는 것을 의미한다.",
	            "answer": "발견 기법<br/>(Detection)"
	        }
	    },
	    {
	        "id": 448248,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "데이터 표준화는 시스템을 구성하는 데이터 요소의 명칭, 정의, 형식, 규칙에 대한 원칙을 수립하고 적용하는 것이다. 데이터 표준화의 대상 4가지는?",
	            "answer": "데이터 명칭, <br/>데이터 정의, <br/>데이터 형식, <br/>데이터 규칙"
	        }
	    },
	    {
	        "id": 448249,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 데이터 표준의 종류는?",
	            "questionPassage": "단어, 도메인, 코드 표준이 정의되면 이를 바탕으로 구성한다.",
	            "answer": "표준 용어"
	        }
	    },
	    {
	        "id": 448250,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 데이터 표준의 종류는?",
	            "questionPassage": "선택할 수 있는 값을 정형화하기 위해 기준에 따라 정의된 코드 값이다.",
	            "answer": "표준 코드"
	        }
	    },
	    {
	        "id": 448251,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 데이터 표준의 종류는?",
	            "questionPassage": "문자형, 숫자형, 날짜형, 시간형과 같이 컬럼을 성질에 따라 그룹핑한 개념이다.",
	            "answer": "표준 도메인"
	        }
	    },
	    {
	        "id": 448252,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 설명에 해당하는 데이터 표준의 종류는?",
	            "questionPassage": "업무에서 사용하고 일정한 의미를 가진 최소 단위의 단어를 의미한다.",
	            "answer": "표준 단어"
	        }
	    },
	    {
	        "id": 448253,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "응용SW 기초 기술 활용",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 시스템을 구성하는 데이터 요소의 명칭, 정의, 형식, 규칙에 대한 원칙을 수립하고 적용하는 것으로, 이 작업을 통해 사용자가 데이터를 정확히 이해하고 활용할 수 있도록 표준 항목명이 부여된다.",
	            "answer": "데이터 표준화"
	        }
	    },
	    {
	        "id": 448254,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 패키징의 개념을 간략히 서술하시오.",
	            "answer": "소프트웨어 패키징은 모듈별로 생성한 실행 파일들을 묶어 배포용 설치 파일을 만드는 것이다."
	        }
	    },
	    {
	        "id": 448255,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음에 제시된 패키징에 필요한 작업들을 순서대로 나열하시오.",
	            "questionPassage": "ⓐ 기능 식별 <br/>ⓑ 빌드 진행 <br/>ⓒ 패키징 및 적용 시험 <br/>ⓓ 사용자 환경 분석 <br/>ⓔ 모듈화 <br/>ⓕ 패키징 변경 개선",
	            "answer": "ⓐ → ⓔ → ⓑ → ⓓ → ⓒ → ⓕ"
	        }
	    },
	    {
	        "id": 448256,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "릴리즈 노트(Release Note) 작성 시 릴리즈 노트 이름, 소프트웨어 이름, 릴리즈 버전, 릴리즈 날짜, 릴리즈 노트 날짜, 릴리즈 노트 버전 등이 포함된 항목은?",
	            "answer": "Header(머릿말)"
	        }
	    },
	    {
	        "id": 448257,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(      )는 개발 과정에서 소프트웨어가 얼마나 개선되었는지를 정리한 정보를 사용자와 공유하기 위해 작성하는 문서로, 이를 통해 사용자는 소프트웨어에 포함된 서비스나 사용 환경 등을 확인할 수 있다.",
	            "answer": "릴리즈 노트<br/>(Release Note)"
	        }
	    },
	    {
	        "id": 448258,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음에 제시된 릴리즈 노트 작업들을 순서대로 나열하시오.",
	            "questionPassage": "ⓐ 릴리즈 정보 확인 <br/>ⓑ 정식 릴리즈 노트 작성 <br/>ⓒ 모듈 식별 <br/>ⓓ 영향도 체크 <br/>ⓔ 추가 개선 항목 식별 <br/>ⓕ 릴리즈 노트 개요 작성 ",
	            "answer": "ⓒ → ⓐ → ⓕ → ⓓ → ⓑ → ⓔ"
	        }
	    },
	    {
	        "id": 448259,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "개발자와 고객이 정보를 공유하기 위해 작성하는 것으로, 표준 형식은 없지만 일반적으로 Header(머릿말), 개요, 목적, 문제 요약, 재현 항목, 수정/개선 내용, SW 지원 영향도, 노트 등이 포함되도록 작성하는 것은?",
	            "answer": "릴리즈 노트<br/>(Release Note)"
	        }
	    },
	    {
	        "id": 448260,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 내용에 해당하는 저작권 관리 구성 요소는?",
	            "questionPassage": "저작권에 대한 사용 권한, 라이선스 발급, 암호화된 키 관리, 사용량에 따른 결제 관리 등을 수행하는 곳이다.",
	            "answer": "클리어링 하우스<br/>(Clearing House)"
	        }
	    },
	    {
	        "id": 448261,
	        "templateId": 8,
	        "registeredDate": 1652337952000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "다음 내용에 해당하는 저작권 관리 구성 요소는?",
	            "questionPassage": "콘텐츠를 제공하는 저작권자이다.",
	            "answer": "콘텐츠 제공자<br/>(Contents Provider)"
	        }
	    },
	    {
	        "id": 448262,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "다음 내용에 해당하는 저작권 관리 구성 요소는?",
	            "questionPassage": "콘텐츠를 메타 데이터와 함께 배포 가능한 형태로 묶어 암호화하는 프로그램이다.",
	            "answer": "패키저<br/>(Packager)"
	        }
	    },
	    {
	        "id": 448263,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "다음 내용에 해당하는 저작권 관리 구성 요소는?",
	            "questionPassage": "암호화된 콘텐츠를 유통하는 곳이나 사람이다.",
	            "answer": "콘텐츠 분배자<br/>(Contents Distributor)"
	        }
	    },
	    {
	        "id": 448264,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "다음 내용에 해당하는 저작권 관리 구성 요소는?",
	            "questionPassage": "콘텐츠 소비자(Customer) 콘텐츠를 구매해서 사용하는 주체이다.",
	            "answer": "콘텐츠 소비자<br/>(Customer)"
	        }
	    },
	    {
	        "id": 448265,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "다음 내용에 해당하는 저작권 관리 구성 요소는?",
	            "questionPassage": "배포된 콘텐츠의 이용 권한을 통제하는 프로그램이다.",
	            "answer": "DRM 컨트롤러<br/>(DRM Controller)"
	        }
	    },
	    {
	        "id": 448266,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "다음 내용에 해당하는 저작권 관리 구성 요소는?",
	            "questionPassage": "콘텐츠 원본을 안전하게 유통하기 위한 전자적 보안 장치이다.",
	            "answer": "보안 컨테이너<br/>(Security Container)"
	        }
	    },
	    {
	        "id": 448267,
	        "templateId": 9,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★★☆",
	            "question": "다음 보기에서 디지털 저작권 관리(DRM)를 위해 사용되는 기술을 모두 고르시오.",
	            "questionPassage": [
	                "ⓐ 크랙 방지 기술 ",
	                "ⓑ 정책 관리 기술 ",
	                "ⓒ 암호화 기술 ",
	                "ⓓ 방화벽 기술 "
	            ],
	            "answer": [
	                "1",
	                "2",
	                "3"
	            ]
	        }
	    },
	    {
	        "id": 448268,
	        "templateId": 9,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★★★",
	            "question": "다음 보기에서 디지털 저작권 관리(DRM)를 위해 사용되는 기술을 모두 고르시오.",
	            "questionPassage": [
	                "ⓐ 방화벽 기술",
	                "ⓑ 식별 기술 ",
	                "ⓒ 오류 감지 및 복구 기술 ",
	                "ⓓ 키 관리 기술"
	            ],
	            "answer": [
	                "2",
	                "4"
	            ]
	        }
	    },
	    {
	        "id": 448269,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 저작권자가 배포한 디지털 콘텐츠가 저작권자가 의도한 용도로만 사용되도록 디지털 콘텐츠의 생성, 유통, 이용까지의 전 과정에 걸쳐 사용되는 디지털 콘텐츠 관리 및 보호 기술이다.",
	            "answer": "디지털 저작권 관리<br/>(DRM; Digital Right Management)"
	        }
	    },
	    {
	        "id": 448270,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 소설, 시, 논문, 강연, 연술, 음악, 연극, 무용, 회화, 서예, 건축물, 사진, 영상, 지도, 도표, 컴퓨터 프로그램 저작물 등에 대하여 창작자가 가지는 배타적 독점적 권리로 타인의 침해를 받지 않을 고유한 권한이다.",
	            "answer": "저작권"
	        }
	    },
	    {
	        "id": 448271,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★★☆",
	            "oxQuiz": false,
	            "question": "(     )은 개발 초기에서부터 적용된 기준이나 사용자가 소프트웨어를 설치하는 과정에서 필요한 내용을 기록한 설명서와 안내서로, 사용자를 기준으로 작성한다.",
	            "answer": "소프트웨어 설치 매뉴얼"
	        }
	    },
	    {
	        "id": 448272,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음에 제시된 소프트웨어 설치 매뉴얼 작업들을 순서대로 나열하시오.",
	            "questionPassage": "ⓐ 기능 식별 <br/>ⓑ Uninstall 절차 확인 <br/>ⓒ UI 분류 <br/>ⓓ 이상 Case 확인<br/>ⓔ 설치 파일/백업 파일 확인 <br/>ⓕ 최종 메뉴얼 적용",
	            "answer": "ⓐ → ⓒ → ⓔ → ⓑ → ⓓ → ⓕ"
	        }
	    },
	    {
	        "id": 448273,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 사용자가 소프트웨어를 사용하는 과정에서 필요한 내용을 문서로 기록한 설명서와 안내서로, 사용자가 소프트웨어 사용에 필요한 절차, 환경 등의 제반 사항이 모두 포함되도록 작성한다.",
	            "answer": "소프트웨어 사용자 매뉴얼"
	        }
	    },
	    {
	        "id": 448274,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음에 제시된 소프트웨어 사용자 매뉴얼 작업들을 순서대로 나열하시오.",
	            "questionPassage": "ⓐ 기능 식별 <br/>ⓑ 사용자 환경 파일 확인 <br/>ⓒ 최종 매뉴얼 적용 <br/>ⓓ 이상 Case 확인 <br/>ⓔ 초기화 절차 확인 <br/>ⓕ 사용자 화면 분류 ",
	            "answer": "ⓐ → ⓕ → ⓑ → ⓔ → ⓓ → ⓒ"
	        }
	    },
	    {
	        "id": 448275,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 사용자 메뉴얼은 사용자가 소프트웨어를 사용하는 과정에서 필요한 내용을 문서로 기록한 설명서와 안내서이다. 이러한 소프트웨어 사용자 매뉴얼은 (  ①  ) 명세서와 (  ②  ) 설계서를 토대로 작성한다.",
	            "answer": "① 컴포넌트 <br/>② 컴포넌트 구현"
	        }
	    },
	    {
	        "id": 448276,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★★★",
	            "oxQuiz": false,
	            "question": "소프트웨어 (     )는 소프트웨어 개발 단계의 각 과정에서 만들어지는 프로그램, 프로그램을 설명하는 문서, 데이터 등을 관리하는 것을 말한다. 소프트웨어의 개발 과정에서 만들어지는 여러 버전들의 변경 사항을 관리하는 일련의 활동이며 이를 지원하는 도구로 Git, SVN 등이 있다.",
	            "answer": "형상 관리<br/>(SCM; Software Configuration Management)"
	        }
	    },
	    {
	        "id": 448277,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 개발에서의 작업 중 형상 통제에 대해 간략히 서술하시오.",
	            "answer": "형상 통제는 식별된 형상 항목에 대한 변경 요구를 검토하여 현재의 기준선이 잘 반영될 수 있도록 조정하는 작업이다."
	        }
	    },
	    {
	        "id": 448278,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 내용에 해당하는 소프트웨어 개발에서의 형상 관리 기능은?",
	            "questionPassage": "형상 관리 대상에 이름과 관리 번호를 부여하고, 계층(Tree) 구조로 구분하여 수정 및 추적이 용이하도록 하는 작업",
	            "answer": "형상 식별"
	        }
	    },
	    {
	        "id": 448279,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 내용에 해당하는 소프트웨어 개발에서의 형상 관리 기능은?",
	            "questionPassage": "소프트웨어 업그레이드나 유지 보수 과정에서 생성된 다른 버전의 형상 항목을 관리하고, 이를 위해 특정 절차와 도구(Tool)를 결합시키는 작업",
	            "answer": "버전 제어"
	        }
	    },
	    {
	        "id": 448280,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 내용에 해당하는 소프트웨어 개발에서의 형상 관리 기능은?",
	            "questionPassage": "기준선의 무결성을 평가하기 위해 확인, 검증, 검열 과정을 통해 공식적으로 승인하는 작업",
	            "answer": "형상 감사"
	        }
	    },
	    {
	        "id": 448281,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 내용에 해당하는 소프트웨어 개발에서의 형상 관리 기능은?",
	            "questionPassage": "형상의 식별, 통제, 감사 작업의 결과를 기록·관리하고 보고서를 작성하는 작업",
	            "answer": "형상 기록"
	        }
	    },
	    {
	        "id": 448282,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음에 제시된 소프트웨어 버전 등록 과정을 순서대로 나열하시오.",
	            "questionPassage": "ⓐ 인출(Check-Out)<br/>ⓑ 차이(Diff)<br/>ⓒ 동기화(Update) <br/>ⓓ 가져오기(Import)<br/>ⓔ 예치(Commit)",
	            "answer": "가져오기(Import)<br/>↓<br/>인출(Check-Out)<br/>↓<br/>예치(Commit)<br/>↓<br/>동기화(Update)<br/>↓<br/>차이(Diff)"
	        }
	    },
	    {
	        "id": 448283,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "소프트웨어 버전 등록과 관련된 용어 중 최신 버전의 파일들과 변경 내역에 대한 정보들이 저장되어 있는 곳은?",
	            "answer": "저장소<br/>(Repository)"
	        }
	    },
	    {
	        "id": 448284,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "형상 관리(SCM; Software Configuration Management)의 개념을 간단하게 서술하시오.",
	            "answer": "형상 관리는 개발 과정에서 소프트웨어의 변경 사항을 관리하기 위해 개발된 일련의 활동이다."
	        }
	    },
	    {
	        "id": 448285,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 소프트웨어의 개발 과정에서 소프트웨어의 변경 사항을 관리하기 위해 개발된 일련의 활동으로, 소프트웨어 변경의 원인을 알아내고 제어하며, 적절히 변경되고 있는지 확인하여 해당 담당자에게 통보한다.",
	            "answer": "형상 관리<br/>(SCM; Software Configuration Management)"
	        }
	    },
	    {
	        "id": 448286,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 내용에 해당하는 소프트웨어 버전 등록 관련 용어는?",
	            "questionPassage": "버전 관리가 되고 있지 않은 아무것도 없는 저장소(Repository)에 처음으로 파일을 복사한다.",
	            "answer": "가져오기(Import)"
	        }
	    },
	    {
	        "id": 448287,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 내용에 해당하는 소프트웨어 버전 등록 관련 용어는?",
	            "questionPassage": "프로그램을 수정하기 위해 저장소(Repository)에서 파일을 받아오며, 소스 파일과 함께 버전 관리를 위한 파일들도 함께 받아온다.",
	            "answer": "체크아웃<br/>(Check-Out)"
	        }
	    },
	    {
	        "id": 448288,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 내용에 해당하는 소프트웨어 버전 등록 관련 용어는?",
	            "questionPassage": "체크아웃 한 파일의 수정을 완료한 후 저장소(Repository)의 파일을 새로운 버전으로 갱신한다.",
	            "answer": "체크인<br/>(Check-In)"
	        }
	    },
	    {
	        "id": 448289,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "다음 내용에 해당하는 소프트웨어 버전 등록 관련 용어는?",
	            "questionPassage": "체크인을 수행할 때 이전에 갱신된 내용이 있는 경우에는 충돌(Conflict)을 알리고 diff 도구를 이용해 수정한 후 갱신을 완료한다.",
	            "answer": "커밋(Commit)"
	        }
	    },
	    {
	        "id": 448290,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 내용에 해당하는 소프트웨어 버전 등록 관련 용어는?",
	            "questionPassage": "동기화(Update) 저장소에 있는 최신 버전으로 자신의 작업 공간을 동기화한다.",
	            "answer": "동기화<br/>(Update)"
	        }
	    },
	    {
	        "id": 448291,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "서버의 최신 commit 이력을 클라이언트의 소스 파일에 적용하고, commit 전에는 매번 수행하여 클라이언트에 적용되지 않은 서버의 변동내역을 클라이언트에 적용할 때 사용하는 Subversion의 명령어는?",
	            "answer": "update"
	        }
	    },
	    {
	        "id": 448292,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 버전 관리 자료가 서버에 저장되어 관리 되는 방식으로, 모든 버전 관리는 서버에서 수행되며, 서버에 문제가 생기면 서버가 복구되기 전까지 다른 개발자와의 협업 및 버전 관리 작업은 중단된다.",
	            "answer": "클라이언트/서버 방식"
	        }
	    },
	    {
	        "id": 448293,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "개발자별로 원격 저장소의 자료를 자신의 로컬 저장소로 복사하여 작업한 후 변경된 내용을 로컬 저장소에서 우선 반영한 다음 이를 원격 저장소에 반영하는 소프트웨어 버전 관리 도구 관련 방식은?",
	            "answer": "분산 저장소 방식"
	        }
	    },
	    {
	        "id": 448294,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 CVS를 개선한 것으로, 아파치 소프트웨어 재단에서 2000년에 발표하였다. 클라이언트/서버 구조로, 서버(저장소, Repository)에는 최신 버전의 파일들과 변경 사항이 관리된다.",
	            "answer": "Subversion<br/>(서브버전, SVN)"
	        }
	    },
	    {
	        "id": 448295,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "작업 내용을 지역 저장소에 저장하기 위해 스테이징 영역(Staging Area)에 추가할 때 사용하는 Git 명령어는?",
	            "answer": "add"
	        }
	    },
	    {
	        "id": 448296,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "commit 작업 내용을 지역 저장소에 저장할 때 사용하는 Git 명령어는?",
	            "answer": "commit"
	        }
	    },
	    {
	        "id": 448297,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "서버의 소스 파일이나 디렉터리를 잠그거나 해제하는 Git 명령어는?",
	            "answer": "lock/unlock"
	        }
	    },
	    {
	        "id": 448298,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "아무것도 없는 서버의 저장소에 맨 처음 소스 파일을 저장하는 명<br/>령으로, 한 번 사용하면 다시 사용하지 않는 Git 명령어는?",
	            "answer": "import"
	        }
	    },
	    {
	        "id": 448299,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "버전 관리에 대한 정보를 제외한 순수한 소스 파일만을 서버에서 받아오는 Git 명령어는?",
	            "answer": "export"
	        }
	    },
	    {
	        "id": 448300,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "지정한 파일에 대한 위치나 마지막 수정 일자 등에 대한 정보를 표시하는 Git 명령어는?",
	            "answer": "info"
	        }
	    },
	    {
	        "id": 448301,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "지정된 파일이나 경로에 대해 이전 리비전과의 차이를 표시하는 Git 명령어는?",
	            "answer": "diff"
	        }
	    },
	    {
	        "id": 448302,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 리누스 토발즈(Linus Torvalds)가 2005년 리눅스 커널 개발에 사용할관리 도구로 개발한 이후 주니오 하마노(Junio Hamano)에 의해 유지 보수되고 있다.",
	            "answer": "Git(깃)"
	        }
	    },
	    {
	        "id": 448303,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "branch 새로운 브랜치를 생성할 때 사용하는 Git 명령어는?",
	            "answer": "branch"
	        }
	    },
	    {
	        "id": 448304,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "지정한 브랜치로 이동할 때 사용하는 Git 명령어는?",
	            "answer": "checkout"
	        }
	    },
	    {
	        "id": 448305,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "지정한 브랜치의 변경 내용을 현재 HEAD 포인터가 가리키는 브랜치에 반영함으로써 두 브랜치를 병합할 때 사용하는 Git 명령어는?",
	            "answer": "merge"
	        }
	    },
	    {
	        "id": 448306,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "지역 저장소를 생성할 때 사용하는 Git 명령어는?",
	            "answer": "init"
	        }
	    },
	    {
	        "id": 448307,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "원격 저장소에 연결할 때 사용하는 Git 명령어는?",
	            "answer": "remote add"
	        }
	    },
	    {
	        "id": 448308,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "로컬 저장소의 변경 내용을 원격 저장소에 반영할 때 사용하는 Git 명령어는?",
	            "answer": "push"
	        }
	    },
	    {
	        "id": 448309,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "원격 저장소의 변경 이력만을 지역 저장소로 가져와 반영할 때 사용하는 Git 명령어는?",
	            "answer": "fetch"
	        }
	    },
	    {
	        "id": 448310,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "원격 저장소의 전체 내용을 지역 저장소로 복제할 때 사용하는 Git 명령어는?",
	            "answer": "clone"
	        }
	    },
	    {
	        "id": 448311,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "지정한 원격 저장소의 내용을 자신의 원격 저장소로 복제할 때 사용하는 Git 명령어는?",
	            "answer": "fork"
	        }
	    },
	    {
	        "id": 448312,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 버전 관리 자료가 지역 컴퓨터에 저장되어 관리되는 방식으로, 개발자들은 개발이 완료된 파일을 약속된 공유 폴더에 매일 복사하고, 담당자는 공유 폴더의 파일을 자기 PC로 복사한 후 컴파일 하여 이상 유무를 확인한다. 종류에는 SCCS, RCS, PVCS, QVCS 등이 있다.",
	            "answer": "공유 폴더 방식"
	        }
	    },
	    {
	        "id": 448313,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음의 조건에 부합하는 Git 명령이 수행될 수 있도록 괄호에 들어갈 가장 적합한 명령어는?",
	            "questionPassage": "ㆍ‘subtest’ 브랜치를 생성하고 ‘subtest’ 브랜치로 이동해 변경 내역을 저장한다.<br/>ㆍ마스터(master) 브랜치로 이동한 후 ‘subtest’ 브랜치의 커밋 내역을 마스터 브랜치에 병합한다.<br/><br/>\\<Git 명령\\><br/>$ git (  ①  ) subtest<br/>$ git (  ②  ) subtest<br/>$ git add - - all<br/>$ git commit -m \"subtest commit\"<br/>$ git (  ②  ) master<br/>$ git (  ③  ) subtest",
	            "answer": "① branch<br/>② checkout<br/>③ merge",
	            "solution": "$ git branch subtest <br/>$ git checkout subtest <br/>$ git add - - all <br/>$ git commit -m \"subtest commit\" <br/>$ git checkout master <br/>$ git merge subtest <br/><br/>'subtest'라는 새로운 브랜치를 생성한다.<br/>'subtest' 브랜치로 이동한다.<br/>모든 파일을 스테이징 영역에 추가한다.<br/>작업 내역을 지역 저장소에 저장하면서 \"subtest commit\"이라는 메시지를 부여한다.<br/>마스터(master) 브랜치로 이동한다.<br/>'subtest' 브랜치의 커밋 내역을 마스터 브랜치에 병합한다."
	        }
	    },
	    {
	        "id": 448314,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "다음은 Git 명령을 사용하여 작업 폴더의 모든 파일을 스테이징 영역에 추가한 후 지역 저장소에 \"신규 커밋\"이라는 메시지를 부여하고 커밋을 수행하는 명령이다. 괄호에 들어갈 명령은?",
	            "questionPassage": "$ git add -- all<br/>$ git (      ) \"신규 커밋\"",
	            "answer": "commit -m",
	            "solution": "$ git add - -all <br/>$ git commit -m <br/><br/>모든 파일을 스테이징 영역에 추가한다.<br/>\"신규 커밋\" 작업 내역을 지역 저장소에 저장하면서 “신규 커밋”이라는 메시지를 부여한다."
	        }
	    },
	    {
	        "id": 448315,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★☆☆☆",
	            "oxQuiz": false,
	            "question": "다음 마스터 브랜치의 내용을 원격 저장소에 반영하기 위한 Git 명령문에서 \\<준비 작업\\>을 참고하여 \\<Git 명령\\>의 괄호에 들어갈 명령은?",
	            "questionPassage": "\\<준비 작업\\><br/>$ git remote add origin https://github.com/test/gitstudy.git<br/><br/>\\<Git 명령\\><br/>$ git (  ①  ) (  ②  ) master",
	            "answer": "① push <br/>② origin",
	            "solution": "<div class=\"border-block\">$ git remote add origin https://github.com/test/gitstudy.git <br/>$ git push origin master</div><br/>사용자가 'test'이고 저장소 이름이 'gitstudy'인 원격 저장소의 별칭을 'origin'으로 지정한다.<br/>원격 저장소(origin)에 마스터 브랜치의 내용을 반영한다."
	        }
	    },
	    {
	        "id": 448316,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "Groovy를 기반으로 한 오픈 소스 형태의 자동화 도구로 안드로이드 앱 개발 환경에서 사용되고, 실행할 처리 명령들을 모아 태스크로 만든 후 태스크 단위로 실행하는 빌드 자동화 도구는?",
	            "answer": "Gradle"
	        }
	    },
	    {
	        "id": 448317,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★☆☆",
	            "oxQuiz": false,
	            "question": "(     )는 Java 기반의 오픈 소스 형태로, 가장 많이 사용되는 빌드 자동화 도구이다. 서블릿 컨테이너에서 실행되며, SVN, Git 등 대부분의 형상 관리 도구와 연동이 가능하다.",
	            "answer": "Jenkins"
	        }
	    },
	    {
	        "id": 448318,
	        "templateId": 9,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★★★☆☆",
	            "question": "다음 보기에서 빌드 자동화 도구를 모두 고르시오.",
	            "questionPassage": [
	                "ⓐ Gradle ",
	                "ⓑ Release ",
	                "ⓒ Make ",
	                "ⓓ Jenkins "
	            ],
	            "answer": [
	                "1",
	                "3",
	                "4"
	            ]
	        }
	    },
	    {
	        "id": 448319,
	        "templateId": 9,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★☆☆☆☆",
	            "question": "다음 보기에서 빌드 자동화 도구를 모두 고르시오.",
	            "questionPassage": [
	                "ⓐ Packager ",
	                "ⓑ Maven ",
	                "ⓒ Tomcat ",
	                "ⓓ Ant "
	            ],
	            "answer": [
	                "2",
	                "4"
	            ]
	        }
	    },
	    {
	        "id": 448320,
	        "templateId": 8,
	        "registeredDate": 1652337953000,
	        "data": {
	            "rightTitle": "제품 소프트웨어 패키징",
	            "history": "★☆☆☆☆",
	            "oxQuiz": false,
	            "question": "(     )은 Groovy를 기반으로 한 오픈 소스 형태의 자동화 도구로, 안드로이드 앱 개발 환경에서 사용되며, 안드로이드 뿐만 아니라 플러그인을 설정하면, Java, C/C++, Python 등의 언어도 빌드가 가능하다.",
	            "answer": "Gradle"
	        }
	    }
	];
	
	var resetBoxArr = [];
	
	for(var i=0 ; i < boxData.length ; i++){
		var tempQn = {};
		var tempAns = '';
		if(boxData[i].data.answer && typeof boxData[i].data.answer == 'object'){
			for(var c=0 ; c < boxData[i].data.answer.length ; c++){
				tempAns += boxData[i].data.answer[c]
				if(c != boxData[i].data.answer.length-1){
					tempAns += ',';
				}
			}		
			boxData[i].data.answer = tempAns;
		}
		var tempMessage = '';
		if(boxData[i].data.questionPassage && typeof boxData[i].data.questionPassage == 'object'){
			for(var c=0 ; c < boxData[i].data.questionPassage.length ; c++){
				tempMessage += boxData[i].data.questionPassage[c]
				if(c != boxData[i].data.questionPassage.length-1){
					tempMessage += '<br>';
				}
			}		
			boxData[i].data.questionPassage = tempMessage;
		}
		tempQn.id = boxData[i].id;
		tempQn.templateId = boxData[i].templateId;
		tempQn.rightTitle = boxData[i].data.rightTitle;
		tempQn.history = boxData[i].data.history;
		tempQn.oxQuiz = boxData[i].data.oxQuiz;
		tempQn.question = boxData[i].data.question;
		tempQn.answer = boxData[i].data.answer;
		tempQn.solution = boxData[i].data.solution;
		tempQn.questionMessage = boxData[i].data.questionPassage;
		tempQn.ordg = '3';
		
		resetBoxArr.push(tempQn);
	}
	console.log(resetBoxArr);
	
	console.log('기억상자를 초기화합니다.');
	commonAjaxCall('/login/resetBox.json',resetBoxArr, registerResult);
}
function registerResult(result){
	console.log('기억상자를 초기화하였습니다.');
	alert('기억상자를 초기화하였습니다.');
	console.log(result);
	
	allQn();
}