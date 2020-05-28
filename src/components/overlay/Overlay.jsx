// @flow strict

import type {Node} from 'react';
import React from 'react';
import classnames from 'classnames';

type PropsType = {
  children?: Node,
  partial?: boolean,
  className?: string,
  color?: ColorType,
  ...
};

export const COLOR = {
  BLUE: 'blue',
  DARK: 'dark',
};

type ColorType = $Values<typeof COLOR>;

const Overlay = ({
  partial,
  children,
  className,
  color,
  ...props
}: PropsType) => {
  const overlayClass = classnames(
    'sg-overlay',
    {
      'sg-overlay--partial': partial,
      [`sg-overlay--${String(color)}`]: color,
    },
    className
  );

  return (
    <div {...props} className={overlayClass}>
      {children}
    </div>
  );
};

export default Overlay;
