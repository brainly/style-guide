// @flow

import * as React from 'react';
import Text from 'text/Text.vanilla';
import Link from 'text/Link.vanilla';
import Flex from 'flex/Flex';

type PropsType = {
  replacement?: {
    componentName: string,
    href: string,
  },
};

const DeprecatedNote = ({replacement}: PropsType) => (
  <Flex marginBottom="m">
    <Text color="text-red-60" size="small">
      This component is deprecated
      {replacement && (
        <span>
          , please use{' '}
          <Link href={replacement.href} weight="bold" inherited>
            {replacement.componentName}
          </Link>{' '}
          instead
        </span>
      )}
    </Text>
  </Flex>
);

export default DeprecatedNote;
