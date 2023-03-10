const { countLetters } = require("../build/countLetters");
const assert = require("chai").assert;

describe("#countLetters", () => {
  it('should return {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1,} from "lighthouse in the house"', () => {
    assert.deepEqual(countLetters("lighthouse in the house"), {
      l: 1,
      i: 2,
      g: 1,
      h: 4,
      t: 2,
      o: 2,
      u: 2,
      s: 2,
      e: 3,
      n: 1,
    });
  });
});
