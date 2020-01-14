import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import * as React from 'react';
import classNames from 'classnames';
import { FLEX_DIRECTION, FLEX_JUSTIFY_VALUES, FLEX_ALIGNMENT_VALUES, FLEX_MARGINS } from './FlexConsts';
export { FLEX_DIRECTION, FLEX_JUSTIFY_VALUES, FLEX_ALIGNMENT_VALUES, FLEX_MARGINS };

var Flex = function Flex(props) {
  var _classNames;

  var fullWidth = props.fullWidth,
      fullHeight = props.fullHeight,
      noShrink = props.noShrink,
      inlineFlex = props.inlineFlex,
      alignItems = props.alignItems,
      alignContent = props.alignContent,
      justifyContent = props.justifyContent,
      wrap = props.wrap,
      wrapReverse = props.wrapReverse,
      alignSelf = props.alignSelf,
      direction = props.direction,
      margin = props.margin,
      marginTop = props.marginTop,
      marginBottom = props.marginBottom,
      marginLeft = props.marginLeft,
      marginRight = props.marginRight,
      children = props.children,
      className = props.className,
      otherProps = _objectWithoutProperties(props, ["fullWidth", "fullHeight", "noShrink", "inlineFlex", "alignItems", "alignContent", "justifyContent", "wrap", "wrapReverse", "alignSelf", "direction", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight", "children", "className"]);

  var flexClass = classNames('sg-flex', (_classNames = {
    'sg-flex--full-width': fullWidth,
    'sg-flex--full-height': fullHeight,
    'sg-flex--no-shrink': noShrink,
    'sg-flex--inline': inlineFlex
  }, _defineProperty(_classNames, "sg-flex--align-items-".concat(alignItems || ''), alignItems), _defineProperty(_classNames, "sg-flex--align-content-".concat(alignContent || ''), alignContent), _defineProperty(_classNames, "sg-flex--align-self-".concat(alignSelf || ''), alignSelf), _defineProperty(_classNames, "sg-flex--justify-content-".concat(justifyContent || ''), justifyContent), _defineProperty(_classNames, 'sg-flex--wrap', wrap), _defineProperty(_classNames, 'sg-flex--wrap-reverse', wrapReverse), _defineProperty(_classNames, 'sg-flex--column', direction === FLEX_DIRECTION.COLUMN), _defineProperty(_classNames, 'sg-flex--column-reverse', direction === FLEX_DIRECTION.COLUMN_REVERSE), _defineProperty(_classNames, 'sg-flex--row', direction === FLEX_DIRECTION.ROW), _defineProperty(_classNames, 'sg-flex--row-reverse', direction === FLEX_DIRECTION.ROW_REVERSE), _defineProperty(_classNames, "sg-flex--margin-".concat(margin || ''), margin), _defineProperty(_classNames, "sg-flex--margin-top-".concat(marginTop || ''), marginTop), _defineProperty(_classNames, "sg-flex--margin-right-".concat(marginRight || ''), marginRight), _defineProperty(_classNames, "sg-flex--margin-bottom-".concat(marginBottom || ''), marginBottom), _defineProperty(_classNames, "sg-flex--margin-left-".concat(marginLeft || ''), marginLeft), _classNames), className);
  return React.createElement("div", _extends({}, otherProps, {
    className: flexClass
  }), children);
};

export default Flex;