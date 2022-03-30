
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

let turnout = playRound()

console.log(turnout)

function scoreOfRound() {
     if (turnout === "u loose") {
        return 0;
     } else if (turnout === "u win") {
        return 1;
     } else {
        return undefined;
     }
 }

let score = scoreOfRound()

console.log(score)


for (let i = 0; i < 5; i++) {
            if (score === 0) {
                console.log(0);
            } else if (score === 1) {
                console.log(1);
            } else {
                continue;
            }
        }