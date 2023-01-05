// @flow strict

import * as React from 'react';
import cx from 'classnames';

export type DialogBodyPropsType = $ReadOnly<{
  children: React.Node,
  className?: string,
}>;

const DialogBody = ({children, className}: DialogBodyPropsType) => (
  <div className={cx('sg-dialog__body', className)}>{children}</div>
);

export default DialogBody;
