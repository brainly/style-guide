import * as React from "react";
import classNames from "classnames";
type SeparatorHorizontalTypeType = "normal" | "spaced" | "short-spaced";
type SeparatorHorizontalColorType = "white" | "gray-50" | "gray-40";
export type SeparatorHorizontalPropsType = {
  type?: SeparatorHorizontalTypeType;
  color?: SeparatorHorizontalColorType;
  className?: string;
} & Omit<React.AllHTMLAttributes<HTMLElement>, "type" | "color" | "className">;
export const COLORS_MAP = {
  white: "white",
  "gray-50": "gray-50",
  "gray-40": "gray-40",
};
export const TYPE: {
  NORMAL: "normal";
  SPACED: "spaced";
  SHORT_SPACED: "short-spaced";
} = {
  NORMAL: "normal",
  SPACED: "spaced",
  SHORT_SPACED: "short-spaced",
};

const SeparatorHorizontal = ({
  type = TYPE.NORMAL,
  color = COLORS_MAP["gray-40"],
  className,
  ...props
}: SeparatorHorizontalPropsType) => {
  const separatorClass = classNames(
    "sg-horizontal-separator",
    {
      [`sg-horizontal-separator--${type}`]: type !== TYPE.NORMAL,
      [`sg-horizontal-separator--${String(color)}`]: color,
    },
    className
  );
  return <div {...props} className={separatorClass} role="separator" />;
};

export default SeparatorHorizontal;