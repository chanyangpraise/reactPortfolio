function solution(array) {
  const max = Math.max(...array);
  return [max, array.indexOf(max)];
}

// teacher answer
// for문
function solution(array) {
  var answer = [0, 0];
  for (let i = 0; i < array.length; i += 1) {
    if (answer[0] < array[i]) {
      answer = [array[i], i];
    }
  }
  return answer;
}

// map으로 푼다
function solution(array) {
  var answer = [0, 0];
  array.map((value, index) => {
    if (answer[0] < value) {
      answer = [value, index];
    }
  });
  return answer;
}

// forEach으로 푼다
function solution(array) {
  var answer = [0, 0];
  array.forEach((value, index) => {
    if (answer[0] < value) {
      return (answer = [value, index]);
    }
  });
  return answer;
}
