function makeUser() {
  return {
    name: "John",
    ref: this, //undefined
    Ref() {
      return this;
    },
  };
}

let user = makeUser();

console.log(user.ref.name);
console.log(user.Ref().name);
