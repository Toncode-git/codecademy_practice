
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* Create a getEvenNumbers function that:
 - Takes an array as a paremeter
 - Use .filter() to log only the even numbers
 - return new array.
*/

// Write your code here: 
const getEvenNumbers = arr => {
    return arr.filter(number => {
        return number % 2 === 0 ? true : false;
    })
};

console.log(getEvenNumbers(numbers));