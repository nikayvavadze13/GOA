function unionOfSets(sets) {
    const result = new Set();
  
    sets.forEach(set => {
      set.forEach(value => result.add(value));
    });
  
    return result;
  }
  
  const result = unionOfSets([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])]);
  console.log(result);
  