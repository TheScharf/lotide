// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let newArr = arr.toString().slice(1);
  return newArr;
};

//const words = ["Yo Yo", "Lighthouse", "Labs"];
//tail(words);
//assertEqual(words.length, 3);
//console.log(assertEqual(tail([1, 2, 3] === [1, 2, 3]))); // => false
//console.log(assertEqual(tail([1, 2, 3] == [1, 2, 3]))); // => false

