import * as Headline from './Headline.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(Headline);
const {includeStories, ...meta} = Headline.default;

export default meta;
