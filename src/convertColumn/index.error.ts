import type { ErrorColumn } from "./type";
import { writeFileSync } from "fs";

const _propKey = "column";

const convertFmt = (secondeResource: Record<string, any>[]) => {
  return secondeResource.map((_secondItem) => {
    const { label } = _secondItem;
    let fmt;
    if (label.toUpperCase().includes("AMOUNT")) {
      fmt = "amount";
    } else if (label.toUpperCase().includes("RATE")) {
      fmt = "rate";
    } else if (label.toUpperCase().includes("DATE")) {
      fmt = "date";
    }
    if (fmt) {
      _secondItem.fmt = fmt;
    }
    return {
      ..._secondItem,
    };
  });
};

export const convrtError = (errorArray: ErrorColumn[]) => {
  return errorArray.map((errorItem, index) => {
    if (typeof errorItem === "object") {
      return {
        ...errorItem,
        prop: `${_propKey + (index + 1)}`,
      };
    } else {
      return {
        prop: `${_propKey + (index + 1)}`,
        label: errorItem,
      };
    }
  });
};

const main = (resource: ErrorColumn[]) => {
  const result = JSON.stringify(convertFmt(convrtError(resource)));
  writeFileSync("./error.ts", result);
};

main([
  "draftNo",
  "draftRange",
  "billType",
  "originalInterestPayer",
  "receiveFullName",
  "acceptorName",
  "acceptorLocation",
  "discountUnitDirectFrontHand",
  "draftAmount",
  "drawDate",
  "dueDate",
  "addDays",
  "clearType",
  "redeemOpenDay",
  "redeemEndDay",
]);
