const arr = [1, 2, 3, 4, 5];

const result = arr.reduce((acc, item) => {
  return acc + item;
}, 0);
//console.log(result);

function myReduce(callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  let acc = initialValue;
  let i = 0;
  if (acc === undefined) {
    acc = this[0];
    i = 1;
  }
  for (i; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
}

Array.prototype.myReduce = myReduce;

const test = arr.myReduce((acc, item) => {
  return acc + item;
}, 0);

console.log(test);
