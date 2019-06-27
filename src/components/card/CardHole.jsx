// @flow strict

import React from 'react';
import type {Node} from 'react';
import classnames from 'classnames';

export type ColorType =
  | 'blue'
  | 'blue-secondary'
  | 'blue-secondary-light'
  | 'lavender'
  | 'lavender-secondary'
  | 'lavender-secondary-light'
  | 'mint'
  | 'mint-secondary'
  | 'mint-secondary-light'
  | 'mustard'
  | 'mustard-secondary'
  | 'mustard-secondary-light'
  | 'gray'
  | 'gray-secondary'
  | 'gray-secondary-light'
  | 'gray-secondary-lightest'
  | 'gray-secondary-ultra-light';

export const CARD_HOLE_COLOR = {
  BLUE: 'blue',
  BLUE_SECONDARY: 'blue-secondary',
  BLUE_SECONDARY_LIGHT: 'blue-secondary-light',
  LAVENDER: 'lavender',
  LAVENDER_SECONDARY: 'lavender-secondary',
  LAVENDER_SECONDARY_LIGHT: 'lavender-secondary-light',
  MINT: 'mint',
  MINT_SECONDARY: 'mint-secondary',
  MINT_SECONDARY_LIGHT: 'mint-secondary-light',
  MUSTARD: 'mustard',
  MUSTARD_SECONDARY: 'mustard-secondary',
  MUSTARD_SECONDARY_LIGHT: 'mustard-secondary-light',
  GRAY: 'gray',
  GRAY_SECONDARY: 'gray-secondary',
  GRAY_SECONDARY_LIGHT: 'gray-secondary-light',
  GRAY_SECONDARY_LIGHTEST: 'gray-secondary-lightest',
  GRAY_SECONDARY_ULTRA_LIGHT: 'gray-secondary-ultra-light'
};

type PropsType = {
  children: Node,
  className?: string,
  color?: ColorType
};

const CardHole = ({color, children, className, ...props}: PropsType) => {
  const cardHoleClass = classnames('sg-card__hole', {
    [`sg-card__hole--${String(color)}`]: color
  }, className);

  return (
    <div {...props} className={cardHoleClass}>
      {children}
    </div>
  );
};

export default CardHole;
