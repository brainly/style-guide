import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const CARD_PADDING = {
  SMALL: 'padding-small',
  LARGE: 'padding-large'
};

const Card = ({children, full, centered, padding, shadow, noBorder, className, ...props}) => {
  const cardClass = classNames('sg-card', {
    'sg-card--full': full,
    'sg-card--with-shadow': shadow,
    'sg-card--no-border': noBorder,
    'sg-card--centered': centered,
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
  centered: PropTypes.bool,
  noBorder: PropTypes.bool,
  shadow: PropTypes.bool,
  padding: PropTypes.oneOf(Object.values(CARD_PADDING)),
  className: PropTypes.string
};

export default Card;
