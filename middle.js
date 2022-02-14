/*const eqArrays = function(arr1, arr2) {
  if (!(Array.isArray(arr1) || !(Array.isArray(arr2)))) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
    if (arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};*/

/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};*/

//Find and return the middle od an array index

const middle = function(array) {
  let midArr = [];
  if (array.length <= 2) {
    return midArr;
  }
  if (array.length % 2 !== 0) {
    midArr = [array[Math.round(array.length / 2) - 1]];
  }
  if (array.length % 2 === 0) {
    midArr = [
      array[Math.round(array.length / 2 - 1)],
      array[Math.round(array.length / 2)],
    ];
  }
  return midArr;
};



console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3, 4, 5]));