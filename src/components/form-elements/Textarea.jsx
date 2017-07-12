import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SIZE = {
  SHORT: 'short',
  NORMAL: 'normal',
  TALL: 'tall',
  XTALL: 'xtall'
};

const VALIDATION = {
  VALID: true,
  INVALID: false,
  UNDEFINED: undefined
};


const Textarea = props => {
  const {
    type = 'text',
    valid = VALIDATION.UNDEFINED,
    size = SIZE.NORMAL,
    fullWidth,
    simple,
    autoHeight,
    value,
    ...additionalProps
  } = props;

  const textareaClass = classnames('sg-textarea', {
    [`sg-textarea--${size}`]: size !== SIZE.NORMAL,
    'sg-textarea--valid': valid === VALIDATION.VALID,
    'sg-textarea--invalid': valid === VALIDATION.INVALID,
    'sg-textarea--full-width': fullWidth,
    'sg-textarea--simple': simple,
    'sg-textarea--auto-height': autoHeight
  });

  return <textarea type={type} className={textareaClass} value={value} {...additionalProps}/>;
};

Textarea.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZE)),
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  fullWidth: PropTypes.bool,
  simple: PropTypes.bool,
  autoHeight: PropTypes.bool
};

export default Textarea;
export {SIZE, VALIDATION};
