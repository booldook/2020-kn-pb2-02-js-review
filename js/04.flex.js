/*
$(".food-wrap").find(".food").click(onFoodClick);
function onFoodClick() {
	$(".food-wrap").find(".food").css("order", 2);
	$(this).css("order", 1);
}

// 수학함수 관련
Math.min(1,2,3,4,5)								//	1
Math.max(1,2,3,4,5)								//	5
var scores = [1, 2, 3, 4, 5];
Math.max(...scores);							//	5
Math.abs(-15);										//	15
Math.round(4.4);									//	4
Math.round(4.6);									//	5
Math.ceil(4.2);										//	5
Math.ceil(4.9);										//	5
Math.floor(4.2);									//	4
Math.floor(4.9);									//	4
Math.PI;													//	3.141592653589793
Math.random();										//	0.31379055283817214
Math.random();										//	0.21904244116477978
Math.random();										//	0.6736894567464169
Math.random();										//	0.6134078546561301
Math.ceil(Math.random() * 8) - 1

var mr = $(this).css("margin");		// Getter
$(this).css("order", order);			// Setter
$(this).css({"order": order, "color": "red"});	// 다중 Setter
*/

// 0 ~ 7 까지의 랜덤값을 추출 
// Math.ceil(Math.random() * 8) - 1
$("#btReset").click(function(){
	$(".food").each(function(i){
		var order = Math.ceil(Math.random() * 8) - 1;
		$(this).css("order", order);
	});
});