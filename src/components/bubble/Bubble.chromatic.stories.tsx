import * as Bubble from './Bubble.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(Bubble);
const {includeStories, ...meta} = Bubble.default;
export default meta;
