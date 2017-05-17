var vectorMath = require("../src/vector-math");
var expect = require("expect");


describe("Vectors", () => {
    describe("Cross product", () => {
        it("should return correct value for X-Axis cross Y-Axis to equal 1", () => {
            expect(vectorMath.cross([1, 0], [0, 1])).toEqual(1);
        });
    });

    describe("Interpolate", () => {
        it("should correctly interpolate for t between 0 and 1", () => {
            var p1 = [0, 0];
            var p2 = [10, 0];
            var t = 0.6;
            expect(vectorMath.interpolate(p1, p2, t)).toEqual([6, 0]);
        });

        it("should correctly interpolate for t more than 1", () => {
            var p1 = [0, 0];
            var p2 = [10, 0];
            var t = 1.6;
            expect(vectorMath.interpolate(p1, p2, t)).toEqual([16, 0]);
        });

        it("should correctly interpolate for t less than 0", () => {
            var p1 = [0, 0];
            var p2 = [10, 0];
            var t = -0.6;
            expect(vectorMath.interpolate(p1, p2, t)).toEqual([-6, 0]);
        });
    });
})
