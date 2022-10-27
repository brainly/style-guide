// @flow strict

import * as React from 'react';
import Link from '../text/Link';

export type SkipLinkPropsType = {
  className?: string,
  children: string | number,
  id: string,
};

const SkipLink = ({children, className, id, ...rest}: SkipLinkPropsType) => {
  return (
    <Link
      className={`sg-skip-link ${className ?? ''}`}
      href={`#${id}`}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default SkipLink;
