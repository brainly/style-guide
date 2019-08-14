// @flow strict

import React from 'react';
import type {Node} from 'react';
import classNames from 'classnames';

type PropsType = {
  className?: ?string,
  adaptive?: ?boolean,
  short?: ?boolean,
  elements: $ReadOnlyArray<Node>,
};

const Breadcrumb = ({
  className,
  short,
  adaptive,
  elements = [],
  ...props
}: PropsType) => {
  const breadcrumbClass = classNames(
    'sg-breadcrumb-list',
    {
      'sg-breadcrumb-list--short': short,
      'sg-breadcrumb-list--adaptive': adaptive,
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
