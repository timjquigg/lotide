"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eqArrays = void 0;
const eqArrays = (arrOne, arrTwo) => {
    if (arrOne.length !== arrTwo.length) {
        return false;
    }
    for (let i = 0; i < arrOne.length; i++) {
        if (!Array.isArray(arrOne[i])) {
            if (arrOne[i] !== arrTwo[i]) {
                return false;
            }
            continue;
        }
        if (!(0, exports.eqArrays)(arrOne[i], arrTwo[i])) {
            return false;
        }
    }
    return true;
};
exports.eqArrays = eqArrays;
