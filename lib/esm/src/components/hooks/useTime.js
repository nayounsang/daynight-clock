import { useEffect, useState } from "react";
import { useInterval } from "usehooks-ts";
import { findTimeZone, getZonedTime } from "timezone-support";
var handleTime = function (timeZone) {
    try {
        var city = findTimeZone(timeZone);
        var native = new Date();
        var cityTime = getZonedTime(native, city);
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
    var _a = useState({ hour: 0, minute: 0 }), time = _a[0], setTime = _a[1];
    useInterval(function () {
        setTime(handleTime(timeZone));
    }, period);
    useEffect(function () {
        setTime(handleTime(timeZone));
    }, []);
    return time;
};
export default useTime;
