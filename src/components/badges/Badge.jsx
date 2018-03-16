import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const BADGE_SIZE = {
  NORMAL: 'normal',
  SMALL: 'small',
  LARGE: 'large'
};

export const BADGE_COLOR = {
  NORMAL: 'light',
  PEACH: 'peach',
  MUSTARD: 'mustard',
  MINT: 'mint',
  MINT_SECONDARY: 'mint-secondary',
  BLUE_SECONDARY: 'blue-secondary',
  BLUE: 'blue',
  GRAY_SECONDARY: 'gray-secondary',
  MINT_SECONDARY_LIGHT: 'mint-secondary-light',
  PEACH_SECONDARY_LIGHT: 'peach-secondary-light',
  BLUE_SECONDARY_LIGHT: 'blue-secondary-light'
};

const Badge = ({
  children,
  color = BADGE_COLOR.NORMAL,
  size = BADGE_SIZE.NORMAL,
  rounded,
  withAnimation,
  className,
  ...props
}) => {
  const badgeClass = classNames('sg-badge', className, {
    [`sg-badge--${color}`]: color !== BADGE_COLOR.NORMAL,
    [`sg-badge--${size}`]: size !== BADGE_SIZE.NORMAL,
    'sg-badge--rounded': rounded,
    'sg-badge--with-animation': withAnimation
  }, className);

  return (
    <div {...props} className={badgeClass}>
      {children}
    </div>
  );
};

Badge.propTypes = {
  color: PropTypes.oneOf(Object.values(BADGE_COLOR)),
  size: PropTypes.oneOf(Object.values(BADGE_SIZE)),
  children: PropTypes.any.isRequired,
  rounded: PropTypes.bool,
  withAnimation: PropTypes.bool,
  className: PropTypes.string
};

export default Badge;
