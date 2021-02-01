// @flow strict

import * as React from 'react';
import classnames from 'classnames';

export type OverlayedBoxPropsType = {
  children?: ?React.Node,
  overlay?: ?React.Node,
  className?: string,
  ...
};

const OverlayedBox = ({
  overlay,
  children,
  className,
  ...props
}: OverlayedBoxPropsType) => {
  const boxClass = classnames('sg-overlayed-box', className);

  return (
    <div {...props} className={boxClass}>
      {children}
      <div className="sg-overlayed-box__overlay">{overlay}</div>
    </div>
  );
};

export default OverlayedBox;
