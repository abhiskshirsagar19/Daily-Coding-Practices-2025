const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());

console.log("Hi Abhi", "Good Morning");
console.log("AK", 19);
const firstInteger = 4;
const change = String(firstInteger);
console.log("converted to a Number ", String(firstInteger));
console.log(typeof change);
