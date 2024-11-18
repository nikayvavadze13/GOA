const myPromise = new Promise((resolve, reject) => {
    resolve("Hello, Promise!");
});

myPromise.then((message) => {
    console.log(message);
});
