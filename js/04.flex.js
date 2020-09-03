$(".food-wrap").find(".food").click(onFoodClick);
function onFoodClick() {
	$(".food-wrap").find(".food").css("order", 2);
	$(this).css("order", 1);
}
