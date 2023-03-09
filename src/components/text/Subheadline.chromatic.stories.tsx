import * as Subheadline from './Subheadline.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(Subheadline);
const {includeStories, ...meta} = Subheadline.default;

export default meta;
