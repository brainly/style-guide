import * as React from 'react';
import classnames from 'classnames';
export type OverlayPropsType = {
  children?: React.ReactNode;
  partial?: boolean;
  className?: string;
  color?: ColorType;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  'children' | 'partial' | 'className' | 'color'
>;
export const COLOR = {
  BLUE: 'blue',
  BLACK: 'black',
};
type ColorType = typeof COLOR[keyof typeof COLOR];

const Overlay = ({
  partial,
  children,
  className,
  color = COLOR.BLUE,
  ...props
}: OverlayPropsType) => {
  const overlayClass = classnames(
    'sg-overlay',
    {
      'sg-overlay--partial': partial,
      [`sg-overlay--${String(color)}`]: color,
    },
    className
  );
  return (
    <div {...props} className={overlayClass}>
      {children}
    </div>
  );
};

export default Overlay;
