const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggeredCount = 0;

const myThrottle = (cb, d) => {
  let last = 0;

  return function (...args) {
    let now = new Date().getTime();
    if (now - last < d) {
      return;
    }
    last = now;
    return cb(...args);
  };
};

const throttleCount = myThrottle(() => {
  count.innerHTML = ++triggeredCount;
}, 1000);
btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  throttleCount();
});
