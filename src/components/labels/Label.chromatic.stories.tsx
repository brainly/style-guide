import * as Label from './Label.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(Label);
const {includeStories, ...meta} = Label.default;

export default meta;
