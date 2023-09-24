import { isUndefined } from "./index";
import { expect, test } from "vitest";

test("check type is undefined", () => {
  expect(isUndefined(false)).toBe(false);
});
