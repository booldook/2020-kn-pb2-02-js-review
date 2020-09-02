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
