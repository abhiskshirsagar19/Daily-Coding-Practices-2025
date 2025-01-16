function startApplication(message, callback) {
  setTimeout(() => {
    callback(message);
  }, 500);
}
function userLoggedIn(message, callback) {
  setTimeout(() => {
    callback(message);
  }, 500);
}
function userStartExploring(message, callback) {
  setTimeout(() => {
    callback(message);
  }, 500);
}
function userLoggedOut(message, callback) {
  setTimeout(() => {
    callback(message);
  }, 500);
}

const applicationFlow = startApplication(
  "Application started",
  function (message) {
    console.log(message);
    userLoggedIn("User Logged In", function (message) {
      console.log(message);
      userStartExploring("User start Exploring", function (message) {
        console.log(message);
        userLoggedOut("User Logged Out", function (message) {
          console.log(message);
        });
      });
    });
  }
);
