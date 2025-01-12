/*Given an array A of N integers. Construct prefix sum of the array in the given array itself.*/
let arr = [1, 2, 3, 4, 5];

function prefixSum() {
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i - 1] + arr[i];
  }
  return arr;
}

console.log(prefixSum(arr));
