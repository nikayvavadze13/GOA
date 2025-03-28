function sort(initialArray, sortingArray) {
    return sortingArray.map((_, i) => initialArray[sortingArray.indexOf(i)]);
  }