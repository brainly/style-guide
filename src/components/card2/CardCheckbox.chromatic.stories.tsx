import * as CardCheckbox from './CardCheckbox.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(CardCheckbox);
const {includeStories, ...meta} = CardCheckbox.default;

export default meta;
