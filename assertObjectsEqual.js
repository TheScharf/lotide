const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if ((object1[key]) !== (object2[key])) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  //const inspect = require('until').inspect;
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//eqObjects(ab, ba);
assertObjectsEqual(eqObjects(ab, ba));
assertObjectsEqual(eqObjects(ab, ab));