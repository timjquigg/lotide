"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertObjectsEqual = void 0;
const eqObjects_1 = require("./eqObjects");
const inspect = require("util").inspect;
const assertObjectsEqual = (actual, expected) => {
    console.log((0, eqObjects_1.eqObjects)(actual, expected)
        ? `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
        : `❌❌❌ Assertion Failed: ${inspect(actual)} !=== ${inspect(expected)}`);
};
exports.assertObjectsEqual = assertObjectsEqual;
