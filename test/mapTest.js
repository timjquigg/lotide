const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');

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