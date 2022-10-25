const map = require('../map');
const assert = require('chai').assert;

describe("#map", () => {
  it('returns [2, 4, 6, 8] when given [1, 2, 3, 4] & x => x * 2', () => {
    assert.deepEqual(map([1, 2, 3, 4], x => x * 2), [2, 4, 6, 8]);
  });
  
  it('returns [0, 1, 2, 3] when given [1, 2, 3, 4] & x => x - 1', () => {
    assert.deepEqual(map([1, 2, 3, 4], x => x - 1), [0, 1, 2, 3]);
  });

  it('returns "[1, 2, 3, 4] when given ["a", "ab", "abc", "abcd"] & x => x.length', () => {
    assert.deepEqual(map(["a", "ab", "abc", "abcd"], x=> x.length), [1, 2, 3, 4]);
  });

});