import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _ICON_SIZE_FOR_AVATAR, _ICON_SIZE;

import React from 'react';
import classNames from 'classnames';
import Icon from '../icons/Icon';
export var SIZE = {
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
  XLARGE: 'xlarge',
  XXLARGE: 'xxlarge'
};
export var ICON_SIZE_FOR_AVATARS_WITH_BORDER = (_ICON_SIZE_FOR_AVATAR = {}, _defineProperty(_ICON_SIZE_FOR_AVATAR, SIZE.SMALL, 22), _defineProperty(_ICON_SIZE_FOR_AVATAR, SIZE.NORMAL, 30), _defineProperty(_ICON_SIZE_FOR_AVATAR, SIZE.LARGE, 54), _defineProperty(_ICON_SIZE_FOR_AVATAR, SIZE.XLARGE, 78), _defineProperty(_ICON_SIZE_FOR_AVATAR, SIZE.XXLARGE, 102), _ICON_SIZE_FOR_AVATAR);
export var ICON_SIZE = (_ICON_SIZE = {}, _defineProperty(_ICON_SIZE, SIZE.SMALL, 24), _defineProperty(_ICON_SIZE, SIZE.NORMAL, 32), _defineProperty(_ICON_SIZE, SIZE.LARGE, 56), _defineProperty(_ICON_SIZE, SIZE.XLARGE, 80), _defineProperty(_ICON_SIZE, SIZE.XXLARGE, 104), _ICON_SIZE);

var Avatar = function Avatar(_ref) {
  var _classNames;

  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? SIZE.NORMAL : _ref$size,
      _ref$border = _ref.border,
      border = _ref$border === void 0 ? false : _ref$border,
      spaced = _ref.spaced,
      imgSrc = _ref.imgSrc,
      className = _ref.className,
      link = _ref.link,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["size", "border", "spaced", "imgSrc", "className", "link", "title"]);

  var avatarClass = classNames('sg-avatar', (_classNames = {}, _defineProperty(_classNames, "sg-avatar--".concat(size), size !== SIZE.NORMAL), _defineProperty(_classNames, 'sg-avatar--with-border', border), _defineProperty(_classNames, 'sg-avatar--spaced', spaced), _classNames), className);
  var avatarContent;

  if (imgSrc !== undefined && imgSrc !== null && imgSrc !== '') {
    avatarContent = React.createElement("img", {
      className: "sg-avatar__image",
      src: imgSrc,
      alt: title,
      title: title
    });
  } else {
    avatarContent = React.createElement("div", {
      className: "sg-avatar__image sg-avatar__image--icon"
    }, React.createElement(Icon, {
      type: "profile",
      color: "gray-light",
      size: border ? ICON_SIZE_FOR_AVATARS_WITH_BORDER[size] : ICON_SIZE[size]
    }));
  }

  return React.createElement("div", _extends({}, props, {
    className: avatarClass
  }), link !== undefined && link !== '' ? React.createElement("a", {
    href: link,
    title: title
  }, avatarContent) : avatarContent);
};

export default Avatar;