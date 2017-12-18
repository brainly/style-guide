import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BUTTON_TYPE = {
  ALT: 'alt',
  DARK: 'dark',
  INVERSE: 'inverse',
  ALT_INVERSE: 'alt-inverse',
  DARK_INVERSE: 'dark-inverse',
  FB: 'fb'
};

const ButtonPrimary = ({disabled, icon, buttonType, children, wide, className, ...props}) => {
  const btnClass = classNames('sg-button-primary', {
    'sg-button-primary--disabled': disabled,
    'sg-button-primary--full-width': wide,
    [`sg-button-primary--${buttonType}`]: buttonType
  }, className);

  let ico;

  if (icon) {
    ico = <span className="sg-button-primary__icon">{icon}</span>;
  }

  let TypeToRender = 'button';

  if (props.href) {
    TypeToRender = 'a';
  }

  return (
    <TypeToRender {...props} disabled={disabled} className={btnClass}>
      {ico}
      {children}
    </TypeToRender>
  );
};

ButtonPrimary.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
  wide: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  buttonType: PropTypes.oneOf(Object.values(BUTTON_TYPE)),
  className: PropTypes.string
};

export default ButtonPrimary;
export {BUTTON_TYPE};
