import * as Box from './Box.stories.mdx';
import {mergeStories} from '../../chromatic/utils';
export const Default = mergeStories(Box);
const {includeStories, ...meta} = Box.default;
export default meta;