import * as React from 'react';
import classnames from 'classnames';

export type LayoutAsideContentAsType =
  | 'div'
  | 'main'
  | 'section'
  | 'article'
  | 'aside';
export type LayoutAsideContentPropsType = {
  className?: string | null | undefined;
  children: React.ReactNode;
  as?: LayoutAsideContentAsType;
} & Omit<React.AllHTMLAttributes<HTMLElement>, 'className' | 'children' | 'as'>;

const LayoutAsideContent = ({
  children,
  className,
  as: Type = 'div',
  ...props
}: LayoutAsideContentPropsType) => {
  const layoutClass = classnames('sg-layout__aside-content', className);

  return (
    <Type {...props} className={layoutClass}>
      {children}
    </Type>
  );
};

export default LayoutAsideContent;
