const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false


assertArraysEqual([[2, 3], [4]], [[2, 3], [4]]); // => true;

assertArraysEqual([[2, 3], [4]], [[2, 3], [4, 5]]); // => false
assertArraysEqual([[2, 3], [4]], [[2, 3], 4]); // => false