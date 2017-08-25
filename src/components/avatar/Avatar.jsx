import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon, {TYPE as ICON_TYPE, COLOR as ICON_COLOR} from '../icons/Icon';

const DEFAULT_ICON = ICON_TYPE.PROFILE;
const DEFAULT_COLOR = ICON_COLOR.GRAY;
const BORDER_SIZE = 2;
const SIZE = {
  XSMALL: {className: 'xsmall', iconSize: 16},
  SMALL: {className: 'small', iconSize: 24},
  NORMAL: {className: 'normal', iconSize: 32},
  LARGE: {className: 'large', iconSize: 48},
  XLARGE: {className: 'xlarge', iconSize: 64},
  XXLARGE: {className: 'xxlarge', iconSize: 96},
  XXXLARGE: {className: 'xxxlarge', iconSize: 120}
};

const Avatar = ({size = SIZE.NORMAL, border = false, spaced, imgSrc, className, ...props}) => {
  const avatarClass = classNames('sg-avatar', {
    [`sg-avatar--${size.className}`]: size !== SIZE.normal,
    'sg-avatar--with-border': border,
    'sg-avatar--spaced': spaced
  }, className);

  const defaultAvatar =
    <div className="sg-avatar__image sg-avatar__image--icon">
      <Icon type={DEFAULT_ICON} color={DEFAULT_COLOR} size={border ? size.iconSize - BORDER_SIZE : size.iconSize} />
    </div>;

  return (
    <div {...props} className={avatarClass}>
      {imgSrc ? <img className="sg-avatar__image" src={imgSrc} /> : defaultAvatar}
    </div>
  );
};

Avatar.propTypes = {
  size: PropTypes.oneOf(Object.values(SIZE)),
  border: PropTypes.bool,
  spaced: PropTypes.bool,
  imgSrc: PropTypes.string,
  className: PropTypes.string
};

export default Avatar;
export {SIZE};
