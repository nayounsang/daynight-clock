"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var getTimeFormat_1 = require("../util/function/getTimeFormat");
var ClockContainer_1 = require("./ClockContainer");
var ClockChildren_1 = require("./ClockChildren");
var DayNightClock = function (_a) {
    var containerStyle = _a.containerStyle, dayStyle = _a.dayStyle, nightStyle = _a.nightStyle, time = _a.time, size = _a.size, _b = _a.timeFormat, timeFormat = _b === void 0 ? getTimeFormat_1.formatHHMM : _b, timeStyle = _a.timeStyle, _c = _a.round, round = _c === void 0 ? false : _c;
    return ((0, jsx_runtime_1.jsx)(ClockContainer_1.default, { style: containerStyle, size: size, children: (0, jsx_runtime_1.jsx)(ClockChildren_1.default, { dayStyle: dayStyle, nightStyle: nightStyle, time: time, timeFormat: timeFormat, timeStyle: timeStyle, round: round }) }));
};
exports.default = DayNightClock;
