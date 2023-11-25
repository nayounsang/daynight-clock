"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getRad = function (minute) {
    return (Math.PI / 180) * Math.floor((minute % 720) / 4);
};
var getLine = function (minute, width, height) {
    var rad = getRad(minute);
    var slope = Math.tan(rad);
    return [slope, height - (slope * width) / 2];
};
var getCaseAndPX = function (minute, width, height) {
    if (180 - Math.floor((minute % 720) / 4) === 90) {
        return [1, width / 2];
    }
    // 선분은 (0,height) - (0,0), (0,0) - (width,0), (width,0) - (width,height)
    // 기준점은 (width/2,height)
    // 따라서 y = m(x-width/2) + height일때 어느 선분과 교차하는지 구함
    var _a = getLine(minute, width, height), slope = _a[0], interceptY = _a[1];
    if (interceptY <= height && interceptY >= 0) {
        return [0, interceptY];
    }
    else if (slope * width + interceptY <= height &&
        slope * width + interceptY >= 0) {
        return [2, slope * width + interceptY];
    }
    else {
        return [1, -interceptY / slope];
    }
};
var getPolygon = function (minute, width, height) {
    var _a = getCaseAndPX(minute, width, height), c = _a[0], p = _a[1];
    if (c === 0) {
        return "polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0 ".concat(p, "px)");
    }
    else if (c === 1) {
        return "polygon(0 0, 100% 0, 100% 100%, 50% 100%, ".concat(p, "px 0)");
    }
    else {
        return "polygon(100% 0, 100% 0, 100% 100%, 50% 100%, 100% ".concat(p, "px)");
    }
};
exports.default = getPolygon;
