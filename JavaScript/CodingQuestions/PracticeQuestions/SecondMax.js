//Find the second max from the given array.
let array = [1, 62, 13, 4, 5, 6];

function findSecondMax(array) {
  let max = -Infinity;
  let smax = Infinity;

  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      smax = max;
      max = array[i];
    } else if (smax < array[i] && array[i] !== max) {
      smax = array[i];
    }
  }
  return smax;
}

console.log(findSecondMax(array));
