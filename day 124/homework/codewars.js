function removeSmallest(numbers) {
    if (numbers.length === 0) {
      return [];
    }
    
    let smallestIndex = 0;
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < numbers[smallestIndex]) {
        smallestIndex = i;
      }
    }
    return numbers.filter((_, index) => index !== smallestIndex);
  }