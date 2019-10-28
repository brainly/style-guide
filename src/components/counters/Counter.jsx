// @flow strict

import React from 'react';
import cx from 'classnames';
import Text from '../text/Text';
import Flex from '../flex/Flex';
import Icon from '../icons/Icon';

type CounterTypeType = 'text' | 'points';
type CounterSizeType = 'normal' | 'small';

export const COUNTER_TYPE = Object.freeze({
  BASIC: 'basic',
  POINTS: 'points',
});

export const COUNTER_SIZE = Object.freeze({
  NORMAL: 'normal',
  SMALL: 'small',
});

export type CounterPropsType = {
  /**
   * Children to be rendered inside Counter
   * @example <Counter type="basic">
   *            text
   *          </Counter>
   */
  children?: Node,
  /**
   * Specify type of the counter that you want to use, to types for now
   * @example <Counter type="basic">
   *            1
   *          </Counter>
   * @see type="basic" https://styleguide.brainly.com/latest/docs/interactive.html?type="basic"#counters
   * @see type="points" https://styleguide.brainly.com/latest/docs/interactive.html?type="points"#counters
   */
  type: CounterTypeType,
  /**
   * Specify size of the counter that you want to use
   * @example <Counter type="points" size=small>
   *            12
   *          </Counter>
   * @see size="normal" https://styleguide.brainly.com/latest/docs/interactive.html?type="normal"#counters
   * @see size="small" https://styleguide.brainly.com/latest/docs/interactive.html?type="small"#counters
   */
  size?: CounterSizeType,
  /**
   * Optional boolean for counter with animation
   * @example <Counter type="basic" withAnimation>
   *            12
   *          </Counter>
   */
  withAnimation?: boolean,
  /**
   * Optional boolean for additional class for pointer
   * @example <Counter type="basic" withPointer>
   *            12
   *          </Counter>
   */
  withPointer?: boolean,
  /**
   * Additional class names
   */
  className?: string,
  ...
};

const Counter = ({
  type,
  children,
  className,
  size,
  withAnimation,
  withPointer,
  ...props
}: CounterPropsType) => {
  const counterClass = cx(
    'sg-counter',
    {
      [`sg-counter--peach`]: type === 'basic',
      [`sg-counter--${type}`]: type,
      [`sg-counter--${size}`]: size,
      'sg-counter--with-animation': withAnimation,
      'sg-counter--with-pointer': withPointer,
    },
    className
  );

  let content;

  if (type === 'basic') {
    content = (
      <Text
        size={size === 'small' ? 'xsmall' : 'small'}
        weight="bold"
        color="white"
        className={
          size === 'small' ? 'sg-counter__text' : 'sg-counter__text-spaced'
        }
      >
        {children}
      </Text>
    );
  }

  if (type === 'points') {
    content = (
      <>
        <Flex
          className={cx('sg-counter__icon-container', {
            'sg-counter__icon-container--small': size === 'small',
          })}
        >
          <Icon
            type="points"
            size={size === 'small' ? 16 : 24}
            color="dark"
            className="sg-counter__icon"
          />
        </Flex>

        <Flex noWrap alignItems="center">
          <Text
            type="span"
            weight="bold"
            size="small"
            className="sg-counter__text"
          >
            +{children}
          </Text>
        </Flex>
      </>
    );
  }

  return (
    <div {...props} className={counterClass}>
      {content}
    </div>
  );
};

export default Counter;
