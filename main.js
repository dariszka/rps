let  pick = ["Rock", "Paper", "Scissors"]

let computerPlay = Math.floor(Math.random()*1 * pick.length);

function computerPick() {
    if (computerPlay === 0){
    return "Rock"
 }  else if (computerPlay === 1) {
    return "Paper"
 }  else {
     return "Scissors"
 }

}
console.log(computerPick())