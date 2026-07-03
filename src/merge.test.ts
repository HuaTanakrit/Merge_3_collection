import { merge } from "./merge.js";

describe("merge", () => {
    it("merges three sorted collections into ascending order", () => {
        expect(merge([1, 3, 5], [2, 4, 6], [9, 8, 7])).toEqual([
            1, 2, 3, 4, 5, 6, 7, 8, 9,
        ]);
    });

    it("handles empty collections", () => {
        expect(merge([], [], [])).toEqual([]);
        expect(merge([1, 2], [], [])).toEqual([1, 2]);
        expect(merge([], [], [3, 2, 1])).toEqual([1, 2, 3]);
    });

    it("handles duplicate values", () => {
        expect(merge([1, 2, 2], [2, 3], [4, 2, 1])).toEqual([
            1, 1, 2, 2, 2, 2, 3, 4,
        ]);
    });

    it("handles negative numbers", () => {
        expect(merge([-5, -1, 3], [-4, 0, 2], [6, 1, -2])).toEqual([
            -5, -4, -2, -1, 0, 1, 2, 3, 6,
        ]);
    });
});
