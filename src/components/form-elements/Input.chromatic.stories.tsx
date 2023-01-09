import * as Input from './Input.stories.mdx';
import {mergeStories} from '../../chromatic/utils';
export const Default = mergeStories(Input);
const {includeStories, ...meta} = Input.default;
export default meta;
