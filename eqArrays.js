const assertEqual = function(actual, expected) {
  console.log(
    actual === expected ?
      `✅✅✅ Assertion Passed: ${actual} === ${expected}` :
      `❌❌❌ Assertion Failed: ${actual} !=== ${expected}`
  );
};

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

// Tests:
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]),true);

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]),false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);