import * as React from 'react';
import classnames from 'classnames';
export type LayoutSecondaryContentAsType =
  | 'div'
  | 'main'
  | 'section'
  | 'article'
  | 'aside';
export type LayoutSecondaryContentPropsType = {
  className?: string | null | undefined;
  children: React.ReactNode;
  as?: LayoutSecondaryContentAsType;
} & Omit<React.AllHTMLAttributes<HTMLElement>, 'className' | 'children' | 'as'>;

const LayoutSecondaryContent = ({
  children,
  className,
  as: Type = 'div',
  ...props
}: LayoutSecondaryContentPropsType) => {
  const layoutClass = classnames('sg-layout__secondary-content', className);
  return (
    <Type {...props} className={layoutClass}>
      {children}
    </Type>
  );
};

export default LayoutSecondaryContent;