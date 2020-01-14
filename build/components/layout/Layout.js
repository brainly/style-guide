import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';

var Layout = function Layout(_ref) {
  var children = _ref.children,
      header = _ref.header,
      footer = _ref.footer,
      reversedOrder = _ref.reversedOrder,
      noMaxWidth = _ref.noMaxWidth,
      noMarginTop = _ref.noMarginTop,
      fullPage = _ref.fullPage,
      wide = _ref.wide,
      threeColumns = _ref.threeColumns,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "header", "footer", "reversedOrder", "noMaxWidth", "noMarginTop", "fullPage", "wide", "threeColumns", "className"]);

  var layoutClass = classNames('sg-layout', className, {
    'sg-layout--three-columns': threeColumns
  });
  var layoutContainerClass = classNames('sg-layout__container', {
    'sg-layout__container--reversed-order': reversedOrder,
    'sg-layout__container--no-max-width': noMaxWidth,
    'sg-layout__container--no-margin-top': noMarginTop,
    'sg-layout__container--full-page': fullPage
  });
  var footerContent;

  if (footer !== undefined) {
    footerContent = React.createElement("div", {
      className: "sg-layout__footer"
    }, footer);
  }

  return React.createElement("div", _extends({}, props, {
    className: layoutClass
  }), header, React.createElement("div", {
    className: layoutContainerClass
  }, children), footerContent);
};

export default Layout;