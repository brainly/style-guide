import * as Button from './Button.stories.mdx';
import {mergeStories} from '../../chromatic/utils';
export const Default = mergeStories(Button);
const {includeStories, ...meta} = Button.default;
export default meta;