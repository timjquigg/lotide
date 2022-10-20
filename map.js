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


const map = (arr, callback) => {
  newArr = [];
  arr.forEach(element => newArr.push(callback(element)));
  return newArr;
};


// Tests:
// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word.length);
// console.log(results1);

const array1 = [1,2,3,4,5];
const result1 = map(array1, x => x * 2);
assertArraysEqual(result1, [2,4,6,8,10]);

const array2 = ['a', 'ab', 'abc', 'abcd'];
const result2 = map(array2, x => x.length);
assertArraysEqual(result2, [1,2,3,4]);