export const isUndefined = (data: unknown): data is undefined => {
  return typeof data === "undefined";
};

export const isObject = (data: unknown): data is Object => {
  return data !== null && typeof data === 'object'
}

export const isArray = (data: unknown): data is unknown[] => {
  return Array.isArray(data)
}