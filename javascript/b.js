const obj = require("./a");

console.log(obj.str);

setTimeout(() => {
  console.log(obj.str);
}, 2000);
