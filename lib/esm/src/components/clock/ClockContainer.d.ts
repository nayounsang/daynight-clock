import React, { ReactNode } from "react";
import { sizeSelectType } from "../util/type/sizetype";
interface proptype {
    children: ReactNode;
    style?: React.CSSProperties;
    size?: sizeSelectType;
}
declare const ClockContainer: ({ children, style, size }: proptype) => import("react/jsx-runtime").JSX.Element;
export default ClockContainer;
