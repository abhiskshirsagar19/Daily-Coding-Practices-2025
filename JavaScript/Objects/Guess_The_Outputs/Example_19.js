const user = {
  name: "Ak",
  greet() {
    return `Hello, ${this.name}!`;
  },
  farewell: () => {
    return `Goodbye, ${this.name}!`;
  },
};
console.log(user.greet()); //
console.log(user.farewell()); //
