import React from "react";
import styles from "../style/clock.module.css";

interface proptype {
  style?: React.CSSProperties;
  text: string;
}

const TimeDiv = ({ style, text }: proptype) => {
  return <div style={style} className={styles.time}>{text}</div>;
};

export default TimeDiv;
