import { expect, it, describe } from "vitest";
import spliceArray from './index'
describe("spliceArray", () => {
    it("check spliceArray", () => {
        expect(spliceArray(['a', 'b', 'c'], [0])).toStrictEqual(['b', 'c']);
    });
    it("check spliceArray to empty", () => {
        expect(spliceArray(['a', 'b', 'c'], [0, 1, 2])).toStrictEqual([]);
    });
    it("check spliceArray to empty", () => {
        expect(spliceArray(['a', 'b', 'c'], [0, 2])).toStrictEqual(['b']);
    });
    it("check spliceArray to empty", () => {
        expect(spliceArray(['a', 'b', 'c'], [2, 0])).toStrictEqual(['b']);
    });
});
