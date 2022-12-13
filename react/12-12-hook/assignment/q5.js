function solution(numbers) {
  var answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (answer < numbers[i] * numbers[j]) {
        answer = numbers[i] * numbers[j];
      }
    }
  }
  return answer;
}

function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}
