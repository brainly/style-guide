import * as Dropdown from './Dropdown.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(Dropdown);
const {includeStories, ...meta} = Dropdown.default;

export default meta;
