import * as React from 'react';
import cx from 'classnames';

export interface ClickablePropsType {
  /**
   * Optional string. Additional class names.
   */
  className?: string;

  children?: React.ReactNode;
}

const Clickable = ({className, children}: ClickablePropsType) => {
  return <div className={cx('card', className)}>{children}</div>;
};

export {Clickable};
