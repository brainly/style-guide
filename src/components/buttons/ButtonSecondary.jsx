import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TYPE = {
  ALT: 'alt',
  DARK: 'dark',
  INVERSE: 'inverse',
  ALT_INVERSE: 'alt-inverse',
  DARK_INVERSE: 'dark-inverse',
  ACTIVE_INVERSE: 'active-inverse'
};

const ButtonSecondary = ({small, wide, disabled, type, children, className, ...props}) => {
  const btnClass = classNames('sg-button-secondary', {
    'sg-button-secondary--small': small,
    'sg-button-secondary--disabled': disabled,
    [`sg-button-secondary--${type}`]: type,
    'sg-button-secondary--full-width': wide,
    'sg-button-secondary--active-inverse-disabled': disabled && TYPE.ACTIVE_INVERSE
  }, className);

  return (
    <button {...props} disabled={disabled} className={btnClass}>
      {children}
    </button>
  );
};

ButtonSecondary.propTypes = {
  small: PropTypes.bool,
  wide: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(Object.values(TYPE)),
  className: PropTypes.string
};

export default ButtonSecondary;
export {TYPE};
