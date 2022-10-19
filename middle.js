const eqArrays = function(arrOne, arrTwo) {
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


const middle = function(arr) {
  const mid = [];
  const middleIndex = Math.floor(arr.length / 2);
  if (arr.length > 2 && arr.length % 2 === 1) {
    mid.push(arr[middleIndex]);
  } else if (arr.length > 2 && arr.length % 2 === 0) {
    mid.push(...arr.slice(middleIndex - 1, middleIndex + 1));
  }
  return mid;
};

// Tests:
const array1 = [];
const array2 = [1];
const array3 = [1,2];
const array4 = [1,2,3,4,5];
const array5 = [1,2,3,4,5,6];

assertArraysEqual(middle(array1),[]);
assertArraysEqual(middle(array2),[]);
assertArraysEqual(middle(array3),[]);
assertArraysEqual(middle(array4),[3]);
assertArraysEqual(middle(array5),[3,4]);