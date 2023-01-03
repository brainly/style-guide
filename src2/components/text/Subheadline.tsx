import * as React from "react";
import classNames from "classnames";
import { SUBHEADLINE_TYPE } from "./subheadlineConsts";
import type { TextColorType } from "./Text";
import { generateResponsiveClassNames } from "../utils/responsive-props";
import type { ResponsivePropType } from "../utils/responsive-props";
export type SubheadlineTypeType =
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "blockquote"
  | "q"
  | "strong"
  | "em"
  | "del"
  | "ins";
export type SubheadlineSizeType =
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge"
  | "xxxlarge";
export type SubheadlineTransformType = "uppercase" | "lowercase" | "capitalize";
export type SubheadlineAlignType =
  | "to-left"
  | "to-center"
  | "to-right"
  | "justify";
export {
  SUBHEADLINE_TYPE,
  SUBHEADLINE_SIZE,
  SUBHEADLINE_TRANSFORM,
  SUBHEADLINE_ALIGN,
} from "./subheadlineConsts";
export { TEXT_COLOR } from "./Text";
export type SubheadlinePropsType = {
  children?: React.ReactNode;
  size?: ResponsivePropType<SubheadlineSizeType>;
  type?: SubheadlineTypeType;
  color?: TextColorType | null | undefined;
  transform?: ResponsivePropType<SubheadlineTransformType | null | undefined>;
  align?: ResponsivePropType<SubheadlineAlignType | null | undefined>;
  className?: string | null | undefined;
  inherited?: boolean | null | undefined;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  | "children"
  | "size"
  | "type"
  | "color"
  | "transform"
  | "align"
  | "className"
  | "inherited"
>;

const Subheadline = ({
  children,
  type = SUBHEADLINE_TYPE.H2,
  size,
  transform,
  align,
  color,
  className,
  inherited = false,
  ...props
}: SubheadlinePropsType) => {
  const Type = type;
  const subheadlineClass = classNames(
    "sg-subheadline",
    {
      "sg-subheadline--inherited": inherited,
      [`sg-subheadline--${String(color)}`]: color,
    },
    ...generateResponsiveClassNames(
      (propValue: string) => `sg-subheadline--${propValue}`,
      size
    ),
    ...generateResponsiveClassNames(
      (propValue: string) => `sg-subheadline--${propValue}`,
      transform
    ),
    ...generateResponsiveClassNames(
      (propValue: string) => `sg-subheadline--${propValue}`,
      align
    ),
    className
  );
  return (
    <Type {...props} className={subheadlineClass}>
      {children}
    </Type>
  );
};

export default Subheadline;