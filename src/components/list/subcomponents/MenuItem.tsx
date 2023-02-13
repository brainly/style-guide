import * as React from 'react';
import classnames from 'classnames';

export type MenuItemPropsType = {
  className?: string;
  href?: string;
  text: string;
  as?: string | ((arg0: any) => React.ReactNode);
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  'className' | 'href' | 'text' | 'as'
>;

const MenuItem = ({
  text,
  href,
  as: Type = 'a',
  className,
  ...restProps
}: MenuItemPropsType) => {
  const elementClass = classnames('sg-menu-list__link', className);

  return (
    <li className="sg-menu-list__element">
      <Type {...restProps} className={elementClass} href={href}>
        {text}
      </Type>
    </li>
  );
};

export default MenuItem;
