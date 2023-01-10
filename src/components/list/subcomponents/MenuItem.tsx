import * as React from 'react';
import classnames from 'classnames';

export type MenuItemPropsType = {
  className?: string;
  href?: string;
  text: string;
  // $FlowFixMe
  type?: string | ((arg0: any) => React.ReactNode);
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  'className' | 'href' | 'text' | 'type'
>;

const MenuItem = ({
  text,
  href,
  type,
  className,
  ...restProps
}: MenuItemPropsType) => {
  const Type = type !== undefined ? type : 'a';
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
