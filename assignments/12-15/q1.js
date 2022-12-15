function solution(box, n) {
  var answer = 0;
  let a = Math.floor(box[0] / n);
  let b = Math.floor(box[1] / n);
  let c = Math.floor(box[2] / n);
  let d = a * b * c;
  answer = d;
  return answer;
}
console.log(solution([10, 8, 6], 3));
