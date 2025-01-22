const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggeredCount = 0;

const myDebounce = (cb, d) => {
  let timer;

  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

const debounceCount = myDebounce((count) => {
  triggeredCount += 1;
  count.innerHTML = triggeredCount;
}, 800);
btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  debounceCount(count);
});
