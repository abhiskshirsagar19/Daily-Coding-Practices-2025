// Create a polyfill for forEach which gives the experience like real forEach

// OG forEach

let arr = [1, 2, 3, 4, 5];

// arr.forEach((element) => {
//   console.log(element);
// });

// Custom forEach

function customForEach(callback) {
  if (typeof callback !== "function") {
    throw new Error(callback + " is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}

Array.prototype.customForEach = customForEach;

arr.customForEach((element) => {
  console.log(element);
});
