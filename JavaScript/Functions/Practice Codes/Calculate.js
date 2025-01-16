/*
evaluate("sum")(4)(2);
evaluate("multiply")(4)(2);
evaluate("divide")(4)(2);
evaluate("substract")(4)(2);
*/

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") {
        return a + b;
      } else if (operation === "divide") {
        return a / b;
      } else if (operation === "substract") {
        return a - b;
      } else if (operation === "multiply") {
        return a * b;
      } else {
        return "Invalid operation";
      }
    };
  };
}

console.log(evaluate("sum")(10)(5));
console.log(evaluate("divide")(10)(5));
console.log(evaluate("multiply")(10)(5));
console.log(evaluate("substract")(10)(5));

const test = evaluate("sum");
console.log(test(10)(5));
