import { readFile, writeFileSync, appendFileSync } from "fs";
import { isUndefined } from "../checkTypes/index";
import type { Line } from "./type";

const _n = "\n";
const _r = "\r";
const _t = "\t";

const loopGeneralLine = (
  key: string = "xx",
  line: Line,
  isFirst: boolean = false,
  isLast: boolean = false
) => {
  const [label, prop, localLabel] = line;

  let content = `
    {
      // ${label}
      prop:'${prop}',
      label:'${
        localLabel === "" ||
        localLabel === "undefined" ||
        isUndefined(localLabel)
          ? prop
          : localLabel
      }',`;
  content += prop.toUpperCase().includes("AMOUNT")
    ? `moneyColor: true },`
    : "},";
  if (isFirst) {
    content = `export const ${key}:CellConfig[] = [${content}`;
  }
  if (isLast) {
    content = `${content}]`;
  }
  return content;
};

/**
 * This function is used in my work for fast collect dtg business prop
 * @param resource
 * example is `
 *  基本信息
 *  字段A props1 label1
 *  字段B props2 label2
 * `
 */
export const convertColumn = (resource?: string) => {
  readFile("./data.txt", "utf-8", (err: any, data: string) => {
    const alreadyRemoveN = data.split(_n);
    const alreadyRemoveR = alreadyRemoveN.map((rString) => {
      return rString.split(_r)[0];
    });
    const group = alreadyRemoveR.map((_gString) => {
      return _gString.split(_t);
    }) as Line[];
    for (let index = 0; index < group.length; index++) {
      const _line = group[index];
      const isFirst = index === 0;
      const isLast = index === group.length - 1;
      const needWriteLine = loopGeneralLine(
        "basicInfo",
        _line,
        isFirst,
        isLast
      );
      if (isFirst) {
        writeFileSync("./result.ts", needWriteLine);
      } else {
        appendFileSync("./result.ts", needWriteLine);
      }
    }
  });
};

convertColumn();
