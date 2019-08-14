// @flow strict

import React from 'react';
import type {Node} from 'react';
import classNames from 'classnames';

type ButtonSecondaryTypeType =
  | 'alt'
  | 'dark'
  | 'inverse'
  | 'alt-inverse'
  | 'dark-inverse'
  | 'active-inverse'
  | 'peach';

export const BUTTON_SECONDARY_TYPE = {
  ALT: 'alt',
  DARK: 'dark',
  INVERSE: 'inverse',
  ALT_INVERSE: 'alt-inverse',
  DARK_INVERSE: 'dark-inverse',
  ACTIVE_INVERSE: 'active-inverse',
  ACTIVE_MUSTARD: 'active-mustard',
};

type ButtonSecondaryPropsType = {
  children?: ?Node,
  className?: ?string,
  wide?: ?boolean,
  disabled?: ?boolean,
  small?: ?boolean,
  href?: ?string,
  buttonType?: ?ButtonSecondaryTypeType,
};

const ButtonSecondary = ({
  small,
  wide,
  disabled,
  buttonType,
  children,
  className,
  ...props
}: ButtonSecondaryPropsType) => {
  const btnClass = classNames(
    'sg-button-secondary',
    {
      'sg-button-secondary--small': small,
      'sg-button-secondary--disabled': disabled,
      [`sg-button-secondary--${String(buttonType)}`]: buttonType,
      'sg-button-secondary--full-width': wide,
    },
    className
  );

  let TypeToRender = 'button';

  if (props.href !== undefined && props.href !== null && props.href !== '') {
    TypeToRender = 'a';
  }

  return (
    <TypeToRender {...props} disabled={disabled} className={btnClass}>
      {children}
    </TypeToRender>
  );
};

export default ButtonSecondary;
