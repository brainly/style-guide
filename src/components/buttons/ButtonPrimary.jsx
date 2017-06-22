import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const types = {
  alt: 'alt',
  dark: 'dark',
  inverse: 'inverse',
  alt_inverse: 'alt-inverse',
  dark_inverse: 'dark-inverse',
  fb: 'fb'
};


const ButtonPrimary = ({disabled, icon, type, children, wide, ...props}) => {
  const btnClass = classNames('sg-button-primary', {
    'sg-button-primary--disabled': disabled,
    'sg-button-primary--full-width': wide,
    [`sg-button-primary--${type}`]: type
  });

  let ico;

  if (icon) {
    ico = <span className="sg-button-primary__icon">{icon}</span>;
  }

  return <button {...props} disabled={disabled} className={btnClass}>
    {ico}
    {children}
  </button>;
};

ButtonPrimary.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
  wide: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(Object.values(types))
};

export default ButtonPrimary;
export {types};
