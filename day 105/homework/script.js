function matrixSum(matrix) {
    let total = 0;
    for (let row of matrix) {
        total += row.reduce((sum, num) => sum + num, 0);
    }
    return total;
}

const matrix = [[1, 3], [1, 4], [4, 1], [2, 2]];
const result = matrixSum(matrix);
console.log(result); 
