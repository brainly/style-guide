import * as RadioGroup from './RadioGroup.stories.mdx';
import {generateChromaticStory} from '../../../chromatic/utils';

export const Default = generateChromaticStory(RadioGroup);
const {includeStories, ...meta} = RadioGroup.default;

export default meta;
