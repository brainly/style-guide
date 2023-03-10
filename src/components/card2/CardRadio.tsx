import * as React from 'react';
import cx from 'classnames';

export interface CardRadioPropsType {
  /**
   * Optional string. Additional class names.
   */
  className?: string;

  children?: React.ReactNode;

  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  style?: React.CSSProperties;
}

const CardRadio = ({
  className,
  children,
  width,
  height,
  style,
}: CardRadioPropsType) => {
  const cssVariables = {
    '--card-width': width,
    '--card-height': height,
  };

  return (
    <div
      className={cx('sg-card-radio', className)}
      style={{...style, ...cssVariables}}
    >
      {children}
    </div>
  );
};

export default CardRadio;
