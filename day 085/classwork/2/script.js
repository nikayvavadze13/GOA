const manualReverse = function(numList){
    let result = []

    for (i = numList.length - 1; i >= 0; i--){
        result.push(numList[i])
    }
    return result
}

console.log(manualReverse([1, 2, 3]))