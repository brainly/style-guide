import * as IconAsButton from './IconAsButton.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(IconAsButton, {
  storiesToHover: ['colors'],
});
const {includeStories, ...meta} = IconAsButton.default;

export default meta;
