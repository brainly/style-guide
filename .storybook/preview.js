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
import { AddonPanel, Placeholder, Separator, Source, Spaced } from '@storybook/components';
import {Canvas} from './Canvas';

// load all styles
import '../src/main.scss';

const Page = () => {
  return <>
    <Title />
    <Subtitle />
    <Description />
    <Primary />
    <ArgsTable story={PRIMARY_STORY} />
    <Source code={JSON.stringify({aaa:'asdsad'}, null, 2)} language="js" copyable padded showLineNumbers />
    <Stories />
  </>
};

export const parameters = {
  docs: {
    page: Page,
    components: {
      Canvas, //custom canvas in order to handle plain html snippets
    },
  },
  layout: 'centered',
  options: {
    storySort: {
      order: ['Introduction', 'Basics', 'Components', 'Containers'],
    },
  },
};
