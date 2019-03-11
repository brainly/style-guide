import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const SIZE = {
  NORMAL: 'normal',
  SMALL: 'small',
  LARGE: 'large',
  FULL: 'full'
};

const Separator = ({size = SIZE.NORMAL, white, grayDark, className, ...props}) => {
  const separatorClass = classNames('sg-vertical-separator', {
    [`sg-vertical-separator--${size}`]: size !== SIZE.NORMAL,
    'sg-vertical-separator--white': white,
    'sg-vertical-separator--gray-dark': grayDark
  }, className);

  return <div {...props} className={separatorClass} />;
};

Separator.propTypes = {
  size: PropTypes.oneOf(Object.values(SIZE)),
  white: PropTypes.bool,
  grayDark: PropTypes.bool,
  className: PropTypes.string
};

export default Separator;
