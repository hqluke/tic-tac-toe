



function createGame(){
const myArray = new Array(9).fill(' ');
let roundsPlayed = 0;
let gameOver = false;
const turn = function (position, who){
    let symbol;
    switch(who){
        case"human":
            symbol = "x";
            break;
        case"computer":
            symbol = "o"
            break;
    }
    if(myArray[position] == "x" || myArray[position] == "o"){
        return false;
    }
    myArray[position] = symbol;
    roundsPlayed++;
    updateBoard(position, symbol);
    checkWin(who);
        if (!gameOver && roundsPlayed === 9) {
        gameOver = true;
    }
    return true;
}

const checkWin = (who) => {
        let symbol;
    switch(who){
        case"human":
            symbol = "x";
            break;
        case"computer":
            symbol = "o"
            break;
    }

        if(myArray[0] == symbol && myArray[1] == symbol && myArray[2] == symbol){
                return gameOver = true;;
        }
        else if(myArray[3] == symbol && myArray[4] == symbol && myArray[5] == symbol){
            return gameOver = true;
        }
        else if(myArray[6] == symbol && myArray[7] == symbol && myArray[8] == symbol){
            return gameOver = true;
        }
        else if(myArray[0] == symbol && myArray[3] == symbol && myArray[6] == symbol){
            return gameOver = true;
        }
        else if(myArray[1] == symbol && myArray[4] == symbol && myArray[7] == symbol){
            return gameOver = true;
        }
        else if(myArray[2] == symbol && myArray[5] == symbol && myArray[8] == symbol){
            return gameOver = true;
        }
        else if(myArray[0] == symbol && myArray[4] == symbol && myArray[8] == symbol){
            return gameOver = true;
        }
        else if(myArray[2] == symbol && myArray[4] == symbol && myArray[6] == symbol){
            return gameOver = true;
        }
        else{
            return gameOver = false;
        }

}

function updateBoard(position, symbol) {
    const cell = document.querySelector(`[data-index="${position}"]`);
    const p = cell.querySelector('p');
    p.textContent = symbol.toUpperCase();
    p.className = symbol;
    cell.classList.add('taken');
}

function disableGame() {
    document.getElementById('game-container').classList.add('game-disabled');
}

function enableGame() {
    document.getElementById('game-container').classList.remove('game-disabled');
}

function computerTurn(){
    let worked = false
    while(worked == false){
        let num = Math.floor(Math.random() * 9);
        worked = turn(num, "computer");
    }
    enableGame();
}

function isGameOver(){
    return gameOver;
}
document.querySelectorAll('.game').forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (game.isGameOver() == true) {
            endGame();
            return;
        }
                
        const success = game.turn(index, "human");
        
        if (success) {
            if (game.isGameOver() == true) {
                endGame();
                return;
            }
            game.disableGame(); 
            game.computerTurn();
        }
    });
});


const buttonDiv = document.querySelector(".button");
buttonDiv.addEventListener('click', () => {
        restartGame();

});



        function endGame(){

        }

function restartGame(){
    document.querySelectorAll('.game').forEach((cell) =>{
        const p = cell.querySelector('p');
        p.textContent = " ";
    });
    
    myArray.fill(' ');
    roundsPlayed = 0;
    gameOver = false;
}

return{myArray, turn, checkWin, roundsPlayed, isGameOver, disableGame, enableGame, computerTurn, endGame, restartGame}
}

const game = createGame();






