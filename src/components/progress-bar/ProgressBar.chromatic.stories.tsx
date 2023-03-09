import * as ProgressBar from './ProgressBar.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(ProgressBar);
const {includeStories, ...meta} = ProgressBar.default;

export default meta;
