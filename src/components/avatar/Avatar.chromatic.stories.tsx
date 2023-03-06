import * as Avatar from './Avatar.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';

export const Default = generateChromaticStory(Avatar);
const {includeStories, ...meta} = Avatar.default;

export default meta;
