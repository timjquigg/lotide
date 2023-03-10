export const findKey = (
  obj: { [key: string]: any },
  callback: (y: string) => boolean
) => {
  for (let key of Object.keys(obj)) {
    if (callback(obj[key])) {
      return key;
    }
  }
};
