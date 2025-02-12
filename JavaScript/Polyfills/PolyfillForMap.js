const arr = [1, 2, 3, 4, 5];

const arr_1 = arr.map((item) => item * 2);
// console.log(arr_1);

function myMap(callback) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
}

Array.prototype.myMap = myMap;

const arr_2 = arr.myMap((item) => item * 2);

console.log(arr_2);
