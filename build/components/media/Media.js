import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classnames from 'classnames';

var Media = function Media(props) {
  var _props$contentArray = props.contentArray,
      contentArray = _props$contentArray === void 0 ? [] : _props$contentArray,
      aside = props.aside,
      className = props.className,
      toRight = props.toRight,
      focused = props.focused,
      clickable = props.clickable,
      noPadding = props.noPadding,
      transparent = props.transparent,
      graySecondaryLight = props.graySecondaryLight,
      small = props.small,
      spacedBottom = props.spacedBottom,
      restProps = _objectWithoutProperties(props, ["contentArray", "aside", "className", "toRight", "focused", "clickable", "noPadding", "transparent", "graySecondaryLight", "small", "spacedBottom"]);

  var mediaClassName = classnames('sg-media', {
    'sg-media--to-right': toRight,
    'sg-media--focused': focused,
    'sg-media--clickable': clickable,
    'sg-media--no-padding': noPadding,
    'sg-media--transparent': transparent,
    'sg-media--gray-secondary-light': graySecondaryLight
  }, className);
  var contentClassName = classnames('sg-media__content', {
    'sg-media__content--small': small,
    'sg-media__content--spaced-bottom': spacedBottom
  });
  return React.createElement("div", _extends({}, restProps, {
    className: mediaClassName
  }), React.createElement("div", {
    className: "sg-media__aside"
  }, aside), React.createElement("div", {
    className: "sg-media__wrapper"
  }, contentArray.map(function (content, index) {
    return React.createElement("div", {
      key: index,
      className: contentClassName
    }, content);
  })));
};

export default Media;