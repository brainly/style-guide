// @flow

import * as React from 'react';
import classNames from 'classnames';
import {BUTTON_SIZE, BUTTON_TYPE} from './ButtonConsts';

type ButtonTypeType =
  | 'primary'
  | 'inverted'
  | 'primary-blue'
  | 'primary-mint'
  | 'secondary'
  | 'secondary-peach'
  | 'link-button'
  | 'link-button-inverted'
  | 'destructive'
  | 'warning'
  | 'facebook';

type ButtonSizeType =
  | 'large'
  | 'medium'
  | 'small';

export {BUTTON_SIZE, BUTTON_TYPE};

export type ButtonPropsType = {
  icon?: React.Node,
  children?: React.Node,
  href?: string,
  size?: ButtonSizeType,
  type: ButtonTypeType,
  disabled?: boolean,
  className?: string
};

const Button = ({
  size,
  type,
  disabled,
  children,
  className,
  ...props
}: ButtonPropsType) => {
  const btnClass = classNames(
    'sg-button-next', {
      [`sg-button-next--${size || ''}`]: size,
      [`sg-button-next--${type || ''}`]: type,
      'sg-button-next--disabled': disabled
    },
    className
  );

  let TypeToRender = 'button';

  if (props.href) {
    TypeToRender = 'a';
  }

  return (
    <TypeToRender {...props} disabled={disabled} className={btnClass}>
      {children}
    </TypeToRender>
  );
};

export default Button;
