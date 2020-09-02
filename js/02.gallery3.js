var a = 10; // 전역변수: 축구선수 흥민
console.log(a);

function fx() {
	// 지역변수: 함수안에서 선언된 변수는 함수안에서만 유효하다.
	var a = 20;	// 내친구 흥민
	console.log(a);
	console.log(window.a);
}
fx();

// 연산자
// +=    a = a + 5  ==>  a += 5
// ++    a = a + 1  ==>  a++
// --    a = a - 1  ==>  a--




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
	// $(html).appendTo(".lists").click(onListClick);
}
$(".list").click(onListClick);
$(".list").eq(0).trigger("click");

/**************** 이벤트 콜백 *****************/
function onListClick() {
	var idx = $(this).index();
	$(".title").text(lists[idx].title);
	$(".img-big").stop().animate({"opacity": 0}, 200, function(){
		$(this).attr("src", lists[idx].src).stop().animate({"opacity": 1}, 200);
	});
}


/**************** 이벤트 선언 *****************/

/**************** 사용자 함수 *****************/


/**************** DOM 컨트롤 *****************/
$("#html").click(onHtml);
$("#append").click(onAppend);
$("#appendTo").click(onAppendTo);
$("#prepend").click(onPrepend);
$("#prependTo").click(onPrependTo);
$("#remove").click(onRemove);
$("#empty").click(onEmpty);

function onHtml() {
	var inner = 'ABCDEF';
	var html = '<div title="'+inner+'">'+inner+'</div>';
	console.log(html);
	$(".test").html(html);
}
function onAppend() {
	var inner = 'GHIJK';
	var html = '<div title="'+inner+'">'+inner+'</div>';
	$(".test").append(html); 
}
function onAppendTo() {
	var inner = 'GHIJK';
	var html = '<div title="'+inner+'">'+inner+'</div>';
	$(html).appendTo(".test");
}
function onPrepend() {
	var inner = 'GHIJK';
	var html = '<div title="'+inner+'">'+inner+'</div>';
	$(".test").prepend(html); 
}
function onPrependTo() {
	var inner = 'GHIJK';
	var html = '<div title="'+inner+'">'+inner+'</div>';
	$(html).prependTo(".test"); 
}
function onRemove() {
	// 대상을 삭제한다.
	$(".test").remove();
}
function onEmpty() {
	// 대상의 안에 있는 태그를 삭제
	$(".test").empty();
}