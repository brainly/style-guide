// @flow strict
import React from 'react';
import type {Node} from 'react';
import classnames from 'classnames';

type OverlayedBoxType = {
  children?: ?Node,
  overlay?: ?Node,
  className?: string
};

const OverlayedBox = ({overlay, children, className, ...props}: OverlayedBoxType) => {
  const boxClass = classnames('sg-overlayed-box', className);

  return (
    <div {...props} className={boxClass}>
      {children}
      <div className="sg-overlayed-box__overlay">
        {overlay}
      </div>
    </div>
  );
};

export default OverlayedBox;
