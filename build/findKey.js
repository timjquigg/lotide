"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findKey = void 0;
const findKey = (obj, callback) => {
    for (let key of Object.keys(obj)) {
        if (callback(obj[key])) {
            return key;
        }
    }
};
exports.findKey = findKey;
