import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Text, {SIZE as TEXT_SIZE, WEIGHT as TEXT_WEIGHT} from '../text/Text';

const SIZE = {
  NORMAL: 'normal',
  SMALL: 'small',
  LARGE: 'large'
};

const COLOR = {
  NORMAL: {BADGE: 'light', TEXT: 'default'},
  PEACH: {BADGE: 'peach', TEXT: 'light'},
  MUSTARD: {BADGE: 'mustard', TEXT: 'light'},
  MINT_SECONDARY: {BADGE: 'mint-secondary', TEXT: 'light'},
  GRAY_SECONDARY: {BADGE: 'gray-secondary', TEXT: 'light'},
  MINT_SECONDARY_LIGHT: {BADGE: 'mint-secondary-light', TEXT: 'mint'},
  PEACH_SECONDARY_LIGHT: {BADGE: 'peach-secondary-light', TEXT: 'peach'},
  BLUE_SECONDARY_LIGHT: {BADGE: 'blue-secondary-light', TEXT: 'blue'}
};

const Badge = ({children, color = COLOR.NORMAL, size = SIZE.NORMAL, rounded, withAnimation}) => {

  const badgeClass = classNames('sg-badge', {
    [`sg-badge--${color.BADGE}`]: color !== COLOR.NORMAL,
    [`sg-badge--${size}`]: size !== SIZE.NORMAL,
    'sg-badge--rounded': rounded,
    'sg-badge--with-animation': withAnimation
  });
  const textSize = size === SIZE.LARGE ? TEXT_SIZE.NORMAL : TEXT_SIZE.XSMALL;

  return <div className={badgeClass}>
    <Text size={textSize} weight={TEXT_WEIGHT.BOLD} color={color.TEXT}>{children}</Text>
  </div>;
};

Badge.propTypes = {
  color: PropTypes.oneOf(Object.values(COLOR)),
  size: PropTypes.oneOf(Object.values(SIZE)),
  children: PropTypes.string.isRequired,
  rounded: PropTypes.bool,
  withAnimation: PropTypes.bool
};

export default Badge;
export {SIZE, COLOR};
