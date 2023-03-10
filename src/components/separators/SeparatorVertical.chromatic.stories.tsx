import * as SeparatorVertical from './SeparatorVertical.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(SeparatorVertical);
const {includeStories, ...meta} = SeparatorVertical.default;

export default meta;
