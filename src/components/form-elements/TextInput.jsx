import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

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

const VALIDATION = {
  VALID: true,
  INVALID: false,
  UNDEFINED: undefined
};


const TextInput = props => {
  const {
    type = 'text',
    spacedBottom = true,
    valid = VALIDATION.UNDEFINED,
    size = SIZE.NORMAL,
    color = COLOR.NORMAL,
    fullWidth,
    value,
    ...additionalProps
  } = props;

  const inputClass = classnames('sg-input', {
    'sg-input--spaced-bottom': spacedBottom,
    [`sg-input--${size}`]: size !== SIZE.NORMAL,
    [`sg-input--${color}`]: color !== COLOR.NORMAL,
    'sg-input--valid': valid === VALIDATION.VALID,
    'sg-input--invalid': valid === VALIDATION.INVALID,
    'sg-input--full-width': fullWidth
  });

  return <input type={type} className={inputClass} value={value} {...additionalProps}/>;
};

TextInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZE)),
  color: PropTypes.oneOf(Object.values(COLOR)),
  spacedBottom: PropTypes.bool,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  fullWidth: PropTypes.bool
};

export default TextInput;
export {SIZE, COLOR, VALIDATION};
