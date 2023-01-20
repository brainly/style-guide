import * as React from 'react';
import cx from 'classnames';

export type DialogHeaderPropsType = Readonly<{
  children: React.ReactNode;
  className?: string;
  id?: string;
}>;

const DialogHeader = ({children, className, id}: DialogHeaderPropsType) => (
  <div className={cx('sg-dialog__header', className)} id={id}>
    {children}
  </div>
);

export default DialogHeader;
