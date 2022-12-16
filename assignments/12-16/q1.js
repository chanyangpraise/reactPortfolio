function solution(sides) {
  sides.sort(function (a, b) {
    return a - b;
  });
  if (sides[2] < sides[0] + sides[1]) {
    return 1;
  } else {
    return 2;
  }
}
console.log(solution([1, 2, 3]));
