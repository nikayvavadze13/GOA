const findDifference = (a, b) => Math.abs(a.reduce((x, y) => x * y) - b.reduce((x, y) => x * y));
