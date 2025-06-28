let pinkButton = document.getElementById("pink-button")
let blueButton = document.getElementById("blue-button")
let greenButton = document.getElementById("green-button")
let blackButton = document.getElementById("black-button")
let redButton = document.getElementById("red-button")

let divBlock = document.getElementById("div-block")


function getColored(color){
    divBlock.style.backgroundColor = color;
};

pinkButton.addEventListener("click", function(){
   getColored("pink");
});

blueButton.addEventListener("click", function(){
    getColored("blue");
});

redButton.addEventListener("click", function(){
    getColored("red");
});

greenButton.addEventListener("click", function(){
    getColored("green");
});

blackButton.addEventListener("click", function(){
    getColored("black");
});