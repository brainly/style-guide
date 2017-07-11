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


const TextInput = ({type = 'text', value, valid, invalid, size, fullWidth, spacedBottom = true, color, ...props}) => {
  const inputClass = classnames('sg-input', {
    'sg-input--spaced-bottom': spacedBottom,
    [`sg-input--${size}`]: size !== SIZE.NORMAL,
    [`sg-input--${color}`]: color !== COLOR.NORMAL,
    'sg-input--valid': valid,
    'sg-input--invalid': invalid,
    'sg-input--full-width': fullWidth
  });

  return <input type={type} className={inputClass} value={value} {...props}/>;
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
export {SIZE, COLOR};
