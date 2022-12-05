// // 1_2 Object
// let myInfo = {
//   name: "cy",
//   phone: "010-1234-1234",
//   live: "busan",
//   age: 24,
//   height: 180,
// };

// 3 function
const age = {
	init : 0,
	add: function () {
		age.init = age.init + 1; //age.nit += 1
		// return age.init;
	}
}


// // 4 for forEach loop
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // here i represents index
}

// // // 5 object to string
// console.log(JSON.stringify(myInfo));

// // //6 5 into json
// let user = JSON.parse(JSON.stringify(myInfo));
