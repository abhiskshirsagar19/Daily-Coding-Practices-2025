// Create function multiplyByTwo object that multiplies all numeric property values.

const nums = {
  a: 100,
  b: 200,
  title: "name",
};
multiplyByTwo(nums);

function multiplyByTwo(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
}

console.log(nums);
