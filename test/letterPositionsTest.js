const letterPositions = require('../letterPositions');
const assertArraysEqual = require('../assertArraysEqual');
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