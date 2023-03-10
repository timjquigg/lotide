const { without } = require("../build/without");
const assert = require("chai").assert;

describe("#without", () => {
  it("returns [2, 3] when given [1, 2, 3] and [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);

    it('returns ["1", "2"] when given ["1", "2", "3"] and [1, 2, "3"]', () => {
      assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
    });

    it('returns ["1", "2"] when given ["1", "2", "3"] and [1, 2, "3"]', () => {
      assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
    });
  });
});
