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


const TextTextarea = props => {
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

  const textareaClass = classnames('sg-textarea', {
    'sg-textarea--spaced-bottom': spacedBottom,
    [`sg-textarea--${size}`]: size !== SIZE.NORMAL,
    [`sg-textarea--${color}`]: color !== COLOR.NORMAL,
    'sg-textarea--valid': valid === VALIDATION.VALID,
    'sg-textarea--invalid': valid === VALIDATION.INVALID,
    'sg-textarea--full-width': fullWidth
  });

  return <textarea type={type} className={textareaClass} value={value} {...additionalProps}/>;
};

TextTextarea.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZE)),
  color: PropTypes.oneOf(Object.values(COLOR)),
  spacedBottom: PropTypes.bool,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  fullWidth: PropTypes.bool
};

export default TextTextarea;
export {SIZE, COLOR, VALIDATION};
