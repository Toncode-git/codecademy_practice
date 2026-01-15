
const input = 'a whale of a deal!';
const vowels = ['a', 'e', 'i', 'o', 'u'];

const resultArray = [];
for (let i = 0; i < input.length; i++) {
    if (input[i] === 'e') {
        resultArray.push(input[i]);  
      }
      if (input[i] === 'u') {
        resultArray.push(input[i]);  
      }
  for (let j = 0; j < vowels.length ; j++) {
    if (input[i] === vowels[j]) {
        resultArray.push(input[i]);
      
    }
  }
}



const resultingString = resultArray.join(' ').toUpperCase();
console.log(resultingString);










