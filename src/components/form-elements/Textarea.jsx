import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export const SIZE = {
  SHORT: 'short',
  NORMAL: 'normal',
  TALL: 'tall',
  XTALL: 'xtall'
};

const Textarea = props => {
  const {
    valid,
    invalid,
    size = SIZE.NORMAL,
    fullWidth,
    simple,
    autoHeight,
    value,
    className,
    textareaRef,
    Type = 'textarea',
    ...additionalProps
  } = props;

  if (valid && invalid) {
    throw {
      name: 'WrongValidation',
      message: 'Textarea can be either valid or invalid!'
    };
  }

  const textareaClass = classnames('sg-textarea', {
    [`sg-textarea--${size}`]: size !== SIZE.NORMAL,
    'sg-textarea--valid': valid,
    'sg-textarea--invalid': invalid,
    'sg-textarea--full-width': fullWidth,
    'sg-textarea--simple': simple,
    'sg-textarea--auto-height': autoHeight
  }, className);

  return <Type
    className={textareaClass}
    ref={textareaRef}
    value={value}
    {...additionalProps}
  />;
};

Textarea.propTypes = {
  Type: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  textareaRef: PropTypes.func,
  value: PropTypes.any,
  size: PropTypes.oneOf(Object.values(SIZE)),
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  fullWidth: PropTypes.bool,
  simple: PropTypes.bool,
  autoHeight: PropTypes.bool,
  className: PropTypes.string
};

export default Textarea;
