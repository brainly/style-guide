import * as TextBit from './TextBit.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(TextBit);
const {includeStories, ...meta} = TextBit.default;

export default meta;
