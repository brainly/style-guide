import * as FileHandler from './FileHandler.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(FileHandler);
const {includeStories, ...meta} = FileHandler.default;

export default meta;
