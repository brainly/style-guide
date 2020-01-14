import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';

var Breadcrumb = function Breadcrumb(_ref) {
  var className = _ref.className,
      short = _ref.short,
      adaptive = _ref.adaptive,
      _ref$elements = _ref.elements,
      elements = _ref$elements === void 0 ? [] : _ref$elements,
      props = _objectWithoutProperties(_ref, ["className", "short", "adaptive", "elements"]);

  var breadcrumbClass = classNames('sg-breadcrumb-list', {
    'sg-breadcrumb-list--short': short,
    'sg-breadcrumb-list--adaptive': adaptive
  }, className);
  return React.createElement("ul", _extends({}, props, {
    className: breadcrumbClass
  }), elements.map(function (elem, i) {
    return React.createElement("li", {
      key: i,
      className: "sg-breadcrumb-list__element"
    }, elem);
  }));
};

export default Breadcrumb;