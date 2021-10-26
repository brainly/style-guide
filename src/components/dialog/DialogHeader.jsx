// @flow strict

import * as React from 'react';
import cx from 'classnames';

export type DialogHeaderPropsType = $ReadOnly<{
  children: React.Node,
  className?: string,
}>;

const DialogHeader = ({children, className}: DialogHeaderPropsType) => (
  <div className={cx('sg-dialog__header', className)}>{children}</div>
);

export default DialogHeader;
