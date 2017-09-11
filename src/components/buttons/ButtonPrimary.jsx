import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TYPE = {
  ALT: 'alt',
  DARK: 'dark',
  INVERSE: 'inverse',
  ALT_INVERSE: 'alt-inverse',
  DARK_INVERSE: 'dark-inverse',
  FB: 'fb'
};

const ButtonPrimary = ({disabled, icon, type, children, wide, className, ...props}) => {
  const btnClass = classNames('sg-button-primary', {
    'sg-button-primary--disabled': disabled,
    'sg-button-primary--full-width': wide,
    [`sg-button-primary--${type}`]: type
  }, className);

  let ico;
  let TypeToRender = 'button';

  if (icon) {
    ico = <span className="sg-button-primary__icon">{icon}</span>;
  }

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
  type: PropTypes.oneOf(Object.values(TYPE)),
  className: PropTypes.string
};

export default ButtonPrimary;
export {TYPE};
