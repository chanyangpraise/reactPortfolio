// solved with teacher's help
function solution(num, k) {
  let answer = 0;
  let text = num.toString();
  let a = k.toString();
  let b = text.indexOf(a);
  if (b === -1) {
    answer -= 1;
  } else {
    answer = b + 1;
  }
  return answer;
}

// teacher solution
function solution(num, k) {
  var answer = 0;
  // num은 정수 string이나 array로 변환이 필요하다.
  let a = num.toString(); // 정수 -> 문자열
  let b = a.indexOf(k); // k의 index를 찾음
  // 없으면 -1, 있으면 0부터 시작하는 index를 반환
  if (b !== -1) {
    answer = b + 1;
  } else {
    answer = -1;
  }
  return answer;
}

function solution(num, k) {
  return (" " + num).indexOf(k);
}

function solution(num, k) {
  let answer = 0;
  let arrayNum = num.toString().split("");
  let addArrayNum = [" ", ...arrayNum];
  answer = addArrayNum.indexOf(k);
  // index가 0부터 시작합니다.
  return answer;
}
