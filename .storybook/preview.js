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
  options: {
    storySort: {
      order: ['Introduction', 'Basics', 'Components', 'Containers'],
    },
  },
};
