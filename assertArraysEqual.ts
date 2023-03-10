import { eqArrays } from "./eqArrays";

export const assertArraysEqual = <T>(actual: T[], expected: T[]) => {
  console.log(
    eqArrays(actual, expected)
      ? `✅✅✅ Assertion Passed: ${actual} === ${expected}`
      : `❌❌❌ Assertion Failed: ${actual} !=== ${expected}`
  );
};
