import React, { ReactNode } from "react";
import styles from "../style/clock.module.css";
import classNames from "classnames";
import { sizeSelectType } from "../util/type/sizetype";

interface proptype {
  children: ReactNode;
  style?: React.CSSProperties;
  size?: sizeSelectType;
  
}

const ClockContainer = ({ children, style, size }: proptype) => {
 

  return (
    <div
      style={style}
      className={classNames(
        styles.container,
        size === undefined ? "" : styles[size]
      )}
    >
      {children}
    </div>
  );
};

export default ClockContainer;
