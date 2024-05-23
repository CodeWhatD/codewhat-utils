const testPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(111);
  });
});

Promise.resolve(testPromise).then((res) => {
  console.log(res);
});
