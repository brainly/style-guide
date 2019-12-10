// @flow strict

import React from 'react';
import classnames from 'classnames';

type InputSizeType = 'normal' | 'large';

type InputColorType = 'default' | 'white';

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
  WEEK: 'week',
});

export const SIZE = Object.freeze({
  LARGE: 'large',
  NORMAL: 'normal',
});

export const COLOR = Object.freeze({
  DEFAULT: 'default',
  WHITE: 'white',
});

export type InputPropsType = {
  /**
   * Optional specification for input type
   * @example <Input type="email" placeholder="placeholder" />
   */
  type?: ?InputType,
  /**
   * Optional specification for input value, which can be string or number
   * @example <Input type="email" value={2} />
   */
  value?: string | number,
  /**
   * There are two sizes options for most of the form elements
   * @example <Input size="normal" placeholder="placeholder" />
   * @see size="normal" https://styleguide.brainly.com/latest/docs/interactive.html?size="normal"#input
   * @see size="large" https://styleguide.brainly.com/latest/docs/interactive.html?size="large"#input
   */
  size?: ?InputSizeType,
  /**
   * There are two color variants for form elements, default does not have to be specified
   * @example <Input color="white" placeholder="placeholder" />
   * @see color="default" https://styleguide.brainly.com/latest/docs/interactive.html?color="default"#input
   * @see color="white" https://styleguide.brainly.com/latest/docs/interactive.html?color="white"#input
   */
  color?: ?InputColorType,
  /**
   * Optional boolean to specified if it's valid
   * @example <Input valid placeholder="placeholder" />
   */
  valid?: boolean,
  /**
   * Optional boolean to specified if it's invalid
   * @example <Input invalid placeholder="placeholder" />
   */
  invalid?: boolean,
  /**
   * Optional boolean to specified if it's full width
   * @example <Input fullWidth placeholder="placeholder" />
   */
  fullWidth?: boolean,
  /**
   * Optional boolean to specified if it's with icon, used in search component
   * @example <Input withIcon placeholder="placeholder" />
   */
  withIcon?: boolean,
  /**
   * Additional class names
   */
  className?: string,
  /**
   * Additional function to set ref for input
   */
  setInputRef?: (ref: ?HTMLElement) => mixed,
  ...
};

const Input = (props: InputPropsType) => {
  const {
    type = 'text',
    size = SIZE.NORMAL,
    color = COLOR.DEFAULT,
    fullWidth,
    withIcon,
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
      message: 'Input can be either valid or invalid!',
    };
  }

  const inputClass = classnames(
    'sg-input',
    {
      [`sg-input--${String(size)}`]: size !== SIZE.NORMAL,
      [`sg-input--${String(color)}`]: color !== COLOR.DEFAULT,
      'sg-input--valid': valid,
      'sg-input--invalid': invalid,
      'sg-input--full-width': fullWidth,
      'sg-input--with-icon': withIcon,
    },
    className
  );

  return (
    <input
      {...additionalProps}
      type={type}
      ref={setInputRef}
      className={inputClass}
      value={value}
    />
  );
};

export default Input;
