let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return randomNumber = Math.floor(Math.random()* 9);
};

const difference = (a, b) => {
    generateTarget();
    return value = Math.abs(a - b);
    
    if (generateTarget === value){
        return true;
    }
}

// in this function I need to figure out how to implement the Math.abs
const compareGuesses = (humanGuess, computerGuess) => {

    generateTarget(numberToBeGuessed);
    
    //const randomComputerGuess = Math.floor(Math.random() * 9);// this is the random guess for the computer.
    
    return difference(humanGuess - computerGuess);
    
   /* if (humanGuess <= numberToBeGuessed ){
        return true;
    }
    if (computerGuess <= numberToBeGuessed){
        return false;
    }
    if (humanGuess === computerGuess || numberToBeGuessed){
        return true;
    }
    */
};

console.log(generateTarget());

console.log(difference(5, 6));

