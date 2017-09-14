import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SIZE = {
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
    nested,
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
    'sg-textarea--nested': nested,
    'sg-textarea--auto-height': autoHeight
  }, className);

  return <textarea className={textareaClass} value={value} {...additionalProps} />;
};

Textarea.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZE)),
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  fullWidth: PropTypes.bool,
  simple: PropTypes.bool,
  autoHeight: PropTypes.bool,
  nested: PropTypes.bool,
  className: PropTypes.string
};

export default Textarea;
export {SIZE};
