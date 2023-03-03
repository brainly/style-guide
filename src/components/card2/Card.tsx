import * as React from 'react';
import cx from 'classnames';

export interface CardPropsType {
  /**
   * Optional string. Additional class names.
   */
  className?: string;

  children?: React.ReactNode;
}

const Card = ({className, children}: CardPropsType) => {
  return <div className={cx('card', className)}>{children}</div>;
};

export default Card;
