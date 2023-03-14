import * as Counters from './Counters.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(Counters);
const {includeStories, ...meta} = Counters.default;

export default meta;
