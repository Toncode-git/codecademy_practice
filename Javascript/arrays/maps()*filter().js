const numbers = [1, 2, 3, 4, 5, 6];

// Create a function called evenTimesThree that:
// - takes an array as a parameter
// - Filter only even numbers
// - Multiply each one 3 times;
// - Return result.

// Write your code here:
const toSquare = num => num * 3;
const evenTimesThree = arr => {
    return arr
    .filter(number => {number % 2 === 0 ? true : false;})
    .map (number => {toSquare(number)}) // method encatetantion
};

console.log(evenTimesThree(numbers)); // expected output: [6, 12, 18]