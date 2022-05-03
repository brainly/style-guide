import * as React from 'react';

import DocsBlock from 'components/DocsBlock';
import Link from '../../../text/Link';

const ReducedMotion = () => {
  return (
    <div>
      <DocsBlock info="useReducedMotion">
        Please see useReducedMotion documentation in the{' '}
        <Link
          href="https://style-guide.brainly.com/?path=/story/utilities-usereducedmotion--page"
          target="_blank"
        >
          storybook
        </Link>
      </DocsBlock>
    </div>
  );
};

export default ReducedMotion;
