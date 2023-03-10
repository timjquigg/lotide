const assert = require("chai").assert;
const { flatten } = require("../build/flatten");

describe("#flatten", () => {
  it("returns [1, 2, 3, 4] when given [1, 2, 3, 4]", () => {
    assert.deepEqual(flatten([1, 2, 3, 4]), [1, 2, 3, 4]);
  });

  it("returns [1, 2, 3, 4, 5, 6] when given [1, 2, 3, 4, [5,6]]", () => {
    assert.deepEqual(flatten([1, 2, 3, 4, [5, 6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns [1, 2, 3, 4,5,6] when given [1, [2, 3], 4, [[5],6]]", () => {
    assert.deepEqual(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
  });
});
