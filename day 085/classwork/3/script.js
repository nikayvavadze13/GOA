function manualSlice(array, startIndex, endIndex) {
    let slicedArray = [];
    for (let i = startIndex; i < endIndex && i < array.length; i++) {
      slicedArray.push(array[i]);
    }
  
    return slicedArray;
  }

console.log(manualSlice([1, 2, 3, 4, 5, 6, 7], 2, 4))