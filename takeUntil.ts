export const takeUntil = <T>(array: T[], callback: <U>(x: U) => boolean) => {
  const newArr: T[] = [];
  for (const item of array) {
    if (callback(item)) {
      break;
    }
    newArr.push(item);
  }
  return newArr;
};
