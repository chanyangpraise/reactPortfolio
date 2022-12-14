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
