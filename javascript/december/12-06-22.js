//  1
// const array = [1, 2, 3, 4, 5]
// for (i = 0; i < array.length; i++) {
// 	console.log(array[i])
// }

// 2
// const array = [1,2,3,4,5];
// for (let i = array.length - 1; i >= 0; i--) {
//   console.log(array[i]);
// }

// 3
// const array = [1, 2, 3, 4, 5]
// for (let i = 0; i < array.length; i++) {
// 	for (let j = i + 1; j < array.length; j++) {
// 		console.log(array[i],array[j])
// 	}
// }

// 4
// const array = [1, 2, 3, 4, 5]
// for (let i = 0; i < array.length; i += 2) {
// 	for (let j = 0; j < array.length; j++) {
// 		console.log(array[i], array[j])
// 	}
// }


// 5 삼항연산자

// let isTrue = false;
// let name;
// if(isTrue === false) {
// 	name = "거짓"
// } else {
//   name = "진실"
// }

// // 아래에 빈칸을 채워 주세요.
// name = isTrue === false ? "거짓" : "진실";

// 6 Props
// const root = ReactDOM.createRoot(document.getElementById("root"));

// const obj = {
//   lastLogin: "2022-12-06",
//   name: "hun",
//   phon: "010-1234-1234",
// };

// function Userinfo(props) {
//   return (
//     <div className="UserInfo">
//       <h1 className="name">{props.name}</h1>
//       <h2 className="phon">{props.phon}</h2>
//       <h2 className="lastLogin">{props.lastLogin}</h2>
//     </div>
//   );
// }

// root.render(
//   <Userinfo lastLogin={obj.lastLogin} name={obj.name} phon={obj.phon} />
// );

// 7
// const root = ReactDOM.createRoot(document.getElementById("root"));

// //const obj = {
// //	lastLogin: "2022-12-06",
// //	name: "hun",
// //	phon: "010-1234-1234"
// //}

// function Userinfo(props) {
//   return (
//     <div className="UserInfo">
//       <h1 className="name">{props.name}</h1>
//       <h2 className="phon">{props.phon}</h2>
//       <h2 className="lastLogin">{props.lastLogin}</h2>
//     </div>
//   );
// }

// Userinfo.defaultProps = {
// 	lastLogin: "2022-12-06",
// 	name: "hun",
// 	phon: "010-1234-1234"
// }


// root.render(
// 	<Userinfo lastLogin={lastLogin} name={name} phon={phon} />
// );

// 8
const root = ReactDOM.createRoot(document.getElementById("root"));

function Userinfo(props) {
  return (
    <div className="UserInfo">
      <h1 className="work">{props.author.work}</h1>
      <h2 className="UserInfo-name">{props.author.name}</h2>
    </div>
  );
}

Userinfo.propTypes = {
	author: PropTypes.shape({
		work: PropTypes.string.isRequire,
		name: PropTypes.string,
	})
};

function Comment(props) {
  return (
    <div className="Comment">
      <Userinfo author={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date}</div>
    </div>
  );
}

Comment.propTypes = {
	author: PropTypes.object,
	text: PropTypes.string,
	date: PropTypes.date,
};

const comment = {
  author: {
    name: "hun",
    work: "효성직업전문학원",
  },
  text: 5,
  date: new Date().toLocaleDateString(),
};

root.render(
  <Comment author={comment.author} text={comment.text} date={comment.date} />
);

// 9
function solution(numbers) {
	var answer = 0;
	for (let i = 0; i < numbers.length; i++) {
		answer = answer + numbers[i];
	}
	return answer / numbers.length;
}

