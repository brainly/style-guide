import * as React from 'react';
import classNames from 'classnames';
import Icon, {ICON_COLOR} from '../icons/Icon';
import {__DEV__, invariant} from '../utils';

export type AvatarSizeType = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
export const SIZE = {
  XS: 'xs',
  S: 's',
  M: 'm',
  L: 'l',
  XL: 'xl',
  XXL: 'xxl',
} as const;

export const ICON_SIZE = {
  [SIZE.XS]: 24,
  [SIZE.S]: 32,
  [SIZE.M]: 40,
  [SIZE.L]: 56,
  [SIZE.XL]: 80,
  [SIZE.XXL]: 104,
} as const;

export type AvatarPropsType = {
  width?: number;
  height?: number;
  size?: AvatarSizeType;
  border?: boolean;
  spaced?: boolean;
  imgSrc?: string;
  className?: string;
  link?: string;
  ariaLinkLabel?: string;
  alt?: string;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  | 'size'
  | 'border'
  | 'spaced'
  | 'imgSrc'
  | 'className'
  | 'link'
  | 'ariaLinkLabel'
  | 'alt'
  | 'width'
  | 'height'
>;

const Avatar = ({
  size = SIZE.S,
  border = false,
  spaced,
  imgSrc,
  className,
  link,
  ariaLinkLabel,
  alt = '',
  ...props
}: AvatarPropsType) => {
  const avatarClass = classNames(
    'sg-avatar',
    {
      [`sg-avatar--${size}`]: size !== SIZE.S,
      'sg-avatar--with-border': border,
    },
    className
  );
  const isImgSrcDefined =
    imgSrc !== undefined && imgSrc !== null && imgSrc !== '';
  const imageClass = classNames('sg-avatar__image', {
    'sg-avatar--spaced': spaced,
    'sg-avatar__image--icon': !isImgSrcDefined,
  });

  if (__DEV__) {
    invariant(
      !(ariaLinkLabel && !link),
      'Using `ariaLinkLabel` prop has no effect when `link` prop is not set.'
    );
    invariant(
      !(alt && !isImgSrcDefined),
      'Using `alt` prop has no effect when `imgSrc` prop is not set.'
    );
  }

  const avatarContent = (
    <div {...props} className={avatarClass}>
      {isImgSrcDefined ? (
        <img className={imageClass} src={imgSrc} alt={alt} />
      ) : (
        <div className={imageClass}>
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
      <a
        href={link}
        aria-label={ariaLinkLabel}
        className="sg-avatar__wrapper-link"
      >
        {avatarContent}
      </a>
    );
  }

  return avatarContent;
};

export default Avatar;
