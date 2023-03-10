import { eqObjects } from "./eqObjects";
const inspect = require("util").inspect;

export const assertObjectsEqual = (
  actual: { [key: string]: any },
  expected: { [key: string]: any }
) => {
  console.log(
    eqObjects(actual, expected)
      ? `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
      : `❌❌❌ Assertion Failed: ${inspect(actual)} !=== ${inspect(expected)}`
  );
};
