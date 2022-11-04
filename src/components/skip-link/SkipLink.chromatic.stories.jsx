import * as SkipLink from './SkipLink.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

const {play, ...SkipLinkStories} = SkipLink;

export const Default = mergeStories(SkipLinkStories);

Default.play = play;
Default.parameters = {
  // Notifies Chromatic to pause the animations when they finish for the specific story.
  chromatic: {pauseAnimationAtEnd: true, delay: 300},
};

const {includeStories, ...meta} = SkipLink.default;

export default meta;
