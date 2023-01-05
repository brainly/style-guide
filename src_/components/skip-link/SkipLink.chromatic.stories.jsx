import * as SkipLink from './SkipLink.stories.mdx';
import {mergeStories} from '../../chromatic/utils';
import {within} from '@storybook/testing-library';

const play = async ({canvasElement}) => {
  const canvas = within(canvasElement);
  const link = canvas.getByRole('link', {
    name: /skip to main content/i,
  });

  link.style.animation = 'none';
  link.style.margin = '1em';
  link.focus();
};

export const Default = mergeStories(SkipLink);

Default.play = play;

const {includeStories, ...meta} = SkipLink.default;

export default meta;
