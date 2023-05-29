import * as PetitButton from './PetitButton.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(PetitButton, {
  storiesToHover: ['variants'],
});
const {includeStories, ...meta} = PetitButton.default;

export default meta;
