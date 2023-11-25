import React from "react";
import { timetype } from "../util/type/timetype";
import { sizeSelectType } from "../util/type/sizetype";
interface proptype {
    containerStyle?: React.CSSProperties;
    dayStyle?: React.CSSProperties;
    nightStyle?: React.CSSProperties;
    timeStyle?: React.CSSProperties;
    size?: sizeSelectType;
    timeFormat?: (...args: any[]) => string;
    time: timetype;
    round?: boolean;
}
declare const DayNightClock: ({ containerStyle, dayStyle, nightStyle, time, size, timeFormat, timeStyle, round, }: proptype) => import("react/jsx-runtime").JSX.Element;
export default DayNightClock;
