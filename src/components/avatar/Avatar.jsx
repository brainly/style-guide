// @flow strict
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

export const ICON_SIZE_FOR_AVATARS_WITH_BORDER = {
  [SIZE.SMALL]: 22,
  [SIZE.NORMAL]: 30,
  [SIZE.LARGE]: 54,
  [SIZE.XLARGE]: 78,
  [SIZE.XXLARGE]: 102
};

export const ICON_SIZE = {
  [SIZE.SMALL]: 24,
  [SIZE.NORMAL]: 32,
  [SIZE.LARGE]: 56,
  [SIZE.XLARGE]: 80,
  [SIZE.XXLARGE]: 104
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

  if (imgSrc !== undefined && imgSrc !== null && imgSrc !== '') {
    avatarContent = <img className="sg-avatar__image" src={imgSrc} alt={title} title={title} />;
  } else {
    avatarContent = (
      <div className="sg-avatar__image sg-avatar__image--icon">
        <Icon
          type="std-profile"
          color="gray-light"
          size={border ? ICON_SIZE_FOR_AVATARS_WITH_BORDER[size] : ICON_SIZE[size]}
        />
      </div>
    );
  }

  return (
    <div {...props} className={avatarClass}>
      {link !== undefined && link !== '' ? <a href={link} title={title}>{avatarContent}</a> : avatarContent}
    </div>
  );
};

export default Avatar;
