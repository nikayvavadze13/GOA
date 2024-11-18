
testList = [5, 8, 22, 4, 3, 10]


function isEven(i){
    result = [];
    i % 2 == 0
    result.push(i)
}

for (i in testList){
    if (isEven(i) == true){
        result.push(i)
    }
}
console.log(result)
