const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_presses");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggeredCount = 0;

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  count.innerHTML = ++triggeredCount;
});
