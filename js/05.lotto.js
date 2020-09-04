var nums = ['A', 'B', 'C', 'D', 'E', 'F'];
console.log(		nums.indexOf('G')		);	// -1


/*
// 1번
function onFinder() {
	var numbers = [];
	var number;
	while(numbers.length < 6) {
		number = Math.ceil(Math.random() * 45);
		if(numbers.indexOf(number) == -1) numbers.push(number);
	}
}
*/

function onFinder() {
	$(".lotto-wrap").empty();
	var html = '', className;
	var numbers = [];
	var selectedNumbers = [];
	for(var i=1; i<=45; i++) numbers.push(i);
	numbers = _.shuffle(numbers);
	for(var i=0; i<6; i++) selectedNumbers.push(numbers.pop());
	selectedNumbers = selectedNumbers.sort(function(a, b) { return a - b });
	// function(a, b) { return b - a } // 내림차순
	for(var i in selectedNumbers) {
		if(selectedNumbers[i] < 11) className = 'yellow';
		else if(selectedNumbers[i] >= 11 && selectedNumbers[i] < 21) className = 'cyan';
		else if(selectedNumbers[i] >= 21 && selectedNumbers[i] < 31) className = 'red';
		else if(selectedNumbers[i] >= 31 && selectedNumbers[i] < 41) className = 'grey';
		else className = 'green';
		html += '<div class="lotto '+className+'">'+selectedNumbers[i]+'</div>';
	}
	// console.log(html);
	$(".lotto-wrap").append(html);
	// 오른쪽 붙이기
	html = '<div class="lotto-wrap2">'+html+'</div>';
	console.log(html);
	$(".rt-wrap").prepend(html);
}

$("#btFinder").click(onFinder);