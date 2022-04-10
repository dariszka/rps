// function game() {
//     let gameScore = 0 
//     for (let i = 0; i < 5;) {
//         let playersPicks = getPlayersPicks();
//         console.log(playersPicks);

//         let result = playRound(playersPicks[0], playersPicks[1]);
//         console.log(result);

//         let convertedResult = convertRoundResult(result);
//         console.log(convertedResult);

//         if (convertedResult == "invalidResult") {
//             continue
//         } else {
//             gameScore += convertedResult;
//             i++
//         }
//     }
// };

//game()


//function game() {
    // let gameScore = 0 
    // for (let i = 0; i < 5;) {
        let playersPicks = getPlayersPicks();
        console.log(playersPicks);

        let result = playRound(playersPicks[0], playersPicks[1]);
        console.log(result);

        let convertedResult = convertRoundResult(result);
        console.log(convertedResult);

    //     if (convertedResult == "invalidResult") {
    //         continue
    //     } else {
    //         gameScore += convertedResult;
    //         i++
    //     }
    // }
//};

//game()


function getPlayersPicks() {
    let possibleComputerPicks = ["rock", "paper", "scissors"]
    let computerSelection = possibleComputerPicks[Math.floor(Math.random() * possibleComputerPicks.length)];
    let playerSelection = window.addEventListener('click', getPlayerSelection);
    return [computerSelection, playerSelection]
}

function playRound(computerSelection, playerSelection) {
    if (playerSelection === computerSelection)  {
        console.log('remis')
        return "remis nwm jak jest po angielsku"
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        return "u loose"
    } else if ((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "rock" && computerSelection === "scissors")) {
        return "u win"
    } else {
        return "hoe type a valid word pls"
    }
}

function convertRoundResult(result) {
     if (result === "u loose" || result === "remis nwm jak jest po angielsku") {
        return 0;
     } else if (result === "u win") {
        return 1;
     } else {
        return "invalidResult";
     }
 }


function getPlayerSelection(e) {
    const rock = document.querySelector(`button.rock`)
    const paper = document.querySelector(`button.pap`)
    const scissors = document.querySelector(`button.sc`)
    
    if (rock) {
       return "rock"  
    } else if (paper) {
        return "paper"
    } else if (scissors) {
        return "scissors"
    }
    
}

//window.addEventListener('click', getPlayerSelection)


//const possiblePlayerPicks = document.querySelectorAll('button')





