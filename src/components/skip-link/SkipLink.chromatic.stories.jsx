import * as SkipLink from './SkipLink.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(SkipLink);

const {includeStories, ...meta} = SkipLink.default;

export default meta;
