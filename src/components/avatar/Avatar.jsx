// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import Icon, {ICON_COLOR} from '../icons/Icon';

export type AvatarSizeType = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

export const SIZE: {
  XS: 'xs',
  S: 's',
  M: 'm',
  L: 'l',
  XL: 'xl',
  XXL: 'xxl',
} = {
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

export type AvatarPropsType = {
  size?: AvatarSizeType,
  border?: boolean,
  spaced?: boolean,
  imgSrc?: string,
  className?: string,
  link?: string,
  linkLabel?: string,
  alt?: string,
  ...
};

const Avatar = ({
  size = SIZE.S,
  border = false,
  spaced,
  imgSrc,
  className,
  link,
  linkLabel,
  alt = '',
  ...props
}: AvatarPropsType) => {
  const avatarClass = classNames(
    'sg-avatar',
    {
      [`sg-avatar--${size}`]: size !== SIZE.S,
      'sg-avatar--with-border': border,
      'sg-avatar--spaced': spaced,
    },
    className
  );

  const isImgSrcDefined =
    imgSrc !== undefined && imgSrc !== null && imgSrc !== '';

  const avatarContent = (
    <div {...props} className={avatarClass}>
      {isImgSrcDefined ? (
        <img className="sg-avatar__image" src={imgSrc} alt={alt} />
      ) : (
        <div className="sg-avatar__image sg-avatar__image--icon">
          <Icon
            className="sg-avatar__icon"
            type="profile"
            color={ICON_COLOR['icon-gray-40']}
            size={ICON_SIZE[size]}
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  );

  if (link !== undefined && link !== '') {
    return (
      <a href={link} aria-label={linkLabel} className="sg-avatar__wrapper-link">
        {avatarContent}
      </a>
    );
  }
  return avatarContent;
};

export default Avatar;
