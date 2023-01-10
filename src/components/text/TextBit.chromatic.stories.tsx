import * as TextBit from './TextBit.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(TextBit);
const {includeStories, ...meta} = TextBit.default;
export default meta;
