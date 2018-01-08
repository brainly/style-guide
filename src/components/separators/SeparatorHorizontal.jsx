import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const TYPE = {
  NORMAL: 'normal',
  SPACED: 'spaced',
  SHORT_SPACED: 'short-spaced'
};

const SeparatorHorizontal = ({type = TYPE.NORMAL, className, ...props}) => {
  const separatorClass = classNames('sg-horizontal-separator', {
    [`sg-horizontal-separator--${type}`]: type !== TYPE.NORMAL
  }, className);

  return <div {...props} className={separatorClass}></div>;
};

SeparatorHorizontal.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPE)),
  className: PropTypes.string
};

export default SeparatorHorizontal;
