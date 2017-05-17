/**
 * Gets the cross product
 * @param {number} x1 
 * @param {number} y1 
 * @param {number} x2 
 * @param {number} y2 
 * @return {number}
 */
function cross(v1, v2) {
    return (v1[0] * v2[1]) - (v2[0] * v1[1]);
}


function subtract(start, end) {
    return [end[0] - start[0], end[1] - start[1]];
}

function interpolate(p1,p2,t){
    return [p1[0] + ( (p2[0] - p1[0]) * t ), p1[1] + ( (p2[1] - p1[1]) * t )]
}

module.exports = { cross, subtract, interpolate };