// @flow strict
import React from 'react';
import classnames from 'classnames';

type InputSizeType =
  | 'small'
  | 'normal'
  | 'large';

type InputColorType =
  | 'normal'
  | 'light'
  | 'light-alt';

type InputType =
  | 'button'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

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

export type InputPropsType = {
  +type?: ?InputType,
  +value?: string | number,
  +size?: ?InputSizeType,
  +color?: ?InputColorType,
  +valid?: boolean,
  +invalid?: boolean,
  +fullWidth?: boolean,
  +noBorder?: boolean,
  +withIcon?: boolean,
  +className?: string,
  +setInputRef?: (ref: ?HTMLElement) => mixed
};

const Input = (props: InputPropsType) => {
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

  if (valid === true && invalid === true) {
    throw {
      name: 'WrongValidation',
      message: 'Input can be either valid or invalid!'
    };
  }

  const inputClass = classnames('sg-input', {
    [`sg-input--${String(size)}`]: size !== SIZE.NORMAL,
    [`sg-input--${String(color)}`]: color !== COLOR.NORMAL,
    'sg-input--valid': valid,
    'sg-input--invalid': invalid,
    'sg-input--full-width': fullWidth,
    'sg-input--no-border': noBorder,
    'sg-input--with-icon': withIcon
  }, className);

  return <input type={type} ref={setInputRef} className={inputClass} value={value} {...additionalProps} />;
};

export default Input;
