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

//console.log(playRound())

//turn score of 1 round into variable
let roundScore = playRound()

console.log(roundScore)

//write score of one round  
function score() {
    if (roundScore === "remis nwm jak jest po angielsku" || roundScore === "hoe type a valid word pls") {
        return undefined;
    } else if (roundScore ==="u loose") {
        return 0; 
    } else {
        return 1;
    }
    
}
console.log(score())

score()
let counter = score()




//play rounds and count win if >2

function game() {
    for (let counter = 0; counter < 5; countScore++) {
        if (counter === undefined) {
            continue; 
        } else {
            return("whore")
        }
            
    
     }
}


game()
console.log(game())

//return "u loose whole round sucks 4u lmao"
//return "u win whole round good job sport"