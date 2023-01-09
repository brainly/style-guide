import * as SeparatorVertical from './SeparatorVertical.stories.mdx';
import {mergeStories} from '../../chromatic/utils';
export const Default = mergeStories(SeparatorVertical);
const {includeStories, ...meta} = SeparatorVertical.default;
export default meta;
