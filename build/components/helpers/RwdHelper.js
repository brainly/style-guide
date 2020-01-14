import React from 'react';
import classNames from 'classnames';
export var TYPE = {
  SMALL_ONLY: 'small-only',
  MEDIUM_ONLY: 'medium-only',
  MEDIUM_DOWN: 'medium-down',
  MEDIUM_UP: 'medium-up',
  LARGE_ONLY: 'large-only'
};

var RwdHelper = function RwdHelper(_ref) {
  var hide = _ref.hide,
      children = _ref.children;

  if (!children) {
    return null;
  }

  var hideClass = "sg-hide-for-".concat(hide);

  if (typeof children === 'string') {
    return React.createElement("span", {
      className: hideClass
    }, children);
  }

  var finalClassName = classNames(children.props.className, hideClass);
  return React.cloneElement(children, {
    className: finalClassName
  });
};

export default RwdHelper;