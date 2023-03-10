"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eqObjects = void 0;
const eqArrays_1 = require("./eqArrays");
const eqObjects = function (object1, object2) {
    //Check that both objects have the same number of keys
    if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false;
    }
    for (const key of Object.keys(object1)) {
        //Check if value of given key is an array
        if (typeof object1 === "object") {
            if (Array.isArray(object1[key])) {
                if (!(0, eqArrays_1.eqArrays)(object1[key], object2[key])) {
                    return false;
                }
            }
            if (!(0, exports.eqObjects)(object1[key], object2[key])) {
                return false;
            }
            continue;
        }
        if (object1[key] !== object2[key]) {
            return false;
        }
    }
    return true;
};
exports.eqObjects = eqObjects;
