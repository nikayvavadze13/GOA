function func(operation, ...args) {
    if (typeof operation !== "function") {
      throw new Error("The first argument must be a function.");
    }
    if (args.length < 1) {
      throw new Error("You must provide at least one integer after the operation.");
    }

    return args.reduce((result, num) => operation(result, num));
  }

  const add = (a, b) => a + b;
  const minus = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  