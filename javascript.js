



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
                 gameOver = true;
        }
        else if(myArray[3] == symbol && myArray[4] == symbol && myArray[5] == symbol){
             gameOver = true;
        }
        else if(myArray[6] == symbol && myArray[7] == symbol && myArray[8] == symbol){
             gameOver = true;
        }
        else if(myArray[0] == symbol && myArray[3] == symbol && myArray[6] == symbol){
             gameOver = true;
        }
        else if(myArray[1] == symbol && myArray[4] == symbol && myArray[7] == symbol){
             gameOver = true;
        }
        else if(myArray[2] == symbol && myArray[5] == symbol && myArray[8] == symbol){
             gameOver = true;
        }
        else if(myArray[0] == symbol && myArray[4] == symbol && myArray[8] == symbol){
             gameOver = true;
        }
        else if(myArray[2] == symbol && myArray[4] == symbol && myArray[6] == symbol){
             gameOver = true;
        }
        else{
             gameOver = false;
        }

        if(gameOver == true){
            endGame(who);
        }

        if (!gameOver && roundsPlayed === 9) {
        gameOver = true;
        endGame("tie");
        return;
    }

}

function updateBoard(position, symbol) {
    const cell = document.querySelector(`[data-index="${position}"]`);
    const p = cell.querySelector('p');
    p.textContent = symbol.toUpperCase();
    p.className = symbol;
}


function computerTurn(){
    let worked = false
    while(worked == false){
        let num = Math.floor(Math.random() * 9);
        worked = turn(num, "computer");
    }
}

function isGameOver(){
    return gameOver;
}

const buttonDiv = document.querySelector(".button");
buttonDiv.addEventListener('click', () => {
        restartGame();

});

function endGame(winner){
    setTimeout(() => {
    const middleDiv = document.querySelector('[data-index="4"]');
    middleDiv.classList.add("win");
    const middleP = document.querySelector('[data-index="4"] p');
    switch(winner){
        case"human":
            middleP.textContent = "You Win!";
            break;
        case"computer":
            middleP.textContent = "You Lose!";
            break;
        case"tie":
            middleP.textContent = "You Tied!";
            break;
    }
    
    }, 60);
}

function restartGame(){
    document.querySelectorAll('.game').forEach((cell) =>{
        const p = cell.querySelector('p');
        p.textContent = " ";
    });

    const middleDiv = document.querySelector('[data-index="4"]');
    middleDiv.classList.remove("win");
    
    myArray.fill(' ');
    roundsPlayed = 0;
    gameOver = false;
}

document.querySelectorAll('.game').forEach((cell, index) => {
    cell.addEventListener('click', () => {
                
        const success = game.turn(index, "human");
        
        if (success) {
            if (game.isGameOver() == true) {return;}

            game.computerTurn();
        }
    });
});

return{myArray, turn, checkWin, roundsPlayed, isGameOver, computerTurn, endGame, restartGame}
}

const game = createGame();






