/***********************************************************************
Write a function called `keysInObject(obj)` that takes in an object and returns
an array of all the keys within that Object.

Do this once using using a `for...in` loop and once using `Object.keys`.

Examples:

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
keysInObject(animals); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]
***********************************************************************/

/*function keysInObject(obj) {
  return Object.keys(obj)
}*/
function keysInObject(obj) {
  let keys = []
  //key will look at each key in the object
  //then push it into the empty array called keys
  for (let key in obj) {
    keys.push(key);
  }

  return keys;

  // // Using Object.keys:
  // let arr = Object.keys(obj)
  // return arr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keysInObject;
