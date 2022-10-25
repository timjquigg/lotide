const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  it('returns true when comparing [1, 2, 3] and [1, 2, 3]', () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it('returns false when comparing [1, 2, 3] &  [3, 2, 1]', () => {
    assert.equal(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it('returns true when comparing ["1", "2", "3"] & ["1", "2", "3"]', () => {
    assert.equal(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it('returns false when comparing ["1", "2", "3"] & ["1", "2", 3]', () => {
    assert.equal(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

  it('returns true when comparing [[2, 3], [4]] & [[2, 3], [4]]', () => {
    assert.equal(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });

  it('returns false when comparing [[2, 3], [4]] & [[2, 3], [4, 5]]', () => {
    assert.equal(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });

  it('returns false when comparing [[2, 3], [4]] & [[2, 3], 4]', () => {
    assert.equal(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });

});