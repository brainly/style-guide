import * as React from 'react';
import classnames from 'classnames';
export type OverlayedBoxPropsType = {
  children?: React.ReactNode | null | undefined;
  overlay?: React.ReactNode | null | undefined;
  className?: string;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  'children' | 'overlay' | 'className'
>;

const OverlayedBox = ({
  overlay,
  children,
  className,
  ...props
}: OverlayedBoxPropsType) => {
  const boxClass = classnames('sg-overlayed-box', className);
  return (
    <div {...props} className={boxClass}>
      {children}
      <div className="sg-overlayed-box__overlay">{overlay}</div>
    </div>
  );
};

export default OverlayedBox;