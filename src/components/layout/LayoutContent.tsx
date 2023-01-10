import * as React from 'react';
import classNames from 'classnames';

export type LayoutContentAsType =
  | 'div'
  | 'main'
  | 'section'
  | 'article'
  | 'aside';
export type LayoutContentPropsType = {
  className?: string | null | undefined;
  children: React.ReactNode;
  noMaxWidth?: boolean;
  center?: boolean;
  as?: LayoutContentAsType;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  'className' | 'children' | 'noMaxWidth' | 'center' | 'as'
>;

const LayoutContent = ({
  children,
  noMaxWidth,
  center,
  className,
  as: Type = 'div',
  ...props
}: LayoutContentPropsType) => {
  const layoutContentClass = classNames(
    'sg-layout__content',
    {
      'sg-layout__content--no-max-width': noMaxWidth,
      'sg-layout__content--center': center,
    },
    className
  );
  return (
    <Type {...props} className={layoutContentClass}>
      {children}
    </Type>
  );
};

export default LayoutContent;
