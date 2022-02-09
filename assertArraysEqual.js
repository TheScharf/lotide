const arr1 = [];
const arr2 = [];

const eqArrays = function(arr1, arr2) {
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
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log('The arrays are equal!');
  } else {
    console.log('The arrays are not equal.');
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);