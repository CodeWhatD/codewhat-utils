const fs = require("fs");
/**
 *
 * @param resource
 * example is `
 *  基本信息
 *  字段A props1 label1
 *  字段B props2 label2
 * `
 */
export const convertColumn = (resource?: string) => {
  fs.readFile("./data.txt", (err: any, data: any) => {
    console.log(err);
    console.log(data);
  });
};

convertColumn();
