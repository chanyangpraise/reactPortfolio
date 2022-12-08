// const array = [1, 2, 3, 4, 5];
// const array2 = [];
// for (i = 0; i < array.length; i++) {
//   array2.push(array[i] * 2);
// }

// 2
// const array = [1, 2, 3, 4, 5];
// const array2 = [];
// array
//   .forEach
// 	(v => {
// 		array2.push(v*2)
// 	});
// 3
// const array = [1, 2, 3, 4, 5];
// const array2 = array
// 	.map
// 	((v) => {
// 		return v * 2;
// 	});

// 4
// const array = [
//   "일어나기",
//   "씻기",
//   "커피사기",
//   "출근하기",
//   "일하기",
//   "점심먹기",
//   "일하기",
//   "퇴근하기",
// ];
// const array2 = [];
// for (let i = 0; i < array.length; i++) {
//   array2.push(<li>{array[i]}</li>);
// }

// 5
// const array = [
//   "일어나기",
//   "씻기",
//   "커피사기",
//   "출근하기",
//   "일하기",
//   "점심먹기",
//   "일하기",
//   "퇴근하기",
// ];
// const array2 = [];
// array.forEach((v) => {
// 	array2.push(<li>{v}</li>)
// });

// 6 array.map
// const array = [
//   "일어나기",
//   "씻기",
//   "커피사기",
//   "출근하기",
//   "일하기",
//   "점심먹기",
//   "일하기",
//   "퇴근하기",
// ];
// const array2 = array.map((v) => {
//   return <li>{v}</li>;
// });

// 7
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const array = [
//   { id: "1", name: "김", nick: "김씨" },
//   { id: "2", name: "이", nick: "이씨" },
//   { id: "3", name: "최", nick: "최씨" },
//   { id: "4", name: "박", nick: "박씨" },
// ];

// function ClientList(props) {
//   return <ul>{props.clientList}</ul>;
// }
// const array2 = [];
// for (let i = 0; i < array.length; i++) {
//   array2.push(
//     <li>{`${array[i].id}번의 이름은 ${array[i].name}이고 닉네임은 ${array[i].nick}입니다.`}</li>
//   );
// }

// root.render(<ClientList clientList={array2} />);

// 8
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const array = [
//   { id: "1", name: "김", nick: "김씨" },
//   { id: "2", name: "이", nick: "이씨" },
//   { id: "3", name: "최", nick: "최씨" },
//   { id: "4", name: "박", nick: "박씨" },
// ];

// function ClientList(props) {
//   return <ul>{props.clientList}</ul>;
// }
// const array2 = [];
// array.forEach((v) => {
//   array2.push(
//     <li>{`${v.id}번의 이름은 ${v.name}이고 닉네임은 ${v.nick}입니다.`}</li>
//   );
// });

// root.render(<ClientList clientList={array2} />);

// 9
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const array = [
//   { id: "1", name: "김", nick: "김씨" },
//   { id: "2", name: "이", nick: "이씨" },
//   { id: "3", name: "최", nick: "최씨" },
//   { id: "4", name: "박", nick: "박씨" },
// ];

// function ClientList(props) {
//   return <ul>{props.clientList}</ul>;
// }
// const array2 = array.map((v) => {
//   return (
//     <li>{`${v.id}번의 이름은 ${v.name}이고 닉네임은 ${v.nick}입니다.`}</li>
//   );
// });

// root.render(<ClientList clientList={array2} />);

// 10
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const array = [
//   { id: "1", name: "김", nick: "김씨" },
//   { id: "2", name: "이", nick: "이씨" },
//   { id: "3", name: "최", nick: "최씨" },
//   { id: "4", name: "박", nick: "박씨" },
// ];

// function ClientList(props) {
//   return <ul>{props.clientList}/</ul>;
// }
// const array2 = array.map((v) => {
//   if (v.name === "김") {
//     return (
//       <li>{`${v.id}번의 이름은 ${v.name}이고 닉네임은 ${v.nick}입니다.`}</li>
//     );
//   }
// });

// root.render(<ClientList clientList={array2} />);

// 11
// function solution(my_string, letter) {
//   var answer = "";
//   const my_array = my_string.split("");
//   console.log(my_array);
//   for (let i = my_array.length - 1; i >= 0; i--) {
//     console.log(i);
//     if (my_array[i] === letter) {
//       my_array.splice(i, 1);
//     }
//   }
//   answer = my_array.join("");
//   return answer;
// }

// console.log(solution("abcdeff", "f"));

// 12
// function solution(strlist) {
//   var answer = [];
//   strlist.map((v) => {
//     return v.length;
//   });
//   return answer;
// }

// function solution(strlist) {
//   var answer = [];
// 	for (let i = 0; i < strlist; i++) {
// 		answer.push(strlist[i].length);
// 	}
//   return answer;
// }

// for each
// function solution(strlist) {
//   var answer = [];
// 	strlist.forEach((v) => {
// 		answer.push(v.length);
// 	});
//   return answer;
// }

