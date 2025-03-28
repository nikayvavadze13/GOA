let num = document.getElementById("num")

function plus(){
    num.textContent++;
}

function minus(){
    num.textContent--;
}

function restart(){
    num.innerHTML = "0";
}