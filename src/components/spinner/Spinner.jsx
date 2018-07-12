import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const SPINNER_SIZE = {
  SMALL: 'small',
  XSMALL: 'xsmall',
  XXSMALL: 'xxsmall'
};

const Spinner = ({light, size, className, ...props}) => {
  const spinnerClassNames = classNames('sg-spinner', {
    'sg-spinner--light': light,
    [`sg-spinner--${size}`]: size
  }, className);

  return (
    <div {...props} className={spinnerClassNames} />
  );
};

Spinner.propTypes = {
  light: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(SPINNER_SIZE)),
  className: PropTypes.string
};

export default Spinner;
