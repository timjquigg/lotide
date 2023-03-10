export const eqArrays = (arrOne: any[], arrTwo: any[]): boolean => {
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

    if (!eqArrays(arrOne[i], arrTwo[i])) {
      return false;
    }
  }
  return true;
};
