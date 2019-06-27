// @flow strict

import React from 'react';
import type {Node} from 'react';
import classnames from 'classnames';

type PropsType = {
  children?: Node,
  partial?: boolean,
  className?: string
};

const Overlay = ({partial, children, className, ...props}: PropsType) => {
  const overlayClass = classnames(
    'sg-overlay',
    {'sg-overlay--partial': partial},
    className);

  return (
    <div {...props} className={overlayClass}>
      {children}
    </div>
  );
};

export default Overlay;
