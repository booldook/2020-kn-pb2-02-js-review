/**************** 이벤트 콜백 *****************/
function onListClick(){
	var src = $(this).find("img").attr("src");
	var title = $(this).find("img").data("title");
	$(".title").text(title);
	$(".img-big").stop().animate({"opacity": 0}, 300, function(){
		$(this).attr("src", src).stop().animate({"opacity": 1}, 300);
	});
}


/**************** 이벤트 선언 *****************/
$(".list").click(onListClick);
$(".list").eq(0).trigger("click");