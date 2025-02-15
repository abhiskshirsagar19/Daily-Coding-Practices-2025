const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p1");
    }, 1000);
  });
};

const p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p2");
    }, 1000);
  });
};
const p3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p3");
    }, 1000);
  });
};
Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(new Error("Promises should be an array"));
    }
    const n = promises.length;
    const result = [];
    if (n === 0) {
      resolve(result);
      return;
    }
    promises.forEach(async (promise, index) => {
      try {
        const res = await promise;
        result[index] = res;
        if (index === n - 1) {
          resolve(result);
          return;
        }
      } catch (error) {
        reject(error);
        return;
      }
    });
  });
};
// Promise.prototype.myAll = myAll;
Promise.myAll([p1(), p2(), p3()])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
