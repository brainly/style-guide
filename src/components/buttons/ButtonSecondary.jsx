import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const types = {
  alt: 'alt',
  dark: 'dark',
  inverse: 'inverse',
  alt_inverse: 'alt-inverse',
  dark_inverse: 'dark-inverse',
  active_inverse: 'active-inverse'
};

const ButtonSecondary = ({small, wide, disabled, type, children, ...props}) => {
  const btnClass = classNames('sg-button-secondary', {
    'sg-button-secondary--small': small,
    'sg-button-secondary--disabled': disabled,
    [`sg-button-secondary--${type}`]: type,
    'sg-button-secondary--full-width': wide,
    'sg-button-secondary--active-inverse-disabled': disabled && types.active_inverse
  });

  return <button {...props} disabled={disabled} className={btnClass}>
    {children}
  </button>;
};

ButtonSecondary.propTypes = {
  small: PropTypes.bool,
  wide: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
  type: PropTypes.oneOf(Object.values(types))
};

export default ButtonSecondary;
export {types};
