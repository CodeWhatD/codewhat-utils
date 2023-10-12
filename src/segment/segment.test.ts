import { expect, it, describe } from "vitest";
import { segment } from './index'
describe("checkType", () => {
    it("check isUndefined bool", () => {
        expect(segment(['1', 2], '-')).toBe('1-2');
    });
});
