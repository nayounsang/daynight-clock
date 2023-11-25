"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatHHMM = void 0;
var formatHHMM = function (hour, minute) {
    var h = hour.toString().length === 1 ? "0".concat(hour) : "".concat(hour);
    var m = minute.toString().length === 1 ? "0".concat(minute) : "".concat(minute);
    return "".concat(h, ":").concat(m);
};
exports.formatHHMM = formatHHMM;
