import * as SeparatorHorizontal from './SeparatorHorizontal.stories.mdx';
import {mergeStories} from '../../chromatic/utils';
export const Default = mergeStories(SeparatorHorizontal);
const {includeStories, ...meta} = SeparatorHorizontal.default;
export default meta;
