import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
import * as SubjectIconModule from './SubjectIcon';
var SubjectIcon = SubjectIconModule.default,
    TYPE = SubjectIconModule.TYPE,
    SIZE = SubjectIconModule.SIZE;

var SubjectIconBox = function SubjectIconBox(_ref) {
  var type = _ref.type,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? SIZE.NORMAL : _ref$size,
      darker = _ref.darker,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["type", "size", "darker", "className"]);

  var boxClass = classNames('sg-subject-icon-box', {
    'sg-subject-icon-box--darker': darker
  }, className);
  return React.createElement("div", _extends({}, props, {
    className: boxClass
  }), React.createElement(SubjectIcon, {
    type: type,
    size: size
  }));
};

export default SubjectIconBox;
export { TYPE, SIZE };