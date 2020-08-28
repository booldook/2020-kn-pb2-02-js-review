$("#bt1").click(function(){
	$("#img1").stop().fadeOut(500);
});
$("#bt2").click(function(){
	$("#img1").stop().fadeIn(500);
});
$("#bt3").click(function(){
	$("#img1").toggle();
});
$("#bt4").click(function(){
	$("#img1").stop().fadeToggle(500);
});
$("#bt5").click(function(){
	$("#img1").stop().slideUp(500);
});
$("#bt6").click(function(){
	$("#img1").stop().slideDown(500);
});
$("#bt7").click(function(){
	$("#img1").stop().slideToggle(500);
});

/************** Vanila Script / ES5 *****************/
document.getElementById("bt8");	// $("#bt8")
document.getElementsByClassName("btn");	// $(".btn")
document.getElementsByTagName("button");	// $("button")
document.querySelector("#bt8");
document.querySelector(".btn");
document.querySelector("button");

console.log(	$("#bt8")[0]	);
console.log(	$(document.getElementById("bt8"))	);

document.querySelector("#bt8").addEventListener("click", function(){
	document.querySelector("#img2").style.display = "none";
});

document.querySelector("#bt9").addEventListener("click", function(){
	document.querySelector("#img2").style.display = "";
});

/*
var document = {
	querySelector: function(str){
		return this.getElementById(str);
	},
	style: {
		display: 'block'
	}
}
var a = ['A', 'B'];
var b = {
	x: 10,
	y: 20
};
console.log(b.x);
console.log(b.y);
*/


/********** 변수, 함수, 배열, 객체 ***********/
/********** 변수(variable) ***********/
// var a = '?'
// primittive type: 숫자(Number), 문자(String), 불린(Boolean), null, undefined
// reference type : 배열(Array), 객체(Object)
var a;
if(a) console.log(a);

var a = 1;
if(a) console.log(a);

var a = '1';
if(a) console.log(a);

var a = true;
if(a) console.log(a);

var a = null; // 빈값
if(a) console.log(a);

// console.clear();

// false == 0, '', null, undefined
if(a) {
	console.log("Hi~");
}