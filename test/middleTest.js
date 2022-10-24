const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

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