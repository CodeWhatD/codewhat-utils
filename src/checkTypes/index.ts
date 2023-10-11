export const isUndefined = (data: unknown) => {
  return typeof data === "undefined";
};

export const isObject = (data: unknown) => {
  return data !== null && typeof data === 'object'
}