import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classnames from 'classnames';
export var ACTION_LIST_HOLE_SPACING = {
  XSMALL: 'xsmall',
  SMALL: 'small'
};

var ActionListHole = function ActionListHole(_ref) {
  var _classnames;

  var children = _ref.children,
      asContainer = _ref.asContainer,
      spacing = _ref.spacing,
      noSpacing = _ref.noSpacing,
      spaceBellow = _ref.spaceBellow,
      spacedLarge = _ref.spacedLarge,
      noShrink = _ref.noShrink,
      grow = _ref.grow,
      toEnd = _ref.toEnd,
      toRight = _ref.toRight,
      stretch = _ref.stretch,
      equalWidth = _ref.equalWidth,
      hideOverflow = _ref.hideOverflow,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "asContainer", "spacing", "noSpacing", "spaceBellow", "spacedLarge", "noShrink", "grow", "toEnd", "toRight", "stretch", "equalWidth", "hideOverflow", "className"]);

  var actionListHoleClass = classnames('sg-actions-list__hole', (_classnames = {
    'sg-actions-list__hole--container': asContainer,
    'sg-actions-list__hole--no-spacing': noSpacing,
    'sg-actions-list__hole--space-bellow': spaceBellow
  }, _defineProperty(_classnames, "sg-actions-list__hole--spaced-".concat(String(spacing)), spacing), _defineProperty(_classnames, 'sg-actions-list__hole--spaced-large', spacedLarge), _defineProperty(_classnames, 'sg-actions-list__hole--no-shrink', noShrink), _defineProperty(_classnames, 'sg-actions-list__hole--grow', grow), _defineProperty(_classnames, 'sg-actions-list__hole--to-end', toEnd), _defineProperty(_classnames, 'sg-actions-list__hole--to-right', toRight), _defineProperty(_classnames, 'sg-actions-list__hole--stretch', stretch), _defineProperty(_classnames, 'sg-actions-list__hole--equal-width', equalWidth), _defineProperty(_classnames, 'sg-actions-list__hole--hide-overflow', hideOverflow), _classnames), className);
  return React.createElement("div", _extends({}, props, {
    className: actionListHoleClass
  }), children);
};

export default ActionListHole;