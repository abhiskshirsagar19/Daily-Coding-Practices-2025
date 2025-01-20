var length = 4;

// function callback() {
//   console.log(this.length);
// }
// const object = {
//   length: 5,
//   method(fn) {
//     fn();
//   },
// };
// undefined

var length = 4;

function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method() {
    console.log(arguments);
    arguments[0]();
  },
};
object.method(callback, 1, 2, 3, 4);
