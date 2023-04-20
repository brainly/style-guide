import * as ChipGroup from './ChipGroup.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(ChipGroup);
const {includeStories, ...meta} = ChipGroup.default;

export default meta;
