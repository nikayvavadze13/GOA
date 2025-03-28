function startEnd(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) { 
        result.push(i);
    }
    return result;
}

console.log(startEnd(5, 10)); 