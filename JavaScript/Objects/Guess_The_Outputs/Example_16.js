const user = {
  firstName: "AK",
  getName() {
    const firstName = "AKshirsagar";
    return this.firstName;
  },
};

console.log(user.getName());
// AK
