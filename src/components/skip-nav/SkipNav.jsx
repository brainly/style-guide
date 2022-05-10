// @flow strict

import * as React from 'react';
import Link from '../text/Link';

type LinkType = {
  name: string,
  href: string,
};

type PropsType = {
  links: LinkType | Array<LinkType>,
  label: string,
  className?: string,
};

const SkipNav = ({links, className, label}: PropsType) => {
  const enhancedLinks = Array.isArray(links) ? links : [links];

  return (
    <nav className={className} data-testid="skip_link" aria-label={label}>
      {enhancedLinks.map(link => (
        <Link className="sg-skip-nav" href={link.href} key={link.name}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default SkipNav;
