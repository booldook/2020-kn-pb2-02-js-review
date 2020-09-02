var a = 10; // 전역변수: 축구선수 흥민
console.log(a);

function fx() {
	// 지역변수: 함수안에서 선언된 변수는 함수안에서만 유효하다.
	var a = 20;	// 내친구 흥민
	console.log(a);
	console.log(window.a);
}
fx();




/**************** 전역변수 선언 *****************/
var lists = [
	{ src: "../img/cherries.jpg", title: "체리" },
	{ src: "../img/croissant.jpg", title: "크로와상" },
	{ src: "../img/popsicle.jpg", title: "아이스크림" },
	{ src: "../img/salmon.jpg", title: "연어구이" },
	{ src: "../img/sandwich.jpg", title: "샌드위치" },
	{ src: "../img/steak.jpg", title: "스테이크" },
	{ src: "../img/wine.jpg", title: "와인" }
];
var html = '';

/**************** 초기 설정 *****************/
// for(var i=0; i<lists.length; i++) {
for(var i in lists) {
	html 	= '<div class="list m-2">';
	html += '<img src="'+lists[i].src+'" class="w-100">';
	html += '</div>';
	$(".lists").append(html);
}


/**************** 사용자 함수 *****************/



/**************** 이벤트 콜백 *****************/



/**************** 이벤트 선언 *****************/
