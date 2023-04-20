import * as Chip from './Chip.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(Chip, {
  storiesToHover: ['multiSelect'],
});
const {includeStories, ...meta} = Chip.default;

export default meta;
