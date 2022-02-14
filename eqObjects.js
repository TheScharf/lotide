
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba);


const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc);


const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2);


