import React from "react";
import { timetype } from "../util/type/timetype";
import { formatHHMM } from "../util/function/getTimeFormat";
import ClockContainer from "./ClockContainer";
import ClockChildren from "./ClockChildren";
import {sizeSelectType } from "../util/type/sizetype";

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

const DayNightClock = ({
  containerStyle,
  dayStyle,
  nightStyle,
  time,
  size,
  timeFormat = formatHHMM,
  timeStyle,
  round = false,
}: proptype) => {

  return (
    <ClockContainer style={containerStyle} size={size}>
      <ClockChildren
        dayStyle={dayStyle}
        nightStyle={nightStyle}
        time={time}
        timeFormat={timeFormat}
        timeStyle={timeStyle}
        round={round}
      />
    </ClockContainer>
  );
};

export default DayNightClock;