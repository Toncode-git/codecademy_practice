const numbers = [1, 2, 3, 4, 5];

// create a function called doubleNumbers that:
// - Receives an array as a parameter
// - Use .map() to duplicate each number
// - Return the new array

// Write your code here:
const doubleNumbers = arr => {
    return arr.map(Number => {
        return Number
    })
}

console.log(doubleNumbers(numbers)); // Expected output: [2, 4, 6, 8, 10]