const str = "Koi tod na iska";
const str2 = str.split(" ").map(function (word) {
  return word.split("").reverse().join("");
});

console.log(str2);
