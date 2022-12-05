// // // 1
// // let confition = true;
// // let name;
// // if (confition === true) {
// //   name = "트루";
// // } else {
// //   name = "팔스";
// // }

// // let name2 = confition === true ? "트루" : "팔스";

// // 2
// // const param = 5;
// // let confition = (v1) => {
// //   return v1 % 2;
// // };
// // let name;
// // if (confition(param) === 0) {
// //   name = "짝수";
// // } else {
// //   name = "홀수";
// // }

// // let name2 = confition(param) === 0 ? "짝수" : "홀수";

// // 3
// // const param = 9;
// // let confition = (v1) => {
// //   return v1 % 2;
// // };
// // let name;
// // if (confition(param) === 0) {
// //   if (param >= 10) {
// //     name = "10보다 큰 짝수";
// //   } else {
// //     name = "10보다 작은 짝수";
// //   }
// // } else {
// //   name = "홀수";
// // }

// // let name2 =
// //   if (confition(param) === 0) {
// //     if(param >= 10) {
// //       "10보다 큰 짝수"
// //     } else { "10보다 작은 짝수"}
// //   } else {
// //     "홀수"
// //   };

// // 4
// router.get("/follower/:uid", (req, res) => {
//   let { page, count } = req.query;
//   if (page === undefined) page = 0;
//   if (count === undefined) count = 10;
// }
// const req = {
// 	body: {
//     page: 0,
//     count: 5
// 	}
// }

// let page = if (req.body.page === undefined) {
// 	page =0
// } else {
// 	page = page
// }
// let page = req.body.page === undefined ? 0 : page
// let count = if (req.body.count === undefined) {
// 	count = 0
// } else {
// 	count = count
// }
// let count = req.body.count === undefined ? 0 : count

// 혹은

// const { page = req.body.page === undefined ? 0 : req.body.page, count = req.body.count === undefined ? 0 : req.body.count } = req.body;

// // 5
{
  /* <div id="profile" class="wrap-left-profile">
  <span>PROFILE</span>
</div>;

const Span = () => {
  return <span>PROFILE</span>;
};
const Div = () => {
  return (
    <div id="profile" className="wrap-left-profile">
      <Span />
    </div>
  );
}; */
  // 6
  /* <div id="following">
  <span class="count" id="following-count"></span>
  <span>팔로잉</span>
</div>;

const Span1 = () => {
  return <span className="count" id="following-count"></span>;
};
const Span2 = () => {
  return <span>팔로잉</span>;
};

const Div = () => {
  return (
    <div id="following">
      <Span1 />
      <Span2 />
    </div>
  );
}; */
}
