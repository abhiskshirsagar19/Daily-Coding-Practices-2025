const obj = {
  A: 1,
  B: 1,
  C: {
    D: 1,
    E: 2,
  },
  F: {
    G: 4,
    H: {
      I: {
        J: 5,
      },
    },
  },
};
function makeItFlat(obj, parent) {
  let result = {};
  function genrateFlat(obj, parent) {
    for (let key in obj) {
      const newParent = parent + key;
      const value = obj[key];
      if (typeof value === "object") {
        genrateFlat(value, newParent + ".");
      } else {
        result[newParent] = value;
      }
    }
  }
  genrateFlat(obj, parent);
  return result;
}

const test = makeItFlat(obj, "");
console.log(test);
