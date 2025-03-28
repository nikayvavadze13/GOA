function twoSum(numbers, target) {
    let numIndices = {}; 

    for (let i = 0; i < numbers.length; i++) {
        let complement = target - numbers[i];

        if (complement in numIndices) {
            return [numIndices[complement], i]; 
        }

        numIndices[numbers[i]] = i; 
    }
    
    return []; 
}


console.log(twoSum([1, 2, 3], 4)); 
console.log(twoSum([2, 7, 11, 15], 9));  
console.log(twoSum([3, 2, 4], 6));  
console.log(twoSum([3, 3], 6));  
