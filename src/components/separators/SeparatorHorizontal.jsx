import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TYPE = {
  NORMAL: 'normal',
  SPACED: 'spaced',
  SHORT_SPACED: 'short-spaced'
};

const SeparatorHorizontal = ({type = TYPE.NORMAL}) => {

  const separatorClass = classNames('sg-horizontal-separator', {
    [`sg-horizontal-separator--${type}`]: type !== TYPE.NORMAL
  });

  return <div className = {separatorClass}></div>;
};

SeparatorHorizontal.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPE))
};

export default SeparatorHorizontal;
export {TYPE};
