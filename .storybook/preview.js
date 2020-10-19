import React from 'react';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';
import {
  AddonPanel,
  Placeholder,
  Separator,
  Source,
  Spaced,
} from '@storybook/components';

// load all styles
import '../src/main.scss';

const Page = () => {
  return (
    <>
      <Title />
      <Subtitle />
      <Description />
      <Primary />
      <ArgsTable story={PRIMARY_STORY} />
      <Source
        code={JSON.stringify({ code: 'const DESIGN_SYSTEM;' }, null, 2)}
        language="js"
        copyable
        padded
        showLineNumbers
      />
      <Stories />
    </>
  );
};

export const parameters = {
  docs: {
    page: Page,
  },
  layout: 'centered',
  options: {
    storySort: {
      order: ['Introduction ✏️', 'Foundation', 'Components', 'Layout'],
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'dark',
  },
};
