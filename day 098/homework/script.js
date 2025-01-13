function uniqueElements(matrix) {
    const elementCounts = new Map();

    for (let row of matrix) {
        for (let num of row) {
            elementCounts.set(num, (elementCounts.get(num) || 0) + 1);
        }
    }

    const unique = [];
    for (let [key, value] of elementCounts.entries()) {
        if (value === 1) {
            unique.push(key);
        }
    }

    return unique;
}


const matrix = [[1, 3], [1, 4], [4, 1], [2, 2]];
const result = uniqueElements(matrix);
console.log(result); 
