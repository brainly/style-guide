import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TYPE_ACTIVE_INVERSE = 'active-inverse';

const ButtonSecondary = ({small, disabled, type, children, ...props}) => {
  const btnClass = classNames('sg-button-secondary', {
    'sg-button-secondary--small': small,
    'sg-button-secondary--disabled': disabled,
    [`sg-button-secondary--${type}`]: type,
    'sg-button-secondary--active-inverse-disabled': disabled && type === TYPE_ACTIVE_INVERSE // special disable option
  });

  return <button {...props} disabled={disabled} className={btnClass}>{children}</button>;
};

ButtonSecondary.propTypes = {
  small: PropTypes.bool,
  wide: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['alt', 'dark', 'inverse', 'alt-inverse', 'dark-inverse', TYPE_ACTIVE_INVERSE])
};

export default ButtonSecondary;
