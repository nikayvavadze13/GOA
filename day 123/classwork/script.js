function simplePromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task 1 complete");
      }, 2000);
    });
  }
  
  simplePromise().then((message) => console.log(message));
  
  function immediateReject() {
    return new Promise((_, reject) => {
      reject("Task 2 failed");
    });
  }
  
  immediateReject().catch((error) => console.log(error));
  
  function doubleNumberPromise() {
    return new Promise((resolve) => {
      resolve(5);
    })
      .then((number) => number * 2)
      .then((doubled) => console.log(doubled));
  }
  
  doubleNumberPromise();
  
  function firstThenSecond() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("First");
      }, 2000);
    })
      .then((message) => {
        console.log(message);
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve("Second");
          }, 1000);
        });
      })
      .then((message) => console.log(message));
  }
  
  firstThenSecond();
  
  function rejectAfterTwoSeconds() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject("Task 3 failed");
      }, 2000);
    });
  }
  
  rejectAfterTwoSeconds().catch((error) => console.log(error));
  