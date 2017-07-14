import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SIZE = {
  NORMAL: 'normal',
  SMALL: 'small',
  LARGE: 'large'
};

const Separator = ({size = SIZE.NORMAL}) => {

  const separatorClass = classNames('sg-vertical-separator', {
    [`sg-vertical-separator--${size}`]: size !== SIZE.NORMAL
  });

  return <div className = {separatorClass}></div>;
};

Separator.propTypes = {
  size: PropTypes.oneOf(Object.values(SIZE))
};

export default Separator;
export {SIZE};
