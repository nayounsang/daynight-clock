import { jsx as _jsx } from "react/jsx-runtime";
import styles from "../style/clock.module.css";
import classNames from "classnames";
var ClockContainer = function (_a) {
    var children = _a.children, style = _a.style, size = _a.size;
    return (_jsx("div", { style: style, className: classNames(styles.container, size === undefined ? "" : styles[size]), children: children }));
};
export default ClockContainer;
