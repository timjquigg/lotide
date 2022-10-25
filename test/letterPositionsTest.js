const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe('#letterPositions', () => {
  it('returns {h: [0], e: [1], l: [2, 3], o: [4]} when given "hello"', () => {
    assert.deepEqual(letterPositions('hello'),{h: [0], e: [1], l: [2, 3], o: [4]});
  });
});