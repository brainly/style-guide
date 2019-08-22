// @flow strict

import React from 'react';
import classnames from 'classnames';

export type PropsType = {
  className?: string,
  href?: string,
  text: string,
  // $FlowFixMe
  type?: string | (any => React$Node),
  ...
};

const MenuItem = ({text, href, type, className, ...restProps}: PropsType) => {
  const Type = type !== undefined ? type : 'a';
  const elementClass = classnames('sg-menu-list__link', className);

  return (
    <li className="sg-menu-list__element">
      <Type className={elementClass} href={href} {...restProps}>
        {text}
      </Type>
    </li>
  );
};

export default MenuItem;
