/* // 3번째 list 선택
console.log( $(".list").eq(2) );
console.log( $(".wrapper > .list:nth-child(3)") );

console.log( $(".container").find(".list").eq(2) );
console.log( $(".list", ".container").eq(2) );

console.log( $(".list, .container") );


$(".list").click(function(){
	var idx = $(this).index();
	console.log(idx);
});

// length - 배열(Array)
console.log(	$(".list").length	);

$(".list").each(function(i){
	console.log(i);
});


// 객체와 메서드
function aa() {
	// 함수
}
var Human = {
	each: function() {
		// 메서드
	}
} */

var titles = [
	'체리',
	'크로와상',
	'와인',
	'스테이크',
	'연어구이',
	'샌드위치',
	'아이스크림'
];

$(".list").find("img").click(function(){
	var idx = $(this).parent().index();
	$(".title").text(titles[idx]);
	var src = $(this).attr("src");	// Getter
	//$(".img-big").attr("src", src);	// Setter
	$(".img-big").stop().animate({"opacity": 0}, 300, function(){
		$(this).attr("src", src).stop().animate({"opacity": 1}, 300);
	});
});
$(".list").eq(0).find("img").trigger("click");