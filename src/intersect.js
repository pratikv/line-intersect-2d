
var vectorMath = require("./vector-math");

const TOL = 0.000005;


/**
 * Gets the intersection between line segements formed by p1,p2 and p3,p4
 * @param {number[]} p1 
 * @param {number[]} p2 
 * @param {number[]} p3 
 * @param {number[]} p4 
 * @param {number} tol The tolerance to check for equality. Default is 0.000005.
 * @param {boolean} allowExtend If true, the segments will be considered as lines
 * @return {number[] | null} If there is an intersection, an array of the form [x,y] would be returned, else null
 */
function intersect(p1, p2, p3, p4, tol, allowExtend) {
    if (!tol) tol = TOL;
    var v1 = vectorMath.subtract(p1, p2);
    var v2 = vectorMath.subtract(p3, p4);

    var crossProd = vectorMath.cross(v2, v1);

    if (Math.abs(crossProd) <= tol) {
        return;
    }
    var t2 = vectorMath.cross(vectorMath.subtract(p1, p3), v1) / crossProd;

    var t1 = vectorMath.cross(vectorMath.subtract(p3, p1), v2) / crossProd;

    if ((t1 < 0 || t1 > 1 || t2 < 0 || t2 > 1) && !allowExtend) {
        return;
    }

    return vectorMath.interpolate(p1, p2, t1);
}

module.exports = intersect;