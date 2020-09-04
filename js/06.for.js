function onHover() {
	$(this).css("opacity", 0);
}

function onMaker() {
	$(".wrapper").empty();
	for(var i=0; i<2000; i++) {
		$(".wrapper").append('<div class="box">'+(i+1)+'</div>');
	}
	$(".box").mouseover(onHover);
}

function onReset() {
	$(".wrapper").empty();
}

$("#btMaker").click(onMaker);
$("#btReset").click(onReset);
