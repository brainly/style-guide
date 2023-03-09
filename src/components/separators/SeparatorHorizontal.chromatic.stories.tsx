import * as SeparatorHorizontal from './SeparatorHorizontal.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(SeparatorHorizontal);
const {includeStories, ...meta} = SeparatorHorizontal.default;

export default meta;
