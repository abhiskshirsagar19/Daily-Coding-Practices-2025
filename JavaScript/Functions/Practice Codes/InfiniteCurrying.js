// sum (1)(2)(3)(4)..........(n)
// check()()()()()
function sum(a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
}

console.log(sum(5)(5)(8)(9)());

// function fn(count = 0) {
//   const inner = () => fn(count + 1);

//   // Ensure the function converts to `count` when used with `(0)`
//   inner.valueOf = () => count;
//   inner.toString = () => count;

//   return inner;
// }

// console.log(fn()()(0)); // Output: 2
// console.log(fn()()()(0)); // Output: 3
