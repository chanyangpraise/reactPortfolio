function solution(numbers, direction) {
	var answer = [];
	if (direction === "right") {
		let a = numbers.pop()
		numbers.unshift(a);
		answer = numbers;
	} else {
		let b = numbers.shift()
		numbers.push(b)
		answer = numbers;
	}
	return answer;
}

console.log(solution(([1, 2, 3, 4, 5, 6, 7]), "left"));