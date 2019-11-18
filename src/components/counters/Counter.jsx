// @flow strict

import * as React from 'react';
import cx from 'classnames';
import Text from '../text/Text';
import Flex from '../flex/Flex';
import Icon from '../icons/Icon';
import type {IconTypeType} from '../icons/Icon';

type CounterSizeType = 'normal' | 'small';

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
   * There are three sizes options for buttons, not need to be specify, default is medium
   * @example <Counter icon="points">
   *            1pts
   *          </Counter>
   */
  size?: ?CounterSizeType,
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
  withAnimation,
  ...props
}: CounterPropsType) => {
  const counterClass = cx(
    'sg-counter',
    {
      [`sg-counter--${String(size)}`]: size,
      'sg-counter--with-animation': withAnimation,
      'sg-counter--with-icon': icon,
    },
    className
  );

  let content;

  content = (
    <Text
      size={
        size !== undefined && size !== null && size === COUNTER_SIZE.SMALL
          ? 'xsmall'
          : 'small'
      }
      weight="bold"
      color="white"
      className={
        size === COUNTER_SIZE.SMALL
          ? 'sg-counter__text'
          : 'sg-counter__text-spaced'
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
            'sg-counter__icon-container--small': size === COUNTER_SIZE.SMALL,
          })}
        >
          <Icon
            type={icon}
            size={size === COUNTER_SIZE.SMALL ? 16 : 24}
            color="dark"
            className="sg-counter__icon"
          />
        </Flex>

        <Flex noWrap alignItems="center">
          <Text
            type="span"
            weight="bold"
            size={
              size !== undefined && size !== null && size === COUNTER_SIZE.SMALL
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
