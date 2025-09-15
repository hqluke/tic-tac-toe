function turn(position){
    let array = [" ", " ", " ", " ", " ", " ", " ", " ", " ", ];
    array[position] = "x";
    return {array};
}

console.log(turn(0));
console.log(turn(8));