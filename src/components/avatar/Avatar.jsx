// @flow
import React from 'react';
import classNames from 'classnames';
import Icon from '../icons/Icon';

export type AvatarSizeType =
  | 'small'
  | 'normal'
  | 'large'
  | 'xlarge'
  | 'xxlarge';

export const SIZE = {
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
  XLARGE: 'xlarge',
  XXLARGE: 'xxlarge'
};

export const ICON_SIZE_PADDED = {
  [SIZE.SMALL]: 22,
  [SIZE.NORMAL]: 30,
  [SIZE.LARGE]: 46,
  [SIZE.XLARGE]: 62,
  [SIZE.XXLARGE]: 118
};

export const ICON_SIZE = {
  [SIZE.SMALL]: 24,
  [SIZE.NORMAL]: 32,
  [SIZE.LARGE]: 48,
  [SIZE.XLARGE]: 64,
  [SIZE.XXLARGE]: 120
};

type PropsType = {
  size?: AvatarSizeType,
  border?: boolean,
  spaced?: boolean,
  imgSrc?: string,
  className?: string,
  title?: string,
  link?: string
};

const Avatar = ({size = SIZE.NORMAL, border = false, spaced, imgSrc, className, link, title, ...props}: PropsType) => {
  const avatarClass = classNames('sg-avatar', {
    [`sg-avatar--${size}`]: size !== SIZE.NORMAL,
    'sg-avatar--with-border': border,
    'sg-avatar--spaced': spaced
  }, className);

  let avatarContent;

  if (imgSrc) {
    avatarContent = <img className="sg-avatar__image" src={imgSrc} alt={title} title={title} />;
  } else {
    avatarContent = (
      <div className="sg-avatar__image sg-avatar__image--icon">
        <Icon type="profile" color="gray-secondary" size={border ? ICON_SIZE_PADDED[size] : ICON_SIZE[size]} />
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
