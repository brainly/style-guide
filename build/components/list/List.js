import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import classNames from 'classnames';
import React from 'react';

var List = function List(_ref) {
  var spaced = _ref.spaced,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["spaced", "className", "children"]);

  var listClass = classNames('sg-list', {
    'sg-list--spaced-elements': spaced
  }, className);
  return React.createElement("ul", _extends({}, props, {
    className: listClass
  }), children);
};

export default List;