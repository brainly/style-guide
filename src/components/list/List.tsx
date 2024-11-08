import classNames from 'classnames';
import * as React from 'react';

export type ListPropsType = {
  children?: React.ReactNode;
  spaced?: boolean;
  className?: string;
  ordered?: boolean;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  'children' | 'spaced' | 'className' | 'ordered'
>;

const List = ({
  spaced,
  className,
  ordered,
  children,
  ...props
}: ListPropsType) => {
  const listClass = classNames(
    'sg-list',
    {
      'sg-list--spaced-elements': spaced,
    },
    className
  );
  const Tag = ordered ? 'ol' : 'ul';

  return (
    // @ts-ignore ts migration
    <Tag {...props} className={listClass} role="list">
      {children}
    </Tag>
  );
};

export default List;
