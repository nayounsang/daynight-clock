"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var usehooks_ts_1 = require("usehooks-ts");
var timezone_support_1 = require("timezone-support");
var handleTime = function (timeZone) {
    try {
        var city = (0, timezone_support_1.findTimeZone)(timeZone);
        var native = new Date();
        var cityTime = (0, timezone_support_1.getZonedTime)(native, city);
        return { hour: cityTime.hours, minute: cityTime.minutes };
    }
    catch (_a) {
        var native = new Date();
        return { hour: native.getHours(), minute: native.getMinutes() };
    }
};
var useTime = function (timeZone, period) {
    if (timeZone === void 0) { timeZone = ""; }
    if (period === void 0) { period = 60000; }
    var _a = (0, react_1.useState)({ hour: 0, minute: 0 }), time = _a[0], setTime = _a[1];
    (0, usehooks_ts_1.useInterval)(function () {
        setTime(handleTime(timeZone));
    }, period);
    (0, react_1.useEffect)(function () {
        setTime(handleTime(timeZone));
    }, []);
    return time;
};
exports.default = useTime;
