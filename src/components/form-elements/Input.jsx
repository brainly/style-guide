// @flow
import React from 'react';
import classnames from 'classnames';
import type {
  InputType,
  InputColorType,
  InputSizeType
} from './formElementsTypes';

export const TYPE = Object.freeze({
  BUTTON: 'button',
  COLOR: 'color',
  DATE: 'date',
  DATETIME_LOCAL: 'datetime-local',
  EMAIL: 'email',
  FILE: 'file',
  HIDDEN: 'hidden',
  IMAGE: 'image',
  MONTH: 'month',
  NUMBER: 'number',
  PASSWORD: 'password',
  RANGE: 'range',
  RESET: 'reset',
  SEARCH: 'search',
  SUBMIT: 'submit',
  TEL: 'tel',
  TEXT: 'text',
  TIME: 'time',
  URL: 'url',
  WEEK: 'week'
});

export const SIZE = Object.freeze({
  SMALL: 'small',
  LARGE: 'large',
  NORMAL: 'normal'
});

export const COLOR = Object.freeze({
  NORMAL: 'normal',
  LIGHT: 'light',
  LIGHT_ALT: 'light-alt'
});

type PropsType = {
  type?: InputType,
  value?: string | number,
  size?: InputSizeType,
  color?: InputColorType,
  valid?: boolean,
  invalid?: boolean,
  fullWidth?: boolean,
  noBorder?: boolean,
  withIcon?: boolean,
  className?: string,
  setInputRef?: (ref: ?HTMLElement) => mixed
};

const Input = (props: PropsType) => {
  const {
    type = 'text',
    size = SIZE.NORMAL,
    color = COLOR.NORMAL,
    fullWidth,
    withIcon,
    noBorder,
    value,
    valid,
    invalid,
    className,
    setInputRef,
    ...additionalProps
  } = props;

  if (valid && invalid) {
    throw {
      name: 'WrongValidation',
      message: 'Input can be either valid or invalid!'
    };
  }

  const inputClass = classnames('sg-input', {
    [`sg-input--${size}`]: size !== SIZE.NORMAL,
    [`sg-input--${color}`]: color !== COLOR.NORMAL,
    'sg-input--valid': valid,
    'sg-input--invalid': invalid,
    'sg-input--full-width': fullWidth,
    'sg-input--no-border': noBorder,
    'sg-input--with-icon': withIcon
  }, className);

  return <input type={type} ref={setInputRef} className={inputClass} value={value} {...additionalProps} />;
};

export default Input;
