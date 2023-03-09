import * as List from './List.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(List);
const {includeStories, ...meta} = List.default;

export default meta;
