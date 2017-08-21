import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TYPE = {
  ANSWER: 'answer',
  ANSWERED: 'answered',
  ARROW_DOWN: 'arrow_down',
  ARROW_DOUBLE_DOWN: 'arrow_double_down',
  ARROW_LEFT: 'arrow_left',
  ARROW_RIGHT: 'arrow_right',
  ARROW_UP: 'arrow_up',
  ATTACHMENT: 'attachment',
  BOLD: 'bold',
  CAMERA: 'camera',
  CHECK: 'check',
  COMMENT: 'comment',
  COUNTER: 'counter',
  CUP: 'cup',
  EQUATION: 'equation',
  EXCELLENT: 'excellent',
  FRIENDS: 'friends',
  HEART: 'heart',
  KEYBOARD: 'keyboard',
  LOGOUT: 'logout',
  MENU: 'menu',
  MESSAGES: 'messages',
  NOTIFICATIONS: 'notifications',
  PENCIL: 'pencil',
  PLUS: 'plus',
  PODIUM: 'podium',
  POINTS: 'points',
  PROFILE: 'profile',
  PROFILE_EDIT: 'profile_edit',
  PROFILE_VIEW: 'profile_view',
  QUESTION: 'question',
  RELOAD: 'reload',
  REPORT_FLAG: 'report_flag',
  SEARCH: 'search',
  STAR: 'star',
  STREAM: 'stream',
  SYMBOLS: 'symbols',
  UNSEEN: 'unseen',
  X: 'x',
  FB: 'fb'
};
const COLOR = {
  ADAPTIVE: 'adaptive',
  GRAY: 'gray',
  GRAY_SECONDARY: 'gray-secondary',
  GRAY_LIGHT: 'gray-light',
  BLUE: 'blue',
  MUSTARD: 'mustard',
  LAVENDER: 'lavender',
  PEACH: 'peach',
  DARK: 'dark',
  MINT: 'mint'
};
const SIZE = [120, 118, 96, 94, 64, 62, 48, 46, 38, 32, 30, 26, 24, 22, 20, 18, 16, 14, 10, 8];

const Icon = ({color, size = 24, type, className, ...props}) => {
  const iconClass = classNames('sg-icon', {
    [`sg-icon--${color}`]: color,
    [`sg-icon--x${size}`]: size
  }, className);
  const iconType = `#icon-${type}`;

  return <svg {...props} className={iconClass}>
    <use xlinkHref={iconType}></use>
  </svg>;
};

Icon.propTypes = {
  size: PropTypes.oneOf(SIZE),
  color: PropTypes.oneOf(Object.values(COLOR)),
  type: PropTypes.oneOf(Object.values(TYPE)).isRequired,
  className: PropTypes.string
};

export default Icon;
export {TYPE, COLOR, SIZE};
