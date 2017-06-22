import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ButtonPrimary = ({disabled, type, children, wide, ...props}) => {
  const btnClass = classNames('sg-button-primary', {
    'sg-button-primary--disabled': disabled,
    'sg-button-primary--full-width': wide,
    [`sg-button-primary--${type}`]: type
  });

  return <button {...props} disabled={disabled} className={btnClass}>{children}</button>;
};

ButtonPrimary.propTypes = {
  children: PropTypes.node.isRequired,
  wide: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['alt', 'dark', 'alt-inverse', 'dark-inverse', 'fb'])
};

export default ButtonPrimary;
