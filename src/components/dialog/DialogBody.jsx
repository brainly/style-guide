// @flow strict

import * as React from 'react';

export type DialogBodyPropsType = $ReadOnly<{
  children: React.Node,
}>;

const DialogBody = ({children}: DialogBodyPropsType) => (
  <div className="sg-dialog__body">{children}</div>
);

export default DialogBody;
