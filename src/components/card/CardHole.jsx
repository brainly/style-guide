import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const COLOR = {
  BLUE: 'blue',
  MINT: 'mint',
  NAVYBLUE: 'navyblue-secondary',
  NAVYBLUE_SECONDARY: 'navyblue-secondary',
  NAVYBLUE_SECONDARY_LIGHT: 'navyblue-secondary-light',
  GRAY: 'gray',
  GRAY_SECONDARY: 'gray-secondary',
  GRAY_SECONDARY_LIGHT: 'gray-secondary-light'
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
  color: PropTypes.oneOf(Object.values(COLOR))
};

export default CardHole;
