// If all have same time execute flow wise or sequentially
// Those who take more time execute at the last.

setTimeout(() => {
  console.log("One");
}, 2000);
setTimeout(() => {
  console.log("Two");
}, 1000);
setTimeout(() => {
  console.log("Three");
}, 0);
setTimeout(() => {
  console.log("Four");
}, 0);
setTimeout(() => {
  console.log("Five");
}, 0);
