function sumDigits(n) {
    let result = 0;
    n = Math.abs(n); 

    while (n > 0) {
        result += n % 10;
        n = Math.floor(n / 10); 
    }

    return result;
}

console.log(sumDigits(123));
console.log(sumDigits(405)); 
console.log(sumDigits(-789)); 