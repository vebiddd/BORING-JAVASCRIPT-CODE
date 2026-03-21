const Peper = document.getElementById("Peper")
const Rock = document.getElementById("Rock")
const Scisors = document.getElementById("Scisors")
const gameWinLose = document.getElementById("gameWinLose")
const gameWinlose1 = document.getElementById("gameWinlose1")
const BotPoint = document.getElementById("BotPoint")
const YourPoint = document.getElementById("YourPoint")
let YourPoints = 0;
let Botpoints = 0;
let userPick1;
let userPick2;
let RandomCmp;
const moves = ["Rock", "Peper", "Scisors"];

Peper.onclick = function(){

    const Bot2 = Math.floor(Math.random() * 3)
    let computerPick2 = moves[Bot2];

    userPick2 = "Peper";

    if(userPick2 === computerPick2){
        gameWinlose1.textContent = "Tie"
    }
    else if(computerPick2 === "Rock"){
        gameWinlose1.textContent = "You win"
        YourPoints++;
        YourPoint.textContent = YourPoints;
    }
    else{
        gameWinlose1.textContent = "You lose"
        Botpoints++;
        BotPoint.textContent = Botpoints;
    }
}


Rock.onclick = function(){

    const Bot2 = Math.floor(Math.random() * 3)
    let computerPick2 = moves[Bot2];

    userPick2 = "Rock";

    if(userPick2 === computerPick2){
        gameWinlose1.textContent = "Tie"
    }
    else if(computerPick2 === "Scisors"){
        gameWinlose1.textContent = "You win"
        YourPoints++;
        YourPoint.textContent = YourPoints;
    }
    else{
        gameWinlose1.textContent = "You lose"
        Botpoints++;
        BotPoint.textContent = Botpoints;
    }
}


Scisors.onclick = function(){

    const Bot3 = Math.floor(Math.random() * 3)
    let computerPick3 = moves[Bot3];

    userPick2 = "Scisors";

    if(userPick2 === computerPick3){
        gameWinlose1.textContent = "Tie"
    }
    else if(computerPick3 === "Rock"){
        gameWinlose1.textContent = "You win"
        YourPoints++;
        YourPoint.textContent = YourPoints;
    }
    else{
        gameWinlose1.textContent = "You lose"
        Botpoints++;
        BotPoint.textContent = Botpoints;
    }
}