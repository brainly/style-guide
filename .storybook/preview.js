import * as React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import theme from './theme';
import hex from '../src/components/colors/hex';

import {InfoBox} from 'blocks/InfoBox';
import {AccessibilityList} from 'blocks/accessibility-list/AccessibilityList';
import PageHeader from 'blocks/PageHeader';

// load all styles
import '../src/main.scss';
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
    theme,
    transformSource: (src, storyContext) =>
      renderToStaticMarkup(storyContext.storyFn),
    components: {
      InfoBox,
      AccessibilityList,
      PageHeader,
    },
  },
  controls: {hideNoControlsWarning: true},
  options: {
    storySort: {
      order: [
        'Introduction ✏️',
        'Foundation ✨',
        'Components',
        'Hooks',
        'Utilities',
        'Changelog',
      ],
    },
  },
  previewTabs: {
    'storybook/docs/panel': {
      hidden: process.env.STORYBOOK_ENV === 'chromatic',
    },
  },
};
