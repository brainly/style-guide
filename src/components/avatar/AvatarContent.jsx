import React from 'react';
import PropTypes from 'prop-types';
import Icon, {types as ICON_TYPE, colors as ICON_COLOR} from '../icons/Icon';
import {SIZE} from './avatarConstants';

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

export default AvatarContent;
export {ICON_TYPE, ICON_COLOR};
