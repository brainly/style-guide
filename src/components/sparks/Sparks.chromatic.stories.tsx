import * as Sparks from './Sparks.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';
import {useAnimation} from './animation';

useAnimation.debug.phase = 'entry';
useAnimation.debug.time = 1400;

export const Default = generateChromaticStory(Sparks);
const {includeStories, ...meta} = Sparks.default;

export default meta;
