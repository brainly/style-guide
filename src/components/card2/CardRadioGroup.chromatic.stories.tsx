import * as CardRadioGroup from './CardCheckbox.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(CardRadioGroup);
const {includeStories, ...meta} = CardRadioGroup.default;

export default meta;
