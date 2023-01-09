import * as FileHandler from './FileHandler.stories.mdx';
import {mergeStories} from '../../chromatic/utils';
export const Default = mergeStories(FileHandler);
const {includeStories, ...meta} = FileHandler.default;
export default meta;
