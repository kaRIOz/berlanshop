import type React from "react";
import { SvgICON } from "./icon.types";

export const BaseIcon: React.FC<SvgICON> = ({
    color = "currentColor",
    width = 26,
    height = 26,
    strokeWidth = "0.8",
    viewBox = "-10 0 24 24",
    children,
    ...rest
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox={viewBox}
            fill="none"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke={color}
            {...rest}
        >
            {children}
        </svg>
    );
};
export default BaseIcon;
