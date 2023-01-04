import * as React from 'react';
import classNames from 'classnames';
export type BreadcrumbPropsType = {
  className?: string | null | undefined;
  adaptive?: boolean | null | undefined;
  short?: boolean | null | undefined;
  inlineItems?: boolean | null | undefined;
  elements: ReadonlyArray<React.ReactNode>;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  'className' | 'adaptive' | 'short' | 'inlineItems' | 'elements'
>;

const Breadcrumb = ({
  className,
  short,
  adaptive,
  inlineItems,
  elements = [],
  ...props
}: BreadcrumbPropsType) => {
  const breadcrumbClass = classNames(
    'sg-breadcrumb-list',
    {
      'sg-breadcrumb-list--short': short,
      'sg-breadcrumb-list--adaptive': adaptive,
      'sg-breadcrumb-list--inline-items': inlineItems,
    },
    className
  );
  return (
    <ul {...props} className={breadcrumbClass}>
      {elements.map((elem, i) => (
        <li key={i} className="sg-breadcrumb-list__element">
          {elem}
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumb;