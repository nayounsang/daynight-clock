import React from "react";
import { timetype } from "../util/type/timetype";
interface proptype {
    dayStyle?: React.CSSProperties;
    nightStyle?: React.CSSProperties;
    timeStyle?: React.CSSProperties;
    timeFormat: (h: number, m: number) => string;
    time: timetype;
    round: boolean;
}
declare const ClockChildren: ({ dayStyle, nightStyle, time, timeFormat, timeStyle, round, }: proptype) => import("react/jsx-runtime").JSX.Element;
export default ClockChildren;
