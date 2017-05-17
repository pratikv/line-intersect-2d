var expect = require("expect");
var intersect = require("../src/intersect");

describe("Interscts", () => {
    it("should not intersect between given line-segments", () => {
        var p1 = [0, 0];
        var p2 = [0.5, 0];
        var p3 = [1, 0.5];
        var p4 = [1, 1];
        var allowExtend = false; // Treat it as a line segment
        expect(intersect(p1, p2, p3, p4, null, allowExtend)).toBeFalsy();
    });

    it("should intersect between given lines", () => {
        var p1 = [0, 0];
        var p2 = [0.5, 0];
        var p3 = [1, 0.5];
        var p4 = [1, 1];
        var allowExtend = true; // Treat it as a line segment
        expect(intersect(p1, p2, p3, p4, null, allowExtend)).toEqual([1, 0]);
    });
})