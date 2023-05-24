import * as CardRadioGroup from './CardRadioGroup.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(CardRadioGroup, {
  storiesToHover: ['statesDark', 'statesLight'],
});
const {includeStories, ...meta} = CardRadioGroup.default;

export default meta;
