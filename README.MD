# line-intersect-2d

## A simple library to get intersection of 2 dimensional lines

## Installation
``` sh
$ npm install --save line-intersect-2d
```

## Usage
``` js
var lineIntersect = require("line-intersect-2d");

var p1 = [0,0];
var p2 = [0.5,0];
var p3 = [1,0.5];
var p4 = [1,1];
var tol = 0.000006; // The tolerance to check for equality. It is 0.000005 by default
var allowExtend = false; // Treat it as a line segment
var b = lineIntersect.intersect(p1,p2,p3,p4, tol, allowExtend); // b = null, since allow extend is false.

var allowExtend = true; // Treat it as an infinite line
var b = lineIntersect.intersect(p1,p2,p3,p4, tol, allowExtend); // b = [1,0], since allow extend is true.
```