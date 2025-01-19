const user = {
  name: "Piyush Agarwal",
  logMessage() {
    console.log(this.name);
  },
};

setTimeout(user.logMessage, 1000);
setTimeout(function () {
  user.logMessage();
}, 1000);
