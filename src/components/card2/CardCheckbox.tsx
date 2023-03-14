import * as React from 'react';
import cx from 'classnames';
import Checkbox from '../form-elements/checkbox/Checkbox';

export interface CardCheckboxPropsType {
  /**
   * Optional string. Additional class names.
   */
  className?: string;

  children?: React.ReactNode;

  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  style?: React.CSSProperties;
}

const CardCheckbox = ({
  className,
  children,
  width,
  height,
  style,
}: CardCheckboxPropsType) => {
  const cssVariables = {
    '--card-width': width,
    '--card-height': height,
  };

  return (
    <label
      className={cx('sg-card-radio', className)}
      style={{...style, ...cssVariables}}
    >
      <Checkbox />
      {children}
    </label>
  );
};

export default CardCheckbox;
