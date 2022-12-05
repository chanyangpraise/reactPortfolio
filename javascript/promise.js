// function add(x1, x2, callback) {
//   callback(x1 + x2);
// }

// function add(x1, x2) {
//   new Promise((resolve, reject) => {
//     resolve, reject;
//   });
// }

function Padd1(x1, x2) {
  return new Promise((resolve) => {
    resolve(x1 + x2);
  });
}

function Padd2(x1, x2) {
  return new Promise((resolve) => {
    resolve(x1 + x2);
  });
}

function Cadd1(x1, x2, callback) {
  callback(x1 + x2);
}

function Cadd2(x1, x2, callback) {
  callback(x1 + x2);
}

Cadd1(1, 2, (v) => {
  Cadd2(v, 3, (v1) => {
    console.log(v1);
  });
});

Cadd1(1, 2, (v) =>
  Cadd2(v, 3, (v1) => {
    console.log(v1);
  })
);

Padd1(1, 2)
  .then((v) => Padd2(v, 3))
  .then((v1) => {
    console.log(v1);
  });

// 함수 기본형을 Promise으로 구현
function mul(v1, v2) {
  return new Promise((resolve, reject) => {
    const result = v1 * v2;
    resolve(result);
  });
}

mul(1, 2).then((result) => {
  console.log(result);
});

//함수를 callback으로 구현
function div(v1, v2, callback) {
  const r = v1 + v2;
  callback(r);
}
div(2, 3, (r) => {
  console.log(r);
});

//함수 div를 callback -> Promise로 구현
function div(v1, v2) {
  return new Promise((resolve, reject) => {
    const r = v1 + v2;
    resolve(r);
  });
}
div(2, 3).then((r) => {
  console.log(r);
});

// setTimeout이 들어간 callback 덧셈
function setAdd(v1, v2, callback) {
  setTimeout(() => {
    callback(v1 + v2);
  }, 1000);
}
setAdd(1, 2, (result) => {
  console.log(result);
});

// setTimeout이 들어간 Promise 덧셈
function setAdd(v1, v2) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(v1 + v2);
    }, 1000);
  });
}

setAdd(1, 2).then((result) => {
  console.log(result);
});

// callback mul -> setAdd 결과값 console.log
function mul(v1, v2, callback) {
  callback(v1 * v2);
}

function setAdd(v1, v2, callback) {
  setTimeout(() => {
    callback(v1 + v2);
  }, 1000);
}

mul(1, 2, (r1) => {
  setAdd(r1, 3, (r2) => {
    console.log(r2);
  });
});

// promise mul -> setAdd 결과값 console.log
function mul(v1, v2) {
  return new Promise((resolve, reject) => {
    resolve(v1 * v2);
  });
}

function setAdd(v1, v2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(v1 + v2);
    }, 1000);
  });
}

mul(1, 2).then((r1) => {
  console.log(r1);
  setAdd(r1, 3).then((r2) => {
    // .then으로 안함
    console.log(r2);
  });
});

function mul(v1, v2) {
  return new Promise((resolve, reject) => {
    console.log("에러가 있으면 이 콘솔은 찍히면 안됩니다.");
    resolve(v1 * v2);
  });
}

add(1, 2)
  .then((v1) => mul(v1, 3))
  .then((v2) => {
    console.log(v2);
  })
  .catch((err) => {
    console.log(err);
  });

// add 함수 만들고 resolve, reject를 이용해서 Promise를 만들어 주세요 그리고 나서 .then, .catch로 사용 해 주세요
function add(v1, v2) {
  return new Promise((resolve, reject) => {
    if (error === true) {
      reject("add에서 에러가 발생 했습니다.");
    } else {
      resolve(v1 + v2);
    }
  });
}

add(1, 2)
  .then((r1) => {
    console.log(r1);
  })
  .catch((err) => {
    console.log(err);
  });

const error2 = false; // true면 에러, false면 정상
// add2를 만들어 주세요. 함수 내용은 add와 같습니다.
// 다만 add와 add2의 에러를 구분 해 주시고
// add2에서만 에러를 발생 해 주세요
// .then으로 묶어서 사용 해 주세요.

function add2(v1, v2) {
  return new Promise((resolve, reject) => {
    if (error2) {
      reject("add2에서 에러가 발생 했습니다.");
    } else {
      resolve(v1 + v2);
    }
  });
}

add(1, 2)
  .then((v1) => add2(v1, 3))
  .then((v2) => {
    console.log(v2);
  })
  .catch((err) => {
    console.log(err);
  });

// add2에서 에러가 발생 했습니다.

// 1번 문제
function call(v1) {
  return new Promise((resolve, reject) => {
    resolve(v1[0] + v1[1]);
  });
}

call([1, 2]).then((value) => {
  console.log(value);
});

// 2번 문제
const error = false; // true이면 에러가 있음 , false이면 에러가 없음

function promise() {
  return new Promise((resolve, reject) => {
    if (error === true) {
      reject("fail");
    } else {
      resolve("success");
    }
  });
}

