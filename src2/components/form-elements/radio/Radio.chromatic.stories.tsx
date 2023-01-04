import * as Radio from './Radio.stories.mdx';
import {mergeStories} from '../../../chromatic/utils';
export const Default = mergeStories(Radio);
const {includeStories, ...meta} = Radio.default;
export default meta;