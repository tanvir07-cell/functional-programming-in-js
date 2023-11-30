// // playing with input's position:

// let add = (x, y) => x + y;

// // toPair first e add ke nibe tarpor [2,3] ke nibe and then add er moddhe pass korbe

// let toPair =
//   (f) =>
//   ([x, y]) =>
//     f(x, y);

// // let res = toPair(add)([2, 3]);

// let fromPair = (f) => (x, y) => f([x, y]);

// let res = fromPair(toPair(add))(2, 4);

// console.log(res.toString());

// 01 - curry implementation using add function:

// let add = (x, y) => x + y;

// // this function takes the curry is the generic function we pass add or subtract in this curry function:
// let curry = (f) => (x) => (y) => f(x, y);

// let res = curry(add)(20)(30);
// console.log(res);

// 02 - curry implementation using the module function

// let modu = (x, y) => x % y;

// let curry = (fn) => (x) => (y) => fn(x, y);

// let res = curry(modu)(15)(2);

// console.log(res === 0 ? "This is the even number" : "This is the odd number");

// 03 - curry implementation using the our create filter method:

function Filter(arr, cb) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      res.push(arr[i]);
    }
  }

  return res;
}

let instruction = (x) => x > 5;

// curry implementation:
// here fn is the Filter function and x = array and y = cb function;
let curry = (fn) => (x) => (y) => fn(x, y);

let res = curry(Filter)([1, 2, 10, -1, 20, 30])(instruction);

console.log(res);
