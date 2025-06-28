function sumOfTwoLargest(n, array) {
    if (array.length !== n) {
      console.log("size is not acceptable for n.");
      return;
    }
  
    if (n < 2) {
      console.log("array should have two or more.");
      return;
    }
  

    let max1 = -Infinity;
    let max2 = -Infinity;
  
    for (let num of array) {
      if (num > max1) {
        max2 = max1;
        max1 = num;
      } else if (num > max2) {
        max2 = num;
      }
    }
  
    console.log(`${max1} + ${max2} = ${max1 + max2}`);
  }
  const n = 5;
  const array = [18, 12, 40, 1, 19];
  sumOfTwoLargest(n, array); 
  