const manualIndexOf = function(listOfNumbers, num){
    for (let i = 0; i < listOfNumbers.length; i++){
        if (listOfNumbers[i].value == num){
            return i;
        }
    }
    return -1
}

console.log(manualIndexOf(["nika", "tako", "rati", "ele"], "rati"))