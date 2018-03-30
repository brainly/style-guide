import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const CARD_HOLE_COLOR = {
  BLUE: 'blue',
  LAVENDER: 'lavender',
  MINT: 'mint',
  MINT_SECONDARY: 'mint-secondary',
  NAVYBLUE: 'navyblue-secondary',
  NAVYBLUE_SECONDARY: 'navyblue-secondary',
  NAVYBLUE_SECONDARY_LIGHT: 'navyblue-secondary-light',
  GRAY: 'gray',
  GRAY_SECONDARY: 'gray-secondary',
  GRAY_SECONDARY_LIGHT: 'gray-secondary-light',
  GRAY_SECONDARY_LIGHTEST: 'gray-secondary-lightest'
};

const CardHole = ({color, children, className, ...props}) => {
  const cardHoleClass = classnames('sg-card__hole', {
    [`sg-card__hole--${color}`]: color
  }, className);

  return (
    <div {...props} className={cardHoleClass}>
      {children}
    </div>
  );
};

CardHole.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(CARD_HOLE_COLOR))
};

export default CardHole;
