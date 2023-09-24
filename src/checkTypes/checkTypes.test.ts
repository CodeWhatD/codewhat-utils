import { isUndefined } from "./index";
import { expect, it, describe } from "vitest";

describe("checkType", () => {
  it("check isUndefined bool", () => {
    expect(isUndefined(false)).toBe(false);
  });

  it("check isUndefined undefined", () => {
    expect(isUndefined(undefined)).toBe(true);
  });
});
