// @flow strict

import * as React from 'react';

export type DialogHeadPropsType = $ReadOnly<{
  children: React.Node,
}>;

const DialogHead = ({children}: DialogHeadPropsType) => (
  <div className="sg-dialog__head">{children}</div>
);

export default DialogHead;
