import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const ALIGNMENT = {START: 'start', CENTER: 'center', END: 'end'};
export const DIRECTION = {LEFT: 'left', RIGHT: 'right', TOP: 'top', BOTTOM: 'bottom'};

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
  PEACH: 'peach'
};

const Bubble = ({alignment = ALIGNMENT.CENTER, direction, color, full, noShadow, children, className, ...props}) => {
  let alignmentClass;

  if (HORIZONTAL_DIRECTIONS.includes(direction)) {
    alignmentClass = 'sg-bubble--column-' + alignment;
  } else {
    alignmentClass = 'sg-bubble--row-' + alignment;
  }

  const bubbleClass = classNames('sg-bubble', className, {
    'sg-bubble--full': full,
    'sg-bubble--no-shadow': noShadow,
    [`sg-bubble--${color}`]: color,
    [`sg-bubble--${direction}`]: direction,
    [alignmentClass]: alignment !== ALIGNMENT.CENTER
  }, className);

  return (
    <div {...props} className={bubbleClass}>
      {children}
    </div>
  );
};

Bubble.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(Object.values(DIRECTION)).isRequired,
  color: PropTypes.oneOf(Object.values(BUBBLE_COLOR)),
  alignment: PropTypes.oneOf(Object.values(ALIGNMENT)),
  full: PropTypes.bool,
  noShadow: PropTypes.bool,
  className: PropTypes.string
};

export default Bubble;
