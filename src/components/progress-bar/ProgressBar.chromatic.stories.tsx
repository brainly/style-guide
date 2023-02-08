import * as ProgressBar from './ProgressBar.stories.mdx';
import {mergeStories} from '../../chromatic/utils';

export const Default = mergeStories(ProgressBar);
const {includeStories, ...meta} = ProgressBar.default;

export default meta;
