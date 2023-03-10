"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertArraysEqual = void 0;
const eqArrays_1 = require("./eqArrays");
const assertArraysEqual = (actual, expected) => {
    console.log((0, eqArrays_1.eqArrays)(actual, expected)
        ? `✅✅✅ Assertion Passed: ${actual} === ${expected}`
        : `❌❌❌ Assertion Failed: ${actual} !=== ${expected}`);
};
exports.assertArraysEqual = assertArraysEqual;
