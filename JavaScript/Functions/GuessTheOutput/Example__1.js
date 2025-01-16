console.log("Start");
function importantAction(name) {
  setTimeout(() => {
    return `${name} is my name.`;
  }, 1000);
}
let testName = importantAction("AK");
console.log(testName);
console.log("Stop");

// It will print [Start undefined Stop].
// If we take help of callback function then we can get the value.
console.log("================================================================");
console.log("Start");
function importantAction_2(name, callback) {
  setTimeout(() => {
    callback(`${name} is my name.`);
  }, 1000);
}

let testName_2 = importantAction_2("AK", function (testName_2) {
  console.log(testName_2);
});
console.log("Stop");
