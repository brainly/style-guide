import * as Search from './Search.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(Search);
const {includeStories, ...meta} = Search.default;

export default meta;
