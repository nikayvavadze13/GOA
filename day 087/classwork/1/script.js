let date = 0

const id = setInterval(function(){
    if (date === 35){
        date++
        clearInterval(id)
        console.log("times up")
    }
    console.log(id)
}, 1000)