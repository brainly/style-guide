import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const SIZE = {
  NORMAL: 'normal',
  SMALL: 'small',
  LARGE: 'large',
  FULL: 'full'
};

const Separator = ({size = SIZE.NORMAL, className, ...props}) => {
  const separatorClass = classNames('sg-vertical-separator', {
    [`sg-vertical-separator--${size}`]: size !== SIZE.NORMAL
  }, className);

  return <div {...props} className={separatorClass}></div>;
};

Separator.propTypes = {
  size: PropTypes.oneOf(Object.values(SIZE)),
  className: PropTypes.string
};

export default Separator;
