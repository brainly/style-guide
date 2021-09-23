import * as React from 'react';
import {
  Title,
  Subtitle,
  Description,
  ArgsTable,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';
import theme from './theme';
import hex from '../src/components/colors/hex';

import {Canvas} from 'blocks/Canvas';
import {Primary} from 'blocks/Primary';
import {Stories} from 'blocks/Stories';

// load all styles
import '../src/main.scss';
import '../src/_docs/styles.scss';

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
  backgrounds: {
    values: [
      {
        name: 'gray-secondary-light',
        value: hex.graySecondaryLight,
      },
    ],
  },
  docs: {
    page: Page,
    theme,
    components: {
      Canvas,
    },
  },
  controls: {hideNoControlsWarning: true},
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
