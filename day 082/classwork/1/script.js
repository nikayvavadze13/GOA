function even_sum(border){
    let result = 0;
    for  (let i = 0; i < border; i+=2){
            result += i
        }
    return result
    }

console.log(even_sum(11))
