// @flow strict

import React from 'react';
import type {Node} from 'react';
import classNames from 'classnames';

export type BadgeSizeType = 'normal' | 'small' | 'large';

export type CounterColorType = 'peach' | 'gray';

export const COUNTER_COLOR = {
  PEACH: 'peach',
  GRAY: 'gray-secondary',
};

type PropsType = {
  children: Node,
  className?: string,
  color?: CounterColorType,
  ...
};

const Counter = ({children, color, className, ...props}: PropsType) => {
  const counterClass = classNames(
    'sg-counter',
    {
      [`sg-counter--${color}`]: color,
    },
    className
  );

  return (
    <div {...props} className={counterClass}>
      {children}
    </div>
  );
};

export default Counter;
