import { jsx as _jsx } from "react/jsx-runtime";
import { formatHHMM } from "../util/function/getTimeFormat";
import ClockContainer from "./ClockContainer";
import ClockChildren from "./ClockChildren";
var DayNightClock = function (_a) {
    var containerStyle = _a.containerStyle, dayStyle = _a.dayStyle, nightStyle = _a.nightStyle, time = _a.time, size = _a.size, _b = _a.timeFormat, timeFormat = _b === void 0 ? formatHHMM : _b, timeStyle = _a.timeStyle, _c = _a.round, round = _c === void 0 ? false : _c;
    return (_jsx(ClockContainer, { style: containerStyle, size: size, children: _jsx(ClockChildren, { dayStyle: dayStyle, nightStyle: nightStyle, time: time, timeFormat: timeFormat, timeStyle: timeStyle, round: round }) }));
};
export default DayNightClock;
