import React from 'react';
import {
  Title,
  Subtitle,
  Description,
  ArgsTable,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';

import { Canvas } from 'blocks/Canvas';
import { Primary } from 'blocks/Primary';
import { Stories } from 'blocks/Stories';

// load all styles
import '../src/main.scss';

// load generated icons
import '../src/images/icons';
import '../src/images/subjects-icons';
import '../src/images/subjects-mono-icons';
import '../src/images/math-symbols-icons';
import '../src/images/mobile-icons';

const Page = () => {
  return (
    <>
      <Title />
      <Subtitle />
      <Description />
      <Primary />
      <ArgsTable story={PRIMARY_STORY} />
      <Stories />
    </>
  );
};

export const parameters = {
  docs: {
    page: Page,
    components: {
      Canvas,
    },
  },
  layout: 'centered',
  options: {
    storySort: {
      order: [
        'Introduction ✏️',
        'Foundation ✨',
        'Components',
        'Layout',
        'Utilities',
      ],
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
