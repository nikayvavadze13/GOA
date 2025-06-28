
function isSubset(subset, set) {
    for (let elem of subset) {
      if (!set.has(elem)) {
        return false; 
      }
    }
    return true;
  }
  

  console.log(isSubset(new Set([1, 2]), new Set([1, 2, 3]))); 
  console.log(isSubset(new Set([1, 4]), new Set([1, 2, 3]))); 
  

  function invertMap(map) {
    const invertedMap = new Map();
    for (let [key, value] of map) {
      invertedMap.set(value, key); 
    }
    return invertedMap;
  }
  

  const inverted = invertMap(new Map([
    ['a', 1],
    ['b', 2],
    ['c', 1]
  ]));
  console.log(inverted); 

  function findMaxValueKeys(map) {
    let maxVal = -Infinity;
    const keysWithMaxVal = [];
  
    for (let [key, value] of map) {
      if (value > maxVal) {
        maxVal = value;
        keysWithMaxVal.length = 0; 
        keysWithMaxVal.push(key);
      } else if (value === maxVal) {
        keysWithMaxVal.push(key); 
      }
    }
    return keysWithMaxVal;
  }
  

  const mapExample = new Map([
    ['a', 5],
    ['b', 3],
    ['c', 5]
  ]);
  console.log(findMaxValueKeys(mapExample));
  