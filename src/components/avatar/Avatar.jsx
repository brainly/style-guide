import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AvatarContent, {ICON_TYPE, ICON_COLOR} from './AvatarContent';
import {SIZE} from './avatarConstants';

const Avatar = ({size = SIZE.NORMAL, border, spaced, ...contentProps}) => {
  const avatarClass = classNames('sg-avatar', {
    [`sg-avatar--${size.className}`]: size !== SIZE.normal,
    'sg-avatar--with-border': border,
    'sg-avatar--spaced': spaced
  });

  contentProps.iconSize = size.iconSize;

  return <div className={avatarClass}>
    <AvatarContent {...contentProps}/>
  </div>;
};

Avatar.propTypes = {
  size: PropTypes.oneOf(Object.values(SIZE)),
  border: PropTypes.bool,
  spaced: PropTypes.bool,
  imgSrc: PropTypes.string,
  iconType: PropTypes.oneOf(Object.values(ICON_TYPE)),
  iconColor: PropTypes.oneOf(Object.values(ICON_COLOR))
};

export default Avatar;
export {SIZE, ICON_TYPE, ICON_COLOR};
