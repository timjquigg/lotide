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

const assertArraysEqual = function(actual, expected) {
  console.log(
    eqArrays(actual, expected) ?
      `✅✅✅ Assertion Passed: ${actual} === ${expected}` :
      `❌❌❌ Assertion Failed: ${actual} !=== ${expected}`
  );
};



// Tests:
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false


assertArraysEqual([[2, 3], [4]], [[2, 3], [4]]); // => true;

assertArraysEqual([[2, 3], [4]], [[2, 3], [4, 5]]); // => false
assertArraysEqual([[2, 3], [4]], [[2, 3], 4]); // => false