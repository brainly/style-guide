import * as React from 'react';
import cx from 'classnames';

export interface CardButtonPropsType {
  /**
   * Optional string. Additional class names.
   */
  className?: string;

  children?: React.ReactNode;

  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  style?: React.CSSProperties;
}

const CardButton = ({
  className,
  children,
  width,
  height,
  style,
}: CardButtonPropsType) => {
  const cssVariables = {
    '--card-width': width,
    '--card-height': height,
  };

  return (
    <div
      className={cx('sg-card-button', className)}
      style={{...style, ...cssVariables}}
    >
      {children}
    </div>
  );
};

export default CardButton;
