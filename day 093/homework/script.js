let cookieCounter = document.getElementById("cookie-counter-num");
let goldCounter = document.getElementById("gold-counter-num");
let biggerFinger = document.getElementById("bigger-finger")
let forGoldCounter = 0

function cookieCounterNum(){
    cookieCounter.textContent++;
};

function goldCounterNum(){
    forGoldCounter++;
    if (forGoldCounter == 3){
        goldCounter.textContent++;
        forGoldCounter = 0
    }
};

function counter(){
    goldCounterNum();
    cookieCounterNum();
};

function buyBiggerFinger(){
    if (cookieCounter.value >= 50){
        cookieCounter.textContent -= 50;
    }else if(goldCounter.value >= 25){
        cookieCounter.textContent -= 25;
    }
};
