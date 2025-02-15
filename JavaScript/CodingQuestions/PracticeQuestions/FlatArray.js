const arr = [1, 2, 3, 4, [5, [6, 7, [8]]], [[[9]]]];

const result = arr.flat(Infinity);

console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

function makeItFlat(arr) {
  // const arr = arr;
  const result = [];
  function flat(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flat(arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
  }
  flat(arr);
  return result;
}

const test = makeItFlat(arr);
console.log(test); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.flatMap((item) => {
  console.log(item);
});
