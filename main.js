const buttons = document.querySelector('.buttons')
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const scoreDisplay = document.querySelector('.score')
const restartButton = document.querySelector('.restartButton')

let playerSelection = ''
let computerSelection
let result
let convertedResult = 0
let gameScore = 0 
let roundCount = 0
let isFirstGame = true
let restart = false

buttons.addEventListener('click', game)

getPlayerSelection()
function game() {
    if (isFirstGame || restart) {
        getComputerSelection()
        result = playRound(computerSelection, playerSelection)
        convertRoundResult(result);
        gameScore += convertedResult;
        
        if (result!='invalid'){
            scoreDisplay.innerHTML = `computer played ${computerSelection}, so <br>${result} 🙈`
        }
        
        if (roundCount === 4) {
            if (gameScore > 2) {
                scoreDisplay.innerHTML = `lessgoooo u won the game, <br> scored ${gameScore}/5`
            } else {
                scoreDisplay.innerHTML = 'boo u lost the game, try again '
            }
        
            restartButton.classList.remove('hide')  
            isFirstGame = false
            restart = false          
        }
        roundCount++
        playerSelection = ''
    }
<<<<<<< HEAD
    let finalScore = tellGameScore()
    console.log(finalScore)
};
=======
}
>>>>>>> ui

restartButton.onclick = ()=> {
    result = 'invalid'
    restart = true
    roundCount = 0
    gameScore = 0
    restartButton.classList.add('hide')
    scoreDisplay.innerHTML = ''
}

function getPlayerSelection() {
    rock.onclick = function () {
        playerSelection = "rock"
    }
    paper.onclick = function () {
        playerSelection = "paper"
    }
    scissors.onclick =  function () {
        playerSelection = "scissors"
    }
}

function getComputerSelection() {
    let possibleComputerPicks = ["rock", "paper", "scissors"]
    computerSelection = possibleComputerPicks[Math.floor(Math.random() * possibleComputerPicks.length)];
}

function playRound(computerSelection, playerSelection) {
    if (playerSelection === computerSelection)  {
        return "it's a draw like french girlie"
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        return "u loose :("
    } else if ((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "rock" && computerSelection === "scissors")) {
        return "u win :)"
    } else {
        roundCount--
        return 'invalid';
    }
}

function convertRoundResult(result) {
<<<<<<< HEAD
     if (result === "u loose" || result === "remis nwm jak jest po angielsku") {
        return 0;
     } else if (result === "u win") {
        return 1;
     } else {
        return "invalidResult";
     }
 }


function tellGameScore(gameScore) {
    if (gameScore > 2) {
        return "woo u won the whole game!!"
    } else {
        return "lmao try again looser"
    }
}
=======
    if (result === "u win :)"){
    convertedResult = 1;
    } else {
    convertedResult =  0;
    } 
}
>>>>>>> ui
