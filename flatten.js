const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
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

const flatten = function(arr) {
  const newArr = [];
  for (let item of arr) {
    
    if (!Array.isArray(item)) {
      newArr.push(item);
    } else {
      newArr.push(...flatten(item));
    }
  }
  
  return newArr;
};

//Tests:

const array1 = [1,2,3,4];
const array2 = [1,4, array1];
const array3 = [2,6,2, array2];
const array4 = [2, 5, array3];

//console.log(flatten(array1));
//console.log(array2, flatten(array2));

assertArraysEqual(flatten(array1), [1,2,3,4]);
assertArraysEqual(flatten(array2), [1,4,1,2,3,4]);
assertArraysEqual(flatten(array3), [2,6,2,1,4,1,2,3,4]);