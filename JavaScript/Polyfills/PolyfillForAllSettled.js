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
      reject("Error While fetching p2");
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

Promise.myAllsettled = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(new Error("undefined is not iterable"));
      return;
    }
    const n = promises.length;
    if (n === 0) {
      resolve({ status: "fulfilled", value: "" });
      return;
    }
    const results = [];
    promises.forEach(async (promise, index) => {
      try {
        const res = await promise;
        const obj = { status: "fulfilled", value: res };
        results[index] = obj;
        if (index === n - 1) {
          resolve(results);
          return;
        }
      } catch (error) {
        const obj = { status: "rejected", reason: error };
        results[index] = obj;
      }
    });
  });
};

Promise.myAllsettled([p1(), p2(), p3()])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
