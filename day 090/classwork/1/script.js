let div = document.getElementById("son");

let position = 0;
let direction = "1";

function animateBox(){
    position += direction;

    while (position <= 1900){
        div.style.left = position + "px";
    }


}
