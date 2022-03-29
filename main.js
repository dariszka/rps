let  pick = ["rock", "paper", "scissors"]

let computerPlay = pick[Math.floor(Math.random() * pick.length)];

let playerPlay = prompt("?");

let computerSelection = computerPlay
let playerSelection = playerPlay.toLowerCase();

console.log(playerSelection);
console.log(computerSelection);

function game() {
    if (playerSelection === computerSelection)  {
        return "remis nwm jak jest po angielsku"
    } else if (playerSelection === "rock" && computerSelection === "paper")  {
        return "u loose, rock<<paper babez"
    } else if (playerSelection === "paper" && computerSelection === "scissors")  {
        return "u loose, paper<<scissors babez"
    } else if (playerSelection === "scissors" && computerSelection === "rock")  {
        return "u loose, scrissors<<rock babez"
    } else if (playerSelection === "paper" && computerSelection === "rock")  {
        return "u win, paper>>rock babez"
    }else if (playerSelection === "scissors" && computerSelection === "paper")  {
        return "u win, scissors>>paper babez"
    }else if (playerSelection === "rock" && computerSelection === "scissors")  {
        return "u win, rock>>scissors babez"
    }else {
        return"hoe type a valid word pls"
    }
}

console.log(game())

