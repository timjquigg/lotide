export const findKeyByValue = (
  obj: { [key: string]: string },
  targeValue: string
) => {
  for (let key of Object.keys(obj)) {
    if (obj[key] === targeValue) {
      return key;
    }
  }
};
