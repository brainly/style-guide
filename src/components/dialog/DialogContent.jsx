// @flow strict

import * as React from 'react';

export type DialogContentPropsType = $ReadOnly<{
  children: React.Node,
}>;

const DialogContent = ({children}: DialogContentPropsType) => {
  return <div className="sg-dialog__content">{children}</div>;
};

export default DialogContent;
