var nums = ['A', 'B', 'C', 'D', 'E', 'F'];
console.log(		nums.indexOf('G')		);

/*
// 1번
function onFinder() {
	var numbers = [];
	var number;
	while(numbers.length < 6) {
		number = Math.ceil(Math.random() * 45);
		if(numbers.indexOf(number) == -1) numbers.push(number);
	}
	console.log(numbers);
}
*/

function onFinder() {
	var numbers = [];
	for(var i=1; i<=45; i++) numbers.push(i);
	console.log(numbers.shuffle());
}

$("#btFinder").click(onFinder);