import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';

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
    autoHeightReact,
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

  const textareaProps = {
    className: textareaClass, value, ...additionalProps
  };

  if (autoHeightReact) {
    return <TextareaAutosize {...textareaProps} />;
  } else {
    return <textarea {...textareaProps} />;
  }
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
  autoHeightReact: PropTypes.bool,
  className: PropTypes.string
};

export default Textarea;
export {SIZE};
