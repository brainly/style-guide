import * as React from 'react';
import classNames from 'classnames';
import type {IconColorType, IconTypeType} from '../icons/Icon';
import Icon, {ICON_COLOR} from '../icons/Icon';

type IconSizeType = 'small' | 'normal';
export const SIZE = {
  SMALL: 'small',
  NORMAL: 'normal',
} as const;

const ICON_SIZE: Record<string, 24> = {
  [SIZE.SMALL]: 24,
  // based on current usage
  [SIZE.NORMAL]: 24,
};

export type IconAsButtonPropsType = {
  size?: IconSizeType;
  color?: IconColorType;
  type?: IconTypeType | null | undefined;
  children?: React.ReactElement<any> | null | undefined;
  border?: boolean;
  action?: boolean;
  transparent?: boolean;
  active?: boolean;
  href?: string;
  className?: string;
  title?: string;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  | 'size'
  | 'color'
  | 'type'
  | 'children'
  | 'border'
  | 'action'
  | 'transparent'
  | 'active'
  | 'href'
  | 'className'
  | 'title'
>;

// This component is deprecated
const IconAsButton = ({
  color,
  size = SIZE.NORMAL,
  type,
  children,
  action,
  transparent,
  active,
  border,
  className,
  title,
  ...props
}: IconAsButtonPropsType) => {
  const buttonClass = classNames(
    'sg-icon-as-button',
    {
      [`sg-icon-as-button--${String(color)}`]: color,
      [`sg-icon-as-button--${size}`]: size,
      'sg-icon-as-button--with-border': border,
      'sg-icon-as-button--action': action,
      'sg-icon-as-button--action-active': action === true && active === true,
      'sg-icon-as-button--transparent': transparent,
      'sg-icon-as-button--transparent-active':
        transparent === true && active === true,
    },
    className
  );
  let content;

  if (type) {
    content = (
      <Icon
        type={type}
        color={ICON_COLOR.ADAPTIVE}
        size={ICON_SIZE[size]}
        title={title}
      />
    );
  } else {
    content = children;
  }

  let RenderType: 'button' | 'a' = 'button';

  if (props.href !== undefined && props.href !== null && props.href !== '') {
    RenderType = 'a';
  }

  return (
    <RenderType {...props} role="button" className={buttonClass}>
      <div className="sg-icon-as-button__hole">{content || null}</div>
    </RenderType>
  );
};

export default IconAsButton;
export {TYPE, ICON_COLOR} from '../icons/Icon';
export type {IconTypeType} from '../icons/Icon';