promise()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// 3번 문제
function add(v1, v2) {
  return new Promise((resolve) => {
    resolve(v1 + v2);
  });
}

function min(v1, v2) {
  return new Promise((resolve) => {
    resolve(v1 - v2);
  });
}

function mul(v1, v2) {
  return new Promise((resolve) => {
    resolve(v1 * v2);
  });
}

function div(v1, v2) {
  return new Promise((resolve) => {
    resolve(v1 / v2);
  });
}

// ((((3+1) - 2) * 4) / 2)
add(3, 1)
  .then((v1) => min(v1, 2))
  .then((v1) => mul(v1, 4))
  .then((v1) => div(v1, 2))
  .then((v1) => {
    console.log(v1);
  });

// 4
function getComm(userId) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      }
    };

    xhr.onerror = () => {
      reject(xhr.responseText);
    };

    xhr.open("GET", `http://localhost:3000/comment/get/user/${userId}`);
    xhr.send();
  });
}

function makeComment(cid, userId, nick, date, content, sort = "DESC") {
  const div1 = document.createElement("div");
  div1.className = "comment-wrap";

  const div1_1 = document.createElement("div");
  div1_1.className = "comment-first";
  const div1_1_1 = document.createElement("div");
  div1_1_1.className = "comment-first-left";
  const span1_1_1_1 = document.createElement("span");
  span1_1_1_1.innerText = nick;
  const span1_1_1_2 = document.createElement("span");
  span1_1_1_2.innerText = date;
  div1_1_1.append(span1_1_1_1, span1_1_1_2);
  div1_1.append(div1_1_1);

  const div1_2 = document.createElement("div");
  div1_2.className = "comment-second";
  const span1_2_1 = document.createElement("span");
  span1_2_1.innerText = content;
  div1_2.append(span1_2_1);

  div1.append(div1_1, div1_2);

  if (sort === "ASC") {
    document.getElementsByClassName("profile-bottom")[0].prepend(div1);
  } else if (sort === "DESC") {
    document.getElementsByClassName("profile-bottom")[0].append(div1);
  }
}

getComm(1)
  .then((response) => {
    response.content.forEach((element) => {
      makeComment(
        element.cid,
        element.uid,
        element.nick,
        element.date,
        element.content
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });


	// 5
function getFollowing(userId) {
function getFollowing(userId) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      }
    };

    xhr.onerror = () => {
      reject(xhr.responseText);
    };

    xhr.open(
      "GET",
      `http://localhost:3000/profile/following/${userId}?page=${fingPage}&count=${fingCount}`
    );
    xhr.send();
  });
}

  function makeFollow(userId, nick, sort) {
    const div1 = document.createElement("div");
    div1.className = "follow-content";

    const div1_1 = document.createElement("div");
    div1_1.className = "follow-top";
    const span1_1 = document.createElement("span");
    span1_1.innerText = nick;

    div1_1.addEventListener("click", () => {
      location.href = `http://localhost:3000/profile.html?uid=${userId}`;
    });

    div1_1.append(span1_1);
    div1.append(div1_1);

    if (sort === "ASC") {
      document.getElementsByClassName("profile-bottom")[0].prepend(div1);
    } else if (sort === "DESC") {
      document.getElementsByClassName("profile-bottom")[0].append(div1);
    }
  }

	getFollowing(1)
		.then((response) => {
			response.following.forEach((element) => {
				makeFollow(element.u_id, element.u_nick, "DESC");
			});
		})
		.catch((err) => {
			console.log(err);
		});
	
	// 6
function solution(array) {
  var answer = 0;
  [1, 20, 11];
  // array.sort((a, b) => {
  //   if (a > b) {
  //     return 1;
  //   }
  //   if (a < b) {
  //     return -1;
  //   }
  //   if (a === b) {
  //     return 0;
  //   }
  // });
  array.sort((a, b) => {
    return a - b;
  });
  answer = array[Math.floor(array.length / 2)];
  return answer;
}

function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
	}

// 7
function solution(my_string) {
  var answer = 0;
  const my_array = my_string.split("");
  for (let i = 0; i < my_array.length; i++) {
    const checkNumber = parseInt(my_array[i]);
    if (Number.isNaN(checkNumber) === false) {
      answer = answer + checkNumber;
    }
  }
  return answer;
}

// 삼항연산자
let condition = false;
let page;
if (condition === false) {
  page = 0;
} else {
  page = 1;
}
const page = condition === false ? 0 : 1;

const page2 =
  condition === false && 0;


// ex 2 . 만약에 아래와 같이 obj가 정의 되어 있습니다
	const user = {
		name: "123",
	};

// name이라는 variable 넣어주시는데 user가 hun이면 이름을 그대로 넣고
// 아니면 unknown이라고 name의 변수에 넣어 주세요.

	const user = {
		name: "123",
	};

	let name:
		if(user.name === "hun") {
		name = "hun"
	} else {
		name = "unknown";
	}
	const name2 = user.name === "hun" ? "hun" : "unknown"; 