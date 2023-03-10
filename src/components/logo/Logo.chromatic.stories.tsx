import * as Logo from './Logo.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(Logo);
const {includeStories, ...meta} = Logo.default;

export default meta;
