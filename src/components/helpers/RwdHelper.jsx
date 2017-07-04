import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const types = {
  smallOnly: 'small-only',
  mediumOnly: 'medium-only',
  mediumDown: 'medium-down',
  mediumUp: 'medium-up',
  largeOnly: 'large-only'
};

const RwdHelper = ({hide, children}) => {
  const finalClassname = classNames({
    [`sg-hide-for-${hide}`]: hide
  });

  return (
    <div className={finalClassname}>
      {children}
    </div>
  );
};

RwdHelper.propTypes = {
  children: PropTypes.node.isRequired,
  hide: PropTypes.oneOf(types).isRequired
};

export default RwdHelper;
export {types};
