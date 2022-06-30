import * as SkipLink from './SkipLink.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

const {play, ...SkipLinkStories} = SkipLink;

export const Default = mergeStories(SkipLinkStories);

Default.play = play;

const {includeStories, ...meta} = SkipLink.default;

export default meta;
