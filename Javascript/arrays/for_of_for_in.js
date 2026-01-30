// 1. Write a loop that prints each programming language:
const languages = ['JavaScript', 'Python', 'Java', 'C'];

for (const language of languages){
    console.log(language);
}

// 2. Write a loop that counts how many vowels (a, e, i, o, u) are in this word:
const word = 'programming';
let vowelCounter = 0;
let vowel = 'aeiou';

console.log('\n');
for (const letters of word){
    vowel.includes(letters) ? vowelCounter++: false;
   
}
console.log(vowelCounter);

// 3. You have this customer object. Use a for...in loop 
// to print each property and its value in this format: "name: Alejandro"
const customer = {
  name: 'Alejandro',
  age: 24,
  job: 'Customer Service Rep',
  company: 'Atento'
};

for (const client in customer){
    console.log(`${client}:${customer[client]}`);
}

console.log('\n');

// Given this array of prices in dollars, use a for...of loop
// to create a new array with prices converted to pesos (multiply by 3700):
const pricesUSD = [10, 25, 50, 100];

for (const price of pricesUSD) {
    console.log(price * 3700);
}