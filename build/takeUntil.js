"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeUntil = void 0;
const takeUntil = (array, callback) => {
    const newArr = [];
    for (const item of array) {
        if (callback(item)) {
            break;
        }
        newArr.push(item);
    }
    return newArr;
};
exports.takeUntil = takeUntil;
