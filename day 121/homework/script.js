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
  