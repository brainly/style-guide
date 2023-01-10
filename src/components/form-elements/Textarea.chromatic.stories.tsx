import * as Textarea from './Textarea.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(Textarea);
const {includeStories, ...meta} = Textarea.default;
export default meta;
