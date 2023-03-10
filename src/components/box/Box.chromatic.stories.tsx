import * as Box from './Box.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(Box);
const {includeStories, ...meta} = Box.default;

export default meta;
