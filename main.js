let  pick = ["rock", "paper", "scissors"]

let computerPlay = pick[Math.floor(Math.random() * pick.length)];



let computerSelection = computerPlay
let playerSelection = prompt("?").toLowerCase();

console.log(playerSelection);
console.log(computerSelection);


function playRound() {
    if (playerSelection === computerSelection)  {
        return "remis nwm jak jest po angielsku"
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        return "u loose"
    } else if ((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "rock" && computerSelection === "scissors")) {
        return "u win"
    } else {
        return "hoe type a valid word pls"
    }
}

