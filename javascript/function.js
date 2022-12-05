// /* eslint-disable func-names */
// /* eslint-disable prefer-arrow-callback */
// function add(v1, v2, callback) {
//   console.log("add의 1");
//   callback(v1 + v2);
//   return v1 + v2;
// }

// add(1, 2, (v) => {
//   console.log("callback의 1");
//   console.log(v);
// });

// function a(callback) {
//   setTimeout(() => {
//     console.log("a");
//     b(function () {
//       console.log("b-callback");
//     });
//     callback();
//   }, 1000);
// }

// function b(callback) {
//   console.log("b");
//   callback();
// }
// a(function () {
//   console.log("a-callback");
// });
// console.log("c");

// add(1, 2);

// function any(callback) {
//   console.log("여기는 안입니다.");
//   console.log(callback);
//   console.log("--------------------");
//   callback();
// }

// function add2() {
//   console.log("나는 add2");
// }

// console.log("여기는 밖입니다.");
// console.log(add2);
// console.log("--------------------");
// any(() => {
//   add2();
// });

// function any(callback) {
//   console.log("any 시작, 매개변수로 v1이 들어옴");
//   callback();
// }

// function add2() {
//   console.log("어? 왜 내가 실행되지?");
// }

// console.log("코드 시작, 매개변수로 add2가 들어감");
// any(() => {
//   add2();
// });

// function any(callback) {
//   callback(1, 2);
// }

// function add2(v1, v2) {
//   console.log(v1 + v2);
// }

// any(() => {
//   add2(1, 2);
// });

// function a1(callback) {
//   console.log("a1");
//   callback();
// }

// function a2() {
//   console.log("a2");
// }

// a1(a2);

// function a1(callback) {
//   console.log("a1");
//   callback();
// }

// function add(v1, v2, callback) {
//   console.log(v1 + v2);
//   callback();
// }

// const a2 = function () {
//   console.log("a2");
// };

// a1(a2);

// // 1
function any(v1, v2) {
  console.log("찍었습니다!");
}

any(1, 2);
any(1, 2);
any(1, 2);
any(1, 2);
any(1, 2);

// // 2
function myFunction(p1, p2) {
  return p1 * p2;
}
myFunction(2, 5);

// // 3
function first(v1, v2) {
  console.log(v1, v2);
  second(v1 + v2);
}

// function second(v) {
//   console.log(v * v);
// }

// first(1, 2);

// // 4
// function first(v1, v2, callback) {
//   console.log(v1, v2);
//   callback(v1 + v2);
// }

// function second(v) {
//   console.log(v * v);
// }

// first(1, 2, (value) => {
//   second(value);
// });

// // 5
// function first(v1, v2, callback) {
//   console.log(v1, v2);
//   const value = v1 + v2;
//   second(value);
//   callback(value);
// }

// function second(v) {
//   console.log(v * v);
// }

// first(1, 2, (value) => {
//   second(value);
// });


// // 6
// function first(v1, v2, v3) {
//   console.log(v1, v3);
//   v2(v1 + v3);
// }

// function second(v) {
//   console.log(v * v);
// }

// first(1, second, 2);

// 1 2

// // 8
// function first(v1, v2, v3) {
//   v2(v1, v3);
// }

// function second(v, f) {
//   console.log(v * v);
// 	f(v);
// }

// function third(value) {
// 	console.log(value * value * value)
// }

// first(1, second, third);

// 9
function coffee(money) {
	return [parseInt(money / 5500), money % 5500];
}
console.log(coffee(15000));









function first(v1, v2, v3) {
  console.log(v1, v3);
  v2(v1, v3);
}

function second(v, v) {
  console.log(v * v);
}

first(1, second, 2);