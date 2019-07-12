// @flow strict
import React from 'react';
import type {Node} from 'react';
import classNames from 'classnames';

type ButtonPrimaryTypeType =
  | 'alt'
  | 'dark'
  | 'inverse'
  | 'alt-inverse'
  | 'dark-inverse'
  | 'peach'
  | 'fb';

export const BUTTON_PRIMARY_TYPE = {
  ALT: 'alt',
  DARK: 'dark',
  INVERSE: 'inverse',
  ALT_INVERSE: 'alt-inverse',
  DARK_INVERSE: 'dark-inverse',
  FB: 'fb'
};

type ButtonPrimaryPropsType = {
  children?: ?Node,
  className?: ?string,
  icon?: ?Node,
  wide?: ?boolean,
  disabled?: ?boolean,
  href?: ?string,
  buttonType?: ?ButtonPrimaryTypeType
};

const ButtonPrimary = ({disabled, icon, buttonType, children, wide, className, ...props}: ButtonPrimaryPropsType) => {
  const btnClass = classNames('sg-button-primary', {
    'sg-button-primary--disabled': disabled,
    'sg-button-primary--full-width': wide,
    [`sg-button-primary--${String(buttonType)}`]: buttonType
  }, className);

  let ico;

  if (icon !== undefined && icon !== null && icon !== '') {
    ico = <span className="sg-button-primary__icon">{icon}</span>;
  }

  let TypeToRender = 'button';

  if (props.href !== undefined && props.href !== null && props.href !== '') {
    TypeToRender = 'a';
  }

  return (
    <TypeToRender {...props} disabled={disabled} className={btnClass}>
      {ico}
      {children}
    </TypeToRender>
  );
};

export default ButtonPrimary;
