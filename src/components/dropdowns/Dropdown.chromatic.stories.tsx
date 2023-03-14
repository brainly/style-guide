import * as Dropdown from './Dropdown.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(Dropdown, {
  storiesToHover: ['colors'],
});
const {includeStories, ...meta} = Dropdown.default;

export default meta;
