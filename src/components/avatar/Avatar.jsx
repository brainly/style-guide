// @flow strict

import React from 'react';
import classNames from 'classnames';
import Icon from '../icons/Icon';

export type AvatarSizeType = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

export const SIZE = {
  XS: 'xs',
  S: 's',
  M: 'm',
  L: 'l',
  XL: 'xl',
  XXL: 'xxl',
};

export const ICON_SIZE = {
  [SIZE.XS]: 24,
  [SIZE.S]: 32,
  [SIZE.M]: 40,
  [SIZE.L]: 56,
  [SIZE.XL]: 80,
  [SIZE.XXL]: 104,
};

type PropsType = {
  size?: AvatarSizeType,
  border?: boolean,
  spaced?: boolean,
  imgSrc?: string,
  className?: string,
  title?: string,
  link?: string,
  ...
};

const Avatar = ({
  size = SIZE.S,
  border = false,
  spaced,
  imgSrc,
  className,
  link,
  title,
  ...props
}: PropsType) => {
  const avatarClass = classNames(
    'sg-avatar',
    {
      [`sg-avatar--${size}`]: size !== SIZE.S,
      'sg-avatar--with-border': border,
      'sg-avatar--spaced': spaced,
    },
    className
  );

  let avatarContent;

  if (imgSrc !== undefined && imgSrc !== null && imgSrc !== '') {
    avatarContent = (
      <img
        className="sg-avatar__image"
        src={imgSrc}
        alt={title}
        title={title}
      />
    );
  } else {
    avatarContent = (
      <div className="sg-avatar__image sg-avatar__image--icon" title={title}>
        <Icon
          className="sg-avatar__icon"
          type="profile"
          color="gray-light"
          size={ICON_SIZE[size]}
        />
      </div>
    );
  }

  return (
    <div {...props} className={avatarClass}>
      {link !== undefined && link !== '' ? (
        <a href={link} title={title}>
          {avatarContent}
        </a>
      ) : (
        avatarContent
      )}
    </div>
  );
};

export default Avatar;
