function solution(cipher, code) {
  return [...cipher].reduce(
    (a, c, i) => ((i + 1) % code === 0 ? a + c : a),
    ""
  );
}

const solution = (cipher, code) =>
  [...cipher].filter((a, i) => (i + 1) % code === 0).join("");

// for문
function solution(cipher, code) {
  var answer = "";
  for (let i = 0; i < cipher.length; i += 1) {
    if (i % code === code - 1) {
      answer = answer + cipher[i];
    }
  }
  return answer;
}

// filter
function solution(cipher, code) {
  return cipher
    .split("")
    .filter((value, index) => index % code === code - 1)
    .join("");
}
// 좋은 for문
function solution(cipher, code) {
  var answer = "";
  for (let i = 1; i < cipher.length; i = i + 4) {
    answer = answer + cipher[i];
  }
  return answer;
}

