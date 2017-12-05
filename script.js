var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var reset = document.getElementById("reset");
var input = document.querySelector("input");

var p1Display = document.querySelector("#p1Display");
var p1Score = 0;
var p2Display = document.querySelector("#p2Display");
var p2Score = 0;
var winningScoreDisplay = document.querySelector("p span");
var gameOver = false;
var winningScore = 5;
//Player 1
p1.addEventListener("click",function(){
    if(!gameOver){
        p1Score++;
        if (p1Score === winningScore) {
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});
// Player 2
p2.addEventListener("click",function(){
    if(!gameOver){
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});
//Reset game

reset.addEventListener("click",function(){
    p1Score=0;
    p2Score=0;
    p1Display.textContent=0;
    p2Display.textContent=0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver=false;
});
input.addEventListener("change",function(){
    winningScoreDisplay.textContent = input.value;
    winningScore = Number(input.value);
});
