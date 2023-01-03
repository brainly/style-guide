import * as React from "react";
import classNames from "classnames";
type BubbleColorType =
  | "white"
  | "gray-40"
  | "gray-20"
  | "blue-40"
  | "blue-30"
  | "blue-20"
  | "indigo-40"
  | "green-40"
  | "green-30"
  | "green-20"
  | "red-40";
type AligmentType = "start" | "center" | "end";
type DirectionType = "left" | "right" | "top" | "bottom";
export const ALIGNMENT: {
  START: "start";
  CENTER: "center";
  END: "end";
} = {
  START: "start",
  CENTER: "center",
  END: "end",
};
export const DIRECTION: {
  LEFT: "left";
  RIGHT: "right";
  TOP: "top";
  BOTTOM: "bottom";
} = {
  LEFT: "left",
  RIGHT: "right",
  TOP: "top",
  BOTTOM: "bottom",
};
const HORIZONTAL_DIRECTIONS: Array<string> = [DIRECTION.LEFT, DIRECTION.RIGHT];
export const BUBBLE_COLOR: {
  white: "white";
  "gray-40": "gray-40";
  "gray-20": "gray-20";
  "blue-40": "blue-40";
  "blue-30": "blue-30";
  "blue-20": "blue-20";
  "indigo-40": "indigo-40";
  "green-40": "green-40";
  "green-30": "green-30";
  "green-20": "green-20";
  "red-40": "red-40";
} = {
  white: "white",
  "gray-40": "gray-40",
  "gray-20": "gray-20",
  "blue-40": "blue-40",
  "blue-30": "blue-30",
  "blue-20": "blue-20",
  "indigo-40": "indigo-40",
  "green-40": "green-40",
  "green-30": "green-30",
  "green-20": "green-20",
  "red-40": "red-40",
};
export type BubblePropsType = {
  children: React.ReactNode;
  className?: string | null | undefined;
  alignment?: AligmentType;
  direction: DirectionType;
  color?: BubbleColorType | null | undefined;
  full?: boolean | null | undefined;
  noShadow?: boolean | null | undefined;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  | "children"
  | "className"
  | "alignment"
  | "direction"
  | "color"
  | "full"
  | "noShadow"
>;

const Bubble = ({
  alignment = ALIGNMENT.CENTER,
  direction,
  color = BUBBLE_COLOR.white,
  full,
  noShadow,
  children,
  className,
  ...props
}: BubblePropsType) => {
  let alignmentClass;

  if (HORIZONTAL_DIRECTIONS.includes(direction)) {
    alignmentClass = `sg-bubble--column-${alignment}`;
  } else {
    alignmentClass = `sg-bubble--row-${alignment}`;
  }

  const bubbleClass = classNames(
    "sg-bubble",
    {
      "sg-bubble--full": full,
      "sg-bubble--no-shadow": noShadow,
      [`sg-bubble--${String(color)}`]: color,
      [`sg-bubble--${direction}`]: direction,
      [alignmentClass]: alignment !== ALIGNMENT.CENTER,
    },
    className
  );
  return (
    <div {...props} className={bubbleClass}>
      {children}
    </div>
  );
};

export default Bubble;