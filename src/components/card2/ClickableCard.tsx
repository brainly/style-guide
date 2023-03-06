import * as React from 'react';
import cx from 'classnames';

export interface ClickableCardPropsType {
  /**
   * Optional string. Additional class names.
   */
  className?: string;

  children?: React.ReactNode;

  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  style?: React.CSSProperties;
}

const ClickableCard = ({
  className,
  children,
  width,
  height,
  style,
}: ClickableCardPropsType) => {
  const cssVariables = {
    '--card-width': width,
    '--card-height': height,
  };

  return (
    <div
      className={cx('sg-clickable-card', className)}
      style={{...style, ...cssVariables}}
    >
      {children}
    </div>
  );
};

export default ClickableCard;
