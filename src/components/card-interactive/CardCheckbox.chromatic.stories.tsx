import * as CardCheckbox from './CardCheckbox.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(CardCheckbox, {
  storiesToHover: ['statesDark', 'statesLight'],
});
const {includeStories, ...meta} = CardCheckbox.default;

export default meta;
