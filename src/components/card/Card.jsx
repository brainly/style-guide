import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const CARD_PADDING = {
  SMALL: 'padding-small',
  NORMAL: 'padding-normal',
  LARGE: 'padding-large',
  XLARGE: 'padding-xlarge'
};

const Card = ({children, full, vertical, centered, padding, shadow, noBorder, transparent, className, ...props}) => {
  const cardClass = classNames('sg-card', {
    'sg-card--full': full,
    'sg-card--vertical': vertical,
    'sg-card--with-shadow': shadow,
    'sg-card--no-border': noBorder,
    'sg-card--centered': centered,
    'sg-card--transparent': transparent,
    [`sg-card--${padding}`]: padding
  }, className);

  return (
    <div {...props} className={cardClass}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  full: PropTypes.bool,
  vertical: PropTypes.bool,
  centered: PropTypes.bool,
  noBorder: PropTypes.bool,
  shadow: PropTypes.bool,
  transparent: PropTypes.bool,
  padding: PropTypes.oneOf(Object.values(CARD_PADDING)),
  className: PropTypes.string
};

export default Card;
