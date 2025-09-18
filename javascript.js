



function createGame(){
const myArray = new Array(9).fill(' ');
let roundsPlayed = 0;
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
    checkWin(symbol);
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
            return true;
    }
    else if(myArray[3] == symbol && myArray[4] == symbol && myArray[5] == symbol){
        return true;
    }
    else if(myArray[6] == symbol && myArray[7] == symbol && myArray[8] == symbol){
        return true;
    }
    else if(myArray[0] == symbol && myArray[3] == symbol && myArray[6] == symbol){
        return true;
    }
    else if(myArray[1] == symbol && myArray[4] == symbol && myArray[7] == symbol){
        return true;
    }
    else if(myArray[2] == symbol && myArray[5] == symbol && myArray[8] == symbol){
        return true;
    }
    else if(myArray[0] == symbol && myArray[4] == symbol && myArray[8] == symbol){
        return true;
    }
    else if(myArray[2] == symbol && myArray[4] == symbol && myArray[6] == symbol){
        return true;
    }
    else{
        return false;
    }
}



return{myArray, turn, checkWin}
}

const game = createGame();
//need random function for computer that keeps trying to place a square while turn != true
//event listener for each grid click that calls turn and then fills in da square where they clicked
//