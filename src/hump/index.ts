const humpInUpMergeeRegx = /\s[a-z]?/gi; // usage in humpInUpMergee function
const humpResultSplitRegx = /[A-Z]+/g;
/**
 * example is self operated loan application => selfOperatedLoanApplication
 */
export const humpInUpMergee = (value: string) => {
  return value.replace(humpInUpMergeeRegx, (substring: string) => {
    return substring.toUpperCase().trim();
  });
};

/**
 * example is selfOperatedLoanApplication => SELF_OPERATED_LOAN_APPLICATION
 */

export const humpResultSplit = (value: string, splitSymbol: string = "_") => {
  return value
    .replace(humpResultSplitRegx, (substring: string) => {
      return `${splitSymbol}${substring}`;
    })
    .toUpperCase();
};

/**
 * test function
 */

const pipelineMain = (value: string) => {
  const firstValue = humpInUpMergee(value);
  const secondValue = humpResultSplit(firstValue);
  return {
    ONE: firstValue,
    SECOND: secondValue,
  };
};

console.log(pipelineMain("self operated loan application"));
