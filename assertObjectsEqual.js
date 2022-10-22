const eqArrays = function(arrOne, arrTwo) {

  if (arrOne.length !== arrTwo.length) {
    return false;
  }

  for (let i = 0; i < arrOne.length; i++) {
    
    if (!Array.isArray(arrOne[i])) {

      if (arrOne[i] !== arrTwo[i]) {
        return false;
      }
      
      continue;
    }

    if (!eqArrays(arrOne[i], arrTwo[i])) {
      return false;
    }

  }
  return true;
};

const eqObjects = function(object1, object2) {
  //Check that both objects have the same number of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key of Object.keys(object1)) {
    //Check if value of given key is an array
    if (typeof object1 === 'object') {

      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      }
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
      continue;
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
    
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(
    eqObjects(actual, expected) ?
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` :
      `❌❌❌ Assertion Failed: ${inspect(actual)} !=== ${inspect(expected)}`
  );
};

// Tests:
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false

assertObjectsEqual({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => true

assertObjectsEqual({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => false

assertObjectsEqual({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }); // => false