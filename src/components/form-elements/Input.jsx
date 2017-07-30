import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TYPE = {
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
};

const SIZE = {
  SMALL: 'small',
  LARGE: 'large',
  NORMAL: 'normal'
};

const COLOR = {
  NORMAL: 'normal',
  LIGHT: 'light',
  LIGHT_ALT: 'light-alt'
};

const Input = props => {
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
    ...additionalProps
  } = props;

  if (valid && invalid) {
    throw {
      name: 'WrongValidation',
      message: 'Input can be either valid or invalid!'
    };
  }

  const inputClass = classnames('sg-input', className, {
    [`sg-input--${size}`]: size !== SIZE.NORMAL,
    [`sg-input--${color}`]: color !== COLOR.NORMAL,
    'sg-input--valid': valid,
    'sg-input--invalid': invalid,
    'sg-input--full-width': fullWidth,
    'sg-input--no-border': noBorder,
    'sg-input--with-icon': withIcon
  });

  return <input type={type} className={inputClass} value={value} {...additionalProps}/>;
};

Input.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPE)),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(Object.values(SIZE)),
  color: PropTypes.oneOf(Object.values(COLOR)),
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  fullWidth: PropTypes.bool,
  noBorder: PropTypes.bool,
  withIcon: PropTypes.bool,
  className: PropTypes.string
};

export default Input;
export {SIZE, COLOR, TYPE};
