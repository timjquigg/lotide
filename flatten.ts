export const flatten = (arr: number[]): number[] => {
  const newArr: number[] = [];
  for (let item of arr) {
    if (!Array.isArray(item)) {
      newArr.push(item);
    } else {
      newArr.push(...flatten(item));
    }
  }

  return newArr;
};
