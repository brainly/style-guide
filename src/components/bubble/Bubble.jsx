// @flow strict

import React from 'react';
import type {Node} from 'react';
import classNames from 'classnames';

type BubbleColorType =
  | 'blue'
  | 'lavender'
  | 'dark'
  | 'mint'
  | 'mint-secondary'
  | 'mint-secondary-light'
  | 'navyblue-secondary'
  | 'blue-secondary'
  | 'blue-secondary-light'
  | 'gray-secondary-lightest'
  | 'peach';

type AligmentType = 'start' | 'center' | 'end';

type DirectionType = 'left' | 'right' | 'top' | 'bottom';

export const ALIGNMENT = {START: 'start', CENTER: 'center', END: 'end'};
export const DIRECTION = {
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  BOTTOM: 'bottom',
};

const HORIZONTAL_DIRECTIONS = [DIRECTION.LEFT, DIRECTION.RIGHT];

export const BUBBLE_COLOR = {
  BLUE: 'blue',
  LAVENDER: 'lavender',
  DARK: 'dark',
  MINT: 'mint',
  MINT_SECONDARY: 'mint-secondary',
  MINT_SECONDARY_LIGHT: 'mint-secondary-light',
  NAVYBLUE_SECONDARY: 'navyblue-secondary',
  BLUE_SECONDARY: 'blue-secondary',
  BLUE_SECONDARY_LIGHT: 'blue-secondary-light',
  GRAY_SECONDARY_LIGHT: 'gray-secondary-lightest',
  PEACH: 'peach',
};

type BubblePropsType = {
  children: Node,
  className?: ?string,
  alignment?: AligmentType,
  direction: DirectionType,
  color?: ?BubbleColorType,
  full?: ?boolean,
  noShadow?: ?boolean,
  ...
};

const Bubble = ({
  alignment = ALIGNMENT.CENTER,
  direction,
  color,
  full,
  noShadow,
  children,
  className,
  ...props
}: BubblePropsType) => {
  let alignmentClass;

  if (HORIZONTAL_DIRECTIONS.includes(direction)) {
    alignmentClass = `sg-bubble--column-${alignment}`;
  } else {
    alignmentClass = `sg-bubble--row-${alignment}`;
  }

  const bubbleClass = classNames(
    'sg-bubble',
    {
      'sg-bubble--full': full,
      'sg-bubble--no-shadow': noShadow,
      [`sg-bubble--${String(color)}`]: color,
      [`sg-bubble--${direction}`]: direction,
      [alignmentClass]: alignment !== ALIGNMENT.CENTER,
    },
    className
  );

  return (
    <div {...props} className={bubbleClass}>
      {children}
    </div>
  );
};

export default Bubble;
