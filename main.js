const buttons = document.querySelector('.buttons')
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const scoreDisplay = document.querySelector('.score')
const restartButton = document.querySelector('.restartButton')
const loader = document.querySelector('.lds-ellipsis')

let playerSelection = ''
let computerSelection
let result
let convertedResult = 0
let gameScore = 0 
let roundCount = 0
let isFirstGame = true
let restart = false
//so player won't be able to play new round while waiting for round results
let loading = false

buttons.addEventListener('click', game)

getPlayerSelection()
function game() {
    if (!loading) {
        if (isFirstGame || restart) {
            getComputerSelection()
            result = playRound(computerSelection, playerSelection)
            convertRoundResult(result);
            gameScore += convertedResult;
            
            loading = true 
            scoreDisplay.classList.add('hide')
            loader.classList.remove('hide')
            setTimeout(function () {
                loader.classList.add('hide')
                scoreDisplay.classList.remove('hide')
                loading = false
            }, 1500)
        }
               
        if (roundCount < 4) {
            if (result!='invalid'){
                let roundResultText = `computer played ${computerSelection}, so <br>${result} 🙈`
                scoreDisplay.innerHTML = roundResultText
            }
        } else {
            
            if (gameScore > 2) {
                scoreDisplay.innerHTML = `lessgoooo u won the game, <br> scored ${gameScore}/5`
            } else {
                scoreDisplay.innerHTML = 'boo u lost the game, try again '
            }

            isFirstGame = false
            restart = false 
            setTimeout(function() {
                restartButton.classList.remove('hide')  
            }, 1500)      
        } 
        roundCount++
        playerSelection = ''
    }
}

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
    if (result === "u win :)"){
    convertedResult = 1;
    } else {
    convertedResult =  0;
    } 
}
