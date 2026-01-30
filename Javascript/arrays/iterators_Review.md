# JavaScript Iterators - Quick Reference

## .forEach()

**Docs:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

**Does:** Runs a function on each element, that's it
**Returns:** undefined (doesn't return anything useful)
**Example:**

```javascript
const names = ['Alejandro', 'Carlos', 'Maria'];
names.forEach(name => console.log(`Hello ${name}`));
// Hello Alejandro
// Hello Carlos
// Hello Maria
```

**Real use:** Logging things, updating the DOM, sending data to an API for each item

---

## .map()

**Docs:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

**Does:** Transforms each element into something new
**Returns:** New array with same length as original
**Example:**

```javascript
const prices = [100, 200, 300];
const pricesInPesos = prices.map(price => price * 4300);
// [430000, 860000, 1290000]

**Real use:** Converting data formats, calculating new values, extracting specific properties from objects

---

## .filter()

**Docs:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

**Does:** Keeps only elements that pass your test
**Returns:** New array (can be shorter, same length, or empty)
**Example:**

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
// [2, 4, 6]
```

**Real use:** Searching through data, removing unwanted items, finding all customers from a specific city

---

## .find()

**Docs:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

**Does:** Returns the FIRST element that passes your test
**Returns:** The element itself, or undefined if nothing matches
**Example:**

```javascript
const users = [
  { name: 'Alejandro', age: 24 },
  { name: 'Carlos', age: 30 },
  { name: 'Maria', age: 24 }
];
const firstMatch = users.find(user => user.age === 24);
// { name: 'Alejandro', age: 24 }
```

**Real use:** Finding a specific user by ID, locating a product in inventory, getting one specific record

---

## .reduce()

**Docs:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

**Does:** Combines all elements into a single value
**Returns:** Whatever you want (number, string, object, array)
**Example:**

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0);
// 10

// The 0 at the end is the starting value for 'total'
```

**Real use:** Summing prices, counting occurrences, combining data, building objects from arrays

---

## .some()

**Docs:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

**Does:** Checks if AT LEAST ONE element passes your test
**Returns:** true or false
**Example:**

```javascript
const ages = [15, 18, 22, 16];
const hasAdult = ages.some(age => age >= 18);
// true (because 18 and 22 are >= 18)
```

**Real use:** Checking if any item is out of stock, validating if user has any admin permissions

---

## .every()

**Docs:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

**Does:** Checks if ALL elements pass your test
**Returns:** true or false
**Example:**

```javascript
const ages = [20, 25, 30, 22];
const allAdults = ages.every(age => age >= 18);
// true (all ages are >= 18)
```

**Real use:** Validating form fields are all filled, checking if all items are in stock

---

## Quick Comparison

**Want to change values?** → `.map()`
**Want fewer items?** → `.filter()`
**Want just one item?** → `.find()`
**Want true/false for all?** → `.every()`
**Want true/false for any?** → `.some()`
**Want to combine into one value?** → `.reduce()`
**Just want to do something to each?** → `.forEach()`

---

## Important Notes

- All of these (except forEach) return NEW arrays/values - they DON'T modify the original
- You can chain them: `array.filter().map().reduce()`
- They all take callback functions with these parameters: `(element, index, array)`
  - But most of the time you only use the first one (element)## .map()
**Link:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

**Does:** Transforms each element and gives you a new array
**Returns:** New array (same length as original)
**Example:** 

const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
// [2, 4, 6]

**Real use:** Converting prices from dollars to pesos, formatting user data for display
