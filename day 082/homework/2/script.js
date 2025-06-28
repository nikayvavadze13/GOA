function startEnd(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) { 
        result.push(i);
    }
    return result;
}

function calculateAverage(number){
    if (number.length == 0) return 0;

    let sum = 0
    for (let i = 0; i < number.length; i++){
        sum += number[i];
    }
    let average = sum / number.length
    return average
}

const numbersArray = startEnd(5, 10);
const average = calculateAverage(numbersArray);

console.log("Average: ", average)
