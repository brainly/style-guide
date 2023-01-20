import * as React from 'react';
import classnames from 'classnames';

export type HeaderContainerPropsType = {
  children: React.ReactNode;
  className?: string;
} & Omit<React.AllHTMLAttributes<HTMLElement>, 'children' | 'className'>;

// This component is deprecated
const HeaderContainer = ({
  children,
  className,
  ...props
}: HeaderContainerPropsType) => {
  const headerContainerClass = classnames('sg-header__container', className);

  return (
    <div {...props} className={headerContainerClass}>
      {children}
    </div>
  );
};

export default HeaderContainer;
