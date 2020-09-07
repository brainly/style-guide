import { addDecorator, addParameters } from '@storybook/react';
import {Canvas} from './Canvas';

// load all styles
import '../src/main.scss';

export const parameters = {
  docs: {
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