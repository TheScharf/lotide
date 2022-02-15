// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
const arr1 = [];
const arr2 = [];




const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
  
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  const word = sentence.split(" ").join("");
  for (let i = 0; i < word.length; i++) {
    let letPos = word[i];
    if (results[letPos]) {
      results[letPos] = [word.indexOf(letPos), word.indexOf(letPos, (word.indexOf(letPos)))];

    } else {
      results[letPos] = [word.indexOf(letPos)];
    }
      
  }

  return results;
};

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello"));

module.exports = letterPositions;