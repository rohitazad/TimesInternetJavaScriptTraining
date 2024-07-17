let myPromise = new Promise((resolve, reject) => {
  let condition = true;
  let data = fetch(`https://jsonplaceholder.typicode.com/todos/`);
  if (condition) {
    resolve(data);
  } else {
    reject('Promise rejected.');
  }
});

myPromise
  .then((data) => {
    return data.json();
  })
  .then((res) => {
    console.log(res[0]);
  })
  .catch((err) => {
    return console.log('errr', err);
  });
