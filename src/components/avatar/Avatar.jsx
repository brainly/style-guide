// @flow
import * as React from 'react';
import classNames from 'classnames';
import Icon, {TYPE as ICON_TYPE, ICON_COLOR} from '../icons/Icon';

export type AvatarPropsType = {
  size: $Values<typeof SIZE>,
  border?: boolean,
  spaced?: boolean,
  imgSrc?: string,
  className?: string,
  title?: string,
  link?: string,
  clickable?: boolean
};

const DEFAULT_ICON = ICON_TYPE.PROFILE;
const DEFAULT_COLOR = ICON_COLOR.GRAY;
const BORDER_SIZE = 2;

export const SIZE = Object.freeze({
  XSMALL: {className: 'xsmall', iconSize: 16},
  SMALL: {className: 'small', iconSize: 24},
  NORMAL: {className: 'normal', iconSize: 32},
  LARGE: {className: 'large', iconSize: 48},
  XLARGE: {className: 'xlarge', iconSize: 64},
  XXLARGE: {className: 'xxlarge', iconSize: 96},
  XXXLARGE: {className: 'xxxlarge', iconSize: 120}
});

const Avatar = ({
  size = SIZE.NORMAL,
  border = false,
  spaced, imgSrc,
  className,
  link,
  title,
  clickable,
  ...props
}: AvatarPropsType) => {
  const avatarClass = classNames('sg-avatar', {
    [`sg-avatar--${size.className}`]: size !== SIZE.NORMAL,
    'sg-avatar--with-border': border,
    'sg-avatar--spaced': spaced,
    'sg-avatar--clickable': clickable
  }, className);

  let avatarContent;

  if (imgSrc) {
    avatarContent = <img className="sg-avatar__image" src={imgSrc} alt={title} title={title} />;
  } else {
    avatarContent = (
      <div className="sg-avatar__image sg-avatar__image--icon">
        <Icon type={DEFAULT_ICON} color={DEFAULT_COLOR} size={border ? size.iconSize - BORDER_SIZE : size.iconSize} />
      </div>
    );
  }

  return (
    <div {...props} className={avatarClass}>
      {link ? <a href={link} title={title}>{avatarContent}</a> : avatarContent}
    </div>
  );
};

export default Avatar;
