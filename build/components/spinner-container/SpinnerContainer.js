import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import * as SpinnerModule from '../spinner/Spinner';
import classnames from 'classnames';
var Spinner = SpinnerModule.default;
export { SPINNER_SIZE } from '../spinner/Spinner';

var SpinnerContainer = function SpinnerContainer(_ref) {
  var loading = _ref.loading,
      light = _ref.light,
      fullWidth = _ref.fullWidth,
      size = _ref.size,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["loading", "light", "fullWidth", "size", "children"]);

  return React.createElement("div", _extends({}, props, {
    className: classnames('sg-spinner-container', {
      'sg-spinner-container--full-width': fullWidth
    })
  }), children, loading === true && React.createElement("div", {
    className: "sg-spinner-container__overlay"
  }, React.createElement(Spinner, {
    light: light,
    size: size
  })));
};

export default SpinnerContainer;