import * as React from 'react';
import cx from 'classnames';
import Text from '../text/Text';
import Flex from '../flex/Flex';
import Icon from '../icons/Icon';
import type {IconTypeType} from '../icons/Icon';

type CounterSizeType = 'xs' | 'xxs';

export type CounterColorType =
  | 'blue'
  | 'green'
  | 'indigo'
  | 'red'
  | 'yellow'
  | 'gray'
  | 'achromatic';

export type CounterVariantType = 'solid' | 'light';

export const COUNTER_VARIANT = {
  solid: 'solid',
  light: 'light',
} as const;

const SOLID_COLOR_BACKGROUND_MAP = {
  blue: 'blue-60',
  green: 'green-60',
  indigo: 'indigo-60',
  red: 'red-60',
  yellow: 'yellow-40',
  gray: 'gray-40',
  achromatic: 'black',
} as const;

const SOLID_COLOR_TEXT_MAP = {
  blue: 'text-white',
  green: 'text-white',
  indigo: 'text-white',
  red: 'text-white',
  yellow: 'text-black',
  gray: 'text-black',
  achromatic: 'text-white',
} as const;

const LIGHT_COLOR_BACKGROUND_MAP = {
  blue: 'blue-20',
  green: 'green-20',
  indigo: 'indigo-20',
  red: 'red-20',
  yellow: 'yellow-20',
  gray: 'gray-20',
  achromatic: 'white',
} as const;

export const COUNTER_COLOR = {
  BLUE: 'blue',
  GREEN: 'green',
  INDIGO: 'indigo',
  RED: 'red',
  YELLOW: 'yellow',
  GRAY: 'gray',
  ACHROMATIC: 'achromatic',
} as const;

export const COUNTER_SIZE = {
  XS: 'xs',
  XXS: 'xxs',
} as const;

export type CounterPropsType = {
  /**
   * Children to be rendered inside Counter
   * @example <Counter>
   *            text
   *          </Counter>
   */
  children: React.ReactNode;

  /**
   * You can render icon inside of counter
   * @example <Counter icon="points">
   *            1
   *          </Counter>
   */
  icon?: IconTypeType | null | undefined;

  /**
   * There are two sizes options for counters, not need to be specify, default is xs
   * @example <Counter>
   *            1pts
   *          </Counter>
   */
  size?: CounterSizeType | null | undefined;

  /**
   * Counter background color
   * @example <Counter color="blue-60">1</Counter>
   */
  color?: CounterColorType | null | undefined;

  /**
   * Specify variant of counter
   * @example <Counter variant="solid">1</Counter>
   */
  variant?: CounterVariantType;

  /**
   * Optional boolean for counter with animation
   * @example <Counter withAnimation>
   *            12
   *          </Counter>
   */
  withAnimation?: boolean;

  /**
   * Additional class names
   */
  className?: string;

  /**
   * Label describing counter
   */
  'aria-label'?: string;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  | 'children'
  | 'icon'
  | 'size'
  | 'color'
  | 'variant'
  | 'withAnimation'
  | 'className'
  | 'undefined'
>;

const Counter = ({
  icon,
  children,
  className,
  size = 'xs',
  color = 'red',
  variant = 'solid',
  withAnimation,
  'aria-label': ariaLabel,
  ...props
}: CounterPropsType) => {
  const backgroundColor =
    variant === 'solid'
      ? // @ts-ignore TS2538
        SOLID_COLOR_BACKGROUND_MAP[color]
      : // @ts-ignore TS2538
        LIGHT_COLOR_BACKGROUND_MAP[color];
  const counterClass = cx(
    'sg-counter',
    {
      [`sg-counter--${String(size)}`]: size,
      [`sg-counter--${String(backgroundColor)}`]: backgroundColor,
      'sg-counter--with-animation': withAnimation,
      'sg-counter--with-icon': icon,
    },
    className
  );

  const textColor =
    // @ts-ignore TS2538
    variant === 'solid' ? SOLID_COLOR_TEXT_MAP[color] : 'text-black';

  let content;

  content = (
    <Text
      size={
        size !== undefined && size !== null && size === 'xxs'
          ? 'xsmall'
          : 'small'
      }
      weight="bold"
      color={textColor}
      className={
        size === 'xxs' ? 'sg-counter__text' : 'sg-counter__text-spaced'
      }
      aria-label={ariaLabel}
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
            color="icon-black"
            className="sg-counter__icon"
            aria-hidden={!!ariaLabel}
          />
        </Flex>

        <Flex alignItems="center">
          <Text
            as="span"
            weight="bold"
            size={
              size !== undefined && size !== null && size === 'xxs'
                ? 'xsmall'
                : 'small'
            }
            className="sg-counter__text"
            aria-label={ariaLabel}
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
