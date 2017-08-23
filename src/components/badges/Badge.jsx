import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Text, {SIZE as TEXT_SIZE, COLOR as TEXT_COLOR, WEIGHT as TEXT_WEIGHT} from '../text/Text';

const SIZE = {
  NORMAL: 'normal',
  SMALL: 'small',
  LARGE: 'large'
};

const COLOR = {
  NORMAL: {BADGE: 'light', TEXT: TEXT_COLOR.DEFAULT},
  PEACH: {BADGE: 'peach', TEXT: TEXT_COLOR.LIGHT},
  MUSTARD: {BADGE: 'mustard', TEXT: TEXT_COLOR.LIGHT},
  MINT_SECONDARY: {BADGE: 'mint-secondary', TEXT: TEXT_COLOR.LIGHT},
  GRAY_SECONDARY: {BADGE: 'gray-secondary', TEXT: TEXT_COLOR.LIGHT},
  MINT_SECONDARY_LIGHT: {BADGE: 'mint-secondary-light', TEXT: TEXT_COLOR.MINT},
  PEACH_SECONDARY_LIGHT: {BADGE: 'peach-secondary-light', TEXT: TEXT_COLOR.PEACH},
  BLUE_SECONDARY_LIGHT: {BADGE: 'blue-secondary-light', TEXT: TEXT_COLOR.BLUE}
};

const Badge = ({children, color = COLOR.NORMAL, size = SIZE.NORMAL, rounded, withAnimation, className, ...props}) => {

  const badgeClass = classNames('sg-badge', className, {
    [`sg-badge--${color.BADGE}`]: color !== COLOR.NORMAL,
    [`sg-badge--${size}`]: size !== SIZE.NORMAL,
    'sg-badge--rounded': rounded,
    'sg-badge--with-animation': withAnimation
  }, className);
  const textSize = size === SIZE.LARGE ? TEXT_SIZE.NORMAL : TEXT_SIZE.XSMALL;

  return <div {...props} className={badgeClass}>
    <Text size={textSize} weight={TEXT_WEIGHT.BOLD} color={color.TEXT}>{children}</Text>
  </div>;
};

Badge.propTypes = {
  color: PropTypes.oneOf(Object.values(COLOR)),
  size: PropTypes.oneOf(Object.values(SIZE)),
  children: PropTypes.string.isRequired,
  rounded: PropTypes.bool,
  withAnimation: PropTypes.bool,
  className: PropTypes.string
};

export default Badge;
export {SIZE, COLOR};
