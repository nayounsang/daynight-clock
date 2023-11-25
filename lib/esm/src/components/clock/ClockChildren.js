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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import useComponentSize from "../hooks/useComponentSize";
import { formatHHMM } from "../util/function/getTimeFormat";
import getPolygon from "../util/function/getPolygon";
import TimeDiv from "./TimeDIv";
var ClockChildren = function (_a) {
    var dayStyle = _a.dayStyle, nightStyle = _a.nightStyle, time = _a.time, _b = _a.timeFormat, timeFormat = _b === void 0 ? formatHHMM : _b, timeStyle = _a.timeStyle, round = _a.round;
    var _c = useState("polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0 100%)"), polygon = _c[0], setPolygon = _c[1];
    var _d = useState(true), isDay = _d[0], setIsDay = _d[1]; //0~720m: night 720~1440m:day
    var _e = useComponentSize(), componentRef = _e[0], componentSize = _e[1];
    useEffect(function () {
        var minute = time.hour * 60 + time.minute;
        setPolygon(getPolygon(minute, componentSize.width, componentSize.height));
        setIsDay(minute >= 720);
    }, [time, componentSize]);
    return (_jsxs("div", { ref: componentRef, children: [_jsx("div", { style: __assign(__assign({}, (isDay ? nightStyle : dayStyle)), (round
                    ? {
                        borderRadius: "".concat(componentSize.height, "px ").concat(componentSize.height, "px 0 0"),
                    }
                    : {})) }), _jsx("div", { style: __assign(__assign(__assign({}, (isDay ? dayStyle : nightStyle)), (round
                    ? {
                        borderRadius: "".concat(componentSize.height, "px ").concat(componentSize.height, "px 0 0"),
                    }
                    : {})), { clipPath: polygon }) }), _jsx(TimeDiv, { text: timeFormat(time.hour, time.minute), style: timeStyle })] }));
};
export default ClockChildren;
