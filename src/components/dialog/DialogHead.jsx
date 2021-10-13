// @flow strict

import * as React from 'react';
import cx from 'classnames';

export type DialogHeadPropsType = $ReadOnly<{
  children: React.Node,
  className?: string,
}>;

const DialogHead = ({children, className}: DialogHeadPropsType) => (
  <div className={cx('sg-dialog__head', className)}>{children}</div>
);

export default DialogHead;
