import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon, {TYPE as ICON_TYPE, colors as ICON_COLOR} from '../icons/Icon';

const SIZE = {
  XSMALL: {className: 'xsmall', iconSize: 16},
  SMALL: {className: 'small', iconSize: 24},
  NORMAL: {className: 'normal', iconSize: 32},
  LARGE: {className: 'large', iconSize: 48},
  XLARGE: {className: 'xlarge', iconSize: 64},
  XXLARGE: {className: 'xxlarge', iconSize: 96},
  XXXLARGE: {className: 'xxxlarge', iconSize: 120}
};

const AvatarContent = ({imgSrc, iconType, iconColor, iconSize}) => {
  if (imgSrc) {
    return <img className="sg-avatar__image" src={imgSrc}/>;
  }

  if (iconType) {
    return <div className="sg-avatar__image sg-avatar__image--icon">
      <Icon type={iconType} color={iconColor} size={iconSize}/>
    </div>;
  }

  console.error('Define imgSrc or iconType in Avatar component');
  return null;
};

AvatarContent.propTypes = {
  imgSrc: PropTypes.string,
  iconSize: PropTypes.oneOf(Object.values(SIZE).map(size => size.iconSize)),
  iconType: PropTypes.oneOf(Object.values(ICON_TYPE)),
  iconColor: PropTypes.oneOf(Object.values(ICON_COLOR))
};

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
