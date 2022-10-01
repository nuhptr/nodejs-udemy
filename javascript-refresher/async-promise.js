const fetchData = (callback) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      callback("Done!");
    }, 1500);
  });

  return promise;
};

setTimeout(() => {
  console.log("Timer is done");
  fetchData().then((text) => {
    console.log(text);
  });
}, 2000);
