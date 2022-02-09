
const arr1 = [];
const arr2 = [];

const eqArrays = function(arr1, arr2) {
  if (!(Array.isArray(arr1) || !(Array.isArray(arr2)))) {
    return false;
  }
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

console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));

const assertEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

assertEqual([1, 2, 3], [1, 2, 3]);
assertEqual([1, 2, 3], [3, 2, 1]);
assertEqual(["1", "2", "3"], ["1", "2", "3"]);
assertEqual(["1", "2", "3"], ["1", "2", 3]);