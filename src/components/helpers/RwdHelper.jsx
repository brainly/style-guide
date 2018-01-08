import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const TYPE = {
  SMALL_ONLY: 'small-only',
  MEDIUM_ONLY: 'medium-only',
  MEDIUM_DOWN: 'medium-down',
  MEDIUM_UP: 'medium-up',
  LARGE_ONLY: 'large-only'
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
  hide: PropTypes.oneOf(Object.values(TYPE)).isRequired
};

export default RwdHelper;
