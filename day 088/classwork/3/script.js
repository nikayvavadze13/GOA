const choices = ['rock', 'scissors', 'well'];
const randomIndex = Math.floor(Math.random() * choices.length);
let computer = choices[randomIndex];

let result = document.getElementById("p")

let user_input = document.getElementById("input")

function rockpaperscissors(){
    if (user_input == "rock" && computer == "paper"){
        result.textContent = "you lost, computer chose paper"
    }
    if (user_input == "rock" && computer == "scissors"){
        result.textContent = "you won, computer chose scissors"
    }
    if (user_input == "scissors" && computer == "paper"){
        result.textContent = "you won, computer chose paper"
    }
    if (user_input == "scissors" && computer == "rock"){
        result.textContent = "you lost, computer chose rock"
    }
    if (user_input == "paper" && computer == "rock"){
        result.textContent = "you won, computer chose rock"
    }
    if (user_input == "paper" && computer == "scissors"){
        result.textContent = "you lost, computer chose scissors"
    }
}
