function greetWithDelay(name, callback) {
    setTimeout(() => {
      console.log(`Hello, ${name}!`);
      callback();
    }, 2000);
  }
  
  function afterGreeting() {
    console.log("Greeting complete.");
  }
  
  greetWithDelay("John", afterGreeting);
  
  function rejectAfterTwoSeconds() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject("Task 3 failed");
      }, 2000);
    });
  }
  
  rejectAfterTwoSeconds().catch((error) => console.log(error));
  
  function resolveRandomDelayTask1() {
    return new Promise((resolve) => {
      const delay = Math.floor(Math.random() * 5000) + 1000;
      setTimeout(() => {
        resolve("Task 1 complete");
      }, delay);
    });
  }
  
  resolveRandomDelayTask1().then((message) => console.log(message));
  
  function chainRandomDelays() {
    return new Promise((resolve) => {
      const firstDelay = Math.floor(Math.random() * 3000) + 1000;
      setTimeout(() => {
        console.log("First");
        resolve();
      }, firstDelay);
    }).then(() => {
      const secondDelay = Math.floor(Math.random() * 3000) + 1000;
      setTimeout(() => {
        console.log("Second");
      }, secondDelay);
    });
  }
  
  chainRandomDelays();
  
  function rejectRandomDelayTask3() {
    return new Promise((_, reject) => {
      const delay = Math.floor(Math.random() * 4000) + 1000;
      setTimeout(() => {
        reject("Task 3 failed");
      }, delay);
    });
  }
  
  rejectRandomDelayTask3().catch((error) => console.log(error));
  
  function conditionalResolveTask1() {
    return new Promise((resolve) => {
      const delay = Math.floor(Math.random() * 5000) + 1000;
      const randomNum = Math.random();
      setTimeout(() => {
        if (randomNum > 0.5) {
          resolve("Task 1 complete");
        } else {
          resolve("Task 1 was quick");
        }
      }, delay);
    });
  }
  
  conditionalResolveTask1().then((message) => console.log(message));
  
  function conditionalResolveOrRejectTask3() {
    return new Promise((resolve, reject) => {
      const delay = Math.floor(Math.random() * 4000) + 1000;
      const randomNum = Math.random();
      setTimeout(() => {
        if (randomNum < 0.3) {
          reject("Task 3 failed");
        } else {
          resolve("Task 3 complete");
        }
      }, delay);
    });
  }
  
  conditionalResolveOrRejectTask3()
    .then((message) => console.log(message))
    .catch((error) => console.log(error));
  