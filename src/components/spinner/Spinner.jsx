import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Spinner = ({gray, className, ...props}) => {
  const spinnerClassNames = classNames('sg-spinner', {
    'sg-spinner--gray': gray
  }, className);

  return (
    <div {...props} className={spinnerClassNames} />
  );
};

Spinner.propTypes = {
  gray: PropTypes.bool,
  className: PropTypes.string
};

export default Spinner;
