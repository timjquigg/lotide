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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (/\w/.test(char)) {
      results[char] ? results[char].push(i) : results[char] = [i];
    }
  }
  return results;
};

// Tests:

const testString = 'hello';
const testObj = {
  h: [0],
  e: [1],
  l: [2, 3],
  o: [4],
};

const resultObj = letterPositions(testString);

for (let char in testObj) {
  assertArraysEqual(resultObj[char], testObj[char]);
}