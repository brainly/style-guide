import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const types = {
  answer: 'answer',
  answered: 'answered',
  arrow_down: 'arrow_down',
  arrow_double_down: 'arrow_double_down',
  arrow_left: 'arrow_left',
  arrow_right: 'arrow_right',
  arrow_up: 'arrow_up',
  attachment: 'attachment',
  bold: 'bold',
  camera: 'camera',
  check: 'check',
  comment: 'comment',
  counter: 'counter',
  cup: 'cup',
  equation: 'equation',
  excellent: 'excellent',
  friends: 'friends',
  heart: 'heart',
  keyboard: 'keyboard',
  logout: 'logout',
  menu: 'menu',
  messages: 'messages',
  notifications: 'notifications',
  pencil: 'pencil',
  plus: 'plus',
  podium: 'podium',
  points: 'points',
  profile: 'profile',
  profile_edit: 'profile_edit',
  profile_view: 'profile_view',
  question: 'question',
  reload: 'reload',
  report_flag: 'report_flag',
  search: 'search',
  star: 'star',
  stream: 'stream',
  symbols: 'symbols',
  unseen: 'unseen',
  x: 'x',
  fb: 'fb'
};
const colors = {
  adaptive: 'adaptive',
  gray: 'gray',
  gray_secondary: 'gray-secondary',
  gray_light: 'gray-light',
  blue: 'blue',
  mustard: 'mustard',
  lavender: 'lavender',
  peach: 'peach',
  dark: 'dark',
  mint: 'mint'
};
const sizes = [120, 118, 96, 94, 64, 62, 48, 46, 38, 32, 30, 26, 24, 22, 20, 18, 16, 14, 10, 8];

const Icon = ({color, size, type}) => {
  const iconClass = classNames('sg-icon', {
    [`sg-icon--${color}`]: color,
    [`sg-icon--x${size}`]: size
  });
  const iconType = `#icon-${type}`;

  return <svg className={iconClass}>
    <use xlinkHref={iconType}></use>
  </svg>;
};

Icon.propTypes = {
  size: PropTypes.oneOf(sizes),
  color: PropTypes.oneOf(Object.values(colors)),
  type: PropTypes.oneOf(Object.values(types)).isRequired
};

export default Icon;
export {types, colors, sizes};
