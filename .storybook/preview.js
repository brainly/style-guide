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

import {Primary} from 'blocks/Primary';
import {Stories} from 'blocks/Stories';
import {InfoBox} from 'blocks/InfoBox';

// load all styles
import '../src/main-vanilla.scss';
import '../src/docs/styles.scss';
import '../src/chromatic/styles.scss';

function importAll(r) {
  r.keys().forEach(r);
}

// load icon sprites
importAll(require.context('../src/images/logos', true, /\.svg$/));
importAll(require.context('../src/images/icons', true, /\.svg$/));
importAll(require.context('../src/images/subjects', true, /\.svg$/));
importAll(require.context('../src/images/subjects-mono', true, /\.svg$/));
importAll(require.context('../src/images/math-symbols', true, /\.svg$/));
importAll(require.context('../src/images/mobile-icons', true, /\.svg$/));

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
        name: 'gray-40',
        value: hex['gray-40'],
      },
    ],
  },
  docs: {
    page: Page,
    theme,
    components: {
      InfoBox,
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
  previewTabs: {
    'storybook/docs/panel': {
      hidden: process.env.STORYBOOK_ENV === 'chromatic',
    },
  },
};
