import * as React from 'react';

import DocsBlock from 'components/DocsBlock';
import Link from '../../text/Link';

const Dialogs = () => {
  return (
    <div>
      <DocsBlock info="Dialog">
        Please see Dialog documentation in the{' '}
        <Link
          href="https://style-guide.brainly.com/?path=/story/components-dialog--default"
          target="_blank"
        >
          storybook
        </Link>
      </DocsBlock>
    </div>
  );
};

export default Dialogs;
