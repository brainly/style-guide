import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const TYPE = {
  NORMAL: 'normal',
  SPACED: 'spaced',
  SHORT_SPACED: 'short-spaced'
};

const SeparatorHorizontal = ({type = TYPE.NORMAL, white, grayDark, className, ...props}) => {
  const separatorClass = classNames('sg-horizontal-separator', {
    [`sg-horizontal-separator--${type}`]: type !== TYPE.NORMAL,
    'sg-horizontal-separator--white': white,
    'sg-horizontal-separator--gray-dark': grayDark
  }, className);

  return <div {...props} className={separatorClass} />;
};

SeparatorHorizontal.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPE)),
  white: PropTypes.bool,
  grayDark: PropTypes.bool,
  className: PropTypes.string
};

export default SeparatorHorizontal;
