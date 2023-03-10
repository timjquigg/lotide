"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findKeyByValue = void 0;
const findKeyByValue = (obj, targeValue) => {
    for (let key of Object.keys(obj)) {
        if (obj[key] === targeValue) {
            return key;
        }
    }
};
exports.findKeyByValue = findKeyByValue;
