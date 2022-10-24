const assertArraysEqual = require('../assertArraysEqual');
const flatten = require('../flatten');
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