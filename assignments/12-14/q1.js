// solved with teacher's help 
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

// 1번문제 for문
// right -> 배열의 끝에 있는 것이 배열의 첫번째로 간다.
//            pop -> unshift를 하면 된다.

// left -> 배열의 첫번째 있는 것이 배열의 마지막으로 간다
//           shift -> push
function solution(numbers, direction) {
  var answer = [];
  // numbers = [1,2,3]
  if (direction === "right") {
    let pop = numbers.pop(); // 3
    numbers.unshift(pop); // [3, 1, 2]
    answer = nunbers;
    // answer = numbers.unshift(numbers.pop())
  } else {
    let shift = numbers.shift(); // 1
    numbers.push(shift);
    answer = numbers;
  }
  return answer;
}

// 1번문제 구조분해 할당
function solution(numbers, direction) {
  var answer = [];
  if (direction === "right") {
    // answer = [numbers.pop(), ...numbers];
    answer = [
      numbers[numbers.length - 1],
      ...numbers.slice(0, numbers.length - 1),
    ];
  } else {
    slice ->
    answer = [...numbers.slice(1, numbers.length), numbers[0]];
  }
  return answer;
}
