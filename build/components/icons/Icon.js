import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
export var TYPE = {
  ALL_QUESTIONS: 'all_questions',
  ANSWER: 'answer',
  ARROW_DOUBLE_DOWN: 'arrow_double_down',
  ARROW_DOWN: 'arrow_down',
  ARROW_LEFT: 'arrow_left',
  ARROW_RIGHT: 'arrow_right',
  ARROW_UP: 'arrow_up',
  ASK_PARENT_TO_PAY: 'ask_parent_to_pay',
  ATTACHMENT: 'attachment',
  BOLD: 'bold',
  BULLETED_LIST: 'bulleted_list',
  CAMERA: 'camera',
  CHECK: 'check',
  CLOSE: 'close',
  COUNTER: 'counter',
  CREDIT_CARD: 'credit_card',
  EQUATION: 'equation',
  EXCELLENT: 'excellent',
  EXCLAMATION_MARK: 'exclamation_mark',
  FACEBOOK: 'facebook',
  FRIENDS: 'friends',
  HEADING: 'heading',
  HEART: 'heart',
  IMAGE: 'image',
  INFLUENCE: 'influence',
  INSTRAGRAM: 'instagram',
  ITALIC: 'italic',
  LESS: 'less',
  LINKEDIN: 'linkedin',
  LOCK_WITH_PLAY: 'lock_with_play',
  LOGOUT: 'logout',
  MEDIUM: 'medium',
  MENU: 'menu',
  MESSAGES: 'messages',
  MIC: 'mic',
  MONEY_TRANSFER: 'money_transfer',
  MORE: 'more',
  NOTIFICATIONS: 'notifications',
  NUMBERED_LIST: 'numbered_list',
  PADLOCK: 'padlock',
  PENCIL: 'pencil',
  PLAY: 'play',
  PLUS: 'plus',
  POINTS: 'points',
  PROFILE: 'profile',
  PROFILE_VIEW: 'profile_view',
  QUESTION: 'question',
  RECENT_QUESTIONS: 'recent_questions',
  RELOAD: 'reload',
  REPORT_FLAG: 'report_flag',
  ROTATE: 'rotate',
  SEARCH: 'search',
  SEEN: 'seen',
  SETTINGS: 'settings',
  SHARE: 'share',
  SMS: 'sms',
  STAR_HALF: 'star_half',
  STAR: 'star',
  SUBTITLE: 'subtitle',
  SYMBOLS: 'symbols',
  TITLE: 'title',
  TOUGHEST_QUESTIONS: 'toughest_questions',
  TWITTER: 'twitter',
  UNDERLINED: 'underlined',
  UNSEEN: 'unseen',
  VERIFIED: 'verified',
  YOUTUBE: 'youtube'
};
export var ICON_COLOR = {
  ADAPTIVE: 'adaptive',
  BLUE: 'blue',
  DARK: 'dark',
  GRAY: 'gray',
  GRAY_LIGHT: 'gray-light',
  GRAY_SECONDARY: 'gray-secondary',
  LAVENDER: 'lavender',
  LIGHT: 'light',
  MINT: 'mint',
  MUSTARD: 'mustard',
  PEACH: 'peach'
};
export var ICON_TAG_TYPE = {
  DIV: 'div',
  SPAN: 'span'
}; // As soon as we change Avatars to new the new icon, we could clean up sizes of the icons.

export var SIZE = [120, 118, 104, 102, 80, 78, 64, 62, 56, 54, 48, 46, 40, 32, 30, 26, 24, 22, 20, 18, 16, 14, 10];

var Icon = function Icon(_ref) {
  var _classNames;

  var color = _ref.color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      type = _ref.type,
      children = _ref.children,
      _ref$tagType = _ref.tagType,
      tagType = _ref$tagType === void 0 ? 'div' : _ref$tagType,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["color", "size", "type", "children", "tagType", "className"]);

  var iconClass = classNames('sg-icon', (_classNames = {}, _defineProperty(_classNames, "sg-icon--".concat(String(color)), color), _defineProperty(_classNames, "sg-icon--x".concat(String(size)), size), _classNames), className);
  var iconType = "#icon-".concat(type);
  var Tag = tagType;
  return React.createElement(Tag, _extends({}, props, {
    className: iconClass
  }), type ? React.createElement("svg", {
    className: "sg-icon__svg"
  }, React.createElement("use", {
    xlinkHref: iconType
  })) : children);
};

export default Icon;