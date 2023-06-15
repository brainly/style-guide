import * as CardButton from './CardButton.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(CardButton, {
  storiesToHover: ['statesDark', 'statesLight'],
});
const {includeStories, ...meta} = CardButton.default;

export default meta;
