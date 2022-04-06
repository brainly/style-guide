import * as Text from './Text.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(Text);
const {includeStories, ...meta} = Text.default;

export default meta;
