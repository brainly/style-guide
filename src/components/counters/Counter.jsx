// @flow strict

import * as React from 'react';
import cx from 'classnames';
import Text from '../text/Text';
import Flex from '../flex/Flex';
import Icon, {ICON_COLOR} from '../icons/Icon';
import type {IconTypeType} from '../icons/Icon';

type CounterSizeType = 'xs' | 'xxs';

type ColorType = 'peach-900' | 'blue-900';

export const COUNTER_COLOR = {
  PEACH900: 'peach-900',
  BLUE900: 'blue-900',
};

export const COUNTER_SIZE: {
  XS: 'xs',
  XXS: 'xxs',
} = {
  XS: 'xs',
  XXS: 'xxs',
};

export type CounterPropsType = {
  /**
   * Children to be rendered inside Counter
   * @example <Counter type="basic">
   *            text
   *          </Counter>
   */
  children: React.Node,
  /**
   * Specify type of the counter that you want to use, two types for now
   * @example <Counter type="basic">
   *            1
   *          </Counter>
   * @see type="basic" https://styleguide.brainly.com/latest/docs/interactive.html?type="basic"#counters
   * @see type="points" https://styleguide.brainly.com/latest/docs/interactive.html?type="points"#counters
   */
  icon?: ?IconTypeType,
  /**
   * There are two sizes options for counters, not need to be specify, default is xs
   * @example <Counter icon="points">
   *            1pts
   *          </Counter>
   */
  size?: ?CounterSizeType,
  /**
   * Counter background color
   * @example <Counter color="blue-900">1</Counter>
   */
  color?: ?ColorType,
  /**
   * Optional boolean for counter with animation
   * @example <Counter type="basic" withAnimation>
   *            12
   *          </Counter>
   */
  withAnimation?: boolean,
  /**
   * Additional class names
   */
  className?: string,
  ...
};

const Counter = ({
  icon,
  children,
  className,
  size,
  color = COUNTER_COLOR.PEACH900,
  withAnimation,
  ...props
}: CounterPropsType) => {
  const counterClass = cx(
    'sg-counter',
    {
      [`sg-counter--${String(size)}`]: size,
      [`sg-counter--${String(color)}`]: color,
      'sg-counter--with-animation': withAnimation,
      'sg-counter--with-icon': icon,
    },
    className
  );

  let content;

  content = (
    <Text
      size={
        size !== undefined && size !== null && size === 'xxs'
          ? 'xsmall'
          : 'small'
      }
      weight="bold"
      color="text-white"
      className={
        size === 'xxs' ? 'sg-counter__text' : 'sg-counter__text-spaced'
      }
    >
      {children}
    </Text>
  );

  if (icon) {
    content = (
      <>
        <Flex
          className={cx('sg-counter__icon-container', {
            'sg-counter__icon-container--xxs': size === 'xxs',
          })}
        >
          <Icon
            type={icon}
            size={size === 'xxs' ? 16 : 24}
            color={ICON_COLOR['icon-black']}
            className="sg-counter__icon"
          />
        </Flex>

        <Flex alignItems="center">
          <Text
            type="span"
            weight="bold"
            size={
              size !== undefined && size !== null && size === 'xxs'
                ? 'xsmall'
                : 'small'
            }
            className="sg-counter__text"
          >
            {children}
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
