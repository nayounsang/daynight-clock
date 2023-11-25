import { jsx as _jsx } from "react/jsx-runtime";
import styles from "../style/clock.module.css";
var TimeDiv = function (_a) {
    var style = _a.style, text = _a.text;
    return _jsx("div", { style: style, className: styles.time, children: text });
};
export default TimeDiv;
