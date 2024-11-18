let test = document.getElementsByClassName("inputs")
let result = document.getElementById("result")

function test(){
    if (inputs){
        result.textContent = "good"
    }else{
        result.textContent = "everything should be written"
    }
}