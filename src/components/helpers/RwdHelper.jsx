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
  if (!children) {
    return null;
  }

  const hideClass = `sg-hide-for-${hide}`;

  if (typeof children === 'string') {
    return <span className={hideClass}>{children}</span>;
  }

  const finalClassName = classNames(children.props.className, hideClass);

  return React.cloneElement(children, {className: finalClassName});
};

RwdHelper.propTypes = {
  // One child only !!!
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  hide: PropTypes.oneOf(Object.values(types)).isRequired
};

export default RwdHelper;
export {types};
