import { eqArrays } from "./eqArrays";

export const eqObjects = function (
  object1: {
    [key: string]: any;
  },
  object2: {
    [key: string]: any;
  }
) {
  //Check that both objects have the same number of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key of Object.keys(object1)) {
    //Check if value of given key is an array
    if (typeof object1 === "object") {
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      }
      if (!eqObjects(object1[key], object2[key])) {
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
