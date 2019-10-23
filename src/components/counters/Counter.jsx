// @flow strict

import React from 'react';
import cx from 'classnames';
import CounterContainer from './subcomponents/CounterContainer';
import Text from '../text/Text';

// const {default: Badge, BADGE_SIZE, BADGE_COLOR} = BadgeModule;

// export const TEXT_BADGE_SIZE = BADGE_SIZE;
// export const TEXT_BADGE_COLOR = BADGE_COLOR;

type PropsType = {
  children: string,
  className?: string,
  color?: string,
  textCounter?: boolean,
  ...
};

const Counter = ({
  children,
  textCounter,
  className,
  color,
  ...props
}: PropsType) => {
  console.log(color);
  const counterClass = cx(
    'sg-counter',
    {
      [`sg-counter--${color}`]: color,
    },
    className
  );

  let content;

  if (textCounter) {
    content = (
      <Text
        size="small"
        weight="bold"
        color="white"
        className="sg-counter__text"
      >
        {children}
      </Text>
    );
  }

  return (
    <div {...props} className={counterClass}>
      {content}
    </div>
  );
};

export default Counter;
