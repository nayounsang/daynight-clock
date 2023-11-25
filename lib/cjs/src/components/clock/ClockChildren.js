"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var useComponentSize_1 = require("../hooks/useComponentSize");
var getTimeFormat_1 = require("../util/function/getTimeFormat");
var getPolygon_1 = require("../util/function/getPolygon");
var TimeDIv_1 = require("./TimeDIv");
var ClockChildren = function (_a) {
    var dayStyle = _a.dayStyle, nightStyle = _a.nightStyle, time = _a.time, _b = _a.timeFormat, timeFormat = _b === void 0 ? getTimeFormat_1.formatHHMM : _b, timeStyle = _a.timeStyle, round = _a.round;
    var _c = (0, react_1.useState)("polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0 100%)"), polygon = _c[0], setPolygon = _c[1];
    var _d = (0, react_1.useState)(true), isDay = _d[0], setIsDay = _d[1]; //0~720m: night 720~1440m:day
    var _e = (0, useComponentSize_1.default)(), componentRef = _e[0], componentSize = _e[1];
    (0, react_1.useEffect)(function () {
        var minute = time.hour * 60 + time.minute;
        setPolygon((0, getPolygon_1.default)(minute, componentSize.width, componentSize.height));
        setIsDay(minute >= 720);
    }, [time, componentSize]);
    return ((0, jsx_runtime_1.jsxs)("div", { ref: componentRef, children: [(0, jsx_runtime_1.jsx)("div", { style: __assign(__assign({}, (isDay ? nightStyle : dayStyle)), (round
                    ? {
                        borderRadius: "".concat(componentSize.height, "px ").concat(componentSize.height, "px 0 0"),
                    }
                    : {})) }), (0, jsx_runtime_1.jsx)("div", { style: __assign(__assign(__assign({}, (isDay ? dayStyle : nightStyle)), (round
                    ? {
                        borderRadius: "".concat(componentSize.height, "px ").concat(componentSize.height, "px 0 0"),
                    }
                    : {})), { clipPath: polygon }) }), (0, jsx_runtime_1.jsx)(TimeDIv_1.default, { text: timeFormat(time.hour, time.minute), style: timeStyle })] }));
};
exports.default = ClockChildren;
