import * as Subheadline from './Subheadline.stories.mdx';
import {mergeStories} from '../../chromatic/utils';
export const Default = mergeStories(Subheadline);
const {includeStories, ...meta} = Subheadline.default;
export default meta;
