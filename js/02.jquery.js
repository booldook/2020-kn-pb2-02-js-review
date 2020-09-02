// 3번째 list 선택
console.log( $(".list").eq(2) );
console.log( $(".wrapper > .list:nth-child(3)") );
console.log( $(".container").find(".list").eq(2) );

$(".list").click(function(){
	var idx = $(this).index();
	console.log(idx);
});

// length - 배열(Array)