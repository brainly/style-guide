import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon, {types as iconTypes, colors as iconColors} from '../icons/Icon';

const sizes = {
  xsmall: 'xsmall',
  small: 'small',
  normal: 'normal',
  large: 'large',
  xlarge: 'xlarge',
  xxlarge: 'xxlarge',
  xxxlarge: 'xxxlarge'
};

const iconSizes = {
  xsmall: 14,
  small: 22,
  normal: 32,
  large: 46,
  xlarge: 62,
  xxlarge: 94,
  xxxlarge: 118
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
  iconSize: PropTypes.oneOf(Object.values(iconSizes)),
  iconType: PropTypes.oneOf(Object.values(iconTypes)),
  iconColor: PropTypes.oneOf(Object.values(iconColors))
};

const Avatar = ({size = sizes.normal, border, spaced, ...contentProps}) => {
  const avatarClass = classNames('sg-avatar', {
    [`sg-avatar--${size}`]: size,
    'sg-avatar--with-border': border,
    'sg-avatar--spaced': spaced
  });

  contentProps.iconSize = iconSizes[size];

  return <div className={avatarClass}>
    <AvatarContent {...contentProps}/>
  </div>;
};

Avatar.propTypes = {
  size: PropTypes.oneOf(Object.values(sizes)),
  border: PropTypes.bool,
  spaced: PropTypes.bool,
  imgSrc: PropTypes.string,
  iconType: PropTypes.oneOf(Object.values(iconTypes)),
  iconColor: PropTypes.oneOf(Object.values(iconColors))
};

export default Avatar;
export {sizes, iconTypes, iconColors};
