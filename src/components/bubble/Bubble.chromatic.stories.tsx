import * as Bubble from './Bubble.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(Bubble);
const {includeStories, ...meta} = Bubble.default;

export default meta;
