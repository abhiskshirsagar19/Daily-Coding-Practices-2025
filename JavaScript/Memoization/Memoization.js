function addTo80(n) {
  console.log("Long time ......");
  return n + 80;
}

function memoizationToAdd80() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("log times ......");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}
